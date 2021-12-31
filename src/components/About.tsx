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
              I'm currently a senior at San Marino High School interested in exploring the intersections of technology and society. Over the past few years, I've delved into
              competitive programming, web development, cybersecurity, and machine learning/artificial intelligence. 
              <br></br>
              <br></br>
              Some of my hobbies include playing the latest PC titles, making random projects, watching K-dramas,
              and going on long bike trips with friends. I'm also a nationally ranked badminton player! 
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default About
