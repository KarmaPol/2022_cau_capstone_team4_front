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
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import VerifiedIcon from "@mui/icons-material/Verified";

const Thumbnail = styled.img`
  width: "240px";
  height: "240px";
  border-radius: "10px";
`;

export default function Bulletin(props) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "250px",
        minHeight: "400px",
        border: props.post.selected === 2 ? 2 : 1,
        borderColor: props.post.selected === 2 ? "black" : "grey.300",
        borderRadius: "10px",
        boxSizing: "border-box",
      }}
    >
      <Stack
        spacing={1}
        sx={{
          padding: "5px",
        }}
      >
        {/* <Thumbnail
          onClick={() => {
            navigate(`/page/${props.post.id}`);
          }}
          src={
            props.post.thumbnail === null
              ? props.post.file_upload
              : props.post.thumbnail
          }
        /> */}
        <Box
          sx={{
            width: "240px",
            height: "240px",
          }}
        >
          <img
            src={
              props.post.thumbnail === null
                ? props.post.file_upload
                : props.post.thumbnail
            }
          />
        </Box>
        <Line />
        <Box
          onClick={() => {
            navigate(`/page/${props.post.id}`);
          }}
        >
          <Stack direction="row" spacing={1}>
            <Typography
              variant="subtitle1"
              color="black"
              component="div"
              sx={{}}
            >
              {props.post.title}
            </Typography>
            {props.post.selected === 0 ? null : props.post.selected === 1 ? (
              <CheckCircleOutlineIcon
                sx={{
                  color: "black",
                }}
              />
            ) : (
              <VerifiedIcon />
            )}
          </Stack>
        </Box>
        <Box
          onClick={() => {
            navigate(`/
            `);
          }}
        >
          <Typography variant="body2" color="gray" component="div" sx={{}}>
            {props.post.author}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="gray"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          {props.post.point}
        </Typography>
      </Stack>
    </Box>
  );
}
