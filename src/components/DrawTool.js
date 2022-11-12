import React, { forwardRef, useEffect, useState, useContext } from "react";
import { CompactPicker } from "react-color";
import { Box, Stack, Button, Slider } from "@mui/material";
import UndoIcon from "@mui/icons-material/Undo";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SaveIcon from "@mui/icons-material/Save";
import DownloadIcon from "@mui/icons-material/Download";
import ModeIcon from "@mui/icons-material/Mode";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { useImperativeHandle } from "react";

export default function DrawTool(props, ref) {
  const [currentColor, setCurrentColor] = useState();
  const [eraserMode, setEraserMode] = useState(false);

  function onSave() {
    localStorage.setItem("savedDrawing", props.canvasRef.current.getSaveData());
    console.log(localStorage.getItem("savedDrawing"));
  }

  function onSubmit() {
    console.log("제발 돼라");
    let baseCanvas = props.canvasRef.current.canvasContainer.childNodes[0]; // canvas with background image
    let baseCanvasContex = baseCanvas.getContext("2d");
    console.log(baseCanvasContex);

    const copy = props.canvasRef.current.canvasContainer;
    baseCanvasContex.drawImage(copy.childNodes[1], 0, 0);
    const imgValue = baseCanvas.toDataURL();

    localStorage.setItem("submitDrawing", imgValue);
  }

  useImperativeHandle(props.ref1, () => ({
    focus: () => {
      onSubmit();
    },
  }));

  function onLoad(drawingName) {
    props.canvasRef.current.loadSaveData(
      localStorage.getItem(drawingName),
      true
    );
  }

  return (
    <Stack direction="row" spacing={2}>
      <CompactPicker
        color={eraserMode ? currentColor : props.brushColor}
        onChangeComplete={(color) => {
          if (!eraserMode) {
            props.setBrushColor(color.hex);
            setCurrentColor(color);
          }
        }}
      />
      <Button
        variant="outlined"
        sx={{
          width: "50px",
          height: "50px",
        }}
        onClick={() => {
          props.canvasRef.current.undo();
        }}
      >
        <UndoIcon></UndoIcon>
      </Button>
      <Button
        variant="outlined"
        sx={{
          width: "50px",
          height: "50px",
        }}
        onClick={() => props.canvasRef.current.clear()}
      >
        <DeleteOutlineIcon></DeleteOutlineIcon>
      </Button>
      <Button
        variant="outlined"
        sx={{
          width: "50px",
          height: "50px",
        }}
        onClick={onSave}
      >
        <SaveIcon />
      </Button>

      <Button
        variant="outlined"
        sx={{
          width: "50px",
          height: "50px",
        }}
        onClick={() => onLoad("savedDrawing")}
      >
        <DownloadIcon />
      </Button>
      <Stack sx={{ width: "100%" }} spacing={0}>
        <Slider
          defaultValue={5}
          aria-label="Default"
          valueLabelDisplay="auto"
          min={1}
          max={100}
          onChange={(e) => props.setBrushRad(e.target.value)}
        />
        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              if (eraserMode) {
                setEraserMode((ex) => !ex);
                props.setBrushColor(currentColor);
              }
            }}
          >
            <ModeIcon />
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              if (!eraserMode) {
                setCurrentColor(props.brushColor);
                props.setBrushColor("#FFFFFF");
                setEraserMode((ex) => !ex);
              }
            }}
          >
            <AutoFixHighIcon />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
