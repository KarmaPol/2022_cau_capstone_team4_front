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
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Line from "./Line";
import styled from "styled-components";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import VerifiedIcon from "@mui/icons-material/Verified";
import "./Bulletin.css";

import firstPic from "../img/1st.png";
import secondPic from "../img/2nd.png";
import thirdPic from "../img/3rd.png";

export default function Bulletin(props) {
  const navigate = useNavigate();

  const rankingPicArray = new Array(firstPic, secondPic, thirdPic);

  return (
    <motion.div className={"box"} whileHover={{ scale: 1.05 }}>
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
          <img
            onClick={() => {
              navigate(`/page/${props.post.id}`);
            }}
            className="img"
            src={
              props.post.thumbnail === null
                ? props.post.file_upload
                : props.post.thumbnail
            }
          ></img>

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
              {props.ranking != undefined && (
                <img className="imgHOF" src={rankingPicArray[props.ranking]} />
              )}
            </Stack>
          </Box>
          <Box>
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
    </motion.div>
  );
}
