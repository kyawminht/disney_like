import React, { useEffect, useState } from 'react'
import Api from '../Services/Api'
import MovieCard from './MovieCard';

const MovieLists = ({genreId}) => {
    const [movies,setMovie]=useState([]);
    useEffect(()=>{
        getMovieByGenreId();
    },[]);
    const getMovieByGenreId=()=>{
        Api.getMovieByGenreId(genreId).then(res=>{
            // console.log(res.data.results);
            setMovie(res.data.results);
        })
    }
   
  return (
    <div className=' flex gap-8'>
      {
        movies.map(item=>(
          
            <MovieCard key={item.id} movie={item}/>
        ))
      }
    </div>
  )
}

export default MovieLists
