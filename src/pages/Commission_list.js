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
import Footer from "../components/Footer";

function Commission_page() {
  const [postsData, setPostsData] = useState([]);
  const [pageLimit, setPageLimit] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [load, setLoad] = useState(false);

  const pageOffset = (currentPage - 1) * pageLimit;

  const changePage = (v) => {
    const nextPage = v;
    console.log(nextPage);
    setCurrentPage(nextPage);
  };

  useEffect(() => {
    const fetchPostsData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPostsData(response.data);
      setLoad(true);
    };
    fetchPostsData();
  }, []);

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
              alignItems: "center",
            }}
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
            <Grid container spacing={2}>
              <Grid container item spacing={2}>
                {postsData.slice(pageOffset, pageOffset + 3).map((post) => (
                  <Grid item>
                    <Bulletin post={post}></Bulletin>
                  </Grid>
                ))}
              </Grid>
              <Grid container item spacing={2}>
                {postsData.slice(pageOffset + 3, pageOffset + 6).map((post) => (
                  <Grid item>
                    <Bulletin post={post}></Bulletin>
                  </Grid>
                ))}
              </Grid>
              <Grid container item spacing={2}>
                {postsData.slice(pageOffset + 6, pageOffset + 9).map((post) => (
                  <Grid item>
                    <Bulletin post={post}></Bulletin>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Line />

            <Pagination
              count={
                postsData.length % pageLimit === 0
                  ? parseInt(postsData.length / pageLimit)
                  : parseInt(postsData.length / pageLimit) + 1
              }
              shape="rounded"
              onChange={(e, value) => changePage(value)}
            />
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default Commission_page;
