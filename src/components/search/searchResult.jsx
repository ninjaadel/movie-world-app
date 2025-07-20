import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import  Movie  from "../movie/Movie";
import { useContext } from 'react';
import {ThemeContext }from '../../contexts.jsx/theme';
import { buildApiUrl, ENDPOINTS } from '../../config/api';

import { Loading } from '../ui/loading';
import { Pagination } from '../ui/Pagination';
export const SearchResults = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [movieList, setMovieList] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    
    const [error, setError] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");
    const page = Number(searchParams.get("page")) || 1;

    const theme = useContext(ThemeContext);
    const color = theme.theme === "dark" ? "bg-dark text-light" : "bg-light text-dark";
    useEffect(() => {
        async function searchMovies() {
            setIsLoading(true);
            try {
                const apiUrl = buildApiUrl(ENDPOINTS.SEARCH_MOVIE, { query, page });
                console.log('Search API URL:', apiUrl);
                console.log('Query:', query, 'Page:', page);
                
                const response = await fetch(apiUrl);
                console.log('Search Response Status:', response.status);
                
                const data = await response.json();
                console.log('Search API Response:', data);
                
                if (data.results) {
                    setMovieList(data.results);
                    setTotalPages(data.total_pages);
                    setCurrentPage(data.page);
                }
                setError("");
            } catch (error) {
                console.error('Search API Error:', error);
                setError("Arama sırasında hata oluştu");
            }
            setIsLoading(false);
        }
         
        if (query) {
            searchMovies();
        }
    }, [query, page]);

    if (isLoading) {
        return (<Loading />);
    }
    if (error) {
        return <div>hata oluştu...</div>;
    }

    return (
        <>
        <div className={`container  ${color}`}>
            <div className={`card ${color}`}>
                <div className={`card-header ${color}`}>
                    <h2 className="title">{query} Arama Sonuçları</h2>
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
        <Pagination
            query={query}
            setSearchParams={setSearchParams}
            totalPages={totalPages}
            currentPage={currentPage}
        />

        </>
    );
};

  