export function WatchListButton({ movies, onIsWatchListOpen }) {
  return (
    <div className="mb-2 lg-0 sm-1">
      <button
        className="btn btn-outline-light  position-relative"
        onClick={() => onIsWatchListOpen((prev) => !prev)}
      >
        <i className="bi bi-heart"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {movies?.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>
    </div>
  );
}
