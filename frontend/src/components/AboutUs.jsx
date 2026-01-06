import { Divide } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Empowering students to master mathematics through innovative teaching methods and personalized learning experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="col-12 gap-12 mb-16">
          {/* Left Column - Our Story */}
          <div>
            <h2 className="text-3xl font-bold text-slate-400  mb-6">Our Story</h2>
            <div className="space-y-4">
              <p className="text-slate-400">
                Founded in 2015, <span className="font-bold text-slate-400">Jyamiti Math Learning</span> began with a simple mission: to make mathematics accessible, engaging, and enjoyable for all students.
            
                Our name "Jyamiti" comes from the Sanskrit word for geometry, reflecting our commitment to building strong foundational understanding in all mathematical disciplines.
             
                What started as a small tutoring center has grown into a comprehensive online learning platform serving thousands of students worldwide, from elementary school through college level mathematics.
              </p>
            </div>
            
            {/* Stats */}
            
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Our Teaching Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-xl shadow-lg border-t-4 border-blue-500">
              <div className="text-slate-600 text-3xl mb-4">1</div>
              <h3 className="text-xl font-bold text-slate-300 mb-3">Personalized Learning</h3>
              <p className="text-slate-400">
                Customized lesson plans tailored to each student's learning style, pace, and academic goals.
              </p>
            </div>
            <div className="glass p-8 rounded-xl shadow-lg border-t-4 border-green-500">
              <div className="text-green-600 text-3xl mb-4">2</div>
              <h3 className="text-xl font-bold text-slate-300 mb-3">Conceptual Understanding</h3>
              <p className="text-slate-400">
                We focus on building strong conceptual foundations rather than rote memorization of formulas.
              </p>
            </div>
            <div className="glass p-8 rounded-xl shadow-lg border-t-4 border-purple-500">
              <div className="text-purple-600 text-3xl mb-4">3</div>
              <h3 className="text-xl font-bold text-slate-300 mb-3">Interactive Sessions</h3>
              <p className="text-slate-400">
                Live interactive classes with real-time problem solving, quizzes, and engaging activities.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Meet Our Expert Instructors</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl">
                DP
              </div>
              <h3 className="font-bold text-xl">Dilshad P</h3>
              <p className="text-slate-600 mb-2">CEO & Co-founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl">
                AS
              </div>
              <h3 className="font-bold text-xl">Anver Sadik K</h3>
              <p className="text-slate-600 mb-2">MSc, B.Ed</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl">
                SJ
              </div>
              <h3 className="font-bold text-xl">Sigi Joseph</h3>
              <p className="text-slate-600 mb-2">Academic Coordinator & Tutor Training Head</p>
            </div>
           
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-center text-white mb-10">
          <h2 className="text-3xl font-bold mb-4">Ready to be a Mathematics Tutor?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the Team to build a successfull carrier.
          </p>
          <Link to='/'>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="bg-white text-slate-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300">
              Join Our Training Program
            </div>
          </div>
          </Link>
        </div>
      </main>

      {/* Footer */}
     
    </div>
  );
};

export default AboutUs;