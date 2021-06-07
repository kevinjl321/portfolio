import React, { Component } from 'react'

import {HiOutlineExternalLink} from "react-icons/hi"
import {AiFillGithub} from "react-icons/ai"

import Test from "../images/Test.png"

export class Projects extends Component {
    render() {
        return (
            <section id="projects" className="flex flex-col max-w-md px-6 py-12 mx-auto sm:px-10 sp:px-10 md:px-8 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl sm:py-20 md:py-24 lg:py-32">
                <p className="special text-purple-300 font-semibold leading-snug text-left text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-header mb-8">
                    projects
                </p>
                <div className="flex flex-wrap mx-3 md:px-3 xl:px-0 md:-mx-0 lg:-mx-3 md:mb-10">
                    <div className="w-full px-6 mb-12 md:w-1/2 md:px-3 lg:px-6 sm:mb-16 md:mb-24">
                        <div className="text-gray-300">
                            <div className="mb-6">
                                <a href="#projects">
                                    <img src = {Test} className= "sm:w-4/5 transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 hover:-translate-y-1" alt="" />
                                </a>
                            </div>
                            <div>
                                <h4 className="mb-2 text-2xl font-bold md:text-2_5xl font-header">
                                    <a href="#projects" className="">
                                        test
                                        <HiOutlineExternalLink className="inline mb-1 ml-4 text-purple-200" />
                                    </a>
                                    <span className="inline mb-0 ml-1 mr-1 text-xl text-gray-400 font-body">
                                        |
                                    </span>
                                    <a href="#projects" className="inline text-purple-200">
                                        <AiFillGithub className="inline mb-0 ml-1" />
                                    </a>
                                </h4>
                                <p className="block mb-6 dark:text-white">
                                    test
                                </p>
                                <div className="flex flex-wrap">
                                    <span className="px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        test
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        test
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        test
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        test
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        test
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        )
    }
}

export default Projects
