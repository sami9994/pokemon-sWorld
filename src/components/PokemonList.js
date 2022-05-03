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
    const [filteredpokemonList,setFilteredPokemonList]=useState([]);

 
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
    const  handleInputChange = (event) =>{
       
     

 
    setFilteredPokemonList( pokemonList.filter((e,i)=>e.name.indexOf(event.target.value)!==-1))
    console.log(filteredpokemonList)
          

        
       
        }
            async function getMainPokemonList(url){
      try {
        let result = await axios.get(url);
        let data = await result.data.results;
      
        setNext(result.data.next)
        setPrev(result.data.previous)
      
    
     getDetailedPokemons(data)
      } catch (error) {
        console.log('Error ',error)
      }
    }
   useEffect(()=>{

    getMainPokemonList(apiUrl)
   
   },[apiUrl])
    
         
    const getP=()=>{
      setPokemonList(prev=>[...pokemonList.slice(20)]);
      if(pokemonList.length===0){
 getMainPokemonList(apiUrl)
      }
    
    }
    let oPokemons =  pokemonList.map((e,i)=> <PokemonCard key={i} {...e}/>)
    let fPokemons =  filteredpokemonList.map((e,i)=> <PokemonCard key={i} {...e}/>)
    return (
    
    <div>
        <h1 className='pokemon-list-title'>pokemon List</h1>
        <input  type='text'  placeholder='Search Pokemon' className='search-input' onChange={(e)=>handleInputChange(e)} /> 
        <div  className='group'>
        {(prev==null)?<></>:<button type="button" className="nxt btn btn-outline-warning " onClick={()=>getP()}><FontAwesomeIcon icon={faBackwardFast} /></button>}
        {(next==null)?<></>:<button type="button" className="prev btn btn-outline-warning " onClick={()=>setApiUrl(next)}><FontAwesomeIcon  icon={faForwardFast} /></button>}
       
        </div>
        <div className='pokemon-list'>
        {
         (fPokemons.length===0)?oPokemons:fPokemons
        }
        </div>
 
        </div>
  )
}

export default PokemonList