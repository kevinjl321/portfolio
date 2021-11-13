import React, { Component } from 'react'
import "../index.css"

export class Contact extends Component {
    render() {
        return (
            <section id="contact" className="flex flex-col max-w-md px-6 py-12 mx-auto sm:px-10 sp:px-10 md:px-8 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl sm:py-20 md:py-20 lg:py-20">
                <header className="mb-10 text-left md:mb-20">
                    <h2 className = "special text-purple-300 font-semibold leading-snug text-left text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-header mb-8">
                        contact
                    </h2>
                    <p className="text-xl text-gray-300 md:text-2xl">
                        Have a question or want to talk? Send me a message here, or reach out to me on any of my socials!
                    </p>
                </header>
                <form name="contact" action="https://getform.io/f/1e434e35-6f32-4395-b8e1-d81358e8fb35" method="POST">
                    <input type="hidden" name="contact" value="contact" />
                    <div className="flex flex-col md:flex-row">
                        <div className="mb-6 md:mb-10 w-full md:w-1/2 md:mr-6">
                            <label className="special lowercase text-purple-200 font-bold text-xl font-header" htmlFor="firstname">
                                First Name
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    className="w-full px-3 py-3 mt-2 text-lg text-gray-700 border rounded border-primary_light focus:border focus:border-primary focus:outline-none font-body bg-gray-100"
                                    placeholder="John"
                                    required
                                />
                            </label>
                        </div>

                        <div className="mb-6 md:mb-10 w-full md:w-1/2">
                            <label className="special lowercase text-purple-200 font-bold text-xl font-header" htmlFor="lastname">
                                Last Name
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    className="w-full px-3 py-3 mt-2 text-lg text-gray-700 rounded border-primary_light focus:border focus:border-primary focus:outline-none font-body bg-gray-100"
                                    placeholder="Doe"
                                    required
                                />
                            </label>
                        </div>
                    </div>

                    <div className="mb-6 md:mb-10">
                        <label className="special lowercase text-purple-200 font-bold text-xl font-header" htmlFor="email">
                            E-mail address
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-3 mt-2 text-lg text-gray-700 rounded border-primary_light focus:border focus:border-primary focus:outline-none font-body bg-gray-100"
                                placeholder="email@provider.com"
                                required
                            />
                        </label>
                    </div>

                    <div className="mb-6 md:mb-10">
                        <label className="special lowercase text-purple-200 font-bold text-xl font-header">
                            Message:
                            <textarea
                                name="message"
                                className="w-full px-3 py-3 mt-2 text-lg text-gray-700 border rounded border-primary_light focus:border focus:border-primary focus:outline-none font-body bg-gray-100"
                                required
                            ></textarea>
                        </label>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="special px-12 py-2 bg mt-6 text-gray-300 font-bold text-center border-2 border-gray-200 transition duration-500 ease-in-out hover:bg-purple-300 hover:text-gray-900 hover:border-gray-900 text-xl lowercase rounded-full cursor-pointer font-header md:text-1xl"
                            aria-label="Send an email"
                        >
                            send
                        </button>
                    </div>
                </form>
            </section>
        )
    }
}

export default Contact
