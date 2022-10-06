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
import "./Appbar.css";
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
          <Grid container direction="row" alignItems="center">
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
            <Grid item xs>
              <Box display="flex" justifyContent="flex-end" width="250px">
                <TextField
                  className="inputRounded"
                  placeholder="검색"
                  // fullWidth
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
                <Avatar
                  sx={{
                    width: "36px",
                    height: "36px",
                  }}
                ></Avatar>
                <Typography variant="subtitle1" color="black" align="right">
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
