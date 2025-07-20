import { createContext } from "react";
import { useState, useEffect } from "react";
export const UserContext = createContext()

export function UserContextProvider ({ children}) {
    const storredUser = localStorage.getItem('watchList');
    const initialState = storredUser ? JSON.parse(storredUser) : [];  
    const [watchList, setWatchList] = useState(initialState);


    useEffect(()=> {
        localStorage.setItem("watchList", JSON.stringify(watchList))
    }, [watchList])


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
    return (
       <UserContext.Provider value={{ watchList, setWatchList, addToWatchList, removeFromWatchList }}>
           {children}
       </UserContext.Provider>
    )
}