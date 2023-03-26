import { Route, Routes, Navigate } from "react-router-dom";
import  Home from "./components/Home/Home.js";
import Banner from "./components/Card/Banner.js";
import Header  from "./components/Header/Header.js";
import Form from "./components/Form/Form.js";
import './App.css';

function App() {
  return (
    
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/banner" exact element={<Banner />} />
        <Route path="/header" exact element={<Header />} />
        <Route path="/form" exact element={<Form />} />
      </Routes>
    
  );
}

export default App;
