
import { Mail, MapPin, Phone, Flare, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-950 rounded-t-[40px] mt-16 pt-10 pb-4 shadow-[0_-4px_20px_rgba(251,191,36,0.25)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="flex items-center text-2xl font-['Poppins'] font-bold mb-4">
              <Flare className="h-6 w-6 mr-2" /> Thrive Psychology
            </h3>
            <p className="text-amber-900/90 mb-4">
              Your go-to platform to find the best psychology programs based on your CUET-PG score. Personalized matches for your academic journey.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-['Poppins'] font-bold mb-4 text-amber-900/90">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-900/90 hover:text-amber-950 transition-colors">Home</a></li>
              <li><a href="#finder" className="text-amber-900/90 hover:text-amber-950 transition-colors">Find Programs</a></li>
              <li><a href="#results" className="text-amber-900/90 hover:text-amber-950 transition-colors">Results</a></li>
              <li><a href="https://undraw.co/" target="_blank" rel="noopener noreferrer" className="text-amber-900/90 hover:text-amber-950 transition-colors">Illustrations by unDraw</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div id="contact">
            <h4 className="text-xl font-['Poppins'] font-bold mb-4 text-amber-900/90">Contact Us</h4>
            <p className="text-amber-900/90 mb-2">
              Email: <a href="mailto:hello@thrivepsychology.com" className="font-semibold hover:text-amber-950 transition-colors">hello@thrivepsychology.com</a>
            </p>
            <p className="text-amber-900/90 mb-4">Connect with us:</p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/" target="_blank" aria-label="Twitter" rel="noopener noreferrer" className="bg-amber-950/10 p-2 rounded-full hover:bg-amber-950/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/" target="_blank" aria-label="Facebook" rel="noopener noreferrer" className="bg-amber-950/10 p-2 rounded-full hover:bg-amber-950/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/" target="_blank" aria-label="Instagram" rel="noopener noreferrer" className="bg-amber-950/10 p-2 rounded-full hover:bg-amber-950/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-amber-600/20 text-center">
          <p className="text-amber-900/90">
            &copy; {new Date().getFullYear()} Thrive Psychology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
