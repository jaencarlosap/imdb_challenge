const url_base = 'https://api.themoviedb.org/3/';
const api_key = '?api_key=b2907782d07859a652052d3bae537475';

export const Query = props => {
  return fetch(
    url_base + props.query + api_key + '&' + new URLSearchParams(props.params)
  )
    .then(response => response.json())
    .then(response => response);
};
