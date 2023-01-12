import React from 'react'

const AnimeList = ({movie}) => {
    console.log(movie.image)
  return (
    // <div class='bg-red'>
        
    <div class="w-full  bg-gray-100 py-6    sm:py-12">
  
  <div class="py-3 sm:max-w-xl sm:mx-auto">
    <div class="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
      <div class="h-48 overflow-visible w-1/2">
          <img class="rounded-3xl shadow-lg" src={movie.image} alt=""/>
      </div>
      <div class="flex flex-col w-1/2 space-y-4">
        <div class="flex justify-between items-start">
          <h2 class="text-1xl font-bold">{movie.title}</h2>
        </div>
        <div>
          <div class="text-sm text-gray-400">Episodes:-{movie.episodes}</div>
          <div class="text-lg text-gray-800">Rankings:{movie.ranking}</div>
        </div>
        <div class="flex text-2xl font-bold text-a"><button><a href={movie.link}>Play</a></button></div>
      </div>

    </div>
  </div>
  
  </div>
//   </div>
  )
}

export default AnimeList