import  { useContext } from "react";
import {ThemeContext} from "../../contexts.jsx/theme";
import Movie from "../movie/Movie"

export default function Recomendation({
    similarMovies
}) {
  const theme = useContext(ThemeContext);
  const color = theme.theme === "dark" ? "bg-dark text-light" : "bg-light text-dark";
  console.log("similarMovies", similarMovies); // Bunu ekle
  return (
    <div className={`container p-3 ${color}`}>
      <div className={`card ${color}`}>
        <div className={`card-body ${color}`}>
          {similarMovies?.length === 0 ? (
            <div>Film bulunamadı</div>
          ) : (
            <div
              id="movie-list"
              className="row row-cols-4 row-cols-md-5 row-cols-lg-6 g-1"
            >
              {similarMovies?.map((m, index) => (
                <Movie
                  key={index}
                  movieObj={m}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
