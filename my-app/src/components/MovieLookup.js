import { useState, useEffect } from "react"

const MovieLookup = (props) => {

    const [ genres, setGenres ] = useState([])

    const apiPath = "https://api.themoviedb.org/3/genre/movie/list?api_key="
    const apiKey = "ffbf5f8e8dd2c77b894927042f7c427f"  

    const getMovies = async () => {
        const query = await fetch(apiPath+apiKey)
        const response = await query.json()
        setGenres(response.genres)
    }


    useEffect( () => {
        getMovies()
    }, [])

  return (
    <div style={{ width: "800px", margin: "100px auto", border: "1px solid black", padding: "20px" }}>
      <h1>Movie Genres</h1>

      {/* we'll insert our data here  */}

        { genres.map( genre => (
            <p key={ genre.id }>{ genre.name }</p>
        ))}
      
    </div>
  )
}

export default MovieLookup