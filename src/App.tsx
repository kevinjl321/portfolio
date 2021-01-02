import React, {Component} from 'react';
import "./index.css"
import "tailwindcss/dist/base.css"
import Profile from "./components/Profile"
import About from "./components/About"
import Footer from "./components/Footer"
import Background from "./components/Background"

class App extends Component{
  render() {
    return (
      <div className="flex flex-col min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
        <div className = "flex-grow">
          <Profile />
          <About />
          <Background />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
