import React, { useEffect, useState, useContext, useRef } from "react";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Appbar from "../components/Appbar";
import Context from "../components/ContextProvider";
import "../App.css";
import Line from "../components/Line";
import MyCanvas from "../components/MyCanvas";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";

function Commission_A() {
  const [ansText, setAnsText] = useState("");
  const [ansImg, setAnsImg] = useState();
  const [postData, setPostData] = useState([]);

  const { loggedUser, actions } = useContext(Context);

  const navigate = useNavigate();

  const params = useParams().id;

  useEffect(() => {
    const fetchPostData = async () => {
      const response = await axios.get(`http://3.37.160.197/post/${params}`);
      setPostData(response.data);
    };
    fetchPostData();
  }, []);

  const submitRef = useRef();

  const onClickParent = (e) => {
    submitRef.current.focus();
  };

  function onSubmit() {
    onClickParent();
    Swal.fire({
      title: "답변을 제출하시겠어요?",
      showCancelButton: true,
      confirmButtonText: "확인",
      denyButtonText: "취소",
    }).then((res) => {
      if (res.isConfirmed) {
        const ImgValue = localStorage.getItem("submitDrawing");

        const config = {
          headers: {
            Authorization: "Token " + loggedUser,
          },
        };

        axios
          .post(
            `http://3.37.160.197/post/${params}/answers`,
            {
              file_upload: ImgValue,
              savedata: localStorage.getItem("savedDrawing"),
            },
            config
          )
          .then(console.log("성공"));

        navigate(`/page/${params}`);
      }
    });
  }

  return (
    <>
      <Appbar></Appbar>
      <Box
        sx={{
          width: "1000px",
          minHeight: "2000px",
          backgroundColor: "white",
          margin: "0 auto",
          border: 1,
          borderColor: "white",
        }}
      >
        <Box
          sx={{
            width: "900px",
            minHeight: "1900px",
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
              }}
            >
              그림 의뢰
            </Typography>
            <Stack
              spacing={2}
              direction="row"
              sx={{
                alignItems: "center",
              }}
            >
              {/* 클라이언트 정보 */}
              <Avatar></Avatar>
              <Typography variant="h7" color="black" align="flex-end">
                {postData.author}
              </Typography>
            </Stack>
            <Typography variant="h6" color="black">
              {postData.title}
            </Typography>
            <Box minHeight={100}>
              {/* 원글 본문 */}
              <div dangerouslySetInnerHTML={{ __html: postData.content }}></div>
            </Box>

            <Box>
              <img src={postData.file_upload} />
            </Box>
            <Line />

            <MyCanvas ref1={submitRef} load={false} qid={null} aid={null} />
            <Button
              onClick={onSubmit}
              variant="outlined"
              sx={{
                width: "100px",
              }}
            >
              작성완료
            </Button>
            <Box height="100px" />
          </Stack>
        </Box>
        <Box height="300px" />
      </Box>
      <Footer />
    </>
  );
}

export default Commission_A;
