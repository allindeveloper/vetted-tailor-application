import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { myTheme } from "styles/theme";
import { MainContainer } from "./components/container/MainContainer";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./styles/globalStyle";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={myTheme}>
        <GlobalStyle />
        <MainContainer />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
