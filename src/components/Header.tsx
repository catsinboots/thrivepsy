
import { useState } from 'react';
import { Menu, X, Flare, BookOpen } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b border-amber-100 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Flare className="h-8 w-8 text-amber-500 mr-3" />
            <a href="/" className="text-xl font-bold font-['Poppins'] tracking-wide text-amber-950">
              Thrive <span className="text-amber-500">Psychology</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <a href="#" className="px-3 py-2 text-sm font-medium text-amber-900 hover:text-amber-600 transition-colors">
              Home
            </a>
            <a href="#finder" className="px-3 py-2 text-sm font-medium text-amber-900 hover:text-amber-600 transition-colors">
              Find Programs
            </a>
            <a href="#results" className="px-3 py-2 text-sm font-medium text-amber-900 hover:text-amber-600 transition-colors">
              Results
            </a>
            <a href="#contact" className="px-3 py-2 text-sm font-medium text-amber-900 hover:text-amber-600 transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="hidden md:flex md:items-center">
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-amber-950 rounded-full flex items-center gap-1.5 pr-6 ml-4"
            >
              <BookOpen className="h-4 w-4" />
              <span>Free Resources</span>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-amber-900 hover:text-amber-600"
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
        <div className="pt-2 pb-3 space-y-1 px-4 bg-white/95 border-t border-amber-100">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-amber-900 hover:bg-amber-50 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#finder"
            className="block px-3 py-2 rounded-md text-base font-medium text-amber-900 hover:bg-amber-50 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Find Programs
          </a>
          <a
            href="#results"
            className="block px-3 py-2 rounded-md text-base font-medium text-amber-900 hover:bg-amber-50 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Results
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-amber-900 hover:bg-amber-50 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <div className="px-3 py-3">
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-amber-950 rounded-full w-full flex items-center justify-center gap-1.5"
            >
              <BookOpen className="h-4 w-4" />
              <span>Free Resources</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
