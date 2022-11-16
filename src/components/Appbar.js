import React, { useContext } from "react";
import {
  AppBar,
  Typography,
  Grid,
  TextField,
  Avatar,
  Stack,
  Button,
} from "@mui/material";
import Context from "./ContextProvider";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import "./Appbar.css";
import icon from "../img/paint in_.png";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Appbar() {
  const { loggedIn, loggedUser, loggedUserData, actions } = useContext(Context);

  function logout() {
    localStorage.clear();
    actions.setLoggedIn(false);
    actions.setLoggedUser("");
    actions.setLoggedUserData(null);
    navigate(`/`);
  }

  const navigate = useNavigate();

  return (
    <AppBar
      elevation={0}
      position="fixed"
      color="inherit"
      sx={{
        minWidth: "1000px",
        borderBottom: 0.5,
        borderColor: "grey.300",
        zIndex: "10",
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
              <Link to="/" style={{ textDecoration: "none" }}>
                <Box display="flex" justifyContent="center">
                  <img alt="paint in" src={icon} />
                </Box>
              </Link>
            </Grid>
            <Grid item xs>
              <Link to="/list" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  color="black"
                  component="div"
                  align="center"
                >
                  그림의뢰
                </Typography>
              </Link>
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
                {loggedIn ? (
                  <>
                    <Box
                      onClick={() => {
                        if (loggedUserData.username !== undefined) {
                          console.log(loggedUserData.username);
                          navigate(`/profile/${loggedUserData.username}`);
                        }
                      }}
                    >
                      <Avatar
                        sx={{
                          width: "36px",
                          height: "36px",
                        }}
                      ></Avatar>
                    </Box>

                    <Button onClick={logout} variant="outlined">
                      로그아웃
                    </Button>
                  </>
                ) : (
                  <Link to="/signin" style={{ textDecoration: "none" }}>
                    <Button className="inputRounded" variant="contained">
                      로그인
                    </Button>
                  </Link>
                )}
                {/*  */}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
