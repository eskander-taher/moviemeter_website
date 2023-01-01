import {useState} from 'react'
import MovieCard from './MovieCard'

export default function Filters({moviesData, setMoviesElements}){
    const [inp, setInp] = useState("")
    const [select, setSelect] = useState(0)

    const handleChange = (e)=>{
        setInp(e.target.value.toLowerCase())
        const filterd = moviesData.filter(movie=>{
            return movie.title.toLowerCase().includes(inp)
        })
        setMoviesElements(filterd.map(movie => <MovieCard key={movie._id} movie={movie} />))
    }
    
    const handleSelect = (e)=>{
        setSelect(parseInt(e.target.value))

        if(parseInt(e.target.value) === 3  ){
            console.log(parseInt(e.target.value))
            const filterd = moviesData.filter(movie=>{
                return movie.moviemeterRating <= 3
            })
            setMoviesElements(filterd.map(movie => <MovieCard key={movie._id} movie={movie} />))
        }
        if(parseInt(e.target.value) === 4  ){
            const filterd = moviesData.filter(movie=>{
                return movie.moviemeterRating > 3 && movie.moviemeterRating <= 4
            })
            setMoviesElements(filterd.map(movie => <MovieCard key={movie._id} movie={movie} />))
        }
        if(parseInt(e.target.value) === 5  ){
            const filterd = moviesData.filter(movie=>{
                return movie.moviemeterRating > 4
            })
            setMoviesElements(filterd.map(movie => <MovieCard key={movie._id} movie={movie} />))
        }
        if(parseInt(e.target.value) === 0){
            setMoviesElements(moviesData.map(movie => <MovieCard key={movie._id} movie={movie} />))
        }
    }
    

    return(
        <section className="filters-section">
            <div className="search-input">
                <input onChange={handleChange} value={inp} type="text" placeholder="Enter movie name"/>
            </div>
            <div className="filters">
                <div className="MMrating">
                    <label className='label' htmlFor="MMrating">MovieMeter Rating:   </label>
                    <select value={select} onChange={handleSelect} name="MMrating" id="MMrating">
                        <option value="0">All</option>
                        <option value="3">Bad movies</option>
                        <option value="4">Normal movies</option>
                        <option value="5">Great movies</option>
                    </select>
                </div>
            </div>
        </section>
    )
}