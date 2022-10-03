import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import Appbar from "./components/Layout";

function App() {
  const [commissionTitle, setTitle] = useState("");
  const [commissionTags, setTags] = useState("");

  return (
    <Container maxWidth="lg" sx={{ alignItems: "center" }}>
      <Box
        sx={{
          width: 1000,
          height: 2000,
          backgroundColor: "white",
          margin: "0 auto",
          position: "absolute",
        }}
      >
        <Box
          sx={{
            width: "900px",
            height: "800px",
            backgroundColor: "white",
            margin: "0 auto",
            mt: "100px",
            border: 0.5,
            borderColor: "gray",
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
            <Typography align="left" variant="h5">
              그림 의뢰
            </Typography>
            <Grid container spacing={4}>
              <Grid items xs={8}>
                <TextField
                  onChange={(e) => setTitle(e.target.value)}
                  fullWidth
                  id="title"
                  name="title"
                  label="제목"
                  variant="outlined"
                ></TextField>
              </Grid>
              <Grid items xs={4}>
                <TextField
                  onChange={(e) => setTags(e.target.value)}
                  fullWidth
                  id="tags"
                  name="tags"
                  label="태그"
                  variant="outlined"
                ></TextField>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
