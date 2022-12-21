import './App.css';
import {Routes,Route} from "react-router-dom"
import Form from './components/Form';
import Result from './components/Result';
function App() {
  return (
    <div className="App">
      <Form></Form>

    <Routes>
      <Route exact path='/:option/:Id'  element={<Result></Result>}/>
    </Routes>

    </div>
  );
}

export default App;
