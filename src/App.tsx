import React, { Component } from 'react';
import "./index.css"
import Hero from "./components/Hero"

class App extends Component{
  render() {
    return (
      <div className="min-h-screen flex items-center justify-center">
            <Hero/>
      </div>
    );
  }
}

export default App;
