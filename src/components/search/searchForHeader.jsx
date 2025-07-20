import { useState } from "react";
import { useNavigate } from "react-router-dom";






export function SearchForHeader({ theme }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  function handleSearch(event) {
    event.preventDefault();
    const query = searchTerm.trim(searchTerm);
    navigate(`/search?query=${query}`);
    setSearchTerm("");
  }
  return (
    <form action="" className="d-flex m2 justify-content-center ms-auto" onSubmit={handleSearch}>
  <input
    type="search"
    placeholder="milyonlarca film arasından arama yapın..."
    aria-label="Search"
    className="form-control w-50 mx-2" // Bootstrap ile genişlik ve padding
    style={{ maxWidth: "400px", minWidth: "200px" }} // İstersen kendi stilini de ekleyebilirsin
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <button type="submit" className={`${theme === "dark" ? "btn btn-outline-dark" : "btn btn-outline-light"}`}>
    <i className="bi bi-search"></i>
  </button>
</form>
  );
}
