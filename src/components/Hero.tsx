import React from 'react';
import { FileText } from 'lucide-react';

const Hero = () => {
  const openResume = () => {
    // Using your actual Google Drive share link
    const googleDriveLink = 'https://drive.google.com/file/d/1cxXezKjRAqjIO0Sa4n6YwYbbvRAFgefq/view?usp=sharing';
    window.open(googleDriveLink, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile picture - larger size on desktop with hover effect */}
          <div className="mb-8 inline-block">
            <div className="relative overflow-hidden rounded-full mx-auto border-4 border-white shadow-lg hover:shadow-xl transition-all duration-300">
              <img
                src="https://raw.githubusercontent.com/lamezati/PortFolio/main/public/profile_picture.jpg"
                alt="Leonel Mezatio"
                className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover transform transition-transform duration-500 md:hover:scale-110"
              />
            </div>
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