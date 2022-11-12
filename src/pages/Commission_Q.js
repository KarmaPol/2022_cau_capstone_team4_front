import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
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
import { Link, useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";
import "../App.css";
import MyEditor from "../components/Editor";
import MyCanvas from "../components/MyCanvas";
import Context from "../components/ContextProvider";
import Swal from "sweetalert2";

function Commission_Q() {
  const [commissionTitle, setTitle] = useState("");
  const [commissionTags, setTags] = useState("");
  const [commissionText, setCommissiontText] = useState("");

  
  const { loggedUser, actions } = useContext(Context);
  
  const navigate = useNavigate();
  
  console.log(loggedUser);
  
  function onChangeCommissionText(_data) {
    setCommissiontText(_data);
  }
  const submitRef = useRef();

  const onClickParent = (e) => {
    submitRef.current.focus();
  };

  function onSubmit() {
    onClickParent();
    Swal.fire({
      title: "그림의뢰글을 작성하시겠어요?",
      showCancelButton: true,
      confirmButtonText: "확인",
      denyButtonText: "취소",
    }).then((res) => {
      if (res.isConfirmed) {
        const ImgValue = localStorage.getItem("submitDrawing");

        localStorage.setItem("default", ImgValue);

        const config = {
          headers: {
            Authorization: "Token " + loggedUser,
          },
        };

        axios
          .post(
            `http://3.37.160.197/posts`,
            {
              title: commissionTitle,
              content: commissionText,
              tag: [],
              file_upload: ImgValue,
            },
            config
          )
          .then(navigate("/list"));
      }
    });
  }

  return (
    <Container>
      <Appbar></Appbar>
      <Box
        sx={{
          width: "1000px",
          height: "2000px",
          backgroundColor: "white",
          margin: "0 auto",
          border: 1,
          borderColor: "white",
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
            borderColor: "grey.400",
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
            <Typography
              align="left"
              variant="h5"
              sx={{
                fontWeight: "bold",
                alignSelf: "start",
              }}
            >
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
            <MyCanvas ref1={submitRef}></MyCanvas>
            <Button
              onClick={onSubmit}
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
