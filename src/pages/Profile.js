import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Box,
  Pagination,
  Avatar,
  Grid,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import Appbar from "../components/Appbar";
import "../App.css";
import Line from "../components/Line";
import Bulletin from "../components/Bulletin";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Context from "../components/ContextProvider";

function Profile() {
  const { loggedUserData } = useContext(Context);

  console.log(loggedUserData);

  console.log(localStorage.getItem("userData"));

  return (
    <>
      <Appbar></Appbar>
      <Box
        sx={{
          width: "1000px",
          minheight: "2000px",
          backgroundColor: "white",
          margin: "0 auto",
          border: 1,
          borderColor: "white",
        }}
      >
        <Box
          sx={{
            width: "900px",
            height: "1500px",
            backgroundColor: "white",
            margin: "0 auto",
            mt: "100px",
            border: 0.5,
            borderColor: "grey.400",
            borderRadius: "10px",
          }}
        >
          <Stack
            spacing={3}
            sx={{
              mt: "25px",
              ml: "50px",
              width: "800px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
              }}
            >
              프로필
            </Typography>
            <Stack direction="row" spacing={3}>
              <Avatar sx={{ width: 140, height: 140 }} />
              <Stack spacing={1}>
                <Stack direction="row" spacing={2}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "gray" }}
                  >
                    아이디
                  </Typography>
                  <Typography variant="h6" sx={{}}>
                    {loggedUserData.username}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "gray" }}
                  >
                    닉네임
                  </Typography>
                  <Typography variant="h6" sx={{}}>
                    {loggedUserData.name}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "gray" }}
                  >
                    이메일
                  </Typography>
                  <Typography variant="h6" sx={{}}>
                    {loggedUserData.email}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "gray" }}
                  >
                    보유 포인트
                  </Typography>
                  <Typography variant="h6" sx={{}}>
                    {loggedUserData.point}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Line />
          </Stack>
        </Box>
        <Box minHeight="300px" />
      </Box>

      <Footer />
    </>
  );
}

export default Profile;
