import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import {getPublicKeys} from "./env.ts";

async function enableMocking() {
  if (getPublicKeys().publicKeys.NODE_ENV !== "development") {
    return;
  }

  const {worker} = await import("./test/mocks/browser.ts");

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
