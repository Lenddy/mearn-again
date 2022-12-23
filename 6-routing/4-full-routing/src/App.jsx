import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Form from './components/Form';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
      <Form></Form>

    <Routes>
      <Route exact path='/:name' element={<Result/>} ></Route>
    </Routes>
    </div>
  );
}

export default App;
