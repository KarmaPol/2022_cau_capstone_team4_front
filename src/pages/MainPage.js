import React, { useEffect, useState } from "react";
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
import mainPic from "../img/mainpagePic.png";
import "./MainPage.css";

function MainPage() {
  const [postsData, setPostsData] = useState([]);

  // useEffect(() => {
  //   const fetchPostsData = async () => {
  //     const response = await axios.get("http://3.37.160.197/post/main");
  //     setPostsData(response.data);
  //     console.log(response);
  //   };
  //   fetchPostsData();
  // }, []);

  return (
    <>
      <Box minHeight="2000px">
        <Appbar></Appbar>
        <Box
          className="container"
          sx={{
            height: "500px",
            mt: "65px",
            backgroundColor: "#e6faff",
            border: 1,
            borderColor: "#e6faff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            width="1000px"
            sx={{
              padding: "25px",
              boxSizing: "border-box",
            }}
          >
            <Stack
              spacing={10}
              direction="row"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h3"
                color="black"
                component="div"
                sx={{
                  fontWeight: "bold",
                  whiteSpace: "pre-line",
                }}
              >
                {`내 아이디어를\n멋진 그림으로`}
              </Typography>
              <img src={mainPic}></img>
            </Stack>
          </Box>
        </Box>
        <Box
          className="container"
          sx={{
            height: "500px",
            backgroundColor: "#FFF8EF",
            border: 1,
            borderColor: "#FFF8EF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            width="1000px"
            sx={{
              padding: "25px",
              boxSizing: "border-box",
            }}
          >
            <Stack
              spacing={10}
              direction="row"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={mainPic}></img>
              <Typography
                variant="h3"
                color="black"
                component="div"
                sx={{
                  fontWeight: "bold",
                  whiteSpace: "pre-line",
                }}
              >
                {`당신의 상상력을\n펼치세요`}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MainPage;
