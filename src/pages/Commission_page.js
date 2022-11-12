import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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
import Swal from "sweetalert2";

function Commission_page() {
  const { loggedUser, actions } = useContext(Context);

  const [reload, setReload] = useState(false);
  const [postData, setPostData] = useState([]);
  const [ansDatas, setAnsData] = useState();

  const params = useParams().id;

  const navigate = useNavigate();

  // console.log(state.loggedUser);

  useEffect(() => {
    const fetchPostData = async () => {
      const response = await axios.get(`http://3.37.160.197/post/${params}`);
      setPostData(response.data);
      console.log(response.data);
    };
    const fetchAnsData = async () => {
      const response = await axios.get(
        `http://3.37.160.197/post/${params}/answers`
      );

      setAnsData(response.data);
    };
    fetchPostData();
    fetchAnsData();
  }, []);

  const deletePost = async () => {
    const deletePostData = async () => {
      const config = {
        headers: { Authorization: "Token " + loggedUser },
      };
      const response = await axios.delete(
        `http://3.37.160.197/post/${params}`,
        config
      );
    };
    Swal.fire({
      title: "정말 삭제하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "확인",
      denyButtonText: "취소",
    }).then((res) => {
      if (res.isConfirmed) {
        deletePostData();
        navigate("/list");
      }
    });
  };

  const FixPost = () => {
    localStorage.setItem("fixData", postData);
  };

  const deleteAns = async (ID) => {
    const deleteAnsData = async () => {
      const config = {
        headers: { Authorization: "Token " + loggedUser },
      };
      const response = await axios.delete(
        `http://3.37.160.197/answer/${ID}`,
        config
      );
    };
    Swal.fire({
      title: "정말 삭제하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "확인",
      denyButtonText: "취소",
    }).then((res) => {
      if (res.isConfirmed) {
        deleteAnsData();
        window.location.reload();
      }
    });
  };

  return (
    <Container>
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
            {/* 커미션 글 시작 */}
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
                  {/* 클라이언트 정보 */}
                  <Avatar></Avatar>
                  <Typography
                    variant="subtitle1"
                    color="black"
                    align="flex-end"
                  >
                    {postData.author}
                  </Typography>
                </Stack>
              </Link>

              {/* 채택 버튼 -> 추후에 클라이언트만 권한 부여 */}
              <Stack spacing={1} direction="row">
                {/* {postData.} */}
                <Link
                  to={`/answer/${params}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    color="warning"
                    variant="outlined"
                    sx={{
                      width: "100px",
                    }}
                  >
                    수정
                  </Button>
                </Link>

                <Button
                  color="error"
                  variant="contained"
                  onClick={deletePost}
                  sx={{
                    width: "100px",
                  }}
                >
                  삭제
                </Button>
              </Stack>
            </Box>
            <Typography variant="h5" color="black">
              {postData.title}
            </Typography>
            <Box
              sx={{
                minHeight: "100px",
              }}
            >
              {/* 커미션 본문 */}
              <div dangerouslySetInnerHTML={{ __html: postData.content }}></div>
            </Box>
            <Box>
              <img src={postData.file_upload} />
            </Box>

            <Comment />
            <Line />

            {/* 커미션 글 끝 */}
            {ansDatas &&
              ansDatas.map((ans) => (
                <>
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
                          {ans.author}
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
                          variant="contained"
                          color="success"
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
                          color="success"
                          sx={{
                            width: "100px",
                          }}
                        >
                          보완
                        </Button>
                      </Link>

                      <Button
                        color="error"
                        variant="contained"
                        onClick={() => {
                          console.log(ans);
                          deleteAns(ans.id);
                        }}
                        sx={{
                          width: "100px",
                        }}
                      >
                        삭제
                      </Button>
                    </Stack>
                  </Box>
                  <Box>
                    {/* 답변 본문 */}
                    <img src={ans.file_upload} />
                  </Box>
                  <Comment likeAvailabilty={true}></Comment>
                  {/* 답변 글 끝 */}
                  <Line />
                </>
              ))}

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
