import { children } from "react";
import { useContext } from "react";
import {ThemeContext} from '../contexts.jsx/theme';
export default function Header({ children }) {
  const {theme} = useContext(ThemeContext);
  return (
    <div id="header">
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme={`${theme}`}
      >
        {children}
      </nav>
    </div>
  );
}
