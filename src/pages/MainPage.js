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

function MainPage() {
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
      const response = await axios.get("http://3.37.160.197/post/");
      setPostsData(response.data);
      setLoad(true);
    };
    fetchPostsData();
  }, []);

  return (
    <Container>
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
        <Stack
          spacing={2}
          sx={{
            mt: "25px",
            ml: "50px",
            width: "800px",
            alignItems: "center",
          }}
        ></Stack>
      </Box>
    </Container>
  );
}

export default MainPage;
