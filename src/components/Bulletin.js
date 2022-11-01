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
import Line from "./Line";

export default function Bulletin(props) {
  return (
    <Box
      sx={{
        width: "250px",
        minHeight: "450px",
        border: 1,
        borderColor: "grey.300",
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
            borderRadius: "10px",
          }}
        ></Box>
        <Link to="/page" color="black" style={{ textDecoration: "none" }}>
          <Box>
            <Typography
              variant="subtitle1"
              color="black"
              component="div"
              sx={{}}
            >
              {props.post.title}
            </Typography>
          </Box>
        </Link>

        <Link to="/page" color="black" style={{ textDecoration: "none" }}>
          <Box>
            <Typography variant="body2" color="gray" component="div" sx={{}}>
              {props.post.userId}
            </Typography>
          </Box>
        </Link>
      </Stack>
    </Box>
  );
}
