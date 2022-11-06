import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  Grid,
  TextField,
  Checkbox,
  Container,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import axios from "axios";
import Appbar from "../components/Appbar";
import icon from "../img/icon.png";
import Line from "../components/Line";
import "../App.css";
import "./Sign_in.css";

export default function Sign_in() {
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

  const logIn = () => {
    axios.post("http://3.37.160.197/user/api-auth/login/", {
      username: "admin",
      password: "paintin2022",
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
              autoComplete="userID"
              autoFocus
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
              autoComplete="userPW"
              onChange={onChangeAccount}
            />
            <Stack width="500px" spacing={1}>
              <Button
                onClick={logIn}
                type="submit"
                fullWidth
                variant="contained"
              >
                로그인
              </Button>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button type="submit" fullWidth variant="outlined">
                  회원가입
                </Button>
              </Link>
            </Stack>
            <Stack spacing={1} width="100%">
              <Line />
              <Grid container>
                <Grid item xs>
                  <Link>아이디 찾기</Link>
                </Grid>
                <Grid item>
                  <Link>비밀번호 찾기</Link>
                </Grid>
              </Grid>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
