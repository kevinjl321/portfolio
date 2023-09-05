import React, { Component } from 'react'
import "../index.css"

export class About extends Component {
  render() {
    return (
      <section id="about" className="flex flex-col max-w-md px-6 py-12 mx-auto sm:px-10 sp:px-10 md:px-8 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl sm:py-20 md:py-20 lg:py-20">
        <div className="text-gray-400">
          <div className="mx-auto mb-8">
            <p className="special font-semibold leading-snug text-left text-purple-300 text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-header">
              about
            </p>
          </div>
          <div className="mb-8">
            <p className="mb-8 text-xl md:text-2xl">
              I'm currently a Computer Science and Economics student at UC Berkeley passionate in exploring 
              the intersections of society and technology. 
              <br></br>
              <br></br>
              I enjoy making random projects, binging dramas,
              and going on long bike trips with friends. I'm also a competitive badminton player!
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default About
