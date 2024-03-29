import React, { useState, useContext, useEffect, useRef } from "react";
import {
  Stack,
  Typography,
  Box,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import { Children } from "react";
import Context from "./ContextProvider";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { orange, red } from "@mui/material/colors";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../App.css";

function PrintComment({ comment }) {
  return (
    <Stack spacing={1} direction="row" alignItems="center">
      <Avatar
        sx={{
          width: "30px",
          height: "30px",
          bgcolor: orange[500],
        }}
      ></Avatar>
      <Box width="70px">
        <Typography variant="body2" color="black" align="left">
          {comment.author}
        </Typography>
      </Box>
      <Box width="500px">
        <Typography variant="body1" color="black" align="left">
          {comment.content}
        </Typography>
      </Box>
    </Stack>
  );
}

export default function Comment(props) {
  const { loggedUser, loggedUserData, loggedIn, actions } = useContext(Context);

  const [comments, setComments] = useState([]);
  const [likes, setlikes] = useState(
    props.likeCount !== undefined ? props.likeCount : 0
  );
  const [comment, setComment] = useState("");
  const [commentClicked, setCommnetClicked] = useState(false);
  const [likeClicked, setLikeClicked] = useState(
    props.likeAvailabilty ? props.isLiked : null
  );

  useEffect(() => {
    fetchCommentData();
    if (props.isLiked === true) {
      setLikeClicked(true);
    }
  }, []);

  const fetchCommentData = async () => {
    console.log(props.id);
    const response = await axios.get(
      `http://3.37.160.197/${props.type}/${props.id}/comments`
    );

    setComments(response.data);
    console.log(comments);
  };

  const submitComment = () => {
    const config = {
      headers: { Authorization: "Token " + loggedUser },
    };
    axios
      .post(
        `http://3.37.160.197/${props.type}/${props.id}/comments`,
        { content: comment },
        config
      )
      .then(fetchCommentData);
    setComment("");
  };

  const deleteComment = (commentId) => {
    const config = {
      headers: { Authorization: "Token " + loggedUser },
    };
    axios
      .delete(`http://3.37.160.197/comment/${commentId}`, config)
      .then(fetchCommentData);
  };

  const getLike = async () => {
    const config = {
      headers: { Authorization: "Token " + loggedUser },
    };
    if (props.likeAvailabilty === true) {
      const response = await axios.get(
        `http://3.37.160.197/answer/${props.id}/like`,
        config
      );

      console.log(response.data);
      props.fetchFunc();
      likeClicked ? setlikes((ex) => ex - 1) : setlikes((ex) => ex + 1);
    }
  };

  useState(() => {}, [props]);

  return (
    <Stack spacing={1}>
      <Stack spacing={1} direction="row">
        <motion.div
          className={"bulletin"}
          whileTap={{
            scale: 0.9,
            opacity: 0.6,
          }}
        >
          {props.likeAvailabilty && !likeClicked && (
            <FavoriteBorderIcon
              sx={{
                color: "grey.700",
              }}
              onClick={() => {
                if (loggedIn === true) {
                  setLikeClicked((ex) => !ex);
                  getLike();
                }
              }}
            ></FavoriteBorderIcon>
          )}
          {props.likeAvailabilty && likeClicked && (
            <FavoriteIcon
              sx={{
                color: red[600],
              }}
              onClick={() => {
                if (loggedIn === true) {
                  setLikeClicked((ex) => !ex);
                  getLike();
                }
              }}
            ></FavoriteIcon>
          )}
        </motion.div>

        {props.likeAvailabilty && <p>{likes} likes</p>}
        <motion.div
          className={"bulletin"}
          whileTap={{
            scale: 0.9,
            opacity: 0.6,
          }}
        >
          <CommentIcon
            sx={{
              color: "grey.700",
            }}
            onClick={() => {
              setCommnetClicked((ex) => !ex);
            }}
          />
        </motion.div>
        <p>{comments.length} comments</p>
      </Stack>

      {commentClicked &&
        Children.toArray(
          comments.map((comment) => (
            <>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <PrintComment comment={comment} key={comment.id}></PrintComment>

                {loggedIn === true && loggedUserData === comment.id && (
                  <Button
                    size="small"
                    color="error"
                    variant="contained"
                    onClick={() => deleteComment(comment.id)}
                    sx={{
                      width: "50px",
                    }}
                  >
                    삭제
                  </Button>
                )}
              </Box>
            </>
          ))
        )}
      {loggedIn === true && commentClicked && (
        <Stack spacing={3} direction="row">
          <TextField
            value={comment}
            className="inputRounded2"
            id="comment"
            name="comment"
            size="small"
            placeholder="댓글 작성"
            fullWidth
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <Button onClick={submitComment} variant="contained">
            등록
          </Button>
        </Stack>
      )}
    </Stack>
  );
}
