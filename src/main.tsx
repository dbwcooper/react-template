import ReactDOM from "react-dom";
import { SWRConfig } from "swr";
import request from "@utils/fetch";
import App from "./App";

import "./index.css";

const WrapApp = (
  <SWRConfig
    value={{
      fetcher: async (resource, init) => request(resource, init),
      revalidateOnFocus: false,
      errorRetryCount: 1,
    }}
  >
    <App />
  </SWRConfig>
);
ReactDOM.render(WrapApp, document.getElementById("root"));
