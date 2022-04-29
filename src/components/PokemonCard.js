import React from 'react'
import { Link } from 'react-router-dom';

import './card.css';
const PokemonCard = ({name,sprites,species}) => {
  return (
   <>
<div className="card">
  <img src={sprites.other.dream_world.front_default} className="img" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    
   <Link to={`/details/${name}`}>
  <button type="button" className="btn btn-outline-warning " onClick={()=>console.log(species.url)}>Details</button>
   
   </Link>
   
  </div>
</div>

     </>
  )
}

export default PokemonCard