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
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import VerifiedIcon from "@mui/icons-material/Verified";

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
      <Stack
        spacing={1}
        sx={{
          padding: "5px",
        }}
      >
        <Thumbnail
          onClick={() => {
            navigate(`/page/${props.post.id}`);
          }}
          src={props.post.file_upload}
        />
        <Line />
        <Box
          onClick={() => {
            navigate(`/page/${props.post.id}`);
          }}
          src={props.post.file_upload}
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
            {props.post.selected === 0 ? (
              <UnpublishedIcon />
            ) : props.post.selected === 1 ? (
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
