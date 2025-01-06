import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
      <div className="flex items-center gap-3">
        <Mail className="w-5 h-5 text-blue-600" />
        <a href="mailto:lamezati@ncsu.edu" className="text-gray-600 hover:text-blue-600">
          lamezati@ncsu.edu
        </a>
      </div>
      <div className="flex items-center gap-3">
        <Linkedin className="w-5 h-5 text-blue-600" />
        <a 
          href="https://www.linkedin.com/in/leonelmezatio/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600"
        >
          LinkedIn Profile
        </a>
      </div>
      <div className="flex items-center gap-3">
        <Github className="w-5 h-5 text-blue-600" />
        <a 
          href="https://github.com/lamezati" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600"
        >
          GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;