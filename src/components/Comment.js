import React, { useState } from "react";
import {
  Stack,
  Typography,
  Box,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { orange, red } from "@mui/material/colors";
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
          {comment.commentUserID}
        </Typography>
      </Box>
      <Box width="500px">
        <Typography variant="body1" color="black" align="left">
          {comment.body}
        </Typography>
      </Box>
    </Stack>
  );
}
// function PrintLiker({ liker }) {
//   return (
//     <Stack spacing={1} direction="row" alignItems="center">
//       <Avatar
//         sx={{
//           width: "30px",
//           height: "30px",
//           bgcolor: red[500],
//         }}
//       ></Avatar>
//       <Box>
//         <Typography variant="body2" color="black" align="left">
//           {liker.likeUserID} 님이 좋아합니다
//         </Typography>
//       </Box>
//     </Stack>
//   );
// }

export default function Comment(props) {
  const [comments, setComments] = useState([
    {
      id: 1,
      commentUserID: "test1",
      body: "와 진짜 잘그렸다!",
    },
    {
      id: 2,
      commentUserID: "test2",
      body: "대박!",
    },
    {
      id: 3,
      commentUserID: "test3",
      body: "팬이에요~",
    },
  ]);
  // 댓글, 좋아요수 전부 가져오기. 좋아요 이미 눌렀는지 아닌지 bool값 가져와서 setLikeClicked 하기

  const [likes, setlikes] = useState(3);
  const [comment, setComment] = useState("");

  const [commentClicked, setCommnetClicked] = useState(false);
  const [likeClicked, setLikeClicked] = useState(false);

  return (
    <Stack spacing={1}>
      <Stack spacing={1} direction="row">
        {props.likeAvailabilty && !likeClicked && (
          <FavoriteBorderIcon
            sx={{
              color: "grey.700",
            }}
            onClick={() => {
              setLikeClicked((ex) => !ex);
              setlikes((ex) => ex + 1);
            }}
          ></FavoriteBorderIcon>
        )}
        {props.likeAvailabilty && likeClicked && (
          <FavoriteIcon
            sx={{
              color: red[600],
            }}
            onClick={() => {
              setLikeClicked((ex) => !ex);
              setlikes((ex) => ex - 1);
            }}
          ></FavoriteIcon>
        )}

        {props.likeAvailabilty && <p>{likes} likes</p>}
        <CommentIcon
          sx={{
            color: "grey.700",
          }}
          onClick={() => setCommnetClicked((ex) => !ex)}
        />
        <p>{comments.length} comments</p>
      </Stack>

      {commentClicked &&
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
              <Stack spacing={1} direction="row">
                {/* {postData.} */}
                <Button
                  size="small"
                  color="warning"
                  variant="outlined"
                  sx={{
                    width: "50px",
                  }}
                >
                  수정
                </Button>
                <Button
                  size="small"
                  color="error"
                  variant="contained"
                  sx={{
                    width: "50px",
                  }}
                >
                  삭제
                </Button>
              </Stack>
            </Box>
          </>
        ))}
      {commentClicked && (
        <Stack spacing={3} direction="row">
          <TextField
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
          <Button variant="contained">등록</Button>
        </Stack>
      )}
    </Stack>
  );
}
