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
        

       

        {/* CTA Section */}
        
      </main>

      {/* Footer */}
     
    </div>
  );
};

export default AboutUs;