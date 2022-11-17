import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@yext/search-ui-react/bundle.css";
import {
  provideHeadless,
  SearchHeadlessProvider,
} from "@yext/search-headless-react";
import headlessConfig from "./config/headlessConfig";

const searcher = provideHeadless(headlessConfig);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SearchHeadlessProvider searcher={searcher}>
      <App />
    </SearchHeadlessProvider>
  </React.StrictMode>
);
