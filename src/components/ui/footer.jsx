import { useContext } from "react";
import {ThemeContext} from "../../contexts.jsx/theme";

export function Footer() {
  const { theme } = useContext(ThemeContext);
  const bgClass = theme === "dark" ? "bg-dark" : "bg-light";
  const textClass = theme === "dark" ? "text-light" : "text-dark";
  const iconColor = theme === "dark" ? "#fff" : "#222";

  return (
    <footer className={`footer ${bgClass} ${textClass} text-center  pt-4 border-top`}>
      <div className="container">
        <div className="mb-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
            style={{ color: iconColor, fontSize: "1.5rem" }}
            aria-label="Instagram"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
            style={{ color: iconColor, fontSize: "1.5rem" }}
            aria-label="Twitter"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
            style={{ color: iconColor, fontSize: "1.5rem" }}
            aria-label="Facebook"
          >
            <i className="bi bi-facebook"></i>
          </a>
        </div>
        <p className="mb-1">&copy; {new Date().getFullYear()} Movie App. All rights reserved.</p>
        <small>Made with <span style={{color: "#e25555"}}>&hearts;</span> by Movie Team</small>
      </div>
    </footer>
  );
}