import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
import parse from "html-react-parser";
import Appbar from "../components/Appbar";
import "../App.css";
import MyEditor from "../components/Editor";
import Line from "../components/Line";
import Comment from "../components/Comment";
import Context from "../components/ContextProvider";

function Commission_page() {
  const { loggedUser, actions } = useContext(Context);

  const [load, setLoad] = useState(false);
  const [postData, setPostData] = useState([]);
  const [ansData, setAnsData] = useState();

  const params = useParams().id;

  // console.log(state.loggedUser);

  useEffect(() => {
    const fetchPostData = async () => {
      const response = await axios.get(`http://3.37.160.197/post/${params}/`);
      setPostData(response.data);
      setLoad(true);
    };
    const fetchAnsData = async () => {
      const response = await axios.get("http://3.37.160.197/answer/1/");
      setPostData(response.data);
      setLoad(true);
      console.log(response);
    };
    fetchPostData();
  }, []);

  console.log(postData);

  console.log(loggedUser);

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
            {/* 커미션 글 시작 */}
            <Link to="/" style={{ textDecoration: "none" }}>
              <Stack
                spacing={1}
                direction="row"
                sx={{
                  alignItems: "center",
                }}
              >
                {/* 클라이언트 정보 */}
                <Avatar></Avatar>
                <Typography variant="subtitle1" color="black" align="flex-end">
                  {postData.author}
                </Typography>
              </Stack>
            </Link>
            <Typography variant="h5" color="black">
              {postData.title}
            </Typography>
            <Box height="300px">
              {/* 커미션 본문 */}
              <div dangerouslySetInnerHTML={{ __html: postData.content }}></div>
            </Box>

            <Comment />
            {/* 커미션 글 끝 */}
            <Line />
            {/* 답변 글 시작 */}
            <Box
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <Stack
                  spacing={1}
                  direction="row"
                  sx={{
                    alignItems: "center",
                  }}
                >
                  {/* 크리에이터 정보 */}
                  <Avatar></Avatar>
                  <Typography
                    variant="subtitle1"
                    color="black"
                    align="flex-end"
                  >
                    userID
                  </Typography>
                </Stack>
              </Link>

              {/* 채택 버튼 -> 추후에 클라이언트만 권한 부여 */}
              <Stack spacing={1} direction="row">
                <Link
                  to={`/answer/${params}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100px",
                    }}
                  >
                    채택
                  </Button>
                </Link>
                <Link
                  to={`/answer/${params}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100px",
                    }}
                  >
                    보완
                  </Button>
                </Link>
              </Stack>
            </Box>
            <Box height="300px">
              {/* 답변 본문 */}
              {/* <p>{parse(ansData)}</p> */}
            </Box>
            <Comment likeAvailabilty={true}></Comment>
            {/* 답변 글 끝 */}
            <Line />
            <Link to={`/answer/${params}`} style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                sx={{
                  width: "100px",
                }}
              >
                답변작성
              </Button>
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default Commission_page;
