import React, { Children, useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import mainPic from "../img/mainpagePic.png";
import mainPic2 from "../img/mainpage2.png";
import "./MainPage.css";

function MainPage() {
  const [postsData, setPostsData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostsData = async () => {
      const response = await axios.get("http://3.37.160.197/main");
      setPostsData(response.data);
      console.log(response);
    };
    fetchPostsData();
  }, []);

  return (
    <>
      <Box minHeight="1500px">
        <Appbar></Appbar>
        <Box
          className="container"
          sx={{
            height: "500px",
            minWidth: "1000px",
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
            minWidth: "1000px",
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
              <img src={mainPic2}></img>

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
        <Box
          className="container2"
          sx={{
            minHeight: "700px",
            backgroundColor: "#ffffff",
            minWidth: "1000px",
            borderColor: "#FFF8EF",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            width="1000px"
            sx={{
              padding: "25px",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              spacing={3}
            >
              <Typography
                align="left"
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  alignSelf: "start",
                }}
              >
                그림 의뢰
              </Typography>
              <Stack direction="row" spacing={5}>
                {Children.toArray(
                  postsData.map((post) => <Bulletin post={post}></Bulletin>)
                )}
              </Stack>
              <Box width="400px">
                <Button
                  onClick={() => {
                    navigate(`/list`);
                  }}
                  size="small"
                  fullWidth
                  variant="outlined"
                >
                  더보기
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default MainPage;
