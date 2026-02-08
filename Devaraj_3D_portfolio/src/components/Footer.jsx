import React from "react";
import { styles } from "../styles";
import {socialLinks} from "../constants/social"
 


const Footer = () => {

  const scroolToTop = () => {
     window.scrollTo ({
       top:0,
       behavior:"smooth"
     })
  }
  return (
    <footer className='w-full h-auto bg-primary sm:px-16 px-6 py-10 border-t-2 border-black-100 flex flex-col gap-6 z-10 relative'>
      <div className='flex md:flex-row flex-col justify-between items-center gap-6'>
        <div className='flex flex-col justify-center items-center md:items-start gap-2'>
          <p className='text-white text-[16px] font-bold'>
            Devaraj L
          </p>
          <p className='text-secondary text-[14px]'>
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
         <a
          href='/devaraj_resume.pdf' 
          target='_blank'   
          rel='noopener noreferrer'
          className='flex border-b-2 border-white text-white w-[80px] justify-center items-center mt-8 
          hover:border-[#915eff] transition duration-300 cursor-pointer'
        >
          Resume
        </a>
        <div className='flex gap-4'>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target='_blank'
              rel='noopener noreferrer'
              className='w-10 h-10 rounded-full bg-tertiary flex justify-center items-center text-white hover:text-[#915eff] hover:bg-black-100 transition-all duration-300 cursor-pointer shadow-card border border-transparent hover:border-[#915eff]'
            >
              {social.icon}
            </a>
          ))}
          <button
          onClick={scroolToTop}
          className="w-10 h-10 rounded-full bg-[#915eff] flex justify-center
          items-center text-white hover:text-[#915eff] transition-all
          duration-300 cursor-pointer shadow-card border border-transparent hover:border-[#915eff] ml-4"
          >
           <svg 
  xmlns="http://www.w3.org/2000/svg" 
  fill="none" 
  viewBox="0 0 24 24" 
  strokeWidth={2.5} 
  stroke="currentColor" 
  className="w-6 h-6"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" 
  />
</svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;