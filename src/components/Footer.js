import React from "react";
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
import "./footer.css";
import icon from "../img/paint in_.png";

export default function Footer() {
  return (
    <Box
      className="footer"
      sx={{
        backgroundColor: "grey.300",
        height: "200px",
        position: "relative",

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
      component="footer"
    >
      <Box
        sx={{
          display: "flex",
          width: "1000px",
          justifyContent: "flex-end",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle12"
            sx={{
              color: "gray",
            }}
          >
            김경훈
          </Typography>
          <Typography
            variant="subtitle12"
            sx={{
              color: "gray",
            }}
          >
            이석민
          </Typography>
          <Typography
            variant="subtitle12"
            sx={{
              color: "gray",
            }}
          >
            최동규
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "gray",
              fontWeight: "bold",
            }}
          >
            2022 캡스톤프로젝트
          </Typography>
          <Box>
            <img src={icon}></img>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
