import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@yext/search-ui-react/bundle.css";
import {
  HeadlessConfig,
  provideHeadless,
  SandboxEndpoints,
  SearchHeadlessProvider,
} from "@yext/search-headless-react";

const headlessConfig: HeadlessConfig = {
  apiKey: "2f1d2e388cd0b7e9e6593a7efd5ca38e",
  experienceKey: "test-kering",
  locale: "en",
  verticalKey: "products",
  endpoints: SandboxEndpoints,
};

const searcher = provideHeadless(headlessConfig);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SearchHeadlessProvider searcher={searcher}>
      <App />
    </SearchHeadlessProvider>
  </React.StrictMode>
);
