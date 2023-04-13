import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import initFullProps from "./initFullProps";
interface Props {
  html: string;
  setHtml?: any;
  leftlabel?: string;
  type?: string;
  theme?: string;
}
const CustomEditor = ({
  html,
  setHtml,
  leftlabel,
  type = "both",
  theme,
}: Props) => {

  let contenido: string = html || "";
  let inicioBody: number = -1;
  let finBody: number = -1;

  inicioBody = contenido.indexOf("<body>");
  finBody = contenido.indexOf("</body>");
  if (inicioBody !== -1) {
    contenido = contenido.substring(inicioBody + 6, finBody - 1);
  }

  return (
    <>
      <label htmlFor="">{leftlabel}</label>
      <Editor
        id="Editor"
        apiKey="4i60cn1d7yypl7aysrm5drvcc46jiainltvvdijgx5hgymra"
        value={contenido}
        init={initFullProps}
        // disabled
        scriptLoading={{ delay: 0 }}
        onEditorChange={setHtml}
      />
    </>
  );
};

export default CustomEditor;
