import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);

const isAllowed = true;

root.render(
  <React.StrictMode>{isAllowed ? <App /> : "Not supported"}</React.StrictMode>
);
