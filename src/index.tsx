import ReactDOM from "react-dom/client";
import "./index.css";

import { GlobalContextProvider } from "./contexts/GlobalContext.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
);
