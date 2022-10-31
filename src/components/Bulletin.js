import React from "react";
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
import { Link } from "react-router-dom";

export default function Bulletin(props) {
  return (
    <Box
      sx={{
        width: "250px",
        minHeight: "450px",
        border: 0.5,
        borderColor: "grey.400",
        borderRadius: "10px",
      }}
    >
      <Stack
        spacing={1}
        sx={{
          padding: "5px",
        }}
      >
        <Box
          sx={{
            width: "240px",
            height: "300px",
            backgroundColor: "skyblue",
          }}
        ></Box>
        <Link to="/page" color="black" style={{ textDecoration: "none" }}>
          <Box>{props.post.title}</Box>
        </Link>
        <Box>{props.post.userId}</Box>
      </Stack>
    </Box>
  );
}
