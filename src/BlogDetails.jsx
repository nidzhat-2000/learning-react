import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetchData from './useFetch';

export const BlogDetails = () => {
  const { id } = useParams();
  const { data, error, isPending } = useFetchData(
    'http://localhost:8000/blogs/' + id
  );

  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + data.id, {
      method: 'Delete'
    }).then(() => {
      history.push('/');
    });

    return (
      <div className="blog-details">
        {isPending && <div> Loading... </div>}
        {error && <div> {error} </div>}

        {data && (
          <article>
            <h2>{data.title}</h2>
            <p> Written by {data.author}</p>
            <div> {data.body} </div>
            <button onClick={handleClick}>Delete</button>
          </article>
        )}
        {/* <h2>Blog Details - {id}</h2> */}
      </div>
    );
  };
};
