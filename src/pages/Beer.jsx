import React from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Beer() {
  const { id } = useParams(); //const {id} = useParams()
  console.log(id);
  const [allBeers, setAllBeers] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        console.log('response.data', response.data);
        setAllBeers(response.data);
      })
      .catch(console.log);
  }, [id]);
  console.log('allbeeeeeee', allBeers);
  return (
    <div>
      <Navbar />
      <img src={allBeers.image_url} alt="oneBeer" />
      <h1>{allBeers.name}</h1>
      <p>{allBeers.tagline}</p>
      <p>
        <b>{allBeers.first_brewed}</b>
      </p>
      <p>{allBeers.attenuation_level}</p>
      <p>{allBeers.description}</p>
      <p>
        <b>{allBeers.contributed_by}</b>
      </p>
    </div>
  );
}
