import * as React from "react";
import grapesjs from "grapesjs";
import GjsWrapper from "@grapesjs/react";
import GJsBlocksBasic from "grapesjs-blocks-basic";
import GJsPresetWeb from "grapesjs-preset-webpage";
import type { Editor } from "grapesjs";
import heroPlugin from "./plugins/hero.tsx";
import counterPlugin from "./plugins/counter.tsx";

import "../style.css";
import "grapesjs/dist/css/grapes.min.css";
import { useEffect } from "react";

export const GjsEditor = () => {
  // const onEditor = (editor: Editor) => {
  //   console.log("Editor loaded", { editor });
  // };

  // return (
  //   <div style={{ width: "100%" }}>
  //     <GjsWrapper
  //       grapesjs={grapesjs}
  //       options={{
  //         height: "100vh",
  //         // storageManager: { type: "local", autosave: true, autoload: true },
  //         plugins: [GJsBlocksBasic, GJsPresetWeb, heroPlugin, counterPlugin],
  //       }}
  //       onEditor={onEditor}
  //     />
  //   </div>
  // );

  const [editor, setEditor] = React.useState<Editor | null>(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      width: "100%",
      height: "100vh",
      storageManager: { type: "local", autosave: true, autoload: true },
      plugins: [GJsBlocksBasic, GJsPresetWeb, heroPlugin, counterPlugin],
    });

    setEditor(editor);
  }, []);

  return <div id="gjs"></div>;
};

export default GjsEditor;
