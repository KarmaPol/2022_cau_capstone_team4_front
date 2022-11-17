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
import Appbar from "../components/Appbar";
import "../App.css";
import Line from "../components/Line";
import Comment from "../components/Comment";
import Context from "../components/ContextProvider";
import Swal from "sweetalert2";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Children } from "react";
import Footer from "../components/Footer";
import ReactWaterMark from "react-watermark-component";
import { saveAs } from "file-saver";
import "./Commission_page.css";

function Commission_page() {
  const { loggedUser, loggedUserData, loggedIn, actions } = useContext(Context);

  const [postData, setPostData] = useState([]);
  const [ansDatas, setAnsData] = useState([]);

  const params = useParams().id;

  const navigate = useNavigate();

  // console.log(state.loggedUser);

  useEffect(() => {
    fetchPostData();
    fetchAnsData();
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);

  const fetchPostData = async () => {
    const response = await axios.get(`http://3.37.160.197/post/${params}`);
    setPostData(response.data);
    console.log(response.data);
  };

  const fetchAnsData = async () => {
    if (loggedIn === true) {
      const config = {
        headers: { Authorization: "Token " + loggedUser },
      };
      const response = await axios.get(
        `http://3.37.160.197/post/${params}/answers`,
        config
      );
      setAnsData(response.data);
    } else {
      const response = await axios.get(
        `http://3.37.160.197/post/${params}/answers`
      );
      setAnsData(response.data);
    }
  };

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

  const selectAns = async (ID) => {
    Swal.fire({
      title: "채택하시겠어요?",
      showCancelButton: true,
      confirmButtonText: "확인",
      denyButtonText: "취소",
    }).then((res) => {
      if (res.isConfirmed) {
        const config = {
          headers: { Authorization: "Token " + loggedUser },
        };
        axios
          .get(`http://3.37.160.197/answer/${ID}/select`, config)
          .then(window.location.reload());
      }
    });
  };

  const deleteAns = async (ID) => {
    const deleteAnsData = async () => {
      const config = {
        headers: { Authorization: "Token " + loggedUser },
      };
      await axios.delete(`http://3.37.160.197/answer/${ID}`, config);
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

  // 게시글 댓글 작성

  const options = {
    chunkWidth: 250,
    chunkHeight: 250,
    textAlign: "left",
    textBaseline: "bottom",
    globalAlpha: 0.2,
    font: "30px Microsoft Yahei",
    rotateAngle: -0.26,
    fillStyle: "#666",
  };

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
            <Box
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
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
                direction="row"
                spacing={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: 2,
                  padding: "5px",
                  borderRadius: "15px",
                  boxSizing: "border-box",
                }}
              >
                {postData.selected === 0 ? (
                  <>
                    <UnpublishedIcon />
                    <Typography variant="h5" color="black">
                      미채택
                    </Typography>
                  </>
                ) : postData.selected === 1 ? (
                  <>
                    <CheckCircleOutlineIcon />
                    <Typography variant="h5" color="black">
                      1차 채택
                    </Typography>
                  </>
                ) : (
                  <>
                    <VerifiedIcon />
                    <Typography variant="h5" color="black">
                      2차 채택
                    </Typography>
                  </>
                )}
              </Stack>
            </Box>
            {/* 커미션 글 시작 */}
            <Box
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
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

              {/* 삭제 버튼 */}
              {ansDatas.length === 0 &&
                postData.selected !== 2 &&
                loggedUserData?.name === postData.author && (
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
                )}
            </Box>
            {/* 본문 제목 */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" color="black">
                {postData.title}
              </Typography>
              <Typography variant="body1" color="gray" component="div" sx={{}}>
                {postData.point}
              </Typography>
            </Stack>

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
            <Comment type={"post"} id={params} />
            <Line />

            {/* 커미션 글 끝 */}
            {ansDatas &&
              Children.toArray(
                ansDatas
                  .filter((x) => x.selected === postData.selected)
                  .map((ans) => (
                    <>
                      {console.log(ans)}

                      {postData.selected === 2 && (
                        <>
                          <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <VerifiedIcon
                              sx={{
                                width: "40px",
                                height: "40px",
                              }}
                            />
                            <Typography variant="h5" color="black">
                              채택완료
                            </Typography>
                          </Stack>
                        </>
                      )}
                      <Box
                        sx={{
                          display: "flex",
                          width: "100%",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Stack
                          direction="row"
                          spacing={3}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
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
                        </Stack>

                        {/* 채택 버튼 -> 추후에 클라이언트만 권한 부여 */}

                        <Stack spacing={1} direction="row">
                          {loggedIn === true &&
                            loggedUserData.name === postData.author &&
                            postData.selected === 2 && (
                              <Button
                                variant="contained"
                                onClick={() => {
                                  saveAs(ans.file_upload, "커미션이미지.png");
                                }}
                                sx={{
                                  width: "100px",
                                }}
                              >
                                다운로드
                              </Button>
                            )}

                          {loggedIn === true &&
                            loggedUserData.name === postData.author &&
                            postData.selected !== 2 && (
                              <Button
                                onClick={() => {
                                  selectAns(ans.id);
                                }}
                                variant="contained"
                                color="success"
                                sx={{
                                  width: "100px",
                                }}
                              >
                                채택
                              </Button>
                            )}

                          {loggedIn === true &&
                            loggedUserData.name === ans.author &&
                            postData.selected === 1 && (
                              <Link
                                to={`/answer/fix/${params}/${ans.id}`}
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
                            )}
                          {postData.selected !== 2 &&
                            loggedIn === true &&
                            loggedUserData.name === ans.author && (
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
                            )}
                        </Stack>
                      </Box>
                      <Box>
                        {/* 답변 본문 */}
                        <ReactWaterMark
                          waterMarkText={ans.author}
                          openSecurityDefense
                          options={options}
                        >
                          <img className="img2" src={ans.file_upload} />
                        </ReactWaterMark>
                      </Box>

                      <Comment
                        likeAvailabilty={true}
                        type={"answer"}
                        id={ans.id}
                        isLiked={ans.is_liked}
                        likeCount={ans.like_count}
                        fetchFunc={fetchAnsData}
                      ></Comment>
                      {/* 답변 글 끝 */}
                      <Box
                        sx={{
                          width: "100%",
                          borderBottom: 0.5,
                          borderColor: "grey.300",
                          mt: "16px",
                        }}
                      />
                    </>
                  ))
              )}
            {loggedIn === true && postData.selected === 0 && (
              <Link to={`/answer/${params}`} style={{ textDecoration: "none" }}>
                {/* 답변 작성은 게시물의 id값 전달 */}
                <Button
                  variant="outlined"
                  sx={{
                    width: "100px",
                  }}
                >
                  답변작성
                </Button>
              </Link>
            )}
            <Box minHeight="100px" />
          </Stack>
        </Box>
        <Box minHeight="300px" />
      </Box>
      <Footer />
    </>
  );
}

export default Commission_page;
