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
import { Link, useNavigate } from "react-router-dom";
import Line from "./Line";
import styled from "styled-components";

const Thumbnail = styled.img`
  width: "240px";
  height: "240px";
  border-radius: "10px";
`;

export default function Bulletin(props) {
  const param = props.post.id;

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "250px",
        minHeight: "400px",
        border: 1,
        borderColor: "grey.300",
        borderRadius: "10px",
      }}
    >
      <Link
        to={`/page/${param}`}
        color="black"
        style={{ textDecoration: "none" }}
      >
        <Stack
          spacing={1}
          sx={{
            padding: "5px",
          }}
        >
          <Thumbnail src={props.post.file_upload} />
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
        </Stack>
      </Link>
      <Link to={""} color="black" style={{ textDecoration: "none" }}>
        <Box>
          <Typography variant="body2" color="gray" component="div" sx={{}}>
            {props.post.userId}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}
