import React, { useEffect, useState } from "react";
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
import Appbar from "../components/Appbar";
import "../App.css";
import MyEditor from "../components/Editor";

function Commission_Q() {
  const [commissionTitle, setTitle] = useState("");
  const [commissionTags, setTags] = useState("");
  const [commissionText, setCommissiontText] = useState("");

  function onChangeCommissionText(_data) {
    setCommissiontText(_data);
  }

  useEffect(() => {}, []);

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
            width: "900px",
            height: "1900px",
            backgroundColor: "white",
            margin: "0 auto",
            mt: "100px",
            border: 0.5,
            borderColor: "gray.400",
            borderRadius: "10px",
          }}
        >
          <Stack
            spacing={2}
            sx={{
              mt: "25px",
              ml: "50px",
              width: "800px",
            }}
          >
            <Typography align="left" variant="h5">
              그림 의뢰
            </Typography>
            <Box
              sx={{
                width: "600px",
              }}
            >
              <TextField
                className="inputRounded2"
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                id="title"
                name="title"
                label="제목"
                variant="outlined"
              ></TextField>
            </Box>
            <Box
              sx={{
                width: "400px",
              }}
            >
              <TextField
                className="inputRounded2"
                onChange={(e) => setTags(e.target.value)}
                fullWidth
                id="tags"
                name="tags"
                label="태그"
                placeholder="#여름 #강아지 #만화풍"
                variant="outlined"
              ></TextField>
            </Box>
            <MyEditor onChangeFunc={onChangeCommissionText} />
            <Button
              variant="outlined"
              sx={{
                width: "100px",
              }}
            >
              작성완료
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default Commission_Q;
