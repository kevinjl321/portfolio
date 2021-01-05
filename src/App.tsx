import React, {Component} from 'react';
import "./index.css"
import "tailwindcss/dist/base.css"

import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Projects"
import Footer from "./components/Footer"

class App extends Component{
  render() {
    return (
      <div>
          <Header />
          <div className = "bg-gray-900 w-full">
            <Hero/>
          </div>
          <div className = "bg-gray-900 w-full">
            <div className = "mx-auto lg:w-1/3 sm:w-1/2 border-t-4 border-gray-700"></div>
            <About/>
          </div>
          <div className = "bg-gray-900 w-full">
            <div className = "mx-auto lg:w-1/3 sm:w-1/2 border-t-4 border-gray-700"></div>
            <Experience/>
          </div>
          <div className = "bg-gray-900 w-full">
            <Footer/>
          </div>
      </div>
    );
  }
}

export default App;
