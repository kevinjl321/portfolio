import React, { Component } from 'react'
import "../index.css"

import {HiOutlineExternalLink} from "react-icons/hi"
import {AiFillGithub} from "react-icons/ai"

import UCSB from "../images/ucsb.jpg"
import Caltech from "../images/caltech.png"
import Edge from "../images/projectedge.png"
import Titanium from "../images/titanium.jpg"
import Antilles from "../images/antilles.jpg"
import Nautilus from "../images/nautilus.jpg"
import COVID from "../images/covid.png"
import Blog from "../images/blog.png"
import Weather from "../images/weather.png"
import Portfolio from "../images/portfolio.png"
import Tirone from "../images/tirone.jpeg"

export class Projects extends Component {
    render() {
        return (
            <section id="projects" className="flex flex-col max-w-md px-6 py-12 mx-auto sm:px-10 sp:px-10 md:px-8 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl sm:py-20 md:py-20 lg:py-20">
                <p className="special text-purple-300 font-semibold leading-snug text-left text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-header mb-8">
                    projects / experience
                </p>
                <div className="flex flex-wrap mx-3 md:px-3 xl:px-0 md:-mx-0 lg:-mx-3 md:mb-8">
                    <div className="w-full px-6 mb-12 md:w-1/2 md:px-3 lg:px-6 sm:mb-4 md:mb-4">
                        <div className="text-gray-300">
                            <div className="mb-6">
                                <a href="https://www.biomedscijournal.com/articles/abse-aid1015.pdf">
                                    <img src = {UCSB} className= "sm:w-4/5 transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 hover:-translate-y-1" alt="" />
                                </a>
                            </div>
                            <div>
                                <h4 className="mb-2 text-2xl font-bold md:text-2_5xl font-header">
                                    <a href="https://www.biomedscijournal.com/articles/abse-aid1015.pdf" className="">
                                        Student Researcher @ UCSB
                                        <HiOutlineExternalLink className="inline mb-1 ml-4 text-purple-200" />
                                    </a>
                                    <span className="inline mb-0 ml-1 mr-1 text-xl text-gray-400 font-body">
                                        |
                                    </span>
                                    <a href="https://github.com/kevinjl321/cxr-net" className="inline text-purple-200">
                                        <AiFillGithub className="inline mb-0 ml-1" />
                                    </a>
                                </h4>
                                <p className="block mb-6 dark:text-white">
                                    Architected convolutional neural network capable of accurately detecting COVID-19 from chest X-Rays. Worked under 
                                    PhD student Ryan Solgi; authored research paper and publish findings in scientific journal: Annals of Biomedical Science and Engineering.
                                </p>
                                <div className="flex flex-wrap">
                                    <span className="px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        Python
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        computer vision
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        neural networks
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        Jupyter Notebook
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        tensorflow
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-6 mb-12 md:w-1/2 md:px-3 lg:px-6 sm:mb-16 md:mb-24">
                        <div className="text-gray-300">
                            <div className="mb-6">
                                <img src = {Caltech} className= "sm:w-4/5 transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 hover:-translate-y-1" alt="" />
                            </div>
                            <div>
                                <h4 className="mb-2 text-2xl font-bold md:text-2_5xl font-header">
                                    Student Researcher @ Caltech
                                </h4>
                                <p className="block mb-6 dark:text-white">
                                    Researched machine learning algorithms and worked with Caltech professors and students. Created a program that could solve a 2-by-2 Rubik's cube
                                    in the least amount of moves possible.
                                </p>
                                <div className="flex flex-wrap">
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        Python
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        reinforcement learning
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        neural networks
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        Jupyter Notebook
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        tensorflow
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mx-3 md:px-3 xl:px-0 md:-mx-0 lg:-mx-3 md:mb-10">
                    <div className="w-full px-6 mb-12 md:w-1/2 md:px-3 lg:px-6 sm:mb-16 md:mb-24">
                            <div className="text-gray-300">
                                <div className="mb-6">
                                    <a href="https://kevinlan.me/" className="">
                                        <img src = {Portfolio} className= "sm:w-4/5 transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 hover:-translate-y-1" alt="" />
                                    </a>
                                </div>
                                <div>
                                    <h4 className="mb-2 text-2xl font-bold md:text-2_5xl font-header">
                                        <a href="https://kevinlan.me/" className="">
                                            Portfolio
                                            <HiOutlineExternalLink className="inline mb-1 ml-4 text-purple-200" />
                                        </a>
                                        <span className="inline mb-0 ml-1 mr-1 text-xl text-gray-400 font-body">
                                            |
                                        </span>
                                        <a href="https://github.com/kevinjl321/portfolio" className="inline text-purple-200">
                                            <AiFillGithub className="inline mb-0 ml-1" />
                                        </a>
                                    </h4>
                                    <p className="block mb-6 dark:text-white">
                                        My portfolio website (the website you're on right now!) showcasing some, but certainly not all, of my projects and experiences.
                                    </p>
                                    <div className="flex flex-wrap">
                                        <span className="px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                            HTML / CSS 
                                        </span>
                                        <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                            TypeScript
                                        </span>
                                        <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                            React.js
                                        </span>
                                        <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                            tailwindcss
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="w-full px-6 mb-12 md:w-1/2 md:px-3 lg:px-6 sm:mb-4 md:mb-4">
                        <div className="text-gray-300">
                            <div className="mb-6">
                                <a href="https://project-edge.org/">
                                    <img src = {Edge} className= "sm:w-4/5 transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 hover:-translate-y-1" alt="" />
                                </a>
                            </div>
                            <div>
                                <h4 className="mb-2 text-2xl font-bold md:text-2_5xl font-header">
                                    <a href="https://project-edge.org/" className="">
                                        Project Edge
                                        <HiOutlineExternalLink className="inline mb-1 ml-4 text-purple-200" />
                                    </a>
                                    <span className="inline mb-0 ml-1 mr-1 text-xl text-gray-400 font-body">
                                        |
                                    </span>
                                    <a href="https://github.com/kevinjl321/project-edge" className="inline text-purple-200">
                                        <AiFillGithub className="inline mb-0 ml-1" />
                                    </a>
                                </h4>
                                <p className="block mb-6 dark:text-white">
                                    Website for nonprofit organization and educational initiative Project Edge.
                                </p>
                                <div className="flex flex-wrap">
                                    <span className="px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        HTML / CSS / JS
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        React.js
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        tailwindcss
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-6 mb-12 md:w-1/2 md:px-3 lg:px-6 sm:mb-16 md:mb-24">
                        <div className="text-gray-300">
                            <div className="mb-6">
                                <a href="https://blog.project-edge.org/" className="">
                                    <img src = {Blog} className= "sm:w-4/5 transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 hover:-translate-y-1" alt="" />
                                </a>
                            </div>
                            <div>
                                <h4 className="mb-2 text-2xl font-bold md:text-2_5xl font-header">
                                    <a href="https://blog.project-edge.org/" className="">
                                        Project Edge Blog
                                        <HiOutlineExternalLink className="inline mb-1 ml-4 text-purple-200" />
                                    </a>
                                    <span className="inline mb-0 ml-1 mr-1 text-xl text-gray-400 font-body">
                                        |
                                    </span>
                                    <a href="https://github.com/kevinjl321/project-edge-blog" className="inline text-purple-200">
                                        <AiFillGithub className="inline mb-0 ml-1" />
                                    </a>
                                </h4>
                                <p className="block mb-6 dark:text-white">
                                    Blog for nonprofit organization and educational initiative Project Edge.
                                </p>
                                <div className="flex flex-wrap">
                                    <span className="px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        HTML / CSS / JS
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        React.js
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        Next.js
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        tailwindcss
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-6 mb-12 md:w-1/2 md:px-3 lg:px-6 sm:mb-16 md:mb-24">
                        <div className="text-gray-300">
                            <div className="mb-6">
                                <a href="https://github.com/kevinjl321/frc-scouting" className="">
                                    <img src = {Titanium} className= "sm:w-4/5 transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 hover:-translate-y-1" alt="" />
                                </a>
                            </div>
                            <div>
                                 <h4 className="mb-2 text-2xl font-bold md:text-2_5xl font-header">
                                    <a href="https://github.com/kevinjl321/frc-scouting" className="">
                                        Scouting App
                                        <HiOutlineExternalLink className="inline mb-1 ml-4 text-purple-200" />
                                    </a>
                                    <span className="inline mb-0 ml-1 mr-1 text-xl text-gray-400 font-body">
                                        |
                                    </span>
                                    <a href="https://github.com/kevinjl321/frc-scouting" className="inline text-purple-200">
                                        <AiFillGithub className="inline mb-0 ml-1" />
                                    </a>
                                </h4>
                                <p className="block mb-6 dark:text-white">
                                    App built to streamline the scouting process during FIRST Robotics competitions. Integrated with Google Sheets API and Cloud Services
                                    for ease of use.
                                </p>
                                <div className="flex flex-wrap">
                                    <span className="px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        Python
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        numpy
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        pandas
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        Google Cloud
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-6 mb-12 md:w-1/2 md:px-3 lg:px-6 sm:mb-16 md:mb-24">
                        <div className="text-gray-300">
                            <div className="mb-6">
                                <a href="https://github.com/FRC-Team-1160/2022-Rapid-React" className="">
                                    <img src = {Nautilus} className= "sm:w-4/5 transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 hover:-translate-y-1" alt="" />
                                </a>
                            </div>
                            <div>
                                 <h4 className="mb-2 text-2xl font-bold md:text-2_5xl font-header">
                                    <a href="https://github.com/FRC-Team-1160/2022-Rapid-React" className="">
                                        Nau[Ti]lus
                                        <HiOutlineExternalLink className="inline mb-1 ml-4 text-purple-200" />
                                    </a>
                                    <span className="inline mb-0 ml-1 mr-1 text-xl text-gray-400 font-body">
                                        |
                                    </span>
                                    <a href="https://github.com/FRC-Team-1160/2022-Rapid-React" className="inline text-purple-200">
                                        <AiFillGithub className="inline mb-0 ml-1" />
                                    </a>
                                </h4>
                                <p className="block mb-6 dark:text-white">
                                    Control system for Titanium Robotics (FRC 1160) 2022 competition robot, Nau[Ti]lus. Utilizes PID and computer vision to adaptively adjust turret, 
                                    triangulate target, and shoot cargo into lower/upper goal hubs with nearly 100% accuracy. Winner of 2022 Rockwell Automation Creativity Award and 
                                    placed 8th / 43 teams at 2022 Sacramento Regional.
                                </p>
                                <div className="flex flex-wrap">
                                    <span className="px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        Java
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        WPILib
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        OpenCV
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-6 mb-12 md:w-1/2 md:px-3 lg:px-6 sm:mb-16 md:mb-24">
                        <div className="text-gray-300">
                            <div className="mb-6">
                                <a href="https://github.com/FRC-Team-1160/2020-Infinite-Recharge" className="">
                                    <img src = {Antilles} className= "sm:w-4/5 transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 hover:-translate-y-1" alt="" />
                                </a>
                            </div>
                            <div>
                                 <h4 className="mb-2 text-2xl font-bold md:text-2_5xl font-header">
                                    <a href="https://github.com/FRC-Team-1160/2020-Infinite-Recharge" className="">
                                        An[Ti]lles
                                        <HiOutlineExternalLink className="inline mb-1 ml-4 text-purple-200" />
                                    </a>
                                    <span className="inline mb-0 ml-1 mr-1 text-xl text-gray-400 font-body">
                                        |
                                    </span>
                                    <a href="https://github.com/FRC-Team-1160/2020-Infinite-Recharge" className="inline text-purple-200">
                                        <AiFillGithub className="inline mb-0 ml-1" />
                                    </a>
                                </h4>
                                <p className="block mb-6 dark:text-white">
                                    Control system for Titanium Robotics (FRC 1160) 2020 competition robot, An[Ti]lles. Utilizes
                                    PID guided drive/mechanism operation and automated, computer vision based target detection system ("aimbot") that approximates exit velocity and motor RPM required
                                    to shoot cargo into hub given distance and angle.
                                </p>
                                <div className="flex flex-wrap">
                                    <span className="px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        Java
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        WPILib
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        OpenCV
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*
                    <div className="w-full px-6 mb-12 md:w-1/2 md:px-3 lg:px-6 sm:mb-16 md:mb-24">
                        <div className="text-gray-300">
                            <div className="mb-6">
                                <a href="https://github.com/FRC-Team-1160/Shooter-v3" className="">
                                    <img src = {Tirone} className= "sm:w-4/5 transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 hover:-translate-y-1" alt="" />
                                </a>
                            </div>
                            <div>
                                 <h4 className="mb-2 text-2xl font-bold md:text-2_5xl font-header">
                                    <a href="https://github.com/FRC-Team-1160/Shooter-v3" className="">
                                        [Ti]rone
                                        <HiOutlineExternalLink className="inline mb-1 ml-4 text-purple-200" />
                                    </a>
                                    <span className="inline mb-0 ml-1 mr-1 text-xl text-gray-400 font-body">
                                        |
                                    </span>
                                    <a href="https://github.com/FRC-Team-1160/Shooter-v3" className="inline text-purple-200">
                                        <AiFillGithub className="inline mb-0 ml-1" />
                                    </a>
                                </h4>
                                <p className="block mb-6 dark:text-white">
                                    Control system for Titanium Robotics signature T-shirt cannon, [Ti]rone. Utilizes
                                    simple joystick commands and adaptive turret powered by compressed air.
                                </p>
                                <div className="flex flex-wrap">
                                    <span className="px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        Java
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        WPILib
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}
                    <div className="w-full px-6 mb-12 md:w-1/2 md:px-3 lg:px-6 sm:mb-16 md:mb-24">
                        <div className="text-gray-300">
                            <div className="mb-6">
                                <a href="https://weather.kevinjl321.vercel.app/" className="">
                                    <img src = {Weather} className= "sm:w-4/5 transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 hover:-translate-y-1" alt="" />
                                </a>
                            </div>
                            <div>
                                <h4 className="mb-2 text-2xl font-bold md:text-2_5xl font-header">
                                    <a href="https://weather.kevinjl321.vercel.app/" className="">
                                        Weather App
                                        <HiOutlineExternalLink className="inline mb-1 ml-4 text-purple-200" />
                                    </a>
                                    <span className="inline mb-0 ml-1 mr-1 text-xl text-gray-400 font-body">
                                        |
                                    </span>
                                    <a href="https://github.com/kevinjl321/weather" className="inline text-purple-200">
                                        <AiFillGithub className="inline mb-0 ml-1" />
                                    </a>
                                </h4>
                                <p className="block mb-6 dark:text-white">
                                    Web app that retrieves weather conditions for cities around the world. Uses both Fahrenheit / Celsius for convenience,
                                    as well as symbols for easier readability.
                                </p>
                                <div className="flex flex-wrap">
                                    <span className="px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        HTML / CSS / JS
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        JSON / APIs
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        React.js
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        semantic-ui
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-6 mb-12 md:w-1/2 md:px-3 lg:px-6 sm:mb-16 md:mb-24">
                        <div className="text-gray-300">
                            <div className="mb-6">
                                <a href="https://covid.kevinjl321.vercel.app/" className="">
                                    <img src = {COVID} className= "sm:w-4/5 transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 hover:-translate-y-1" alt="" />
                                </a>
                            </div>
                            <div>
                                 <h4 className="mb-2 text-2xl font-bold md:text-2_5xl font-header">
                                    <a href="https://covid.kevinjl321.vercel.app/" className="">
                                        COVID-19 Visualizer
                                        <HiOutlineExternalLink className="inline mb-1 ml-4 text-purple-200" />
                                    </a>
                                    <span className="inline mb-0 ml-1 mr-1 text-xl text-gray-400 font-body">
                                        |
                                    </span>
                                    <a href="https://github.com/kevinjl321/covid" className="inline text-purple-200">
                                        <AiFillGithub className="inline mb-0 ml-1" />
                                    </a>
                                </h4>
                                <p className="block mb-6 dark:text-white">
                                    Web app that displays a live map of worldwide COVID-19 cases, recoveries, and deaths.
                                </p>
                                <div className="flex flex-wrap">
                                    <span className="px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        HTML / CSS / JS
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        JSON / APIs
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        React.js
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        Charts.js
                                    </span>
                                    <span className="ml-2 px-2 py-1 mb-2 text-gray-300 bg-gray-600 dark:bg-gray-800 rounded dark:text-gray-400">
                                        Material UI
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects
