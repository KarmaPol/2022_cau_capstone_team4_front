import React from "react";
import { AppBar, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            color="black"
            component="div"
            sx={{
              flexGrow: 1,
            }}
          ></Typography>
          그림의뢰
          <Typography
            variant="h6"
            component="div"
            color="black"
            sx={{
              flexGrow: 1,
            }}
          ></Typography>
          명예의전당
          <Typography
            variant="h6"
            color="black"
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            챌린지
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
