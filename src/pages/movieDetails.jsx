import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Recomendation from '../components/movie/recomend';
import { useContext } from 'react';
import {ThemeContext }from '../contexts.jsx/theme';

import  {UserContext}  from '../contexts.jsx/usserContext';

const api_key = "974a5ec9987db3e8c7a190f09536852b";
const language = "ru-RU";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const [similarMovies, setSimilarMovies] = useState([]);
  

   const {theme} = useContext(ThemeContext);
   const {addToWatchList, removeFromWatchList, watchList} = useContext(UserContext);
   // ...existing code...
const isActive = watchList.find((m) => String(m.id) === String(movieId));
// ...existing code...
  const color = theme === "dark" ? "bg-dark text-light" : "bg-light text-dark";

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=${language}&append_to_response=credits`
        );
        const data = await response.json();
        if (data) {
          setMovie(data);
        }
        setError("");
      } catch (error) {
        setError("Hata oluştu");
      }
      
      setIsLoading(false);
      window.scrollTo(0, 0); // Sayfa yüklendiğinde en üste kaydır
    }
    
    getMovies();
  }, [movieId]);
  console.log(movie);

  useEffect(() => {
  async function FetchSimilarMovies() {
    if (!movie || !movieId) return; // Film detayları yüklenmeden çalışmamalı
    
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${api_key}&language=${language}`
      );
      const data = await response.json();
      console.log("Similar movies data:", data);
      setSimilarMovies(data.results);
    } catch (error) {
      console.error("Benzer filmler yüklenirken hata:", error);
    } finally {
      setIsLoading(false);
    }
  }
  
  if (movie) { // Film detayları yüklendiyse benzer filmleri getir
    FetchSimilarMovies();
  }
}, [movie, movieId]); // movie'yi bağımlılıklara ekle
  return (
    <div>
      {error && <div className="alert alert-danger">Hata oluştu...</div>}
      {isLoading && <div className="d-flex justify-content-center"><div className="spinner-border" role="status"></div></div>}
      {!isLoading && !error && movie && (
        <div className="container-fluid p-0">
          <div className={`card border-0 `}>
            {/* Select menüsü */}
            <div className={`d-flex justify-content-center ${color} p-3`}>
              <select name="ozet" className={`select-no-border me-3 ${color}`}>
                <option value="short">Medya</option>
                <option value="full">Tam Özet</option>
              </select>
              <select name="ozet" className={`select-no-border me-2 ${color}`}>
                <option value="short" className={`bg-transparent border-0 ${color}`}>Özet</option>
                <option value="full">Tam Özet</option>
              </select>
              <select name="ozet" className={`select-no-border me-2 ${color}`}>
                <option value="short" className={`bg-transparent border-0 ${color}`}>Paylaş</option>
                <option value="full">Tam Özet</option>
              </select>
              <select name="ozet" className={`select-no-border me-2 ${color}`}>
                <option value="short" className={`bg-transparent border-0 ${color}`}>Hayranlar</option>
                <option value="full">Tam Özet</option>
              </select>
            </div>
            
            {/* Film banner */}
            <div className="card-body p-0">
              <div className="row g-0">
                <div className="w-70 position-relative" style={{ 
                  height: "75vh",
                  
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center top"
                }}>
                  <div className="position-absolute top-0 start-0 w-100 h-100" 
                      style={{background: "linear-gradient(to right,  rgba(34, 27, 27, 0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.1))", zIndex: 1}}>
                  </div>
                  
                  {/* Film başlığı ve bilgileri */}
                  <div className="container">
                    
                    <div className="container position-absolute bottom-0 start-10 text-white p-4" style={{zIndex: 2}}>
                      
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/300x450"}
                        className="img-fluid rounded"
                        alt={movie.title}
                      />
                    </div>
                    <div className="col-md-9 ">
                      <div className='d-flex flex-column'>
                        <h1 className="display-7">{movie.title} <span>({movie?.release_date?.split("-")[0]})</span>  </h1>
                        <div className='d-flex flex-row align-items-center gap-1'>
                          <p className="">{movie?.release_date}({movie?.original_language}) <span className="text-light px-1">•</span></p> 
                        {movie?.genres?.map((genre, index) => (
      <p className="mb-17" key={genre.id}>
       {genre.name}, {index === movie.genres.length - 1 ? '' : ' '} 
      </p>
    ))}

                          <p className=""><span className='mb-10'>•</span> {Math.floor(movie.runtime / 60)} saat {movie.runtime % 60} dakika</p>
                        </div>
                       <div className='d-flex align-items-center gap-2'>
  <i className="bi bi-star-fill" style={{ color: "#ffc107", fontSize: "1.7rem" }}></i>
  <span
    className="px-3 py-1 rounded"
    style={{
      background: "linear-gradient(90deg, #ffe066 60%, #fffbe6 100%)",
      color: "#222",
      fontWeight: "bold",
      fontSize: "1.2rem",
      display: "inline-block"
    }}
  >
    %{movie.vote_average ? Math.round(movie.vote_average * 10) : "?"}
  </span>
  <span className="text-light px-2" style={{fontSize:"1.7rem"}}>•</span>
  <button
  onClick={() =>
    isActive
      ? removeFromWatchList(movie)
      : addToWatchList(movie)
  }
  className="btn p-0 border-0 bg-transparent"
  style={{ fontSize: "1.7rem", lineHeight: 1 }}
  title={isActive ? "Listeden çıkar" : "Listeye ekle"}
>
  {isActive ? (
    <i className="bi bi-heart-fill" style={{ color: "red" }}></i>
  ) : (
    <i className="bi bi-heart" style={{ color: "#fff" }}></i>
  )}
</button>
</div>
                      </div>
                      <div className="d-flex flex-column mt-5">
                        Özet: 
                        <p>{movie.overview}</p>

                      </div>
                      <div className='d-flex justify-content-between align-items-center mt-5'>
                        {movie.credits?.crew?.slice(0, 3).map((actor) => (
                          <div>
                            <p key={actor.name} className="text-light">
                            {actor.name} 
                          </p>
                           <p>{actor.job}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                  </div>
              </div>

              {/* Film detayları */}
              <div className="container">
               <div className={`row  ${color}`}>
                <h1>{movie.title} Oyuncuları</h1>
                 <div className={`card card-body ${color}`}>
              <div className="row overflow-auto flex-nowrap px-3" style={{ display: 'flex' }}>
{movie.credits?.cast?.slice(0, 12).map(actor => (
                  <div className="col-md-1" key={actor.id} style={{ minWidth: '200px' }}>
                    <div className={`card ${color}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                        className="card-img-top"
                        alt={actor.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{actor.name}</h5>
                        <p>{actor.character}</p>
                      </div>
                    </div>
                  </div>
                ))}
               </div>
              </div>
             </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container">
            <h1>Benzeyen Filmler</h1>
            <Recomendation similarMovies={similarMovies} />
          </div>
    </div>
  );
}