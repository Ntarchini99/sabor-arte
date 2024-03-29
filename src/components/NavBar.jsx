import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { AiFillTag } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { useState } from "react";


const NavBar = () => {
  const [nav, setNav] = useState(false)

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 ">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Sabor <span className="font-bold">Arte</span>
        </h1>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] ">
        <AiOutlineSearch size={25} />
        <input className="bg-transparent p-2 focus:outline-none w-full" type="text" placeholder="Buscar Comidas" />
      </div>
      <button className="bg-black border border-black px-5  text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Carrito
      </button>

      {nav ? <div className="bg-black/80 fixed w-full h-screen z-20 top-0 left-0"></div> : ""}


      <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-20 duration-300 " : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 "}>
        <AiOutlineClose onClick={() => setNav(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer" />
        <h2 className="text-2xl p-4">Sabor <span className="font-bold">Arte</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex"><TbTruckDelivery size={25} className="mr-4" /> Ordenes</li>
            <li className="text-xl py-4 flex"><MdFavorite size={25} className="mr-4" /> Favoritos</li>
            <li className="text-xl py-4 flex"><FaWallet size={25} className="mr-4" /> Billetera</li>
            <li className="text-xl py-4 flex"><AiFillTag size={25} className="mr-4" /> Promociones</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
