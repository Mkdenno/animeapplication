import React from 'react'
import { useState,useEffect } from "react";
import AnimeList from './AnimeList';



const Movies = () => {
  const [movies, setMovies]=useState([])
  const [isLoading, setIsLoading] = useState(false);

  const movieOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0436188716mshe8486874eb19c10p1d01c3jsnf178209451e8',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
}; 
useEffect(()=>{
    fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc', movieOptions)
    .then(res => res.json())
    .then(data => setMovies(data.data))
    setIsLoading(false);

},[])


  


  return (

<div>
  <AnimeList movies={movies} isLoading={isLoading}/>

</div>

  )
}

export default Movies