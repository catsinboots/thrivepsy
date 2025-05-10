
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Left side - Text */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Building beautiful websites 
              <span className="text-primary"> made simple</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Create stunning, responsive websites with our intuitive platform. No coding required.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="hero-button">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="hero-button">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-2 shadow-lg">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
                    alt="Website dashboard" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary/10 w-40 h-40 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 bg-primary/10 w-24 h-24 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
