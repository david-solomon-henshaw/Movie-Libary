import './App.css';
import SearchForm from './Components/SearchForm';
import MovieCard from './Components/MovieCard';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
function App() {

  const [movieTitle, setMovieTitle] = useState('')
  const [movieArray, setMovieArray] = useState([])
  const [loading, setLoading] = useState(false)
  const url = 'https://www.omdbapi.com/?apikey=c6fe89d8&s='


  const searchMovie = (movie) => {
    
    if (movieArray.length > 0 ) {
      setMovieArray([])

    } 

    setMovieTitle('')
    const movieName = movie.trim()
    if (movieName.length === 0) {
      
      toast.error('You Can\'t Search with an empty field  !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
       else {
        setLoading(true)     
      axios.get(url+movieName)
      .then((response) => {
        setLoading(false)
       const data = response.data.Search
      if (data === undefined) {
        toast.error('Movie not found!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        
      } else {
       console.log(response)
       toast.success('Sucessful', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
       setMovieArray(data)
       console.log(movieArray)
      }})
      .catch((error) => {
        setLoading(false)
        toast.error(`${error}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        console.log('error', error)
      })

    }

  }



  const searchMovieSubmit = (movie,event) => {
    event.preventDefault()
    if (movieArray.length > 0 ) {
      setMovieArray([])

    } 

    setMovieTitle('')
    const movieName = movie.trim()
    if (movieName.length === 0) {
      toast.error('You Can\'t Search with an empty field  !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
       else {
        setLoading(true)     
      axios.get(url+movieName)
      .then((response) => {
        setLoading(false)
       const data = response.data.Search
      if (data === undefined) {
        toast.error('Movie not found!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        
      } else {
       console.log(response)
       toast.success('Sucessful', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
       setMovieArray(data)
       console.log(movieArray)
      }})
      .catch((error) => {
        setLoading(false)
        toast.error(`${error}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        console.log('error', error)
      })

    }

  }






  useEffect(() => {
    const onLoadMovies = (movie) => {
     const movieName = movie
      axios.get(url+movieName)
      .then((response) => {
        setLoading(false)
       const data = response.data.Search
       console.log(response)
       setMovieArray(data)
     //  console.log(movieArray)
     })
      .catch((error) => {
        setLoading(false)
        toast.error(`${error}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        console.log('error', error)
      })

 
    }

    onLoadMovies('Star wars')
  }, [])

  return (
    <div className="app">
<ToastContainer /> 

    <h1>Movie Libary</h1>

    <SearchForm searchMovie={searchMovie} searchMovieSubmit={searchMovieSubmit} movieTitle={movieTitle} setMovieArray={setMovieArray} setMovieTitle={setMovieTitle} />

  

    { movieArray.length > 0 ? (
      <div className='container'>
        {movieArray.map((movie) => (
          <MovieCard key={movie.imdbId} Title={movie.Title} Year={movie.Year} Poster={movie.Poster} Type={movie.Type} />
        ))}
      </div>
    ) : <>  </>}
  
    {loading ?  <div className='loading'><Spinner animation="grow" size="sm" variant='success'/> <Spinner animation="grow" size="sm" variant='success'/> <Spinner animation="grow" size="sm" variant='success'/>  <Spinner animation="grow" size="sm" variant='success'/>  <Spinner animation="grow" size="sm" variant='success'/> </div>: ( <></>) }   
  

    </div>
  );
}

export default App;
