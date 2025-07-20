import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';    
import { Loading } from '../components/ui/loading';
import Movie from "../components/movie/Movie";
import{ useContext} from 'react';
import  {ThemeContext}  from '../contexts.jsx/theme';




const url = "https://api.themoviedb.org/3/";
const api_key = "974a5ec9987db3e8c7a190f09536852b";
const language = "tr-TR";
const page = 2;

export const Movies = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [movieList, setMovieList] = useState([]);
     const [error, setError] = useState("");
     const {theme} = useContext(ThemeContext);
   
useEffect(() => {
  async function getMovies() {
    setIsLoading(true);

    try {
      const response = await fetch(
        `${url}movie/popular?api_key=${api_key}&language=${language}&page=${page}&append_to_response=credits`
      );
      const data = await response.json();
      if (data.results) {
        setMovieList(data.results);
      }
      setError("");
    } catch (error) {
      setError("hata oluştu");
    }

    setIsLoading(false);
  }
  
  getMovies(); // Parametre olmadan çağır, tek seferde
}, []);


   if (isLoading) {
      return (<Loading />);
    }
    if (error) {
        return <div>hata oluştu...</div>;
    }
 const color = theme === "dark" ? "bg-dark text-light" : "bg-light text-dark";

    return (
       <div className={"container " + color }>
             <div className="card ">
               <div className={`card-header ${color}`}>
                 <h2 className="title">Filimler</h2>
               </div>
               <div className={`card-body ${color}`}>
                 {movieList?.length === 0 ? (
                   <div>Film bulunamadı</div>
                 ) : (
                   <div
                     id="movie-list"
                     className="row row-cols-3 row-cols-md-4 row-cols-lg-6 g-2"
                   >
                     {movieList?.map((m, index) => (
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
};

