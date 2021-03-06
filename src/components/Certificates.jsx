import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const Certificates = () => {

  const api = `https://rickandmortyapi.com/api/character/`;
  let pre = {
    info: {
    },
    results: [
      {
        id: 0,
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
      .catch((error) => console.log(error));
  }, [])

  return (
    <div className="About">
      <div className="About-container" >
        <Carousel>
          {mydata.results.map((mydata, index) => {
            return (
              <Carousel.Item>
                <img
                className="d-block w-100"
                src={mydata.image}
                alt={mydata.name}
                />
                <Carousel.Caption>
                  <h2>{mydata.name}</h2>
                  <p>{mydata.species}</p>
                  <p>{mydata.status}</p>
                  <span key={index}>
                    <Link to={`/character/${index + 1}`}>
                      <Button variant="info">Info</Button>{' '}
                    </Link>
                  </span>
                </Carousel.Caption>
              </Carousel.Item>
            )}
          )}
        </Carousel>
      </div>
    </div>
)};

export default Certificates;