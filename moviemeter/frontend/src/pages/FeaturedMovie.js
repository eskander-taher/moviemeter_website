import {useState,useEffect} from 'react'
import axios from 'axios'

export default function FeasturedMovie({user}){
    const [movie, setMovie] = useState({})
    const [comments, setComments] = useState([])
    const [inp, setInp] = useState("")

    useEffect(() => {
        const getMovieData = async ()=>{
            const movieData = await JSON.parse(localStorage.getItem('movie'))
            if (movieData) {
                setMovie(movieData)
                const res = await fetch('http://localhost:5000/api/comments/'+movieData._id)
                const comments = await res.json()
                setComments(comments)
            }
        }
        getMovieData()
    }, [])

    const addComment = async()=>{
        try {
            const res = await axios.post("http://localhost:5000/api/comments",{
                name: user.name,
                email: user.email,
                text: inp,
                movieID: movie._id
            },
            {
                headers: {
                    'Authorization': `Bearer ${user.token}` 
                }
            }
            )
            console.log(res)
            setComments(prev=>{
                return[
                    {
                        text: inp,
                        name: user.name,
                        email: user.email,
                        movieID: movie._id,
                    },
                    ...prev
                ]

            })
            setInp("")
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async(comment)=>{
        try {
            const res = await axios.delete("http://localhost:5000/api/comments/"+comment._id)
            setComments(prev => {
                return prev.filter(comment=>{
                    return comment._id !== res.data.id
                })
            })
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="featured-movie">
            <div className='movie-details'>
                <img src={movie.poster} alt="poster" />
                <div className='details'>
                    <h2>Name: {movie.title}</h2>
                    {(movie.genres && <p>Category: {movie.genres.join(", ")}</p>)}
                    <p>Year: {movie.year}</p>
                    <p>Runtime: {movie.runtime} minutes</p>
                    <p>MovieMeter Rating: {movie.moviemeterRating}</p>
                    <hr/>
                    <p>About movie: {movie.fullplot}</p>
                </div>
            </div>
            <h1>Viewers comments</h1>
            <div className='comments-section'>
                {
                    user.token ? (
                        <div className='input-comment'>
                            <input value={inp} onChange={(e)=> setInp(e.target.value)} placeholder='Add a comment' type="text" />
                            <button onClick={addComment}>comment</button>
                        </div>
                    ): <p>sign in or sign up to add a comment</p>
                }
                <div className='comments'>
                    {
                        comments.map(comment=>{
                            return (
                                <div key={comment._id} className='comment'>
                                    <h3>{comment.name}</h3>
                                    <p>{comment.text}</p>
                                    {comment.email === user.email && <button onClick={()=>handleDelete(comment)}>delete comment</button>}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}