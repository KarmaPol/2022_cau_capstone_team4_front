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
import Swal from "sweetalert2";
import Context from "../components/ContextProvider";
import Appbar from "../components/Appbar";
import icon from "../img/icon.png";
import Line from "../components/Line";
import "../App.css";
import "./Sign_in.css";
import Footer from "../components/Footer";

export default function Sign_in() {
  const { loggedIn, loggedUser, loggedUserData, actions } = useContext(Context);

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

  console.log(account);

  const navigate = useNavigate();

  function movePage() {
    navigate(-1);
  }

  const logIn = async () => {
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

          axios
            .get(`http://3.37.160.197/user/${account.userID}`)
            .then((res) => {
              localStorage.setItem("userData", JSON.stringify(res.data));
              console.log(localStorage.getItem("userData"));
              console.log(res.data);
              actions.setLoggedUserData(res.data);
            });

          localStorage.setItem("Token", res.data.Token);

          actions.setLoggedIn(true);

          movePage();
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "로그인 실패",
          text: "잘못된 아이디 혹은 비밀번호를 입력하였습니다",
          timer: 1500,
          showConfirmButton: false,
        });
      });
  };

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
              value={account.userID}
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
              value={account.uwerPW}
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
      <Footer />
    </>
  );
}
