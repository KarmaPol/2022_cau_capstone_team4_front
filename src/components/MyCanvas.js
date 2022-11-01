import React, { useRef } from "react";
import CanvasDraw from "react-canvas-draw";

export default function MyCanvas(props) {
  const canvasRef = useRef(null);
  return (
    <CanvasDraw
      ref={canvasRef}
      canvasWidth={props.width}
      canvasHeight={props.height}
      brushColor={props.color}
      brushRadius={props.brushRadius}
      hideGrid={true}
    />
  );
}
