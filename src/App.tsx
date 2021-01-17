import React, {Component} from 'react';
import "./index.css"
import "tailwindcss/dist/base.css"

import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

class App extends Component{
  render() {
    return (
      <div>
          <Header />
          <div className = "bg-gray-900 w-full">
            <Hero/>
          </div>
          <div className = "border-t border-gray-800 bg-gray-900 w-full">
            <About/>
          </div>
          <div className = "border-t border-gray-800 bg-gray-900 w-full">
            <Projects/>
          </div>
          <div className = "border-t border-gray-800 bg-gray-900 w-full">
            <Contact/>
          </div>
          <div className = "bg-gray-900 w-full">
            <Footer/>
          </div>
      </div>
    );
  }
}

export default App;
