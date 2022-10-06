import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Grid,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import Appbar from "./components/Appbar";
import "./App.css";
import MyEditor from "./components/Editor";
import Line from "./components/Line";
import Comment from "./components/Comment";

function Commission_page() {
  useEffect(() => {}, []);

  return (
    <Container
      sx={{ justifyContent: "center", alignItems: "center", width: "1000px" }}
    >
      <Appbar></Appbar>
      <Box
        sx={{
          width: 1000,
          height: "2000px",
          backgroundColor: "white",
          margin: "0 auto",
          position: "absolute",
        }}
      >
        <Box
          sx={{
            width: "900px",
            height: "1900px",
            backgroundColor: "white",
            margin: "0 auto",
            mt: "100px",
            border: 0.5,
            borderColor: "grey.400",
            borderRadius: "10px",
          }}
        >
          <Stack
            spacing={2}
            sx={{
              mt: "25px",
              ml: "50px",
              width: "800px",
            }}
          >
            <Typography
              align="left"
              variant="h5"
              sx={{
                fontWeight: "bold",
              }}
            >
              그림 의뢰
            </Typography>
            {/* 커미션 글 시작 */}
            <Stack
              spacing={2}
              direction="row"
              sx={{
                alignItems: "center",
              }}
            >
              {/* 클라이언트 정보 */}
              <Avatar></Avatar>
              <Typography variant="h7" color="black" align="flex-end">
                userID
              </Typography>
            </Stack>
            <Typography variant="h6" color="black">
              커미션 제목
            </Typography>
            <Box height="300px">
              {/* 커미션 본문 */}
              <p>커미션 설명</p>
            </Box>
            <h5>#태그 #예시 #테스트</h5>
            <Comment></Comment>
            {/* 커미션 글 끝 */}
            <Line />
            {/* 답변 글 시작 */}
            <Stack
              spacing={2}
              direction="row"
              sx={{
                alignItems: "center",
              }}
            >
              {/* 크리에이터 정보 */}
              <Avatar></Avatar>
              <Typography variant="body1" color="black" align="flex-end">
                userID
              </Typography>
            </Stack>
            <Typography variant="h6" color="black">
              답변 제목
            </Typography>
            <Box height="300px">
              {/* 답변 본문 */}
              <p>커미션 답변</p>
            </Box>
            <Comment likeAvailabilty={true}></Comment>
            {/* 답변 글 끝 */}
            <Line />
            <Button
              variant="outlined"
              sx={{
                width: "100px",
              }}
            >
              답변작성
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default Commission_page;
