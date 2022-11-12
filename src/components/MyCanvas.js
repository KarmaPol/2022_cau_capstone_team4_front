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
import CanvasDraw from "react-canvas-draw";
import DrawTool from "../components/DrawTool";
import Line from "../components/Line";
import defaultImage from "../img/default.png";

export default function MyCanvas(props) {
  const canvasRef = useRef(null);
  const [brushRad, setBrushRad] = useState(5);
  const [brushColor, setBrushColor] = useState("#000000");
  const [drawing, setDrawing] = useState();

  return (
    <Stack spacing={1}>
      <DrawTool
        brushRad={brushRad}
        setBrushRad={setBrushRad}
        brushColor={brushColor}
        setBrushColor={setBrushColor}
        canvasRef={canvasRef}
        ref1={props.ref1}
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
        />
        <Line />
      </Box>
    </Stack>
  );
}
