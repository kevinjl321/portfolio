import React from 'react';
import profile from "../images/Kevin.jpg";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiOutlineDocument } from "react-icons/hi";
import "../index.css";

const ICONS = [
  {
    href: "https://github.com/kevinjl321",
    label: "GitHub",
    icon: <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    href: "https://www.linkedin.com/in/kevinjlan",
    label: "LinkedIn",
    icon: <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    href: "https://instagram.com/kevinlannn",
    label: "Instagram",
    icon: <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  // {
  //   href: "/resume.pdf",
  //   label: "Resume",
  //   icon: <HiOutlineDocument className="w-5 h-5 sm:w-6 sm:h-6" />,
  // },
];

const Hero: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-0 hero-container">
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl w-full space-y-8 sm:space-y-10 lg:space-y-0 lg:space-x-16 xl:space-x-20">
        {/* Left: Photo and Icons */}
        <div className="flex flex-col items-center space-y-4 sm:space-y-6 w-full lg:w-auto">
          <img
            src={profile}
            alt="Me (Kevin Lan)"
            className="rounded-lg object-cover w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 border-2 hero-border shadow-sm"
          />
          
          {/* Current Status - Casual */}
          <div className="hero-card rounded-lg p-3 sm:p-4 text-center w-full max-w-sm">
            <h3 className="hero-accent font-semibold text-xs sm:text-sm mb-2 sm:mb-3">currently...</h3>
            <div className="text-left space-y-1.5 sm:space-y-2">
              <div className="flex items-start space-x-2">
                <span className="hero-text-muted text-xs mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                <p className="hero-text text-xs sm:text-sm leading-relaxed">
                  watching <a href="https://www.netflix.com/title/80192098" target="_blank" rel="noreferrer" className="hero-link">dynasty</a> on netflix
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="hero-text-muted text-xs mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                <p className="hero-text text-xs sm:text-sm leading-relaxed">
                  training for the <a href="https://brazenracing.com/summerbreeze/" target="_blank" rel="noreferrer" className="hero-link">summer breeze</a> half marathon!
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="hero-text-muted text-xs mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                <p className="hero-text text-xs sm:text-sm leading-relaxed">
                  craving bitter caramel ice cream from <a href="https://www.pennysicecreamery.com/" target="_blank" rel="noreferrer" className="hero-link">penny's</a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 sm:space-x-6">
            {ICONS.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="hero-icon hover:scale-110 transition-all duration-200 p-1.5 sm:p-2 rounded-full border border-transparent hover:border-gray-300 focus:border-gray-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        
        {/* Right: Content Box */}
        <div className="hero-card rounded-lg p-6 sm:p-8 w-full max-w-2xl">
          <div className="flex flex-col items-start text-left">
            <h1 className="special font-bold hero-heading leading-tight text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 tracking-tight">
              hi there, i'm kevin!
            </h1>
            
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg lg:text-xl hero-text leading-relaxed">
                i'm a cs and economics student at uc berkeley currently building customer-facing tools at <a href="https://www.amazon.com" target="_blank" rel="noreferrer" className="hero-link">amazon</a> (alexa comms) and <a href="https://www.serra.io" target="_blank" rel="noreferrer" className="hero-link">serra</a> (24/7 ai recruiter). previously, i've worked in domains ranging from web3 infrastructure with <a href="https://magic.link" target="_blank" rel="noreferrer" className="hero-link">magic labs</a>, educational platforms with <a href="https://www.bentley.com" target="_blank" rel="noreferrer" className="hero-link">bentley systems</a>, and autonomous cybersecurity with the <a href="https://www.jhuapl.edu" target="_blank" rel="noreferrer" className="hero-link">johns hopkins university apl</a>.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl hero-text leading-relaxed">
                some of my other interests include research revolving around ai security, building agentic ai, and exploring the intersection between economics and technology.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl hero-text leading-relaxed">
                in my free time, you'll catch me running (follow me on <a href="https://www.strava.com/athletes/42748905" target="_blank" rel="noreferrer" className="hero-link">strava</a>!), playing badminton, or trying new foods around the bay area. feel free to reach out to me on any of my socials and i'd be more than happy to chat about anything!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
