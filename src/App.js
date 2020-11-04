import React, {useEffect, useState} from 'react';
import Modal from "@material-ui/core/Modal";
import {MovieListItem, MovieDetails, SearchForm} from "./components";
import {getMoviesByQuery} from "./helpers";
import './App.css';
import {useDebounce} from "./hooks";

function App() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState(undefined);
    const [proposedMovies, setProposedMovies] = useState(undefined);
    const [selectedMovie, setSelectedMovie] = useState(undefined);
    const [isMovieModalVisible, setMovieModalVisibility] = useState(false);
    const debouncedQuery = useDebounce(query, 500);

    const onSearchSubmit = e => {
        e.preventDefault();
        getMoviesByQuery(debouncedQuery).then(movies => setMovies(movies));
    }

    const onQueryChange = text => {
        setQuery(text);
    }

    const onMovieModalClose = () => {
        setMovieModalVisibility(false);
    }

    const onMovieCardClick = (movie) => {
        setSelectedMovie(movie);
        setMovieModalVisibility(true);
    }

    useEffect(() => {
        if (debouncedQuery && debouncedQuery.length > 2) {
            getMoviesByQuery(debouncedQuery).then(movies => setProposedMovies(movies))
        }
    }, [debouncedQuery])

    return (
        <div className="App">
            <h2>{'Movies'}</h2>
            <SearchForm onQueryChange={onQueryChange} onSubmit={onSearchSubmit} proposedMovies={proposedMovies}/>
            <div className="App-content">
                <div>
                    {
                        movies && movies.map(movie => (
                            <MovieListItem onClick={() => onMovieCardClick(movie)} key={movie.id} {...movie}/>
                        ))
                    }
                </div>
            </div>
            <Modal
                className="movie-details-modal"
                open={isMovieModalVisible}
                onClose={onMovieModalClose}
            >
                <div>
                    {selectedMovie && <MovieDetails movie={selectedMovie}/>}
                </div>
            </Modal>
        </div>
    );
}

export default App;
