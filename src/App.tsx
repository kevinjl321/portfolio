import React, {Component} from 'react';
import "./index.css"
import "tailwindcss/dist/base.css"
import Hero from "./pages/Hero"
import Experience from "./pages/Experience"

class App extends Component{
  render() {
    return (
      <div>
        <Hero />
        <Experience />
      </div>
    )
  }
}

export default App;
