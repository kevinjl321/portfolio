import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <section id="about" className="flex flex-col max-w-md px-6 py-12 mx-auto sm:px-10 sp:px-10 md:px-8 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl sm:py-20 md:py-24 lg:py-32">
        <div className="text-gray-300">
          <div className="mx-auto mb-8">
            <p className="font-bold leading-snug text-left text-purple-300 text-2xl md:text-center sm:text-2xl md:text-3xl lg:text-4xl font-header">
              About
            </p>
          </div>
          <div className="mb-8">
            <p className="mb-8 text-xl md:mb-16 md:leading-relaxed md:text-center md:text-2xl">
              I am a current junior attending San Marino High School who is interested in all things computer science and technology. Some of my endeavors include
              competitive programming, web development, and machine learning/data science. 
              <br></br>
              <br></br>
              Some of my hobbies include playing VALORANT (I suck), making random projects, watching anime (Attack on Titan is my favorite so far)
              and going on long bike trips with friends. I am also a nationally ranked badminton player! If you're interested,
              you can check out my LinkedIn to see some of my academic achievements. 
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default About
