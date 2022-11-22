import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Router } from "./route";
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
