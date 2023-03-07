import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from "./Views/Home/Home.view";
import Category from './Views/Category/Category.view';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/categories/:categoria' element={<Category />} /> 
      </Routes>
    </div>
  )
}

export default App
