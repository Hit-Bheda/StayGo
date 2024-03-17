import { FiAlignRight } from "react-icons/fi";
import '../../hams.css'

const Navbar = () => {
  const NavItems = ["Home","About","Contact","Agents"]
  return(
    <>
      <div className="w-full h-16 flex justify-between px-10 py-6 items-center">
        <div className="text-[#F6F1F1]">StayGo</div>
        <div className="text-[#F6F1F1] p-2 px-10 h-9  justify-between hidden md:flex bg-[#181823] rounded-2xl text-sm md:w-[20rem]">
          {/* <a href="#" className=">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Agents</a>*/}
          {(NavItems.map(Item=>
            <a className="hover:bg-[#F6F1F1] hover:text-[#181823] text-[11px] cursor-pointer rounded-lg px-2  transition ease-in-out duration-500 text-center">{Item}</a>
          ))}
        </div>
        <div className="hidden md:block bg-[#F6F1F1] rounded-lg px-3 py-2 cursor-pointer text-xs">Login</div>
        <div className="md:hidden bg-[#F6F1F1] rounded-[50%]">
          <FiAlignRight color="#F6F1F1" size={"20px"}/>
        </div>
      </div>
    </>
  )
}
export default Navbar;
