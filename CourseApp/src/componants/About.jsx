import Professor from "../assets/Professor.png"

import { Star , BookOpen , Award} from 'lucide-react'

export default function About()
{
    return(
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg-px-8">
                <div className="text-center mb-16">
                    <h2 className="text-white font-bold text-3xl md:text-4xl mb-4">About your educator</h2>
                    <p className="text-xl text-gray-300">Meet your mentor in the trading journey</p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <img src={Professor} alt="Image" className="rounded-lg shadow-xl"/>
                    </div>

                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold text-white mb-4">John Anderson</h3>
                            <p className="text-gray-300 mb-6">With over 15 years of experience in financial markets, John has helped thousands of students 
                            master the art of trading. His unique approach combines technical analysis with market psychology 
                            to give you a comprehensive understanding of trading.</p>
                    

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-gray-800/50 p-3 rounded-full">
                                <Star className="w-6 h-6 text-indigo-400"></Star>
                            </div>

                            <div>
                                <h4 className="font-semibold text-white">15+ Years Experience</h4>
                                <p className="text-gray-300">Professional trading experience in global markets</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-gray-800/50 p-3 rounded-full">
                                <BookOpen className="w-6 h-6 text-indigo-400"></BookOpen>
                            </div>

                            <div>
                                <h4 className="font-semibold text-white">5000+ Students</h4>
                                <p className="text-gray-300">Successfully trained traders worldwide</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-gray-800/50 p-3 rounded-full">
                                <Award className="w-6 h-6 text-indigo-400"></Award>
                            </div>

                            <div>
                                <h4 className="font-semibold text-white">Certified Expert</h4>
                                <p className="text-gray-300">Licensed and certified trading professional</p>
                            </div>
                        </div>

                    </div>
                    </div>



                </div>



            </div>
        </section>
    )

}
