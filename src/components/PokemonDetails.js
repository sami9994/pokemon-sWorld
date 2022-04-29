import { getQueriesForElement } from '@testing-library/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './pokemondetails.css'

const PokemonDetails = () => {
    const params=useParams()
    let {name}=params
    let [loading,setLoading]=useState(true)
    let [pokemonData,setPokemonData]=useState({});
    let [url,setUrl]=useState(`https://pokeapi.co/api/v2/pokemon/${name}`);
     async function callPokemon(){
           let  res = await axios(url);
           let result = await res.data;
          setPokemonData(result);
          setLoading(false)
       
    
        }
        const getPokemonForm=async()=>{
             await axios('https://pokeapi.co/api/v2/item/177/').then(res=>console.log(res)).catch(err=>console.log(err));
              
        }
     console.log(pokemonData)
    //    callPokemon()
    useEffect(()=>{
        callPokemon();
    },[])
        console.log(pokemonData)
    return (
    (loading)?<>
    <h1>Loading.....</h1>
    </>:<>
    <div className='container'>
     <div className='img-group'>
     {/* <img src={pokemonData.sprites.front_default} alt={pokemonData.name} className='pokemon-details-img' />
    <img src={pokemonData.sprites.back_default} alt={pokemonData.name} className='pokemon-details-img' /> */}
  
    <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} className='pokemon-details-img' />
   

     </div>
     <div className='titles'>
     <h3 className='name'> Name :{pokemonData.name}</h3>
         <h4> Experience:{pokemonData.base_experience}</h4>
         <h4> Height :{pokemonData.height}</h4>
         <h4> Weight :{pokemonData.weight}</h4>
     </div>
     
    </div></>
  )
}

export default PokemonDetails