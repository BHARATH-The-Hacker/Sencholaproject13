import './App.css';
import {
   BrowserRouter, Routes, Route,
 } from 'react-router-dom';
import Header from "./component/Header";
import Footer from './component/footer';
import Register from './component/RegisterPage1';
import LoginPage1 from "./component/LoginPage1";

function App() {
    
  return (
    <div>
      <Header /> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage1 />}>
      </Route>
      <Route path="/Register" element={<Register />}>
      </Route>  
    </Routes>
  </BrowserRouter>
  <Footer /> 
  </div>
  );
}

export default App;
