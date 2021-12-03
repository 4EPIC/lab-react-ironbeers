// import Beer from './Beer';
import React from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BeerList() {
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      console.log('response.data', response.data);
      setAllBeers(response.data);
    });
  }, []);
  console.log(allBeers.name);

  return (
    <div>
      <Navbar />
      {allBeers.map((oneBeer) => (
        <div key={oneBeer._id} className="card">
          <h1>{oneBeer.name}</h1>
          <Link to={`/BeerList/${oneBeer._id}`}>
            <img src={oneBeer.image_url} alt="oneBeer" />
          </Link>
          <h3>{oneBeer.tagline}</h3>
          <p>Created By: {oneBeer.contributed_by}</p>
        </div>
      ))}
    </div>
  );
}
