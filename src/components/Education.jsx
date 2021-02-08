import React, { useState, useEffect } from 'react';

const Education = () => {
  const api = `https://api-v2.hearthis.at/feed/?&count=5`;

  const [mydata, setData] = useState([]);

  useEffect(() => {
    fetch (api)
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  console.log(mydata)

  return (
    <div className="Education">
      <div className="Education-container">
        {mydata.map(mydata => 
          <>
            <div className="Education-img">
              <figure>
                <img src={mydata.thumb} alt={mydata.title}/>
              </figure>
            </div>
            <div className="Education-title">
              <h2>{mydata.title}</h2>
            </div>
            <div className="Education-author">
              <p>{mydata.user.username}</p>
            </div>
          </>
        )}
      </div>
    </div>
)}; 
export default Education;