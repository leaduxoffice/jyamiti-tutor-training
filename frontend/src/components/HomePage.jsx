import React from "react";
import ApplicationForm from "./ApplicationForm";
import { Link } from 'react-router-dom';
import CarrierBanner from "./CarrierBanner";
import TeachingApproach from "./TeachingApproach";
const HomePage = () => {

    return (
        <>
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent -z-10"></div>

                <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">

                        {/* Right Column: Introduction Text */}
                        <div className="order-1 lg:order-1 px-2 sm:px-4 lg:px-8 xl:px-12">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8">Jyamiti <span className="gradient-text">Math Learning</span></h1>
                            <p className="text-lg md:text-xl lg:text-xl xl:text-2xl text-slate-400 mb-8 lg:mb-10 leading-relaxed">
                                Our vision is to grow together as a community of passionate teachers committed to excellence, innovation and meaningful math learning for every student
                            </p>



                            <div className="flex flex-wrap gap-4">
                                <a href="#apply" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-blue-500/20 text-base lg:text-lg">
                                    Join Program
                                </a>
                                <a href="https://www.jyamitimath.com" className="hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-blue-500/20 text-base lg:text-lg border-blue">
                                    Learn More
                                </a>

                            </div>
                        </div>

                        {/* Left Column: YouTube Video */}
                        <div className="order-2 lg:order-2 ">
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 -z-10"></div>
                                <iframe
                                    className="w-full h-full"
                                    src="http://www.youtube.com/embed/4Qj9YJjPjOM" // Replace with your actual YouTube video ID
                                    title="Jyamiti Math Learning Platform Demo"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
            
                <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">

                        <div className="space-y-12 px-2 sm:px-4 lg:px-8 xl:px-12">
                            <div>
                                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 lg:mb-4">The Journey</h2>
                                <p className="text-slate-400 text-lg lg:text-xl">Your path to becoming a certified Jyamiti Math Tutor.</p>
                            </div>

                            <div className="relative border-l-2 border-blue-500/30 ml-4 space-y-12">
                                <div className="relative pl-10">
                                    <div className="absolute -left-[11px] top-0 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                                    <h3 className="text-xl lg:text-2xl font-semibold flex items-center gap-2">
                                        <i data-lucide="users" className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400"></i> Webinar
                                    </h3>
                                    <p className="text-slate-400 mt-2 lg:mt-3 text-base lg:text-lg">
                                        Introduction to Jyamiti Math Learning System and Tutor training program.
                                        What we are! What we offer! What we need!
                                    </p>
                                </div>

                                <div className="relative pl-10">
                                    <div className="absolute -left-[11px] top-0 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                                    <h3 className="text-xl lg:text-2xl font-semibold flex items-center gap-2">
                                        <i data-lucide="book-open" className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400"></i> Training
                                    </h3>
                                    <p className="text-slate-400 mt-2 lg:mt-3 text-base lg:text-lg">
                                        Intensive workshop (8 sessions) covering advanced pedagogy, Jyamiti digital tools, and student psychology.
                                    </p>
                                </div>
                                <div className="relative pl-10">
                                    <div className="absolute -left-[11px] top-0 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                                    <h3 className="text-xl lg:text-2xl font-semibold flex items-center gap-2">
                                        <i data-lucide="users" className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400"></i> Interview
                                    </h3>
                                    <p className="text-slate-400 mt-2 lg:mt-3 text-base lg:text-lg">
                                        A 1-on-1 discovery session to assess your teaching style, math proficiency, and communication skills.
                                    </p>
                                </div>
                                <div className="relative pl-10">
                                    <div className="absolute -left-[11px] top-0 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                                    <h3 className="text-xl lg:text-2xl font-semibold flex items-center gap-2">
                                        <i data-lucide="award" className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400"></i> Placement
                                    </h3>
                                    <p className="text-slate-400 mt-2 lg:mt-3 text-base lg:text-lg">
                                        Receive your official certification and get onboarded to start teaching global students on our platform.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-6 sm:p-8 lg:p-10 xl:p-12 rounded-3xl shadow-2xl">
                            <ApplicationForm />
                        </div>
                    </div>
                </div>
            </section>

            <section id="carrier" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
            
                <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
                        <CarrierBanner />
                        <div className="p-6 sm:p-8 lg:p-10 xl:p-12 rounded-3xl shadow-2xl">
                            <TeachingApproach />
                        </div>
                    </div>
                </div>
            </section>


    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
    </div>

    <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-300 text-sm font-semibold rounded-full mb-4 border border-blue-500/20">
                Our Leadership
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Meet Our <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Visionary Team</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Driven by passion and expertise, our leaders are dedicated to transforming education through innovation and personalized guidance.
            </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 group-hover:border-blue-500/30 transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
                    <div className="relative mb-8">
                        <div className="w-48 h-48 mx-auto mb-6 relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity"></div>
                            <div className="relative w-44 h-44 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full p-1">
                                <img
                                    src="/Jpeg1.png"
                                    alt="Dilshad P"
                                    className="w-full h-full object-cover rounded-full border-4 border-slate-900"
                                />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center border-4 border-slate-900">
                                <span className="text-white text-lg">👑</span>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Dilshad P</h3>
                        <p className="text-blue-300 font-semibold mb-3">CEO & Co-founder</p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span className="text-sm text-blue-200">Visionary Leader</span>
                        </div>
                    </div>
                    <div className="border-t border-slate-700/50 pt-6">
                        <p className="text-slate-300">
                            Driving innovation and growth with 15+ years of educational expertise, transforming traditional learning into modern experiences.
                        </p>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 group-hover:border-purple-500/30 transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
                    <div className="relative mb-8">
                        <div className="w-48 h-48 mx-auto mb-6 relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity"></div>
                            <div className="relative w-44 h-44 mx-auto bg-gradient-to-br from-purple-500 to-pink-400 rounded-full p-1">
                                <img
                                    src="/jpeg2.png"
                                    alt="Anver Sadik K"
                                    className="w-full h-full object-cover rounded-full border-4 border-slate-900"
                                />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center border-4 border-slate-900">
                                <span className="text-white text-lg">🎓</span>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Anver Sadik K</h3>
                        <p className="text-purple-300 font-semibold mb-3">MSc, B.Ed • Chairman & Co-founder</p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span className="text-sm text-purple-200">Subject Expert</span>
                        </div>
                    </div>
                    <div className="border-t border-slate-700/50 pt-6">
                        <p className="text-slate-300">
                            Master's in Mathematics with B.Ed certification, specializing in curriculum development and advanced teaching methodologies.
                        </p>
                    </div>
                </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 group-hover:border-cyan-500/30 transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
                    <div className="relative mb-8">
                        <div className="w-48 h-48 mx-auto mb-6 relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity"></div>
                            <div className="relative w-44 h-44 mx-auto bg-gradient-to-br from-cyan-500 to-teal-400 rounded-full p-1">
                                <img
                                    src="/jpeg3.png"
                                    alt="Sigi Joseph"
                                    className="w-full h-full object-cover rounded-full border-4 border-slate-900"
                                />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center border-4 border-slate-900">
                                <span className="text-white text-lg">📚</span>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Sigi Joseph</h3>
                        <p className="text-cyan-300 font-semibold mb-3">B.Tech • Academic Coordinator</p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-full">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span className="text-sm text-cyan-200">Training Specialist</span>
                        </div>
                    </div>
                    <div className="border-t border-slate-700/50 pt-6">
                        <p className="text-slate-300">
                            Expert in tutor development and academic coordination, ensuring excellence in teaching standards and student success.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Stats Section */}
        

        {/* CTA Section */}
        <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-10 lg:p-12 overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full translate-x-20 translate-y-20"></div>
                
                <div className="relative max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500/20 rounded-full mb-8 border border-blue-500/30">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-blue-300 font-semibold">Join Our Elite Team</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Ready to Become a <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Jyamiti Tutor?</span>
                    </h2>
                    
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                        Transform your passion for mathematics into a rewarding career. Join our training program and become a certified tutor with industry-leading methodologies.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a 
                            href="#apply" 
                            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-2xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:transform hover:-translate-y-1"
                        >
                            <span className="relative z-10">Start Your Journey Today</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity"></div>
                        </a>
                        
                        <a 
                            href="https://www.jyamitimath.com" 
                            className="group px-8 py-4 bg-slate-800/50 text-white font-bold rounded-2xl border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300"
                        >
                            <span className="flex items-center gap-2">
                                Learn More
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </span>
                        </a>
                    </div>
                    
                    <div className="mt-8 text-sm text-slate-400">
                        <p>Limited spots available • Next cohort starts soon • Complete mentorship included</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


            <footer className="bg-slate-900 border-t border-slate-800 py-8 px-6">

                <div className="text-center">
                    <p className="text-slate-400 text-sm">
                        © {new Date().getFullYear()} Jyamiti Math Learning. All rights reserved.
                    </p>
                    <p className="text-slate-500 text-sm mt-1">
                        Empowering educators, inspiring students
                    </p>
                </div>

            </footer>
        </>
    );
}

export default HomePage