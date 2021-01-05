import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header
                className="text-center bg-gray-900 "
                role="banner"
            >
                <div className="flex flex-wrap justify-center max-w-md px-4 pt-8 pb-8 mx-auto text-lg font-semibold text-purple-300 lowercase md:pt-8 md:px-8 lg:pt-8 sm:max-w-xl md:max-w-6xl md:text-xl font-header dark:text-white md:justify-center">
                    <div className="flex flex-col items-center justify-center sm:flex-row">
                        <nav className="mb-1 sm:mb-0">
                            <a
                                href="#about"
                                className="cursor-pointer hover:text-purple-200 special"
                            >
                                About
                            </a>
                            <a
                                href="#projects"
                                className="mx-6 cursor-pointer md:mx-8 hover:text-purple-200 special"
                            >  
                                Projects
                            </a>
                            <a
                                href="#contact"
                                className="cursor-pointer hover:text-purple-200 special"
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
