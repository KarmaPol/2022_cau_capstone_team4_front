import React from "react";
import {
  AppBar,
  Typography,
  Grid,
  TextField,
  Avatar,
  Stack,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import "./Layout.css";
import icon from "../img/paint in_.png";

export default function Appbar() {
  return (
    <AppBar
      elevation={0}
      position="fixed"
      color="inherit"
      sx={{
        borderBottom: 0.5,
        borderColor: "grey.300",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            width: "1000px",
            margin: "auto",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                <img alt="paint in" src={icon} />
              </Box>
            </Grid>
            <Grid item xs>
              <Typography
                variant="h6"
                color="black"
                component="div"
                align="center"
              >
                그림의뢰
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography
                variant="h6"
                color="black"
                component="div"
                align="center"
              >
                명예의전당
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography
                variant="h6"
                color="black"
                component="div"
                align="center"
              >
                챌린지
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Box display="flex" justifyContent="center" width="250px">
                <TextField
                  className="inputRounded"
                  placeholder="검색"
                  fullWidth
                  size="small"
                ></TextField>
              </Box>
            </Grid>
            <Grid item xs>
              <Stack
                spacing={1}
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Avatar></Avatar>
                <Typography
                  variant="h7"
                  color="black"
                  component="div"
                  align="flex-end"
                >
                  userID
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
