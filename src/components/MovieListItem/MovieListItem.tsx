import React from 'react';
import Card from '@material-ui/core/Card';
import {getImageUrlByPath} from "../../helpers";
import './styles.css';
import {Movie} from "../../types";

interface Props {
    movie: Movie
    onClick: () => void
}

export function MovieListItem({movie, onClick}: Props) {
    const {title, vote_average, poster_path} = movie;
    return (
        <Card onClick={onClick} className="movie-list-item-container">
            <img className="movie-list-item-image" src={getImageUrlByPath(poster_path)} alt="poster"/>
            <h6 className="movie-list-item-title">{title}</h6>
            <p className="movie-list-item-rating">rating: {vote_average}</p>
        </Card>
    )
}
