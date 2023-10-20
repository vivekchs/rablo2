
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AddProduct from './Components/Addproduct';
import Displayproduct from './Components/Displayproduct';


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  

  const islogin = localStorage.getItem('login');
  

  return (
    <div className="App">
      <Router>
    <Navbar/> 
     
     <Routes>
     <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/signup' element={<SignUp/>}/>
      <Route exact path='/addproduct' element={<AddProduct/>}/>
      <Route exact path='/displayproduct' element={<Displayproduct/>}/>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
