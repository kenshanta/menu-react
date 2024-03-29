import React from "react";
import App from "./App";
import "./index.scss";
import { createRoot } from "react-dom/client";

const container = document.getElementById("container");
const root = createRoot(container!);

root.render(<App />);
