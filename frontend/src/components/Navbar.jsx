import React from 'react';
import { Link } from 'react-router-dom';
import {FaGithub} from 'react-icons/fa'
import autitest from '../assets/autitest.png'
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center pr-4 bg-white text-secondary font-bold text-3xl">
      <div className="flex items-center gap-4">
        <img src={autitest} className='scale-50 '></img>
      </div>
      
      <div className="flex items-center">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FaGithub size={35}/>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
