import React, { useState } from "react";
import { Stack, Typography, Box, Avatar } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { orange, red } from "@mui/material/colors";

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
function PrintLiker({ liker }) {
  return (
    <Stack spacing={1} direction="row" alignItems="center">
      <Avatar
        sx={{
          width: "30px",
          height: "30px",
          bgcolor: red[500],
        }}
      ></Avatar>
      <Box>
        <Typography variant="body2" color="black" align="left">
          {liker.likeUserID} 님이 좋아합니다
        </Typography>
      </Box>
    </Stack>
  );
}

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

  const [likers, setLikers] = useState([
    {
      id: "like1",
      likeUserID: "like1",
    },
    {
      id: "like2",
      likeUserID: "like2",
    },
    {
      id: "like3",
      likeUserID: "like3",
    },
  ]);

  const [commentClicked, setCommnetClicked] = useState(false);
  const [likeClicked, setLikeClicked] = useState(false);

  return (
    <Stack spacing={1}>
      {likeClicked &&
        likers.map((liker) => (
          <PrintLiker liker={liker} key={liker.id}></PrintLiker>
        ))}
      <Stack spacing={1} direction="row">
        {props.likeAvailabilty && (
          <FavoriteBorderIcon
            sx={{
              color: "grey.700",
            }}
            onClick={() => setLikeClicked((ex) => !ex)}
          ></FavoriteBorderIcon>
        )}

        {props.likeAvailabilty && <p>{likers.length} likes</p>}
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
          <PrintComment comment={comment} key={comment.id}></PrintComment>
        ))}
    </Stack>
  );
}
