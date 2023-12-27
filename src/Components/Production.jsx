
import  Marvel  from '../assets/marvel.png';
import  National  from '../assets/national.png';
import  Pixar  from '../assets/pixar.png';
import  Starwar from '../assets/starwar.png';



const Production = () => {
    const productionLists=[
        {
            id:1,
            image:Marvel
        },
        {
            id:2,
            image:National
        },
        {
            id:3,
            image:Pixar
        },
        {
            id:4,
            image:Starwar
        },
       
    ];
  return (
    <div className=' flex gap-5 p-5 md:px-16'>
      {productionLists.map(item=>(
        <img key={item.id} src={item.image} alt="" className=' w-full border-[4px] rounded-lg h-[200px] hover:scale-105 transition-all ease-in-out duration-150' />
      ))}
    </div>
  )
}

export default Production
