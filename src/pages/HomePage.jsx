import React from 'react';
import AllBeersImg from '../assets/beers.png';
import RandomBeerImg from '../assets/random-beer.png';
import NewBeerImg from '../assets/new-beer.png';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <div>
        <Link to="/BeerList">
          <img src={AllBeersImg} alt="noimage" />
        </Link>
        <h1>All Beers</h1>
        <p>Lorem ipsum y su madre</p>
      </div>
      <div>
        <Link to="/RandomBeer">
          <img src={RandomBeerImg} alt="noimage" />
        </Link>

        <h1>Random Beer</h1>
        <p>Lorem ipsum y su madre</p>
      </div>
      <div>
        <Link to="/NewBeer">
          <img src={NewBeerImg} alt="noimage" />
        </Link>
        <h1>New Beer</h1>
        <p>Lorem ipsum y su madre</p>
      </div>
    </div>
  );
}
