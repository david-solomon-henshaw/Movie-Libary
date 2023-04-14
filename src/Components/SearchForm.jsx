import React from 'react'
import SearchIcon from '../search.svg'
const SearchForm = ({searchMovie, movieTitle,setMovieTitle, searchMovieSubmit}) => {
 
 
 
 
  return (
    <>
    <form className='container' onSubmit={(e) => searchMovieSubmit(movieTitle,e)} >
    <div className='search'>
    <input 
      placeholder='Type in a movie name'
      value={movieTitle}
      onChange={ (e) => setMovieTitle(e.target.value)}
    />
    <img 
    src={SearchIcon} 
    onClick={() => searchMovie(movieTitle)}
    alt='search-icon'
    />
    
    </div>
    </form>
</>
  )
}

export default SearchForm