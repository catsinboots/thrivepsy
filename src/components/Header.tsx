
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Flame, BookOpen } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Career Pathways", path: "/career-pathways" },
    { name: "College Database", path: "/colleges" },
    { name: "Entrance Exams", path: "/entrance-exams" },
    { name: "Syllabus", path: "/syllabus" },
    { name: "Courses", path: "/courses" },
    { name: "Resources", path: "/resources" },
    { name: "Support", path: "/support" }
  ];
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-amber-900/20 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Flame className="h-8 w-8 text-amber-500 mr-3" />
            <Link to="/" className="text-xl font-bold font-['Poppins'] tracking-wide text-white">
              Thrive <span className="text-amber-500">Psychology</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:ml-6 md:flex md:items-center md:space-x-2">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className="nav-link"
              >
                {link.name}
              </Link>
            ))}
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
              className="p-2 rounded-md text-gray-300 hover:text-amber-400"
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
        <div className="pt-2 pb-3 space-y-1 px-4 bg-black/95 backdrop-blur-md border-t border-amber-900/20">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-amber-900/20 hover:text-amber-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
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
