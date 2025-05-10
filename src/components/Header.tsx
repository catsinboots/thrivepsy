
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0055d3] text-white z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/1118/1118158.png" 
              alt="Logo" 
              className="w-10 h-10 mr-4"
            />
            <a href="/" className="text-xl font-bold font-['Poppins'] tracking-wide">
              CUET College Finder
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <a href="#" className="px-3 py-2 text-sm font-medium text-white hover:text-white/80 transition-colors">
              Home
            </a>
            <a href="#finder" className="px-3 py-2 text-sm font-medium text-white hover:text-white/80 transition-colors">
              Find Colleges
            </a>
            <a href="#results" className="px-3 py-2 text-sm font-medium text-white hover:text-white/80 transition-colors">
              Results
            </a>
            <a href="#contact" className="px-3 py-2 text-sm font-medium text-white hover:text-white/80 transition-colors">
              Contact
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-white hover:text-white/80"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="pt-2 pb-3 space-y-1 px-4 bg-[#0055d3]/95 border-t border-white/20">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#003b8e] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#finder"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#003b8e] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Find Colleges
          </a>
          <a
            href="#results"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#003b8e] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Results
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#003b8e] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
