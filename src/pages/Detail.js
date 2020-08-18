import React from 'react';
import { useParams } from 'react-router-dom';

import { Query } from '../libs/query';

const Detail = props => {
  const { id } = useParams();
  const [state, setState] = React.useState({ load: false, temp: 0 });
  const [episodes, setEpisodes] = React.useState(false);
  const [isActive, setIsActive] = React.useState(0);
  const [isView, setIsView] = React.useState();

  const handleQuery = () => {
    Query({ query: 'tv/' + id }).then(data => {
      setState({ ...state, data: data, load: true });
    });
  };

  const handleDetailSeason = season_number => {
    setIsActive(season_number);
    setIsView(undefined);
    Query({
      query: 'tv/' + id + '/season/' + season_number,
    }).then(episodes => {
      setEpisodes(episodes);
    });
  };

  React.useEffect(() => {
    if (!state.load) handleQuery();
    if (!episodes) handleDetailSeason(0);
  });

  if (!state.load) return 'Cargando...';
  return (
    <div className="detail-content">
      <div className="img-content">
        <img
          src={props.api_images + state.data.backdrop_path}
          alt={state.data.original_name}
        />
        <h1 className="title">{state.data.original_name}</h1>
      </div>
      <div className="season-content">
        <h1 className="title2">SEASONS</h1>
        <div className="div-seasons">
          {state.data.seasons.map((season, index) => (
            <div
              className={
                isActive === season.season_number ? 'season active' : 'season'
              }
              onClick={() => handleDetailSeason(season.season_number)}
              key={'temp_' + season.id}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div className="episodes">
          {episodes.episodes === undefined
            ? 'Cargando...'
            : episodes.episodes.map((episode, index) => (
                <div
                  className="episode"
                  key={'episode_' + index}
                  onClick={() => setIsView(episode.episode_number)}
                >
                  <div className="name">
                    <p className="text"> {index + 1 + ' ' + episode.name}</p>
                    <div
                      className={
                        isView === episode.episode_number
                          ? 'isActive active'
                          : 'isActive'
                      }
                    ></div>
                  </div>
                  <div
                    className={
                      isView === episode.episode_number
                        ? 'content-episode active'
                        : 'content-episode'
                    }
                  >
                    Air on {episode.air_date}
                    <br />
                    {episode.overview || 'sorry i don`t have an overview :('}
                    <br />
                    {episode.vote_average + '%'}
                  </div>
                </div>
              ))}
        </div>
      </div>
      <div>episodes</div>
    </div>
  );
};

export default Detail;
