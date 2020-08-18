import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Navbar from './components/Navbar';

import { Query } from './libs/query';

const api_images = 'https://image.tmdb.org/t/p/w500/';
var query_select = 'tv/popular';
function App() {
  const [films, setFilms] = React.useState({
    results: [],
    page: 1,
  });

  const handleQuerys = (params, reset = false) =>
    Query({
      query: query_select,
      params,
    }).then(res => {
      let Films = [...films.results];
      if (reset) Films = [];
      res.results.map(result => {
        Query({ query: 'tv/' + result.id + '/credits' }).then(credits => {
          result['cast'] = credits.cast;
        });
        Query({ query: 'tv/' + result.id + '/content_ratings' }).then(
          rating => {
            result['rating'] = rating.results;
          }
        );
        Films.push(result);
      });
      setTimeout(() => {
        setFilms({
          results: Films,
          page: res.page,
        });
      }, 700);
    });

  const handleSearch = name => {
    query_select = name === '' ? 'tv/popular' : 'search/tv';
    setFilms({ ...films, results: [] });
    handleQuerys({ query: name, page: 1 }, true);
  };

  return (
    <Router>
      <Navbar handleSearch={handleSearch} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Main
              {...films}
              query={query_select}
              api_images={api_images}
              handleQuerys={handleQuerys}
            />
          )}
        />
        <Route
          exact
          path="/detail/:id"
          render={() => <Detail api_images={api_images} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
