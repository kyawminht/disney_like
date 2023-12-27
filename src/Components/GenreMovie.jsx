import GenresList from "../assets/constant/GenresList"
import MovieLists from "./MovieLists"


const GenreMovie = () => {
  return (
    <div>
      {
        GenresList.genere.map(item=>(
            <div key={ item.id} className=" p-8 px-8 md:px-16">
                <h2 className=" font-bold text-[20px]">{item.name}</h2>
                <MovieLists genreId={item.id}/>
            </div>
        ))
      }
    </div>
  )
}

export default GenreMovie
