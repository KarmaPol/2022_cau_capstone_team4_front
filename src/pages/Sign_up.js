import React, { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  Link,
  TextField,
  Checkbox,
  Container,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import Appbar from "../components/Appbar";
import icon from "../img/icon.png";
import Line from "../components/Line";
import "../App.css";
import "./Sign_in.css";

export default function Sign_up() {
  const [account, setAccount] = useState({
    userID: "",
    userPW: "",
    nickName: "",
  });

  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

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
            width: "500px",
            height: "1900px",
            backgroundColor: "white",
            margin: "0 auto",
            mt: "100px",
          }}
        >
          <Stack spacing={4} justifyContent="center" alignItems="center">
            <Box display="flex" justifyContent="center">
              <img className="image" alt="paint in" src={icon} />
            </Box>
            <TextField
              className="inputRounded2"
              required
              fullWidth
              id="userID"
              label="아이디"
              name="userID"
              autoFocus
              onChange={onChangeAccount}
            />
            <TextField
              className="inputRounded2"
              required
              fullWidth
              id="nickName"
              label="닉네임"
              name="nickName"
              onChange={onChangeAccount}
            />
            <TextField
              className="inputRounded2"
              required
              fullWidth
              id="userPW"
              label="비밀번호"
              type="password"
              name="userPW"
              onChange={onChangeAccount}
            />
            <TextField
              className="inputRounded2"
              required
              fullWidth
              id="userPWConfirm"
              label="비밀번호 확인"
              type="password"
              name="userPWConfirm"
              onChange={onChangeAccount}
            />
            <Stack width="500px" spacing={1}>
              <Button type="submit" fullWidth variant="contained">
                회원가입
              </Button>
            </Stack>
            <Stack spacing={1} width="100%">
              {/* <Line /> */}
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
