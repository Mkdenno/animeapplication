import React from 'react'
import "./home.css";


const AnimeList = ({movies}) => {
  return (
        
    <div class=" w-full bg-gray-100 py-6 flex-wrap   sm:py-12">
  
  <div class=" grid grid-cols-2   py-3 ">
    {
      movies.map((movie) =>(

        <div class="bg-white shadow-lg my-4 mx-10   border-gray-100 max-h-120	 border sm:rounded-3xl p-10 flex ">
        <div class="h-38 overflow-visible w-1/2">
            <img class=" rounded-3xl shadow-lg" src={movie.image} alt=""/>
        </div>
        <div class="flex flex-col w-1/2 space-y-4">
          <div class="flex justify-between items-start">
            <h2 class="text-1xl font-bold">{movie.title}</h2>
          </div>
          <div>
            <div class="text-sm text-gray-400">Episodes:-{movie.episodes}</div>
            <div class="text-lg text-gray-800">Rankings:{movie.ranking}</div>
            <div class="text-lg text-gray-800">Type:{movie.type}</div>
          </div>
          <div class="flex text-2xl font-bold text-a"><button><a href={movie.link}>Play</a></button></div>
        </div>
  
      </div>
       ) )
    }

  </div>
  
  </div>

  )
}

export default AnimeList