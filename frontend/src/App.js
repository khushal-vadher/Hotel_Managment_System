import { Route, Routes, Navigate } from "react-router-dom";
import  Home from "./components/Home/Home.js";
import Banner from "./components/Banner/Banner.js";
import Header  from "./components/Header/Header.js";
import Form from "./components/Form/Form.js";
import About from "./components/About/About.js"
import Login from "./components/Login/Login.js";
import './App.css';
import Signup from "./components/Singup/Signup.js"
import Update from "./components/Updateuser/Update.js";
import Adminhome from "./components/Adminhome/Home.js"
function App() {
  const CustomerEmail = localStorage.getItem("email")
  var isAdmin = localStorage.getItem("ID");
  if(isAdmin===4){
    isAdmin= 1
  }else{
    isAdmin = 0;
  }
  return (
      <Routes>
        {isAdmin===1 && <Route path="/" exact element={<Adminhome />} />}
        <Route path="/" exact element={<Home />} />
        <Route path="/banner" exact element={<Banner />} />
        <Route path="/header" exact element={<Header />} />
        <Route path="/form" exact element={<Form />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/update" exact element={<Update />} />
        <Route path="/admin"  exact element={<Adminhome />} />
        {/* {isAdmin &&<Route  path="/room" exact element={<Addroom />} />} */}
        {/* {isAdmin && <Route path="/roomtype" exact element={<Roomtype />} />} */}
        {/* {isAdmin && <Route path="/custumer" exact element={<Customer />} />} */}

        
      </Routes>
    
  );
}

export default App;
