import React from 'react'
import { useState,useEffect } from "react";
import AnimeList from './AnimeList';



const Movies = () => {
  const [movies, setMovies]=useState([])
  const movieOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dc78779a39mshb82d92679ac254dp10cf89jsn130914269d42',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
}; 
useEffect(()=>{
    fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc', movieOptions)
    .then(res => res.json())
    .then(data => setMovies(data.data))
},[])

  // const animelist=movies.map((movie) =>(
  //   <AnimeList
  //   key={movie.id}
  //   movie={movie}
  //   />
  // ))

  


  return (

<div>
  <AnimeList movies={movies}/>

</div>

  )
}

export default Movies