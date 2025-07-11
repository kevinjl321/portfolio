import React, { Component } from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import "../index.css"

export class Footer extends Component {
    render() {
        return (
            <footer
            role="contentinfo"
            className="px-4 pb-8 text-center bg-gray-900 border-t border-gray-800"
            >
                <div className="flex justify-center py-5 mb-4">
                    <div className="text-2xl w-44 md:w-48 lg:w-48 md:text-2xl lg:text-2xl">
                        <ul className="flex items-center justify-between">
                            <li className="flex">
                            <span>
                                <a className="text-purple-400 cursor-pointer hover:text-purple-300 transition-colors duration-300" href="https://www.linkedin.com/in/kevinjlan" rel = "noreferrer" target = "_blank">
                                    <FaLinkedinIn />
                                </a>
                            </span>
                            </li>
                            <li className="flex">
                            <span>
                                <a className="light cursor-pointer text-purple-400 hover:text-purple-300 transition-colors duration-300" href="http://github.com/kevinjl321" rel = "noreferrer" target = "_blank">
                                    <FaGithub />
                                </a>
                            </span>
                            </li>
                            <li className="flex">
                            <span>
                                <a className= "light cursor-pointer text-purple-400 hover:text-purple-300 transition-colors duration-300" href="http://instagram.com/kevinlannn" rel = "noreferrer" target = "_blank">
                                    <FaInstagram />
                                </a>
                            </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="text-md text-gray-500 font-semibold">
                    © 2025 kevin lan | designed and developed by kevin lan 
                    <br />
                </p>
            </footer>
        )
    }
}

export default Footer
