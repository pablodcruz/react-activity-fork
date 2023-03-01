import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './components/counter/Counter';
import PokemonList from './components/PokemonList/PokemonList';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import { IPokemon } from './models/IPokemon';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let pokemon:IPokemon = {
  damage: 20,
  health: 100,
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
  level: 3,
  name: 'Ditto'
}


root.render(
  <React.StrictMode>

    <BrowserRouter>
    <Counter />

      <NavBar />
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/pokeList" element={<PokemonList />}/>
      </Routes>
    </BrowserRouter>
   
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
