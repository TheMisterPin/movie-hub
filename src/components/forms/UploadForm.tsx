import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, MainButton, FormContainer, PageTitle, DescriptionInput } from '../../styled components/'
import { MovieFormData } from '../../types/MovieFormData';
import { useMovies } from '../../context/MovieContext';
import { MovieData } from '../../types/MoviesContextType';
import FormHeader from '../../styled components/elements/FormHeader copy';
import { PageContainer } from '../../styled components/homeContainers/PageContainer';
import {  useAuth0 } from '@auth0/auth0-react';
import { useUsers } from '../../context/UserContex';



export const UploadForm: React.FC = () => {
  const {isAuthenticated } = useAuth0();
  const { uploadMovie } = useMovies();
  const { userLogged } = useUsers() 
  const username = userLogged?.username
    const { register, handleSubmit, formState: { errors } } = useForm<MovieFormData>({
        defaultValues: {
          votes: 1, 
          rating: 1 
        }
      })



  if (!isAuthenticated) {
    return (
      <div>
        <h1>You must be logged in to upload a movie</h1>
        
      </div>
    );
  
}
    
  

 
  const onSubmit = async (movieData: MovieData) => {
    try {
      if (username) {
        await uploadMovie(username, movieData);
        alert('Movie uploaded successfully!');
      } else {
        console.log('No Username');
      }
    } catch (error) {
      alert(`Upload failed: ${error instanceof Error ? error.message : 'An error occurred'}`);
    }
  };
      

  return (
 
    <PageContainer>
    <FormHeader text=' '/>
      <PageTitle>Upload Movie</PageTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
    <FormContainer>
        <Input placeholder="Title" {...register('title', { required: 'Title is required' })} />
        {errors.title && <p>{errors.title.message}</p>}
        
        <Input placeholder="Genre" {...register('genre', { required: 'Genre is required' })} />
        {errors.genre && <p>{errors.genre.message}</p>}
        
        <DescriptionInput placeholder="Description" {...register('description', { required: 'Description is required' })} />
        {errors.description && <p>{errors.description.message}</p>}

        <Input placeholder="Poster URL" {...register('poster', { required: 'Poster URL is required' })} />
        {errors.poster && <p>{errors.poster.message}</p>}
        

        <Input type="number" placeholder="Length (minutes)" {...register('length', { required: 'Length is required' })} />
        {errors.length && <p>{errors.length.message}</p>}

        <Input placeholder="Trailer URL" {...register('trailer', { required: 'Trailer URL is required' })} />
        {errors.trailer && <p>{errors.trailer.message}</p>}

        <Input type="number" placeholder="Year" {...register('year', { required: 'Year is required' })} />
        {errors.year && <p>{errors.year.message}</p>}

        <MainButton type="submit">Upload Movie</MainButton>
    </FormContainer>
      </form>
      </PageContainer>
  
  );
};

