import * as React from "react";
import grapesjs from "grapesjs";
import GJsBlocksBasic from "grapesjs-blocks-basic";
import GJsPresetWeb from "grapesjs-preset-webpage";
import type { Editor } from "grapesjs";
import heroPlugin from "./plugins/hero.tsx";
import counterPlugin from "./plugins/counter.tsx";

import "./editor.style.css";
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
  const [editorInit, setEditorInit] = React.useState(false);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      width: "100%",
      height: "100vh",
      fromElement: true,
      storageManager: { type: "local", autosave: true, autoload: true },
      plugins: [GJsBlocksBasic, GJsPresetWeb, heroPlugin, counterPlugin],
    });

    setEditor(editor);
  }, []);

  useEffect(() => {
    if (editor && !editorInit) {
      editor.BlockManager?.add("hero", {
        label: "Hello world",
      });

      editor.Panels?.addPanel({
        id: "panel-top",
        el: ".panel__top",
      });

      editor.Panels?.addPanel({
        id: "basic-actions",
        el: ".panel__basic-actions",
        buttons: [
          {
            id: "visibility",
            active: true, // active by default
            className: "btn-toggle-borders",
            label: "<u>B</u>",
            command: "sw-visibility", // Built-in command
          },
          {
            id: "export",
            className: "btn-open-export",
            label: "Exp",
            command: "export-template",
            context: "export-template", // For grouping context of buttons from the same panel
          },
          {
            id: "show-json",
            className: "btn-show-json",
            label: "JSON",
            context: "show-json",
            command(editor) {
              editor.Modal.setTitle("Components JSON")
                .setContent(
                  `<textarea style="width:100%; height: 250px;">
                  ${JSON.stringify(editor.getComponents())}
                </textarea>`
                )
                .open();
            },
          },
        ],
      });

      setEditorInit(true);
    }

    return () => {
      setEditorInit(false);
      editor?.destroy();
    };
  }, [editor]);

  return (
    <div className="gjs__container">
      <div className="panel__top">
        <div className="panel__basic-actions"></div>
      </div>
      <div id="gjs"></div>
      <div id="blocks"></div>
    </div>
  );
};

export default GjsEditor;
