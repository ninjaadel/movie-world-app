import { Link } from "react-router-dom";

export default function MovieHeader({
  movieObj,
  onAddToWatchList,
  setSelectedMovie,
  className = "",
}) {
  return (
    <div className="col">
      <div
        className={`card movie position-relative ${className}`}
        onClick={() => setSelectedMovie && setSelectedMovie(movieObj)}
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
      </div>
    </div>
  );
}