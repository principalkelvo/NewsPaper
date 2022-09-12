import React, { useRef } from "react";
import JoditEditor from "jodit-react";

import RichTextCSS from "./RichText.module.css";

function RichText({setValue}){
  const editor = useRef(null);
  return (
    <div className={RichTextCSS.editor}>
      <JoditEditor ref={editor} onChange={(content) => setValue(content)} />
    </div>
  );
}

export default RichText;
