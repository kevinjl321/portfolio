
import React from 'react'

import { FaPython } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';

function Background() {
  return (
    <div>
        <p className="text-2xl mt-8 md:text-4xl font-bold text-gray-700 text-center">
        Background
        </p>
        <div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-4">
        <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
        <SiCplusplus className="text-4xl text-blue-500 mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
            Competitive Programming
        </p>
        </div>
        <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
            <FaPython className="text-4xl text-yellow-500 mx-auto inline-block" />
            <p className="text-xl font-semibold mt-4">
            Python/Data Science
            </p>
        </div>
        <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
            <FaReact className="text-blue-900 text-4xl mx-auto inline-block" />
            <p className="text-xl font-semibold mt-4">
            React/Web Dev
            </p>
        </div>
        </div>
    </div>
  )
}

export default Background