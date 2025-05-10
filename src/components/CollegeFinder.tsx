
import { useState, FormEvent, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ChevronRight, Info } from 'lucide-react';
import { toast } from 'sonner';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CollegeFinderProps {
  onSearch: (score: number) => void;
}

const CollegeFinder = ({ onSearch }: CollegeFinderProps) => {
  const [score, setScore] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedInput, setFocusedInput] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Animation effect when component mounts
  useEffect(() => {
    if (inputRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(inputRef.current);
      return () => observer.disconnect();
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const parsedScore = parseInt(score, 10);
    
    if (score.trim() === '') {
      toast.error("Please enter your CUET-PG score");
      return;
    }
    
    if (isNaN(parsedScore)) {
      toast.error("Please enter a valid number");
      return;
    }
    
    if (parsedScore < 0 || parsedScore > 1000) {
      toast.error("Score must be between 0 and 1000");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate loading
    setTimeout(() => {
      onSearch(parsedScore);
      setIsSubmitting(false);
      toast.success(`Showing colleges for score: ${parsedScore}`);
      
      // Scroll to results
      const resultsElement = document.getElementById('results');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 600);
  };

  return (
    <section 
      id="finder" 
      className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-10 rounded-3xl shadow-lg mb-12 transform transition-all"
      ref={inputRef}
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
            <Search className="h-4 w-4 text-white" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Find Your College Match</h2>
        </div>
        
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4 relative"
        >
          <div className={`relative flex-1 w-full transition-all duration-200 ${focusedInput ? 'transform scale-105' : ''}`}>
            <label 
              htmlFor="scoreInput" 
              className="font-semibold text-gray-700 text-lg mb-2 block"
            >
              Your CUET-PG Score:
            </label>
            <div className="relative">
              <Input
                id="scoreInput"
                ref={inputRef}
                type="number"
                min={0}
                max={1000}
                placeholder="e.g. 210"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                onFocus={() => setFocusedInput(true)}
                onBlur={() => setFocusedInput(false)}
                className="border-2 border-blue-300 rounded-xl p-5 text-lg w-full focus:border-blue-600 focus:ring-4 focus:ring-blue-200 transition-all pr-12 shadow-sm"
                aria-label="Enter your CUET-PG score"
              />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Info className="h-5 w-5 text-blue-500 cursor-help" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Enter your score from the CUET-PG exam (0-1000)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          
          <div className="hidden sm:block self-end">
            <ChevronRight className="h-6 w-6 text-gray-400" />
          </div>
          
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl py-5 px-8 transition-all duration-300 w-full sm:w-auto self-end shadow-lg shadow-blue-200 flex items-center gap-2 disabled:bg-blue-400"
          >
            {isSubmitting ? (
              <>
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Searching...</span>
              </>
            ) : (
              <>
                <Search className="h-5 w-5" />
                <span>Find Colleges</span>
              </>
            )}
          </Button>
        </form>
        
        <div className="mt-6 text-sm text-gray-500 flex items-center gap-2">
          <div className="flex-shrink-0">
            <Info className="h-4 w-4 text-blue-500" />
          </div>
          <p>We have data for over 500+ colleges and universities across India accepting CUET-PG scores.</p>
        </div>
      </div>
    </section>
  );
};

export default CollegeFinder;
