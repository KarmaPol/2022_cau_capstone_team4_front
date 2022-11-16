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

import CanvasDraw from "react-canvas-draw";
import DrawTool from "../components/DrawTool";
import Line from "../components/Line";
import defaultImage from "../img/default.png";

export default function MyCanvas(props) {
  const canvasRef = useRef();
  const [brushRad, setBrushRad] = useState(5);
  const [brushColor, setBrushColor] = useState("#000000");

  useEffect(() => {
    setTimeout(() => {
      if (props.load) {
        console.log(props.aid);
        if (canvasRef !== undefined) {
          console.log(canvasRef.current);
          const fetchSaveData = async () => {
            const response = await axios.get(
              `http://3.37.160.197/answer/${props.aid}`
            );
            console.log(response.data.savedata);
            canvasRef.current.loadSaveData(response.data.savedata, false);
          };
          fetchSaveData();
        }
      }
    }, 500);
  }, []);

  return (
    <Stack spacing={1}>
      <DrawTool
        brushRad={brushRad}
        setBrushRad={setBrushRad}
        brushColor={brushColor}
        setBrushColor={setBrushColor}
        canvasRef={canvasRef}
        ref1={props.ref1}
        qid={props.qid}
        aid={props.aid}
        load={props.load}
      />
      <Box>
        <Line />
        <CanvasDraw
          ref={canvasRef}
          canvasWidth={800}
          canvasHeight={800}
          brushColor={brushColor}
          brushRadius={brushRad}
          hideGrid={true}
          lazyRadius={0}
          loadTimeOffset={3}
          imgSrc={defaultImage}
          enablePanAndZoom={true}
        />
        <Line />
      </Box>
    </Stack>
  );
}
