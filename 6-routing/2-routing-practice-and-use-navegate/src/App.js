import logo from './logo.svg';
import './App.css';
import {Routes,Route,link} from 'react-router-dom';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';

function App() {
  return (
    <div className="App">
      <h1>type in the url to se something different</h1>
    <Routes>
    <Route exact path="/home" element={<Home></Home>}></Route>
    <Route exact path='/:num' element={<Number/>}></Route>
    <Route exact path='/word/:word' element={<Word/>}></Route>
    <Route exact path='/word/:word/:tColor/:bColor' element={<Word/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
