
import Navbar from './components/Navbar.js';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails.js';


function App() {
  return (<>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<PokemonList />}/>
    <Route path='details/:name' element={<PokemonDetails />}/>
  </Routes>
  </BrowserRouter>
  
  
  </>);
}

export default App;
