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
import Appbar from "../components/Appbar";
import "../App.css";
import MyEditor from "../components/Editor";
import Line from "../components/Line";

function Commission_A() {
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
            <Stack
              spacing={2}
              direction="row"
              sx={{
                alignItems: "center",
              }}
            >
              {/* 클라이언트 정보 */}
              <Avatar></Avatar>
              <Typography variant="h6" color="black" align="flex-end">
                userID
              </Typography>
            </Stack>
            <Box height="300px">
              {/* 원글 본문 */}
              <p>커미션 설명</p>
            </Box>
            <Line />
            <MyEditor />
            <Box
              sx={{
                color: "primary.main",
                height: "1000px",
                bgcolor: "skyblue",
              }}
            >
              {/* 그림판 */}
            </Box>
            <Button
              variant="outlined"
              sx={{
                width: "100px",
              }}
            >
              작성완료
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default Commission_A;
