import { Clock, Users, BookOpen, CheckCircle } from 'lucide-react';

export default function Workshop({onRegisterClick})
{
    return(
        <section id="workshop" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Trading Workshop</h2>
                    <p className="text-gray-300 text-xl">Comprehensive training to master the markets</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 grid-cols-1">


                    <div className="space-y-6">
                        <h3 className="text-white font-bold text-2xl">Course Overview</h3>
                        <p className="text-gray-300">Our intensive trading workshop is designed to take you from basics to advanced trading strategies. 
                        Whether you're a beginner or have some experience, this course will enhance your trading skills.</p>

                        <div className="grid grid-cols-2 gap-4">
                            
                            <div className="flex items-center gap-2 text-gray-300">
                                <Clock className="w-5 h-5 text-indigo-400"></Clock>
                                <span>12 Weeks</span>

                            </div>
                            
                            <div className="flex items-center gap-2 text-gray-300">
                                <Users className="w-5 h-5 text-indigo-400"></Users>
                                <span>Live Sessions</span>

                            </div>

                            <div className="flex items-center gap-2 text-gray-300">
                                <BookOpen className="w-5 h-5 text-indigo-400"></BookOpen>
                                <span>Study Material</span>

                            </div>

                            <div className="flex items-center gap-2 text-gray-300">
                                <CheckCircle className="w-5 h-5 text-indigo-400"></CheckCircle>
                                <span>Certificate</span>

                            </div>
                        </div>

                        <div className="spave-y-4">
                            <h4 className="text-white font-bold text-xl mb-2">What you will learn</h4>
                            <ul className="space-y-2">
                                {[  'Technical Analysis Fundamentals',
                                    'Chart Pattern Recognition',
                                    'Risk Management Strategies',
                                    'Psychology of Trading',
                                    'Live Market Analysis',
                                    'Portfolio Management', ].map((item,index)=>(
                                        <li key={index} className="flex items-center gap-2 text-gray-300">
                                            <CheckCircle className="w-4 h-4 text-indigo-400"></CheckCircle>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                            </ul>
                        </div>

                    </div>


                    <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-lg">
                            <h3 className="text-2xl font-bold text-white mb-6">Course Details</h3>
                            
                            <div className="space-y-6">
                                
                                <div>
                                    <h4 className="font-semibold mb-2 text-white">Duration</h4>
                                    <p className="text-gray-300">12 weeks with 2 sessions per week</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 text-white">Format</h4>
                                    <p className="text-gray-300">Live online sessions with recorded access</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 text-white">Requirements</h4>
                                    <p className="text-gray-300">Basic understanding of financial markets</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-2 text-white">Price</h4>
                                    <p className="text-3xl font-bold text-indigo-400">$999</p>
                                    <p className="text-gray-300">One time payment</p>
                                </div>

                                <button onClick={onRegisterClick} className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">Enroll Now</button>




                            </div>
                    </div>

                    
                    

                </div>
            </div>
            
        </section>
    )
}