import * as React from "react";
import { GjsEditor } from "./grapesjs/editor.tsx";
import { CraftJsEditor } from "./craftjs/editor.tsx";
import "./style.css";

export const App = () => {
  return (
    <div>
      {/* <GjsEditor /> */}
      <CraftJsEditor />
    </div>
  );
};

export default App;
