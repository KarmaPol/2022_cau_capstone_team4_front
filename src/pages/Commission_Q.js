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
import Footer from "../components/Footer";

function Commission_Q() {
  const [commissionTitle, setTitle] = useState("");
  const [commissionTags, setTags] = useState("");
  const [commissionPoint, setPoint] = useState(20);
  const [commissionText, setCommissiontText] = useState("");

  console.log(commissionPoint);

  const { loggedUser, loggedUserData, actions } = useContext(Context);

  useEffect(() => {
    axios
      .get(`http://3.37.160.197/user/${loggedUserData.username}`)
      .then((res) => {
        localStorage.setItem("userData", JSON.stringify(res.data));
        console.log(localStorage.getItem("userData"));
        console.log(res.data);
        actions.setLoggedUserData(res.data);
      });
  }, []);

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
        if (commissionPoint > loggedUserData.point) {
          Swal.fire({
            icon: "error",
            title: "작성 오류",
            text: "입력한 포인트가 보유량보다 더 많습니다!",
            timer: 1500,
            showConfirmButton: false,
          });
        } else {
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
                point: commissionPoint,
              },
              config
            )
            .then(() => {
              navigate("/list");
            });
        }
      }
    });
  }

  return (
    <>
      <Appbar></Appbar>
      <Box
        sx={{
          width: "1000px",
          minheight: "2000px",
          backgroundColor: "white",
          margin: "0 auto",
          border: 1,
          borderColor: "white",
        }}
      >
        <Box
          sx={{
            width: "900px",
            minheight: "1900px",
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
            <Stack
              direction="row"
              spacing={1}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100px",
                }}
              >
                <TextField
                  className="inputRounded2"
                  onChange={(e) => setPoint(e.target.value)}
                  value={commissionPoint}
                  fullWidth
                  id="point"
                  name="point"
                  label="포인트"
                  variant="outlined"
                ></TextField>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  color: "gray",
                }}
              >{`/ ${loggedUserData.point}`}</Typography>
            </Stack>
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
            <Box minHeight="100px" />
          </Stack>
        </Box>
        <Box minHeight="300px" />
      </Box>
      <Footer />
    </>
  );
}

export default Commission_Q;
