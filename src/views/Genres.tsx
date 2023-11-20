import { useParams } from "react-router-dom";
import { PageContainer } from "../components/homeContainers/PageContainer";
import { useMovies } from "../context/MovieContext";
import { FormContainer, PageTitle } from "../styled components";
import { MovieCard } from '../components/card/MovieCard';


export const GenrePage = () => {
    const { movies} = useMovies()
    const {genreName} = useParams()
    const filteredMovies = movies.filter(movie => movie.genre === genreName);
    return (
        <PageContainer>
            <FormContainer>
                <PageTitle>{genreName}</PageTitle>
                {filteredMovies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} variant="list" />))}
            </FormContainer>
        </PageContainer>
    )
}