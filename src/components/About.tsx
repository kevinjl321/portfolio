import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <section id="about" className="flex flex-col max-w-md px-6 py-12 mx-auto sm:px-10 sp:px-10 md:px-8 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl sm:py-20 md:py-24 lg:py-32">
        <div className="text-gray-400">
          <div className="mx-auto mb-8">
            <p className="special font-semibold leading-snug text-left text-purple-300 text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-header">
              about
            </p>
          </div>
          <div className="mb-8">
            <p className="mb-8 text-xl md:text-2xl">
              I'm a current junior attending San Marino High School who is interested in all things computer science and technology. Some interests I've explored
              include competitive programming, web development, and machine learning/data science. 
              <br></br>
              <br></br>
              Some of my hobbies include playing VALORANT, making random projects, watching anime (SnK & FMA:B are my favorites so far)
              and going on long bike trips with friends. I am also a nationally ranked badminton player! If you're interested,
              you can check out my <a className ="cursor-pointer underline text-purple-300 hover:text-purple-200 hover:underline" href = "https://www.linkedin.com/in/kevin-lan-81b3631a7/" target = "_blank" rel = "noreferrer">LinkedIn</a> to see some of my academic achievements. 
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default About
