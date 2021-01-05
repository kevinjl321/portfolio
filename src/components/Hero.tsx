import React, { Component } from 'react'
import profile from '../images/Kevin.jpg'

export class Hero extends Component {
    render() {
        return (
            <section className="flex flex-wrap max-w-md px-6 py-8 mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-5xl md:py-24 lg:py-40">
                <div className="flex items-center justify-center w-full md:w-1/3">
                    <img className = "mx-auto shadow-xl rounded-full lg:w-full md:w-full sm:w-1/2" src = {profile} alt = "Me (Kevin Lan)"></img>
                </div>
                <div className="flex items-center mt-6 md:w-2/3 md:mt-0 md:pl-6 lg:pl-6">
                    <div className="flex flex-col items-center text-primary dark:text-secondary md:items-start">
                        <h2 className="special mb-4 font-bold text-purple-300 leading-tight text-center text-5xl md:text-left sm:text-3xl md:text-5xl lg:text-5xl">
                            hi there, i'm kevin lan!
                        </h2>
                        <h3 className="w-full mb-6 text-xl text-center text-gray-400 font-body md:text-xl lg:text-2xl md:text-left md:max-w-md lg:max-w-xl">
                        Student at San Marino High School who is exploring full stack development, competitive programming, and machine learning.
                        </h3>
                        <div className="flex flex-row items-center">
                            <a href = "#about" className="special px-6 py-2 text-xl border-2 rounded-full text-gray-300 font-bold border-gray-200 text-center transition duration-500 ease-in-out hover:bg-purple-300 hover:text-gray-900 hover:border-gray-900 md:text-1xl mt-4 mr-4">learn more</a>
                            <a href = "#contact" className="special px-6 py-2 text-xl border-2 rounded-full text-gray-300 font-bold border-gray-200 text-center transition duration-500 ease-in-out hover:bg-purple-300 hover:text-gray-900 hover:border-gray-900 md:text-1xl mt-4">contact</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero
