import './App.css';
import Pokemon from './components/Pokemon';
import AxiosPokemon from './components/AxiosPokemon';
import UseEffect from './components/UseEffect';

function App() {
  return (
    <div className="App">
      <Pokemon></Pokemon>
      <AxiosPokemon></AxiosPokemon>
      <UseEffect></UseEffect>
    </div>
  );
}

export default App;
