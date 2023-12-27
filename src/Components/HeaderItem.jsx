

const HeaderItem = ({name,Icon}) => {
  return (
    <div className=" mt-6 text-black text-[15px] md:text-[20px] flex md:justify-center gap-0 md:gap-3 font-semibold cursor-pointer items-center hover:underline underline-offset-8 mb-2">
      <Icon/> 
      <h3 className="">{name}</h3>
    </div>
  )
}

export default HeaderItem
