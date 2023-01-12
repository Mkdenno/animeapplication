import { useState,useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Movies from "./components/Movies";


function App() {
  const [movies, setMovies]=useState(null)
  const movieOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5970fc4886msh928284f8d99bbbfp184ca1jsn8771bf837182',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
}; 
useEffect(()=>{
    fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc', movieOptions)
    .then(res => res.json())
    .then(data => console.log(data.data))
},[])

  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      {/* <Route path="/about" element={<About/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
