
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0055d3] text-white rounded-t-[40px] mt-16 pt-10 pb-4 shadow-[0_-4px_20px_rgba(0,85,211,0.25)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-['Poppins'] font-bold mb-4">CUET College Finder</h3>
            <p className="text-[#b3cdfa] mb-4">
              Your go-to platform to find the best colleges based on your CUET-PG score. Powered by passion and data.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-['Poppins'] font-bold mb-4 text-[#b3cdfa]">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#b3cdfa] hover:text-white transition-colors">Home</a></li>
              <li><a href="#finder" className="text-[#b3cdfa] hover:text-white transition-colors">Find Colleges</a></li>
              <li><a href="#results" className="text-[#b3cdfa] hover:text-white transition-colors">Results</a></li>
              <li><a href="https://undraw.co/" target="_blank" rel="noopener noreferrer" className="text-[#b3cdfa] hover:text-white transition-colors">Illustrations by unDraw</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div id="contact">
            <h4 className="text-xl font-['Poppins'] font-bold mb-4 text-[#b3cdfa]">Contact Us</h4>
            <p className="text-[#b3cdfa] mb-2">
              Email: <a href="mailto:support@cuetcollegefinder.com" className="font-semibold hover:text-white transition-colors">support@cuetcollegefinder.com</a>
            </p>
            <p className="text-[#b3cdfa] mb-2">Follow us on:</p>
            <div className="flex space-x-4 text-2xl">
              <a href="https://twitter.com/" target="_blank" aria-label="Twitter" rel="noopener noreferrer" className="text-[#b3cdfa] hover:text-white transition-colors">🐦</a>
              <a href="https://facebook.com/" target="_blank" aria-label="Facebook" rel="noopener noreferrer" className="text-[#b3cdfa] hover:text-white transition-colors">📘</a>
              <a href="https://instagram.com/" target="_blank" aria-label="Instagram" rel="noopener noreferrer" className="text-[#b3cdfa] hover:text-white transition-colors">📸</a>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-[#003b8e] text-center">
          <p className="text-[#b3cdfa]">
            &copy; {new Date().getFullYear()} CUET College Finder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
