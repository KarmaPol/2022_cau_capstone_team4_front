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

export default function MyCanvas(props) {
  const canvasRef = useRef(null);
  const [brushRad, setBrushRad] = useState(5);
  const [brushColor, setBrushColor] = useState("#3fffff");
  const [drawing, setDrawing] = useState();

  return (
    <Stack spacing={1}>
      <DrawTool
        brushRad={brushRad}
        setBrushRad={setBrushRad}
        brushColor={brushColor}
        setBrushColor={setBrushColor}
        canvasRef={canvasRef}
      />
      <Box>
        <Line />
        <CanvasDraw
          ref={canvasRef}
          canvasWidth={800}
          canvasHeight={1000}
          brushColor={brushColor}
          brushRadius={brushRad}
          hideGrid={true}
          lazyRadius={0}
          loadTimeOffset={3}
        />
        <Line />
      </Box>
    </Stack>
  );
}
