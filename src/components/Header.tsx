import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header
                id="top"
                className="text-center bg-gray-900 "
                role="banner"
            >
                <div className="flex flex-wrap justify-center max-w-md px-4 pt-8 pb-8 mx-auto text-lg font-bold text-purple-300 lowercase md:pt-12 md:px-8 lg:pt-12 sm:max-w-xl md:max-w-6xl md:text-xl font-header dark:text-white md:justify-end">
                    <div className="flex flex-col items-center justify-center sm:flex-row">
                        <nav className="mb-1 sm:mb-0">
                            <a
                                href="#about"
                                className="cursor-pointer hover:text-purple-200"
                            >
                                About
                            </a>
                            <a
                                href="#projects"
                                className="mx-6 cursor-pointer md:mx-8 hover:text-purple-200"
                            >  
                                Projects
                            </a>
                            <a
                                href="#contact"
                                className="cursor-pointer hover:text-purple-200"
                            >
                                Contact
                            </a>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
