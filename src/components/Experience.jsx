import React from 'react';

const Expirience = ({ data }) => {
  return (
    <div className="Expirience">
      <div className="Expirience-container">
        {data.results.map(data => 
          <>
            <div className="Expirience-data">
              <figure>
                <img src={data.poster_path} alt={data.title}/>
              </figure>
            </div>
            <div className="Expirience-title">
              <h2>{data.title}</h2>
            </div>
            <div className="Expirience-title">
              <h2>{data.vote_average}</h2>
            </div>
            <div className="Expirience-profession">
              <p>{data.overview}</p>
            </div>
          </>
        )}
      </div>
    </div>
)};


export default Expirience;