import  { useContext } from "react";
import { UserContext } from "../contexts.jsx/usserContext";
import WatchListMovie from "../components/watch/watchListMovie";
export default function WatchList({

}) {
  const { removeFromWatchList, watchList} = useContext(UserContext);
  return (
    <>
    <div className="container min-vh-100">
      <div className="card-header">
              <h2 className="title h5 mb-0">Favori Listem</h2>
            </div>
            <div className="card-body ">
              {watchList.length == 0 ? (
                <div>Film bulunamadı</div>
              ) : (
                <div
                  id="movie-list"
                  className="row row-cols-3 row-cols-md-4 row-cols-lg-6 g-2"
                >
                  {watchList.map((m, index) => (
                    <WatchListMovie
                      key={index}
                      movieObj={m}
                      onRemoveFromWatchList={removeFromWatchList}
                    />
                  ))}
                </div>
              )}
            </div>
    </div>
         
      
    </>
  );
}
