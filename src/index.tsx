import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as Element);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
