import StockMarket from "../assets/StockMarket.png"
import { TrendingUp , Award , Users } from 'lucide-react'
export default function Hero()
{
    return(
        <section id="home" className="pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between py-20">
                    
                    <div className="md:w-1/2 text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Master the art of trading
                        </h1>
                        <p className="text-gray-200 text-xl mb-8">
                            Learn professional trading stratigies form industry experts and start your journey to financial freedom
                        </p>
                        <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">Start Learning Now</button>

                    </div>

                    <div className="md:w-1/2 mt-12 md:mt-0">
                        <img src={StockMarket} alt="Image" className="rounded-lg shadow-4xl"/>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">

                        <div className="backdrop-blur-lg bg-gray-800/50 rounded-lg text-white p-6">
                            <TrendingUp className="w-12 h-12 mb-4"></TrendingUp>
                            <h3 className="text-xl font-semibold mb-2">Expert Analysis</h3>
                            <p className="text-gray-300">Learn to analyse markets like a professional trader</p>
                        </div>

                        <div className="backdrop-blur-lg bg-gray-800/50 rounded-lg text-white p-6">
                            <Award className="w-12 h-12 mb-4"></Award>
                            <h3 className="text-xl font-semibold mb-2">Certified Course</h3>
                            <p className="text-gray-300">Get certified and boost your trading carrier</p>
                        </div>

                        <div className="backdrop-blur-lg bg-gray-800/50 rounded-lg text-white p-6">
                            <Users className="w-12 h-12 mb-4"></Users>
                            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                            <p className="text-gray-300">Join our community of scuessful traders</p>
                        </div>
                   
                </div>
            </div>
              
        </section>
    )
}