import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home';
import { Movies } from './pages/movies';
import { MovieDetails } from './pages/movieDetails';
import { MainLayout } from './components/layout/MainLayout';
import { SearchResults } from './components/search/searchResult';
import {ThemeProvider} from './contexts.jsx/theme';
import { UserContextProvider } from './contexts.jsx/usserContext';
import  WatchList  from './pages/watchList';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

const router = createBrowserRouter([   
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {path: '/', element: <Home />},
      {path: "/movies", element: <Movies />},
      {path: "/movies/:movieId", element: <MovieDetails />},
      {path: "/search", element: <SearchResults />},
      {path: "/watchlist", element: <WatchList />},
      {path: "/login", element: <Login />},
      {path: "/register", element: <Register />},

    ] 
  }
])
 function App1() {
  
 return (
     <div>
      <UserContextProvider>
       <ThemeProvider>
         <RouterProvider router={router} />
       </ThemeProvider>
     </UserContextProvider>
     </div>
  );
 }

 export default App1;