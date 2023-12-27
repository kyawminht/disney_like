
import { useEffect, useRef, useState } from "react"
import Api from "../Services/Api";
import {HiChevronLeft,HiChevronRight} from 'react-icons/hi2'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const Slider = () => {
  const screenWidth=window.innerWidth;
    const myRef=useRef();
    const [movieLists,setMovieList]=useState([]);
    useEffect(()=>{
        trendingMovies();
    },[]);

const trendingMovies=()=>{
 Api.getTrendingVideos.then(res=>{
    console.log(res.data.results)
    setMovieList(res.data.results)
 })
}
//for slider
  const sliderLeft=(element)=>{
    element.scrollLeft+=screenWidth -110
  }

  const sliderRight=(element)=>{
    element.scrollLeft +=screenWidth -110
  }
  return (

    <div className="">
      <div className=" absolute mx-6 mt-[250px] bg-red-600 w-10 rounded-full h-10 text-white">
      <HiChevronLeft
  className="hidden md:block absolute mx-1 mt-1 text-[30px] text-3xl font-bold cursor-pointer"
  onClick={() => sliderLeft(myRef.current)}
/>

      </div>
      
      <div className=" absolute mx-8 mt-[250px] right-0 w-10 rounded-full h-10 bg-rose-600 text-white">
      <HiChevronRight
  className="hidden md:block absolute text-[30px] mx-2 mt-1  text-3xl  font-bold cursor-pointer "
  onClick={() => sliderRight(myRef.current)}
/>

      </div>
    <div className=" flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth" ref={myRef}>
      
      {
        movieLists.map(movie=>(
            <img key={movie.id} src={IMAGE_BASE_URL+movie.backdrop_path} alt="" className="w-full md:min-w-full md:h-[500px] object-cover object-left-top h-auto hover:border-[9px] border-gray-600 rounded-lg transition-all ease-in-out" />
        ))
      }
    </div>
    </div>
  )
}

export default Slider
