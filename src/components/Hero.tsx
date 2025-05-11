
import { Search, GraduationCap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      className="pt-28 pb-16 md:pt-32 bg-cover bg-center relative"
      style={{ backgroundImage: "linear-gradient(rgba(42, 115, 204, 0.85), rgba(0, 86, 210, 0.85)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-coursera-navy/90 to-coursera-blue/70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-white text-coursera-blue px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-md">
            <span className="flex items-center">
              <GraduationCap className="mr-2 h-4 w-4" />
              #1 CUET Program Matching Platform
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white font-heading">
            Discover Your Perfect <span className="text-coursera-lightBlue">Psychology Program</span>
          </h1>
          
          <p className="text-lg text-white opacity-90 max-w-2xl mx-auto mb-8">
            Enter your CUET-PG score and unlock a personalized list of psychology programs that match your academic profile and career goals.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-coursera-blue text-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg"
              onClick={() => {
                const element = document.getElementById('finder');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Search className="h-5 w-5" />
              Find Programs Now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white/10 text-lg font-semibold transition-all flex items-center gap-2"
            >
              <BookOpen className="h-5 w-5" />
              Explore Resources
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full bg-coursera-lightBlue flex items-center justify-center text-white text-xs border-2 border-white">UN</div>
              <div className="w-8 h-8 rounded-full bg-coursera-blue flex items-center justify-center text-white text-xs border-2 border-white">JM</div>
              <div className="w-8 h-8 rounded-full bg-coursera-darkBlue flex items-center justify-center text-white text-xs border-2 border-white">DU</div>
              <div className="w-8 h-8 rounded-full bg-white text-coursera-blue flex items-center justify-center text-xs border-2 border-white">+9</div>
            </div>
            <p className="text-sm text-white">
              <span className="font-semibold">12 top universities</span> added this month
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Search className="h-6 w-6 text-coursera-blue" />,
              title: "Easy Program Search",
              description: "Find psychology programs that match your CUET-PG score with just one click."
            },
            {
              icon: <GraduationCap className="h-6 w-6 text-coursera-blue" />,
              title: "Compare Specializations",
              description: "Side-by-side comparison of programs, cutoffs, and psychology specializations."
            },
            {
              icon: <BookOpen className="h-6 w-6 text-coursera-blue" />,
              title: "Career Guidance",
              description: "Get comprehensive details about each program and potential career paths."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-coursera-lightBlue/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-coursera-navy">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
