import React, {Component} from 'react';
import "./index.css"
import "tailwindcss/dist/base.css"

import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"

class App extends Component{
  render() {
    return (
      <div className = "w-full bg-gray-900">
          <Hero/>
          <div className = "border-t border-gray-700 w-full">
            <About/>
          </div>
          <div className = "border-t border-gray-700 w-full">
            <Experience/>
          </div>
      </div>
    );
  }
}

export default App;
