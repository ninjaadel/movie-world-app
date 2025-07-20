import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../contexts.jsx/theme";
export default function Movie({
  movieObj,
}) {
  const {theme} = useContext(ThemeContext);
  const color = theme === "dark" ? "bg-black text-white" : "bg-light text-dark";
  return (
    <div className="col">
      <div
        className={"card movie position-relative" + " " + color}
      >
        <Link to={`/movies/${movieObj.id}`}>
          {movieObj?.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/original${movieObj?.poster_path}`}
              className="card-img-top"
              alt={movieObj.title}
            />
          ) : (
            <div 
              className="card-img-top d-flex align-items-center justify-content-center bg-secondary text-white"
              style={{ height: "400px", fontSize: "16px" }}
            >
              Fotoğraf Yok
            </div>
          )}
        </Link>
        <div className="card-body" >
          <h2 className="h6 card-title">{movieObj?.title}</h2>

          <p className="card-text">{movieObj?.vote_average}</p>
        </div>
      </div>
    </div>
  );
}
