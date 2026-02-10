import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  descr: string;
}

export const MoviesList: React.FC<Props> = ({ movies, descr }) => {
  const visibleMovies = movies.filter(
    movie =>
      movie.title.toLowerCase().includes(descr.trim().toLowerCase()) ||
      movie.description.toLowerCase().includes(descr.trim().toLowerCase()),
  );

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
