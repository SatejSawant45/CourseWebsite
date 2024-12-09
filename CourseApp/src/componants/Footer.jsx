
import {  Mail  } from 'lucide-react';

export default function Footer()
{
    return(
        <footer className="border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">TradePro</h3>
                        <p className="text-gray-400">Empowering traders with professional education and market insights.</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick links</h4>
                        <ul className='sapce-y-2'>
                            <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-white">About us</a></li>
                            <li><a href="#workshop" className="text-gray-400 hover:text-white">Workshop</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Connect with us</h4>
                        <a href="#" className="text-gray-400 hover:text-white"><Mail size={20}></Mail></a>
                    </div>

                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} TradePro. All rights reserved.</p>
                </div>

            </div>
            
        </footer>
        
    )
}