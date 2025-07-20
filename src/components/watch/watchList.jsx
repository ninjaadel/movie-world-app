import Movie from "./movie/Movie";
import WatchListMovie from "./watchListMovie";
export default function WatchList({
  watch_list,
  isWatchListOpen,
  removeFromWatchList,
}) {
  console.log("isWatchListOpen", isWatchListOpen);
  return (
    <>
      {isWatchListOpen && (
        <div className="my-3">
          <div className="card">
            <div className="card-header">
              <h2 className="title h5 mb-0">Watch List</h2>
            </div>
            <div className="card-body">
              {watch_list.length == 0 ? (
                <div>Film bulunamadı</div>
              ) : (
                <div
                  id="movie-list"
                  className="row row-cols-3 row-cols-md-4 row-cols-lg-6 g-1"
                >
                  {watch_list.map((m, index) => (
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
        </div>
      )}
    </>
  );
}
