import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";

bridge.send("VKWebAppInit");

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
