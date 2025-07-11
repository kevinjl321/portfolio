import React, { Component } from 'react';
import "./index.css"
import Hero from "./components/Hero"

class App extends Component{
  render() {
    return (
      <div className="min-h-screen bg-[#15161e]">
        <Hero/>
      </div>
    );
  }
}

export default App;
