import { Footer } from "./components/footer";
import Header from "./components/Header";
import { Main } from "./components/main";
import { movie_list } from "./data";
import { useState } from "react";
import { Logo } from "./components/logo";
import { ErrorMessage } from "./components/errorMsg";

import { Search } from "./components/search";
import { WatchListButton } from "./components/watchListButtton";
import MovieList from "./components/MovieList";
import WatchList from "./components/watchList";
import { useEffect } from "react";
import { Loading } from "./components/loading";
import { MovieDetails } from "./components/movieDetails";
const api_key = "974a5ec9987db3e8c7a190f09536852b";
const language = "en-EN";
const page = 2;
const query = "spider-man";

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);

  const [isWatchListOpen, setIsWatchListOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchQuery}&language=${language}&page=${page}`
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
    if (searchQuery.length < 4) {
      return;
      getMovies("");
    }
    getMovies();
  }, [searchQuery]);

  function addToWatchList(movie) {
    const isMovieInWatchList = watchList.map((m) => m.id).includes(movie.id);
    if (!isMovieInWatchList) {
      setWatchList((prev) => [...prev, movie]);
    }
  }

  function removeFromWatchList(movie) {
    const updatedWatchList = watchList.filter((m) => m.id !== movie.id);
    setWatchList(updatedWatchList);
  }
  function handleSelected() {
    setSelectedMovie(movie);
    window.scrollTo(0, 0);
  }
  return (
    <>
      <Header>
        <div className="container gap-2">
          <Logo />
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <WatchListButton
            onIsWatchListOpen={setIsWatchListOpen}
            movies={watchList}
          />
        </div>
      </Header>

      {isLoading && <Loading />}
      {!isLoading && !error && (
        <Main>
          {selectedMovie && (
            <MovieDetails
              movieObj={selectedMovie}
              onClose={() => setSelectedMovie(null)}
            />
          )}
          <WatchList
            watch_list={watchList}
            isWatchListOpen={isWatchListOpen}
            removeFromWatchList={removeFromWatchList}
          />
          <MovieList
            movie_list={movieList}
            onAddToWatchList={addToWatchList}
            setSelectedMovie={setSelectedMovie}
          />
        </Main>
      )}
      {error && <ErrorMessage message={setError} />}
      <Footer />
    </>
  );
}
