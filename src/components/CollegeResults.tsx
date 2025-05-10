
import { useState, useEffect } from "react";
import { College } from "@/types/college";
import { Button } from "@/components/ui/button";
import { Filter, Map, Star, Share2, List, Grid, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

interface CollegeResultsProps {
  colleges: College[];
  score: number | null;
  onViewDetails: (college: College) => void;
}

const CollegeResults = ({ colleges, score, onViewDetails }: CollegeResultsProps) => {
  const [isGridView, setIsGridView] = useState(true);
  const [displayedColleges, setDisplayedColleges] = useState<College[]>([]);
  const [filterType, setFilterType] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"highToLow" | "lowToHigh">("highToLow");
  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 6;

  useEffect(() => {
    // Apply filters and sorting
    let filtered = [...colleges];
    
    if (filterType !== "all") {
      filtered = filtered.filter(college => college["Course Type"] === filterType);
    }
    
    // Sort by cutoff
    filtered = filtered.sort((a, b) => {
      const aCutoff = Number(a["2024 CUET-PG Cutoff (Gen)"].replace(/\D/g, ''));
      const bCutoff = Number(b["2024 CUET-PG Cutoff (Gen)"].replace(/\D/g, ''));
      return sortOrder === "highToLow" ? bCutoff - aCutoff : aCutoff - bCutoff;
    });
    
    setDisplayedColleges(filtered);
  }, [colleges, filterType, sortOrder]);

  // Get unique course types for filter
  const courseTypes = colleges.length > 0 
    ? Array.from(new Set(colleges.map(college => college["Course Type"])))
    : [];

  const visibleColleges = showAll ? displayedColleges : displayedColleges.slice(0, initialDisplayCount);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div id="results" className="mb-16">
      {score !== null && (
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {displayedColleges.length > 0 ? (
              <>Found <span className="text-blue-600">{displayedColleges.length} colleges</span> for your score</>
            ) : (
              "No colleges found for your score"
            )}
          </h2>
          <p className="text-gray-500">
            {displayedColleges.length > 0 
              ? `Your CUET-PG score of ${score} meets the cutoff criteria for these institutions` 
              : "Try searching with a different score to find matching colleges"}
          </p>
        </div>
      )}

      {displayedColleges.length > 0 && (
        <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex flex-wrap justify-between items-center gap-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setFilterType("all")} className={filterType === "all" ? "bg-blue-50" : ""}>
                  All Course Types
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {courseTypes.map((type, i) => (
                  <DropdownMenuItem 
                    key={i}
                    onClick={() => setFilterType(type)}
                    className={filterType === type ? "bg-blue-50" : ""}
                  >
                    {type}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  <span>Sort</span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem 
                  onClick={() => setSortOrder("highToLow")}
                  className={sortOrder === "highToLow" ? "bg-blue-50" : ""}
                >
                  Cutoff: High to Low
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setSortOrder("lowToHigh")}
                  className={sortOrder === "lowToHigh" ? "bg-blue-50" : ""}
                >
                  Cutoff: Low to High
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* View switcher */}
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsGridView(true)}
              className={`${isGridView ? 'bg-white shadow-sm' : ''} transition-all`}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsGridView(false)}
              className={`${!isGridView ? 'bg-white shadow-sm' : ''} transition-all`}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      
      <AnimatePresence>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className={isGridView 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "flex flex-col gap-4"
          }
        >
          {visibleColleges.map((college, index) => (
            <motion.article 
              key={index} 
              variants={itemVariants}
              className={`bg-white rounded-xl border border-transparent ${
                isGridView 
                  ? "p-6 shadow hover:shadow-lg hover:border-blue-200 transition-all hover:transform hover:-translate-y-1"
                  : "p-4 shadow-sm hover:shadow hover:border-blue-100 transition-all flex items-center gap-4"
              }`}
            >
              {!isGridView && (
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-xl">
                    {college["2024 CUET-PG Cutoff (Gen)"] || 'N/A'}
                  </span>
                </div>
              )}
              
              <div className={`${!isGridView ? "flex-1" : ""}`}>
                <div className={`flex items-center justify-between ${!isGridView ? "mb-1" : "mb-3"}`}>
                  <h3 className={`font-bold text-gray-800 ${!isGridView ? "text-lg" : "text-xl mb-1"}`}>
                    {college["College Name"]}
                  </h3>
                  {isGridView && (
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Share2 className="h-4 w-4 text-gray-400 hover:text-blue-600" />
                    </Button>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    {college["Course Type"]}
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    {college["Specialization"]}
                  </Badge>
                  <Badge variant="outline" className="bg-gray-50 text-gray-700 hover:bg-gray-100 flex items-center gap-1">
                    <Map className="h-3 w-3" />
                    {college["Location (City, State)"]}
                  </Badge>
                </div>
                
                {isGridView && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">CUET-PG Cutoff:</span>
                      <span className="text-lg font-bold text-blue-700">
                        {college["2024 CUET-PG Cutoff (Gen)"] || 'N/A'}
                      </span>
                    </div>
                  </div>
                )}
                
                <div className={`${!isGridView ? "flex items-center justify-between" : ""}`}>
                  <Button 
                    onClick={() => onViewDetails(college)}
                    variant={isGridView ? "default" : "outline"}
                    className={`
                      ${isGridView 
                        ? "bg-blue-600 hover:bg-blue-700 text-white w-full" 
                        : "border-blue-200 text-blue-700 hover:bg-blue-50"}
                    `}
                  >
                    View Details
                  </Button>
                  
                  {!isGridView && (
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 mr-2">Cutoff:</span>
                        <span className="font-bold text-blue-700">
                          {college["2024 CUET-PG Cutoff (Gen)"] || 'N/A'}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Share2 className="h-4 w-4 text-gray-400 hover:text-blue-600" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
      
      {displayedColleges.length > initialDisplayCount && !showAll && (
        <div className="text-center mt-10">
          <Button 
            onClick={() => setShowAll(true)}
            variant="outline"
            className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-5"
          >
            Show All {displayedColleges.length} Colleges
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
      
      {displayedColleges.length === 0 && score !== null && (
        <div className="text-center p-12 bg-gray-50 rounded-xl">
          <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
            <Search className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No Colleges Found</h3>
          <p className="text-gray-500 max-w-md mx-auto mb-6">
            We couldn't find any colleges matching your search criteria. Try adjusting your filters or try a different score.
          </p>
          <Button onClick={() => setFilterType("all")}>Reset Filters</Button>
        </div>
      )}
    </div>
  );
};

export default CollegeResults;
