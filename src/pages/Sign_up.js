import React, { useState, useContext } from "react";
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
import Footer from "../components/Footer";

export default function Sign_up() {
  const [account, setAccount] = useState({
    userID: "",
    userPW: "",
    email: "",
    nickName: "",
  });

  const { loggedIn, loggedUser, loggedUserData, actions } = useContext(Context);

  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const signUp = () => {
    axios
      .post("http://3.37.160.197/user/signup", {
        name: account.nickName,
        username: account.userID,
        email: account.email,
        password: account.userPW,
      })
      .then((res) => {
        console.log(res.data);
        logIn();
      });
  };

  const navigate = useNavigate();

  function movePage() {
    navigate("/");
  }

  const logIn = () => {
    axios
      .post("http://3.37.160.197/user/signin", {
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
      });
  };

  console.log(account);

  return (
    <>
      <Appbar></Appbar>
      <Box
        sx={{
          width: "1000px",
          height: "2000px",
          backgroundColor: "white",
          margin: "0 auto",
          border: 1,
          borderColor: "white",
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
              id="email"
              label="이메일"
              name="email"
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
            <Stack width="500px" spacing={1}>
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <Button
                  onClick={signUp}
                  type="submit"
                  fullWidth
                  variant="contained"
                >
                  회원가입
                </Button>
              </Link>
            </Stack>
            <Line />
          </Stack>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
