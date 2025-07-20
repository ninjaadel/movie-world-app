import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
createRoot(document.getElementById("root")).render(<App />);
