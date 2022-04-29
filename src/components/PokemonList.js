import React,{useState,useEffect} from 'react'
import axios from 'axios';
import PokemonCard from './PokemonCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardFast, faForwardFast} from '@fortawesome/free-solid-svg-icons';
import './pokemonlist.css'

const PokemonList = () => {
  let [next,setNext]=useState('');
  let [prev,setPrev]=useState('');
    let [apiUrl,setApiUrl]=useState(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`);
    // console.log(next)
    const [pokemonList,setPokemonList]=useState([]);
   
  console.log(next);
  console.log(prev);
    async function getDetailedPokemons(arr) {
     
               try {
                arr.forEach( async(Element)=>{
                   let res =  await axios(Element.url)
                   let data= await res.data;
                   
                   setPokemonList(prev=>[data,...prev]);
 

                 })
                
              
                
               } catch (error) {
                 
               }
   }
  
   useEffect(()=>{
    async function getMainPokemonList(url){
      try {
        let result = await axios.get(url);
        let data = await result.data.results;
        // let nxt = await result.data.next;
        // // let prev = await result.data.previous;
        setNext(result.data.next)
        setPrev(result.data.previous)
   
    
     getDetailedPokemons(data)
      } catch (error) {
        console.log('Error ',error)
      }
    }
    getMainPokemonList(apiUrl)
   },[apiUrl])
    return (
    
    <div>
        <h1 className='pokemon-list-title'>pokemon List</h1>
        <div  className='group'>
        {(prev==null)?<></>:<button type="button" className="nxt btn btn-outline-warning " onClick={()=>setApiUrl(prev)}><FontAwesomeIcon icon={faBackwardFast} /></button>}
        <button type="button" className="prev btn btn-outline-warning " onClick={()=>setApiUrl(next)}><FontAwesomeIcon  icon={faForwardFast} /></button>
       
        </div>
        <div className='pokemon-list'>
        {
        pokemonList.map((e,i)=>{
             
          return <PokemonCard key={i} {...e}/>
            
          
        })
        }
        </div>
       
        </div>
  )
}

export default PokemonList