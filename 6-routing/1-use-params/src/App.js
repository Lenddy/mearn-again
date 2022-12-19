import './App.css';
import {Routes,Route,link} from 'react-router-dom';
import Home from "./components/Home"
import Age from './components/Age';
import Api from './components/Api';

function App() {
  return (
    <div className="App">
      <h1>this should appear in every route</h1>
      <Home></Home>
      <Routes>
        <Route exact path='/age/:num' element={<Age/>} />
        <Route exact path='/Api' element={<Api/>}/>

      </Routes>
    </div>
  );
}

export default App;