
import { Search, GraduationCap, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-28 pb-8 md:pt-32">
      <div className="flex flex-wrap md:flex-nowrap items-center gap-8 md:gap-16">
        {/* Left side - Text */}
        <div className="w-full md:w-1/2">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-fade-in">
            <span className="flex items-center">
              <GraduationCap className="mr-2 h-4 w-4" />
              #1 CUET College Finder Tool
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-[#0055d3] to-[#5584ff] bg-clip-text text-transparent">
            Discover Your Ideal College Match
          </h1>
          
          <p className="text-lg text-slate-700 max-w-lg mb-8">
            Enter your CUET-PG score and unlock a personalized list of elite colleges that match your academic profile. Make informed decisions about your academic future.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-[#0055d3] hover:bg-[#003b8e] text-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-300/30"
              onClick={() => {
                const element = document.getElementById('finder');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Search className="h-5 w-5" />
              Find Colleges Now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-[#0055d3] text-[#0055d3] hover:bg-blue-50 text-lg font-semibold transition-all flex items-center gap-2"
            >
              <BookOpen className="h-5 w-5" />
              Explore Programs
            </Button>
          </div>
          
          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs border-2 border-white">UN</div>
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs border-2 border-white">JM</div>
              <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs border-2 border-white">DU</div>
              <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center text-xs border-2 border-white">+9</div>
            </div>
            <p className="text-sm text-slate-600">
              <span className="font-semibold">12 top universities</span> added this month
            </p>
          </div>
        </div>
        
        {/* Right side - Modern 3D illustration */}
        <div className="w-full md:w-1/2 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
          <div className="relative z-10 bg-white rounded-2xl p-4 shadow-xl transform hover:-rotate-2 transition-transform duration-300">
            <div className="absolute -top-3 -right-3 bg-blue-600 text-white rounded-full p-2 shadow-lg">
              <Award className="h-5 w-5" />
            </div>
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Students celebrating graduation" 
              className="w-full h-auto rounded-lg shadow-md"
            />
            
            <div className="mt-4 p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm font-medium">CUET-PG Score Analysis</span>
              </div>
              <div className="mt-2 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 w-3/4"></div>
              </div>
              <div className="mt-2 flex justify-between text-xs text-gray-500">
                <span>Min: 165</span>
                <span>Your Score</span>
                <span>Max: 220</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: <Search className="h-6 w-6 text-blue-600" />,
            title: "Easy College Search",
            description: "Find colleges that match your CUET-PG score with just one click."
          },
          {
            icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
            title: "Compare Institutions",
            description: "Side-by-side comparison of colleges, cutoffs, and specializations."
          },
          {
            icon: <BookOpen className="h-6 w-6 text-blue-600" />,
            title: "Detailed Information",
            description: "Get comprehensive details about each institution and their programs."
          }
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
