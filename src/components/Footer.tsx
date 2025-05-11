
import { Mail, MapPin, Phone, BookOpen, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 pt-12 pb-6 shadow-sm border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="flex items-center text-2xl font-heading font-bold mb-4 text-coursera-black">
              Thrive <span className="text-coursera-blue ml-1">Psychology</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Your go-to platform to find the best psychology programs and build your career path from Class 12 to PhD and beyond.
            </p>
            <p className="text-gray-600 mb-4">
              We help you navigate the complex landscape of psychology education and career options with expert guidance and comprehensive resources.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-heading font-bold mb-4 text-coursera-blue">Quick Links</h4>
            <div className="grid grid-cols-2">
              <div>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-600 hover:text-coursera-blue transition-colors">Home</Link></li>
                  <li><Link to="/career-pathways" className="text-gray-600 hover:text-coursera-blue transition-colors">Career Pathways</Link></li>
                  <li><Link to="/colleges" className="text-gray-600 hover:text-coursera-blue transition-colors">College Database</Link></li>
                  <li><Link to="/entrance-exams" className="text-gray-600 hover:text-coursera-blue transition-colors">Entrance Exams</Link></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li><Link to="/syllabus" className="text-gray-600 hover:text-coursera-blue transition-colors">Syllabus Archive</Link></li>
                  <li><Link to="/courses" className="text-gray-600 hover:text-coursera-blue transition-colors">Courses</Link></li>
                  <li><Link to="/resources" className="text-gray-600 hover:text-coursera-blue transition-colors">Resources</Link></li>
                  <li><Link to="/support" className="text-gray-600 hover:text-coursera-blue transition-colors">Support</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div id="contact">
            <h4 className="text-xl font-heading font-bold mb-4 text-coursera-blue">Contact Us</h4>
            <p className="text-gray-600 mb-2">
              Email: <a href="mailto:hello@thrivepsychology.com" className="font-semibold text-coursera-blue hover:underline transition-colors">hello@thrivepsychology.com</a>
            </p>
            <p className="text-gray-600 mb-4">Connect with us:</p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/" target="_blank" aria-label="Twitter" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Twitter className="h-5 w-5 text-coursera-blue" />
              </a>
              <a href="https://facebook.com/" target="_blank" aria-label="Facebook" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Facebook className="h-5 w-5 text-coursera-blue" />
              </a>
              <a href="https://instagram.com/" target="_blank" aria-label="Instagram" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Instagram className="h-5 w-5 text-coursera-blue" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-gray-600 mb-2">Subscribe to our newsletter:</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 border border-gray-300 rounded-l-md flex-1 focus:outline-none focus:ring-1 focus:ring-coursera-blue focus:border-coursera-blue"
                />
                <button className="bg-coursera-blue text-white px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-200 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Thrive Psychology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
