import ReactDOM from "react-dom/client";
import "./index.css";

import { GlobalContextProvider } from "./contexts/GlobalContext.tsx";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GlobalContextProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </GlobalContextProvider>
);
