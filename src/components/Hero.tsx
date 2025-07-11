import React from 'react';
import profile from "../images/Kevin.jpg";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiOutlineDocument } from "react-icons/hi";
import "../index.css";

const ICONS = [
  {
    href: "https://github.com/kevinjl321",
    label: "GitHub",
    icon: <FaGithub className="w-6 h-6" />,
  },
  {
    href: "https://www.linkedin.com/in/kevinjlan",
    label: "LinkedIn",
    icon: <FaLinkedinIn className="w-6 h-6" />,
  },
  {
    href: "https://instagram.com/kevinlannn",
    label: "Instagram",
    icon: <FaInstagram className="w-6 h-6" />,
  },
  {
    href: "/resume.pdf",
    label: "Resume",
    icon: <HiOutlineDocument className="w-6 h-6" />,
  },
];

const Hero: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full px-6">
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-5xl w-full space-y-12 lg:space-y-0 lg:space-x-20">
        {/* Left: Photo and Icons */}
        <div className="flex flex-col items-center space-y-6">
          <img
            src={profile}
            alt="Me (Kevin Lan)"
            className="rounded-full object-cover w-56 h-56 lg:w-72 lg:h-72 border-2 border-[#f5e9da] shadow-lg"
          />
          
          {/* Current Status - Casual */}
          <div className="bg-[#1a1b26] rounded-xl shadow-lg p-4 border border-[#414868]/20 text-center">
            <h3 className="text-[#f5e9da] font-semibold text-sm mb-3">currently...</h3>
            <div className="text-left space-y-2">
              <div className="flex items-start space-x-2">
                <span className="text-[#f5e9da] text-xs mt-1">•</span>
                <p className="text-[#a9b1d6] text-sm">
                  watching <a href="https://www.netflix.com/title/80192098" target="_blank" rel="noreferrer" className="underline hover:no-underline">dynasty</a> on netflix
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[#f5e9da] text-xs mt-1">•</span>
                <p className="text-[#a9b1d6] text-sm">
                  training for the <a href="https://www.runrocknroll.com/Events/San-Francisco" target="_blank" rel="noreferrer" className="underline hover:no-underline">summer breeze</a> half marathon!
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[#f5e9da] text-xs mt-1">•</span>
                <p className="text-[#a9b1d6] text-sm">
                  craving bitter caramel ice cream from <a href="https://www.pennysicecreamery.com/" target="_blank" rel="noreferrer" className="underline hover:no-underline">penny's</a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            {ICONS.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-[#565a6e] hover:text-[#f5e9da] focus:text-[#f5e9da] hover:scale-110 transition-all duration-200 p-2 rounded-full border border-transparent hover:border-[#f5e9da]/30 focus:border-[#f5e9da]/30"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        
        {/* Right: Content Box */}
        <div className="bg-[#1a1b26] rounded-2xl shadow-xl p-8 border border-[#414868]/20">
          <div className="flex flex-col items-center lg:items-start max-w-lg text-center lg:text-left">
            <h1 className="special font-bold text-[#f5e9da] leading-tight text-4xl lg:text-5xl mb-6 tracking-tight">
              hi there, i'm kevin!
            </h1>
            
            <div className="space-y-4">
              <p className="text-lg lg:text-xl text-[#a9b1d6] leading-relaxed">
                i'm a cs and economics student at uc berkeley currently building customer-facing tools at <a href="https://www.amazon.com" target="_blank" rel="noreferrer" className="underline hover:no-underline">amazon</a> (alexa comms) and <a href="https://www.serra.io" target="_blank" rel="noreferrer" className="underline hover:no-underline">serra</a> (24/7 ai recruiter). previously, i've worked in domains ranging from web3 infrastructure with <a href="https://magic.link" target="_blank" rel="noreferrer" className="underline hover:no-underline">magic labs</a>, educational platforms with <a href="https://www.bentley.com" target="_blank" rel="noreferrer" className="underline hover:no-underline">bentley systems</a>, and autonomous cybersecurity with the <a href="https://www.jhuapl.edu" target="_blank" rel="noreferrer" className="underline hover:no-underline">johns hopkins university apl</a>.
              </p>
              
              <p className="text-lg lg:text-xl text-[#a9b1d6] leading-relaxed">
                some of my other interests include research revolving around ai security, building agentic ai, and exploring the intersection between economics and technology.
              </p>
              
              <p className="text-lg lg:text-xl text-[#a9b1d6] leading-relaxed">
                in my free time, you'll catch me running (follow me on <a href="https://www.strava.com/athletes/42748905" target="_blank" rel="noreferrer" className="underline hover:no-underline">strava</a>!), playing badminton, or trying new foods around the bay area. feel free to reach out to me on any of my socials and i'd be more than happy to chat about anything!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
