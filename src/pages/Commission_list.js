import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Grid,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import Appbar from "../components/Appbar";
import "../App.css";
import Line from "../components/Line";

function Commission_page() {
  const [postsData, setPostsData] = useState([]);
  const [pageLimit, setPageLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [load, setLoad] = useState(false);

  const pageOffset = (currentPage - 1) * pageLimit;

  useEffect(() => {
    const fetchPostsData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPostsData(response.data);
      setLoad(true);
      console.log(() => response.data);
    };
    fetchPostsData();
  }, []);

  console.log(postsData);
  console.log(pageOffset);
  console.log(pageLimit);
  console.log(postsData.slice(pageOffset, pageOffset + pageLimit));
  console.log(load);

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
          {postsData.slice(pageOffset, pageOffset + pageLimit).map((post) => (
            <div key={post.id}>{post.title}</div>
          ))}
          <div className="App"></div>
        </Box>
      </Box>
    </Container>
  );
}

export default Commission_page;
