import React, { useState } from "react";
import { Typography } from "@mui/material";

export default function Rank(props) {
  let rank = props.cumulScore;
  console.log(rank);

  if (rank <= 100) {
    rank = 3;
  } else if (100 < rank && rank <= 200) {
    rank = 2;
  } else if (200 < rank && rank <= 300) {
    rank = 1;
  } else if (300 < rank) {
    rank = 0;
  } else {
    rank = 3;
  }

  const rankArray = new Array(
    { rank: "Master", color: "#0092FF" },
    { rank: "Gold", color: "#FFBF43" },
    {
      rank: "Silver",
      color: "#A4A4A4",
    },
    {
      rank: "Bronze",
      color: "#884200",
    }
  );

  return (
    <Typography
      sx={{
        fontWeight: "bold",
        fontSize: "13px",
        color: rankArray[rank].color,
      }}
    >
      {rankArray[rank].rank}
    </Typography>
  );
}
