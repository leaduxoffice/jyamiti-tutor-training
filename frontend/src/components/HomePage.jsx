import React from "react";
import ApplicationForm from "./ApplicationForm";

const HomePage =()=>{
    
    return (
        <>
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent -z-10"></div>
        
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
                
              

                {/* Right Column: Introduction Text */}
                <div className="order-2 lg:order-1 px-2 sm:px-4 lg:px-8 xl:px-12">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8">Jyamiti <span className="gradient-text">Math Learning</span></h1>
                    <p className="text-lg md:text-xl lg:text-xl xl:text-2xl text-slate-400 mb-8 lg:mb-10 leading-relaxed">
                        Shape the future of mathematics. Join our elite training program designed to turn passionate educators into world-class math mentors. 
                        Master the Jyamiti methodology and inspire the next generation of thinkers.
                    </p>
                    
                   

                    <div className="flex flex-wrap gap-4">
                        <a href="#apply" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-blue-500/20 text-base lg:text-lg">
                            Join Program
                        </a>
                       
                    </div>
                </div>

                  {/* Left Column: YouTube Video */}
                <div className="order-1 lg:order-2 ">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 -z-10"></div>
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/d29WXSY4tNc" // Replace with your actual YouTube video ID
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
                                Intensive 4-week workshop covering advanced pedagogy, Jyamiti digital tools, and student psychology.
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
                    <ApplicationForm/>
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