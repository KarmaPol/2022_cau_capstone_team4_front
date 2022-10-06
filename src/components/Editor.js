import React, { useEffect } from "react";
import { Box } from "@mui/material";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "./Editor.css";

export default function MyEditor() {
  useEffect(() => {}, []);
  return (
    <Box
      sx={{
        width: "800px",
        justifyContent: "center",
      }}
    >
      <CKEditor
        editor={ClassicEditor}
        data="<p>본문</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </Box>
  );
}
