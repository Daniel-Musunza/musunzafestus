"use client"
import React,{useState} from 'react';
import { FaWhatsapp } from "react-icons/fa";
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(null)
    const handleNav=()=>{
        setNav(!nav)
    }

  return (
    <div className=" flex text-white w-full h-[80px] fixed top-0 z-50 md:justify-between items-center backdrop-blur-md p-11">
        <div className=" font-light text-gray-400 text-2xl md:px-0 md:py-5 cursor-pointer px-0 titlep"><span className="md:hidden" style={{marginRight: '80px' }}></span><img src="/mylogo.png" width="150px" alt="Musunza Festus"/></div>
        <ul className="hidden md:flex h-[50px] items-center w-[500px] justify-between border border-white bg-[#0300145e] rounded-full text-gray-200 font-extralight">
        <li><a href="#about" className="cursor-pointer ease-in duration-200 focus:bg-white focus:ring-1 hover:text-black hover:bg-white hover:rounded-full px-[20px] py-[15px]">
              About Me
            </a></li>
            <li><a href="#experience" className="cursor-pointer ease-in duration-200 hover:text-black hover:bg-white hover:rounded-full px-[20px] py-[15px]">
              Experience
            </a></li>
            <li><a href="#skills" className="cursor-pointer ease-in duration-200 hover:text-black hover:bg-white hover:rounded-full px-[30px] py-[15px] ">
              Skills
            </a></li>
            <li><a href="#projects" className="cursor-pointer ease-in duration-200 hover:text-black hover:bg-white hover:rounded-full px-[20px] py-[15px]">
              Projects
            </a></li>

           
        </ul>
        <div className='flex items-center justify-center md:visible collapse' >   
                 <span className="pl-2" style={{marginRight: '30px'}}>GET IN TOUCH</span>
                 <a href="https://api.whatsapp.com/send?phone=+254794711950" className="cursor-pointer text-gray-400 font-light flex items-center justify-center md:visible collapse" style={{marginRight: '30px', color: 'green'}}>   
                      <FaWhatsapp size={50}/>
                  </a>

                  <a href="mailto:musunzafestus2019@gmail.com" className="cursor-pointer text-gray-400 font-light flex items-center justify-center md:visible collapse" style={{marginRight: '10px'}}>   
                      <AiOutlineMail size={50}/>
                  </a>

        </div>

        <div onClick={handleNav} className="md:hidden" style={{position: 'fixed', zIndex: '9999', marginRight: '500px'}}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25}  />  }
        </div>

        <div onClick={handleNav}  className={!nav ? "fixed left-[-100%]" : "fixed top-0 left-0 w-[60%] h-[1000px] border border-l-gray-900 bg-[#030014] duration-700 md:hidden z-40" }>
        <ul className=" pt-16 uppercase pr-4 backdrop-blur-md">
        <li className="p-4 pl-8 text-xl border-b border-gray-600"><a href="#about" className="cursor-pointer ease-in duration-200 hover:text-black hover:bg-white hover:rounded-full px-[20px] py-[15px] active:bg-white active:rounded-full">
              About Me
            </a></li>
            <li className="p-4 pl-8 text-xl border-b border-gray-600"><a href="#experience" className="cursor-pointer ease-in duration-200 hover:text-black hover:bg-white hover:rounded-full px-[20px] py-[15px]">
              Experience
            </a></li>
            <li className="p-4 pl-8 text-xl border-b border-gray-600"><a href="#skills" className="cursor-pointer ease-in duration-200 hover:text-black hover:bg-white hover:rounded-full px-[30px] py-[15px] ">
              Skills
            </a></li>
            <li className="p-4 pl-8 text-xl border-b border-gray-600"><a href="#projects" className="cursor-pointer ease-in duration-200 hover:text-black hover:bg-white hover:rounded-full px-[20px] py-[15px]">
              Projects
            </a></li>
            <li className="p-4 pl-8 text-xl"> GET IN TOUCH</li>
          <li className="pl-20">
            <a href="https://api.whatsapp.com/send?phone=+254794711950" className="cursor-pointer ease-in duration-200  hover:text-black hover:bg-white hover:rounded-full px-[20px] py-[15px]" style={{marginRight: '30px', color: 'green'}}>
            <FaWhatsapp size={50}/>
            </a></li>
            <li className="pl-20">
            <a href="mailto:musunzafestus2019@gmail.com" className="cursor-pointer ease-in duration-200  hover:text-black hover:bg-white hover:rounded-full px-[20px] py-[15px]">
            <AiOutlineMail size={50}/>
            </a></li>
        </ul>
        </div>
    </div>
  )
    

    
}

export default Navbar
