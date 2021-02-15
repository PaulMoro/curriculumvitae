import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Media from 'react-bootstrap/Media';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const PersonPage = ({ match }) => {

  const {
    params: { id },
  } = match;

  const api = `https://rickandmortyapi.com/api/character/${id}`;
  let pre = {
        id: 0,
        name: "",
        image: "",
        species: "",
        status: ""
  }
  
  const [mydata, setMydata] = useState(pre);

  useEffect(() => {
    fetch (api)
      .then(response => response.json())
      .then(data => setMydata(data))
        console.log(`https://rickandmortyapi.com/api/character/${id}`)
      
  }, [])

  return (
    <>
      <Media>
        <img
          width={300}
          height={300}
          className="mr-3"
          src={mydata.image}
          alt="Generic placeholder"
        />
        <Media.Body>
          <h2>{mydata.name}</h2>
          <h3>{mydata.status}</h3>
          <h3>{mydata.species}</h3>
          <Link to="/">
            <Button variant="primary">Regresa atras</Button>{' '}
          </Link>
        </Media.Body>
      </Media>
    </>
)};

export default PersonPage;