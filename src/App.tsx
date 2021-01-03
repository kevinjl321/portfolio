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
      <div>
        <Profile />
        <About />
      </div>
    );
  }
}

export default App;
