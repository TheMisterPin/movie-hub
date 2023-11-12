import { useMovies } from "../context/MovieContext"
import { HomeLayout } from "./HomeLayout"


export const Home =() =>{
    const {movies} = useMovies()
  return (
    <HomeLayout movies={movies}/>
  )
}
