import React from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import "./index.css";
import App from "./App";


// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
    <RecoilRoot>
    <App />
  </RecoilRoot>
);
