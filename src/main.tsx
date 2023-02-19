import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ApplicationControlProvider } from "./contexts/ApplicationControlContext";
import { AuthControlProvider } from "./contexts/AuthControlContext";
import { ChatControlProvider } from "./contexts/ChatControlContext";
import { DataControlProvider } from "./contexts/DataControlContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthControlProvider>
        <ApplicationControlProvider>
          <ChatControlProvider>
            <DataControlProvider>
              <App />
            </DataControlProvider>
          </ChatControlProvider>
        </ApplicationControlProvider>
      </AuthControlProvider>
    </BrowserRouter>
  </React.StrictMode>
);
