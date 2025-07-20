import { useContext } from "react";
import {ThemeContext} from "../../contexts.jsx/theme";

export function Pagination({ query, setSearchParams, totalPages, currentPage }) {
  const { theme } = useContext(ThemeContext);
  const cardClass = theme === "dark" ? "card bg-dark text-light border-0" : "card bg-light text-dark border-0";
  const bodyClass = theme === "dark" ? "card-body bg-dark text-light" : "card-body bg-light text-dark";
  const btnClass = theme === "dark" ? "btn btn-outline-light" : "btn btn-outline-dark";

  return (
    <div className="container ">
      <div className={cardClass}>
        <div className={bodyClass}>
          <div className="d-flex justify-content-between">
            {currentPage > 1 && (
              <button
                onClick={() => setSearchParams({ query, page: currentPage - 1 })}
                className={btnClass}
              >
                Geri
              </button>
            )}
            <div className="d-flex align-items-center p-2">
              <p className="mb-0">{currentPage} / {totalPages}</p>
            </div>
            {currentPage < totalPages && (
              <button
                onClick={() => setSearchParams({ query, page: currentPage + 1 })}
                className={btnClass}
              >
                İleri
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}