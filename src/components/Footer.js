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

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "grey.500",
        width: "100%",
        height: "200px",
        position: "relative",
      }}
      component="footer"
    ></Box>
  );
}
