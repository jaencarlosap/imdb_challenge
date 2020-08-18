import React from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

const Main = props => {
  React.useEffect(() => {
    if (props.results.length === 0) props.handleQuerys({ page: 1 });
  }, []);
  if (props.results.length === 0) return 'Loading...';
  return (
    <InfiniteScroll
      dataLength={props.results.length}
      next={() => {
        if (props.query === 'tv/popular') {
          props.handleQuerys({ page: props.page + 1 }, false);
        }
      }}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <div className="films">
        {props.results.length > 0 ? (
          props.results.map((item, index) => (
            <Link
              to={'/detail/' + item.id}
              key={'detail_' + item.id + '_' + index}
            >
              <div className={'card'}>
                <div className="card-inner">
                  <div className="card-front">
                    <img
                      src={props.api_images + item.poster_path}
                      alt={item.original_title}
                    />
                    <div className="title">{item.original_name}</div>
                  </div>
                  <div className="card-back">
                    {item.rating !== undefined ? (
                      <>
                        <p>Rating : {item.rating[0]?.rating} </p>
                        <p>Actores: </p>
                        <ul>
                          <li>{item.cast[0]?.character}</li>
                          <li>{item.cast[1]?.character}</li>
                          <li>{item.cast[2]?.character}</li>
                        </ul>
                      </>
                    ) : (
                      <p>Cargando...</p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>Sin resultados</div>
        )}
      </div>
    </InfiniteScroll>
  );
};

export default Main;
