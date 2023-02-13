import React from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <div className='flex flex-col max-w-[1200px] w-full'>
            <div className='pb-8 flex flex-row justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
                
            </div>

          <button className='text-white border-2 w-[150px] hover:bg-cyan-500 hover:border-cyan-500 hover:text-lg hover:font-bold px-4 py-3 my-8 mx-auto flex items-center'>
            <a target="_blank"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1FtUL6fNKZHHV3rUk-z7PFKhBTG53Y69T/view?usp=share_link'
            >
            Resume <BsFillPersonLinesFill size={35} />
            </a>
            </button>



        <div className='flex justify-evenly m-[20px] mt-[80px]'>
        
          
            <div className='hover:border-b-2 hover:border-r-2 hover:border-cyan-500 p-1'>
            <a target="_blank"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Shrijhaa'
            >
            <FaGithub size={45} />
            </a>
            </div>
            <div className='hover:border-b-2 hover:border-r-2 hover:border-cyan-500 p-1'>
            <a target="_blank"
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:shrijhaaramesh@gmail.com'
            >
            <HiOutlineMail size={45} />
            </a>
            </div>

            <div className='p-1 hover:border-b-2 hover:border-r-2 hover:border-cyan-500'>
            <a target="_blank"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/shrijhaaramesh/'
            >
           <FaLinkedin size={45} />
            </a>
            </div>
           
           
           
          
        
        
         
        </div>
    </div>
    </div>
    
  )
}
export default Contact
