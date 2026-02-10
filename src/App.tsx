import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

export const App: React.FC = () => {
  const [descr, setDescr] = useState('');

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={descr}
                onChange={event => setDescr(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={moviesFromServer} descr={descr} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
