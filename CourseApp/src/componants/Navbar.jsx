import React from "react"
import { Menu } from "lucide-react"



export default function Navbar({onRegisterClick})
{
    return(
        <nav className="bg-gray-900/50 w-full top-0 backdrop-blur-md z-50 fixed">
            <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">

                    <div className="flex items-center">
                        <span className="text-xl font-bold text-white">TradePro</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white">Home</a>
                        <a href="#about" className="text-gray-300 hover:text-white">About us</a>
                        <a href="#workshop" className="text-gray-300 hover:text-white">Workshop</a>
                        <button onClick={onRegisterClick} className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">Register Now</button>
                    </div>

                    <div className="flex items-center md:hidden ">
                        <button className="text-white">
                            <Menu size={24}></Menu>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}