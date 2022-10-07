import React from "react";
import {
  Avatar,
  Button,
  Grid,
  Link,
  TextField,
  Checkbox,
  Container,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import Appbar from "../components/Appbar";
import icon from "../img/icon.png";
import Line from "../components/Line";
import "../App.css";
import "./Sign_in.css";

export default function Sign_in() {
  return (
    <Container
      sx={{ justifyContent: "center", alignItems: "center", width: "1000px" }}
    >
      <Appbar></Appbar>
      <Box
        sx={{
          width: 1000,
          height: "2000px",
          backgroundColor: "white",
          margin: "0 auto",
          position: "absolute",
        }}
      >
        <Box
          sx={{
            width: "500px",
            height: "1900px",
            backgroundColor: "white",
            margin: "0 auto",
            mt: "100px",
          }}
        >
          <Stack spacing={4} justifyContent="center" alignItems="center">
            <Box display="flex" justifyContent="center">
              <img className="image" alt="paint in" src={icon} />
            </Box>
            <TextField
              className="inputRounded2"
              required
              fullWidth
              id="userID"
              label="아이디"
              name="userID"
              autoComplete="userID"
              autoFocus
            />
            <TextField
              className="inputRounded2"
              required
              fullWidth
              id="userID"
              label="비밀번호"
              name="userID"
              autoComplete="userID"
              autoFocus
            />
            <Stack width="500px" spacing={1}>
              <Button type="submit" fullWidth variant="contained">
                로그인
              </Button>
              <Button type="submit" fullWidth variant="outlined">
                회원가입
              </Button>
            </Stack>
            <Stack spacing={1} width="100%">
              <Line />
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body1">
                    아이디 찾기
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body1">
                    비밀번호 찾기
                  </Link>
                </Grid>
              </Grid>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
