import React from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
<div class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
  <div x-data="{ open: false }" class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
    <div class="p-4 flex flex-row items-center justify-between">
      <a href="https://myanimelist.net/" class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-purple-500 focus:outline-none focus:shadow-outline">MyAnimeList</a>
    </div>
    <nav class="flex-col flex-grow pb-4 md:pb-0 flex-wrap md:flex md:justify-end md:flex-row">
      <NavLink
      to='/'
      exact={true}
      >
      <a class="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Home</a>
      </NavLink>
      <NavLink
      to='/movies'
            exact={true}
      >
      <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Animes</a>
      </NavLink>
      <NavLink
      to='/about'
      exact={true}
      >
      <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">About</a>  
      </NavLink>
    </nav>
  </div>
</div>
  )
}

export default Navbar