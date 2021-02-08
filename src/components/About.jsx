import React, { useState, useEffect } from 'react';

const About = () => {

  const api = `https://rickandmortyapi.com/api/character/`;
  let pre = {
    info: {
    },
    results: [
      {
        id:0,
        name: "",
        image: "",
        species: "",
        status: ""
      }
    ]
  }
  

  const [mydata, setData] = useState(pre);

  useEffect(() => {
    fetch (api)
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  console.log(mydata)

  return (
    <div className="About">
      <div className="About-container">
        {mydata.results.map(mydata => 
          <>
            <div className="About-avatar">
              <figure>
                <img src={mydata.image} alt={mydata.name}/>
              </figure>
            </div>
            <div className="About-name">
              <h2>{mydata.name}</h2>
            </div>
            <div className="About-profession">
              <p>{mydata.species}</p>
            </div>
            <div className="About-location">
              <p>{mydata.status}</p>
            </div>
          </>
        )}
        <div className="About-social">
          Social
        </div>
      </div>
    </div>
)};

export default About;