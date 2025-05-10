
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-xl font-bold text-primary">
              YourBrand
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <a href="#features" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#about" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#testimonials" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button size="sm">
              Get Started
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
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
        <div className="pt-2 pb-3 space-y-1 px-4 bg-background border-t border-border">
          <a
            href="#features"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#testimonials"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <div className="pt-4">
            <Button className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
