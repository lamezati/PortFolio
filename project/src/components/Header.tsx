import React from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import TypewriterText from './animated/TypewriterText';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl">
            <TypewriterText />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com/in/leonelmezatio/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/lamezati" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#experience" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Experience</a>
              <a href="#projects" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#skills" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#contact" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;