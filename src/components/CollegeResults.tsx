
import { College } from "@/types/college";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CollegeResultsProps {
  colleges: College[];
  score: number | null;
  onViewDetails: (college: College) => void;
}

const CollegeResults = ({ colleges, score, onViewDetails }: CollegeResultsProps) => {
  return (
    <div id="results">
      {score !== null && (
        <div className="text-center font-['Poppins'] text-xl font-bold text-[#0055d3] mb-8">
          Showing {colleges.length} colleges for CUET-PG score {score}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {colleges.map((college, index) => (
          <article 
            key={index} 
            className="bg-white rounded-2xl p-5 shadow-lg border-2 border-transparent hover:border-[#0055d3] transition-all hover:transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
          >
            <CardTitle className="font-['Poppins'] text-lg text-[#0055d3] mb-2">
              {college["College Name"]}
            </CardTitle>
            
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-[#b3cdfa] text-[#0055d3] font-semibold px-3 py-1 rounded-xl text-sm whitespace-nowrap">
                {college["Course Type"]}
              </span>
              <span className="bg-[#b3cdfa] text-[#0055d3] font-semibold px-3 py-1 rounded-xl text-sm whitespace-nowrap">
                {college["Specialization"]}
              </span>
              <span className="bg-[#b3cdfa] text-[#0055d3] font-semibold px-3 py-1 rounded-xl text-sm whitespace-nowrap">
                {college["Location (City, State)"]}
              </span>
            </div>
            
            <div className="mb-3">
              <span className="inline-block bg-[#0055d3] text-white font-bold px-4 py-1 rounded-xl shadow-md">
                Cutoff: {college["2024 CUET-PG Cutoff (Gen)"] || 'N/A'}
              </span>
            </div>
            
            <div className="mt-4">
              <Button 
                onClick={() => onViewDetails(college)}
                className="bg-[#0055d3] text-white font-['Poppins'] font-bold rounded-xl w-full hover:bg-[#003b8e] shadow-lg"
              >
                View Details
              </Button>
            </div>
          </article>
        ))}
        
        {colleges.length === 0 && score !== null && (
          <div className="col-span-full text-center text-gray-500 text-lg">
            No colleges found for this score.
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegeResults;
