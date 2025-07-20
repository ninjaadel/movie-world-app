import { useContext } from "react";
import { ThemeContext } from "../contexts.jsx/theme";
import Movie from "./movie/Movie";

export default function MovieList({ movie_list }) {
  const { theme } = useContext(ThemeContext);

  const cardClass = theme === "dark" ? "card bg-dark text-light" : "card bg-light text-dark";
  const headerClass = theme === "dark" ? "card-header bg-secondary text-light" : "card-header bg-light text-dark";
  const bodyClass = theme === "dark" ? "card-body bg-dark text-light" : "card-body bg-light text-dark";

  return (
    <div className="container my-3">
      <div className={cardClass}>
        <div className={headerClass}>
          <h2 className="title">Movie List</h2>
        </div>
        <div className={bodyClass}>
          {movie_list?.length === 0 ? (
            <div>Film bulunamadı</div>
          ) : (
            <div
              id="movie-list"
              className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4"
            >
              {movie_list?.map((m, index) => (
                <Movie key={index} movieObj={m} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}