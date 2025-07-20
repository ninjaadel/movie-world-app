import { useState, useEffect } from 'react';    
import { Loading } from '../ui/loading';
import { buildApiUrl, ENDPOINTS } from '../../config/api';
import MovieHeader from './MovieHeader';

export function MovieListHeader({ limit }) {
    const [isLoading, setIsLoading] = useState(false);
    const [movieList, setMovieList] = useState([]);
    const [error, setError] = useState("");
   
    useEffect(() => {
      async function getMovies() {
        setIsLoading(true);
        try {
          const apiUrl = buildApiUrl(ENDPOINTS.TOP_RATED, { page: 1 });
          const response = await fetch(apiUrl);
          const data = await response.json();
          
          if (data.results) {
            setMovieList(data.results);
          }
          setError("");
        } catch (error) {
          setError("Filmler yüklenirken hata oluştu");
        }
        setIsLoading(false);
      }
      getMovies();
    }, []);

    if (isLoading) {
      return (<Loading />);
    }
    if (error) {
      return <div>hata oluştu...</div>;
    }

    // limit varsa, sadece ilk limit kadar filmi göster
    const moviesToShow = limit ? movieList.slice(0, limit) : movieList;

    return (
      <div className="container my-3">
       <div className="row">
         <div className="card-body">
          {moviesToShow.length === 0 ? (
            <div></div>
          ) : (
            <div
              id="movie-list"
              className="row row-cols-9 row-cols-md-4 row-cols-lg-6 g-5 "
            >
              {moviesToShow.map((m, index) => (
                <MovieHeader
                  key={index}
                  movieObj={m}
                  className="movie-header-hover"
                />
              ))}
            </div>
          )}
        </div>
       </div>
      </div>
    );
}