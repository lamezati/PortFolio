import React, { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if the device is mobile based on screen width
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  const openResume = () => {
    window.open('https://drive.google.com/file/d/1HC0tKqEOhk8EY4Xy5Vg0MJ8ac7sXuhCh/view?usp=sharing', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile picture with conditional styling */}
          <div className="mb-8">
            <img
              src={import.meta.env.BASE_URL + 'profile_picture.jpg'} 
              alt="Leonel Mezatio"
              className={`w-40 h-40 rounded-full mx-auto object-cover border-4 border-white shadow-lg ${!isMobile ? 'transition-all duration-300' : ''}`}
              style={!isMobile && isHovered ? { transform: 'scale(1.1)' } : {}}
              onMouseEnter={() => !isMobile && setIsHovered(true)}
              onMouseLeave={() => !isMobile && setIsHovered(false)}
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm Leonel Mezatio
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Cybersecurity Student & IT Professional
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Currently pursuing a Bachelor's in Computer Science with a focus on Cyber Security at North Carolina State University.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openResume}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              View My Resume <FileText className="w-4 h-4" />
            </button>
            <a
              href="#contact"
              className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;