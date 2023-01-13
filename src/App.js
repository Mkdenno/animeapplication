import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import About from "./components/About";



function App() {
  

  return (
    <div className="">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies />}/>
      <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
