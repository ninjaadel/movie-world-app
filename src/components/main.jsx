
import children from "react";
import { useContext } from "react";
import {ThemeContext} from "../contexts.jsx/theme";
export function Main({ children }) {
  const { theme } = useContext(ThemeContext);
  const colorClass = theme === "dark" ? "bg-dark text-light" : "bg-light text-dark";
  return <div className={`main ${colorClass}`}>{children}</div>;
}
