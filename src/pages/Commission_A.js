import React, { useEffect, useState, useRef } from "react";
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
import Appbar from "../components/Appbar";
import "../App.css";
import MyEditor from "../components/Editor";
import Line from "../components/Line";
import MyCanvas from "../components/MyCanvas";
import { Link, useParams } from "react-router-dom";

function Commission_A() {
  const [ansText, setAnsText] = useState("");
  const [ansImg, setAnsImg] = useState();
  const [postData, setPostData] = useState([]);

  function onChangeAnsText(_data) {
    setAnsText(() => _data);
  }

  const params = useParams().id;

  useEffect(() => {
    const fetchPostData = async () => {
      const response = await axios.get(`http://3.37.160.197/post/${params}/`);
      setPostData(response.data);
    };
    fetchPostData();
  }, []);

  // function onSubmit() {
  //   axios
  //     .post("http://3.37.160.197/post/", {
  //       title: commissionTitle,
  //       content: commissionText,
  //       tag: [],
  //       head_image: null,
  //       file_upload: null,
  //     })
  //     .then(console.log("성공"));
  // }

  return (
    <Container
      sx={{ justifyContent: "center", alignItems: "center", width: "1000px" }}
    >
      <Appbar></Appbar>
      <Box
        sx={{
          width: 1000,
          minheight: "2500px",
          backgroundColor: "white",
          margin: "0 auto",
          position: "absolute",
        }}
      >
        <Box
          sx={{
            width: "900px",
            minHeight: "2400px",
            backgroundColor: "white",
            margin: "0 auto",
            mt: "100px",
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
            <Box height="300px">
              {/* 원글 본문 */}
              <div dangerouslySetInnerHTML={{ __html: postData.content }}></div>
            </Box>
            <Line />

            <MyCanvas />
            <Link to="/page" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                sx={{
                  width: "100px",
                }}
                onClick={() => {
                  localStorage.setItem("ansText", ansText); // 추후에 답변 ID로
                }}
              >
                작성완료
              </Button>
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default Commission_A;
