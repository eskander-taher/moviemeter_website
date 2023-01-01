import {useState, useEffect} from 'react'

import MovieCard from '../components/MovieCard'
import Filters from '../components/Filters'

import getData from "../helpers/getData"

export default function Home(){
    const [moviesData, setMoviesData] = useState([])
    const [moviesElements, setMoviesElements] = useState([])

    useEffect(()=> {
        const getMovie = async () =>{
            const movies = await getData("http://localhost:5000/api/movies", setMoviesData)
            setMoviesElements(movies.slice(0, 50).map(movie => <MovieCard key={movie._id} movie={movie} />))
            console.log(movies[0])
        } 

        getMovie()
    },[])

    return(
        <main className='movies-section'>
            <Filters moviesData={moviesData} setMoviesData={setMoviesData} setMoviesElements= {setMoviesElements}/>
            <section className='movies'>
                {moviesElements}
            </section>
        </main>
    )
}