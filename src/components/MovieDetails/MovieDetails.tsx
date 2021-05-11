import React from 'react';
import {getImageUrlByPath} from "../../helpers";
import Card from "@material-ui/core/Card";
import './styles.css';
import {Movie} from "../../types";

export function MovieDetails({movie}: {movie: Movie}) {
    return (
        <Card className="movie-details-container">
            <img className="movie-details-image" src={getImageUrlByPath(movie.poster_path)} alt="poster"/>
            <h3>Movie details:</h3>
            {
                movie && Object.keys(movie).map(key => {
                    return (
                        <p key={movie.id}>
                            <span className="movie-details-prop-key">{key}:</span>
                            <span className="movie-details-prop-value">{movie[key as keyof Movie]}</span>
                        </p>
                    )
                })
            }
        </Card>
    )
}
