import {useNavigate} from 'react-router-dom'
export default function MovieCard({movie}){
    const navigate = useNavigate()

    const handleClick = ()=>{
        localStorage.setItem('movie', JSON.stringify(movie))
        navigate('/movie')
    }
    const style = {
        backgroundImage: "url(" + movie.poster + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return(
        <div style = {style}  className="movie" onClick={handleClick}>
            <p className="rating">🌟{movie.moviemeterRating}</p>
            <p>{movie.title}</p>
        </div>
    )
}