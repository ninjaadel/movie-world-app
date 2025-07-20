import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {ThemeContext} from "../../contexts.jsx/theme";
import { useContext } from "react";
export function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext); // Doğru kullanım
  
  const borderColor = theme === "dark" ? "#444" : "#ccc";
  const btnColor = theme === "dark" ? "btn-outline-light" : "btn-outline-dark";
  function handleSearch(event) {
    event.preventDefault();
    const query = searchTerm.trim();
    navigate(`/search?query=${query}`);
    setSearchTerm("");
  }

  // Tema renklerine göre class ve stil belirle
  const inputClass =
    theme === "dark"
      ? "form-control bg-dark text-light"
      : "form-control bg-light text-dark";

  return (
    <form
      className={`d-flex m2 mb-lg-0 ms-auto bg-${theme}`}
      onSubmit={handleSearch}
    >
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={inputClass}
        placeholder="Film ara..."
      /> 
      <button type="submit" className={`btn  ${btnColor} ms-2 border hover:${borderColor}`}>
        <i className={`bi bi-search`}></i>
      </button>
    </form>
  );
}