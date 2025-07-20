import { NavLink, Outlet } from 'react-router-dom';
import { Navbar } from '../pages/navbar';
import { SearchForHeader } from '../components/search/searchForHeader';
import { MovieListHeader } from '../components/movie/MovieListHeader';
import {ThemeContext} from '../contexts.jsx/theme';
import { useContext } from 'react';
import { Footer } from '../components/ui/footer';
export function Home () {  
  const { theme } = useContext(ThemeContext);
  const colorClass = theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';
  return (
    <>
      <div className={`header position-relative `}>
        <div className="image-overlay">
          <div className="row">
            <div className="col-12 col-lg-7 mx-auto text-center my-5 ">
              <h1 className="text-white">Welcome to Movie World</h1>
              <p className="text-muted">
                - “Hayal gücünü serbest bırak – Filmleri keşfet, favorini seç, bizimle paylaş!”
              </p>
              <SearchForHeader theme={colorClass}/>
              <div className="position-absolute bottom-0 start-0 end-0 w-100">
                <MovieListHeader limit={6} />
              </div>
            </div>
          </div>
        </div>
        
      </div>
     
    </>
  );
}
   