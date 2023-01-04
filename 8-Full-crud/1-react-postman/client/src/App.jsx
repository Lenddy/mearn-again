import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"

import AllProducts from './components/AllProducts';
import NewProduct from './components/NewProducts';
import ViewOne from './components/ViewOne';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <h1>Product manager</h1>
        {/* <NewProduct></NewProduct> */}
      <Routes>
        <Route exact path='/' element={<AllProducts></AllProducts>}/>
        <Route exact path='/product/create' element={<NewProduct></NewProduct>}/>
        <Route exact path='/products/:id' element={<ViewOne></ViewOne>}/>
        <Route exact path='/products/edit/:id' element={<Update></Update>}/>

      </Routes>

    </div>
  );
} 

export default App;
