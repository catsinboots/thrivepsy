
import { Mail, MapPin, Phone, Flame, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-md text-gray-300 rounded-t-[40px] mt-16 pt-10 pb-4 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] border-t border-amber-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="flex items-center text-2xl font-['Poppins'] font-bold mb-4 text-white">
              <Flame className="h-6 w-6 text-amber-500 mr-2" /> Thrive Psychology
            </h3>
            <p className="text-gray-400 mb-4">
              Your go-to platform to find the best psychology programs and build your career path from Class 12 to PhD and beyond.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-['Poppins'] font-bold mb-4 text-amber-500">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/career-pathways" className="text-gray-400 hover:text-amber-400 transition-colors">Career Pathways</Link></li>
              <li><Link to="/colleges" className="text-gray-400 hover:text-amber-400 transition-colors">College Database</Link></li>
              <li><Link to="/entrance-exams" className="text-gray-400 hover:text-amber-400 transition-colors">Entrance Exams</Link></li>
              <li><Link to="/syllabus" className="text-gray-400 hover:text-amber-400 transition-colors">Syllabus Archive</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div id="contact">
            <h4 className="text-xl font-['Poppins'] font-bold mb-4 text-amber-500">Contact Us</h4>
            <p className="text-gray-400 mb-2">
              Email: <a href="mailto:hello@thrivepsychology.com" className="font-semibold text-amber-400 hover:text-amber-300 transition-colors">hello@thrivepsychology.com</a>
            </p>
            <p className="text-gray-400 mb-4">Connect with us:</p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/" target="_blank" aria-label="Twitter" rel="noopener noreferrer" className="bg-amber-900/10 p-2 rounded-full hover:bg-amber-900/20 transition-colors">
                <Twitter className="h-5 w-5 text-amber-400" />
              </a>
              <a href="https://facebook.com/" target="_blank" aria-label="Facebook" rel="noopener noreferrer" className="bg-amber-900/10 p-2 rounded-full hover:bg-amber-900/20 transition-colors">
                <Facebook className="h-5 w-5 text-amber-400" />
              </a>
              <a href="https://instagram.com/" target="_blank" aria-label="Instagram" rel="noopener noreferrer" className="bg-amber-900/10 p-2 rounded-full hover:bg-amber-900/20 transition-colors">
                <Instagram className="h-5 w-5 text-amber-400" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-amber-900/20 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Thrive Psychology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
