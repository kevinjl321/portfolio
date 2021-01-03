import React from 'react'
import profile from '../images/Kevin.jpg'

import { FaGithub } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

function Profile() {
  return (
    <div className = "w-full bg-gray-800">
      <div className = "py-12 lg:py-16 xl:py-24 2xl:py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl lg:w-1/2 sm:w-3/4 mx-auto">
        <div className="w-full">
          <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
            <div className="">
              <img className="w-32 mx-auto shadow-xl rounded-full" src={profile} alt="Me (Kevin Lan)" />
            </div>
            <div className="text-center mt-5">
              <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                Kevin Lan
              </p>
              <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                Student Developer
              </p>
              <div className="flex align-center justify-center mt-4">
                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/kevinjl321">
                  <FaGithub />
                  <span className="sr-only">Github</span>
                </a>
                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300" href="https://instagram.com/kevinjl321">
                  <AiOutlineInstagram />
                  <span className="sr-only">Instagram</span>
                </a>
                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/kevin-lan-81b3631a7/">
                  <FaLinkedin />
                  <span className="sr-only">LinkedIn</span>  
                </a>
                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-purple-500 hover:bg-purple-500 rounded-full hover:text-white transition-colors duration-300" href="mailto:kevinlan321@gmail.com">
                  <FiMail />
                  <span className="sr-only">Email</span>  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile