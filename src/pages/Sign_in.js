import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import Context from "../components/ContextProvider";
import Appbar from "../components/Appbar";
import icon from "../img/icon.png";
import Line from "../components/Line";
import "../App.css";
import "./Sign_in.css";

export default function Sign_in() {
  const { loggedIn, loggedUser, loggedUserData, actions } = useContext(Context);

  const [account, setAccount] = useState({
    userID: "",
    userPW: "",
    nickName: "",
  });

  console.log(account);

  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const signUp = () => {
    axios
      .post("http://3.37.160.197/user/signup/", {
        name: "t24",
        username: "testname0",
        email: "12344215@12.com",
        password: "12345241",
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  // username: "testname0",
  // email: "12344215@12.com",
  // password: "12345241",

  const navigate = useNavigate();

  function movePage() {
    navigate(-1);
  }

  const logIn = () => {
    axios
      .post("http://3.37.160.197/user/login/", {
        username: account.userID,
        password: account.userPW,
      })
      .then((res) => {
        if (res.data.Token !== undefined) {
          console.log(res.data.Token);
          actions.setLoggedIn(true);
          actions.setLoggedUser(() => res.data.Token);

          localStorage.setItem("Token", res.data.Token);
          localStorage.setItem("userID", account.userID);

          actions.setLoggedUserData(account.userID);
          actions.setLoggedIn(true);
          movePage();
        }
        // 일단 토큰만 저장
      })
      .catch(() => {
        alert("잘못된 아이디 또는 패스워드를 입력하였습니다");
      });
  };
  // console.log(loggedUser);

  console.log(loggedUserData);
  console.log(loggedIn);

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
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
