import React from 'react'
import AnimeList from './AnimeList'


const Movies = ({movies}) => {

  const animelist=movies.map((movie) =>(
    <AnimeList
    key={movie.id}
    movie={movie}
    />
  ))

  


  return (
<div>
{
  animelist
}
</div>
  )
}

export default Movies