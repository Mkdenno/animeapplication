import React from 'react'
import { useState,useEffect } from "react";
import AnimeList from './AnimeList';



const Movies = () => {
  const [movies, setMovies]=useState([])
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
    .then(data => setMovies(data.data))
},[])


  


  return (

<div>
  <AnimeList movies={movies}/>

</div>

  )
}

export default Movies