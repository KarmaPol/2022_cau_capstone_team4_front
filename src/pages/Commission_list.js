import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  Typography,
  Box,
  Pagination,
  Grid,
  Stack,
  Skeleton,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import Appbar from "../components/Appbar";
import "../App.css";
import Line from "../components/Line";
import Context from "../components/ContextProvider";
import Bulletin from "../components/Bulletin";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Commission_page() {
  const [postsData, setPostsData] = useState([]);
  const [allPostData, setAllPostData] = useState([]);
  const [unfinishedPostData, setUnfinishedPostData] = useState([]);
  const [pageLimit, setPageLimit] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  const { loggedIn } = useContext(Context);

  const [isChecked, setCheck] = useState(false);

  const pageOffset = (currentPage - 1) * pageLimit;

  const changePage = (v) => {
    const nextPage = v;
    console.log(nextPage);
    setCurrentPage(nextPage);
  };

  const onChangeCheckbox = () => {
    setCheck((ex) => !ex);
  };

  useEffect(() => {
    setCurrentPage(1);
    if (isChecked) {
      setPostsData(unfinishedPostData);

      console.log(currentPage);
    } else {
      setPostsData(allPostData);
    }
  }, [isChecked]);

  useEffect(() => {}, [currentPage]);

  useEffect(() => {
    const fetchPostsData = async () => {
      const response = await axios.get("http://3.37.160.197/posts");
      setPostsData(response.data);

      return response.data;
    };
    fetchPostsData().then((res) => {
      console.log(res);
      setAllPostData(res);
      setUnfinishedPostData(res.filter((post) => post.selected === 0));
    });
  }, []);

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
            spacing={2}
            sx={{
              mt: "25px",
              ml: "50px",
              width: "800px",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
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
              <Stack direction="row" spacing={1}>
                <FormControlLabel
                  control={
                    <Checkbox checked={isChecked} onChange={onChangeCheckbox} />
                  }
                  label="미채택 게시글만 보기"
                />
                {loggedIn === true && (
                  <Link to="/question" style={{ textDecoration: "none" }}>
                    <Button variant="outlined" disableElevation>
                      게시글 작성
                    </Button>
                  </Link>
                )}
              </Stack>
            </Box>
            <Grid container spacing={2}>
              <Grid container item spacing={2}>
                {postsData.slice(pageOffset, pageOffset + 3).map((post) => (
                  <Grid key={post.id} item>
                    <Bulletin post={post}></Bulletin>
                  </Grid>
                ))}
              </Grid>
              <Grid container item spacing={2}>
                {postsData.slice(pageOffset + 3, pageOffset + 6).map((post) => (
                  <Grid key={post.id} item>
                    <Bulletin post={post}></Bulletin>
                  </Grid>
                ))}
              </Grid>
              <Grid container item spacing={2}>
                {postsData.slice(pageOffset + 6, pageOffset + 9).map((post) => (
                  <Grid key={post.id} item>
                    <Bulletin post={post}></Bulletin>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Line />

            <Pagination
              page={currentPage}
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
        <Box minHeight="300px" />
      </Box>
      <Footer />
    </>
  );
}

export default Commission_page;
