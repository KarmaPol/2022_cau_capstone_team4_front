import React, { useEffect } from "react";
import { Box } from "@mui/material";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "./Editor.css";

export default function MyEditor(props) {
  return (
    <Box
      sx={{
        width: "800px",
        justifyContent: "center",
      }}
    >
      <CKEditor
        editor={ClassicEditor}
        data=""
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          props.onChangeFunc(data);
        }}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
      />
    </Box>
  );
}
