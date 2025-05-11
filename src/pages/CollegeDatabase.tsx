import { useState } from "react";
import { Search, Filter, MapPin, BookOpen, Award, Star, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CollegeDatabase = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="page-container">
      <h1 className="page-title">College <span className="gradient-text">Database</span></h1>
      <p className="page-subtitle">Find the perfect psychology program with our comprehensive database of colleges in India and abroad.</p>
      
      {/* Search and Filter */}
      <div className="glass-card p-6 mb-10">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search colleges, courses, or locations..."
              className="pl-10 bg-white border-gray-200 text-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button className="flex items-center gap-2 bg-coursera-blue hover:bg-coursera-darkBlue text-white">
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </Button>
        </div>
        
        {/* Filter Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-coursera-blue">Location</h3>
            <div className="space-y-1 text-sm">
              <div className="flex items-center">
                <input type="checkbox" id="delhi" className="mr-2 accent-coursera-blue" />
                <label htmlFor="delhi" className="text-gray-700">Delhi</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="mumbai" className="mr-2 accent-coursera-blue" />
                <label htmlFor="mumbai" className="text-gray-700">Mumbai</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="bangalore" className="mr-2 accent-coursera-blue" />
                <label htmlFor="bangalore" className="text-gray-700">Bangalore</label>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-coursera-blue">Affiliation</h3>
            <div className="space-y-1 text-sm">
              <div className="flex items-center">
                <input type="checkbox" id="central" className="mr-2 accent-coursera-blue" />
                <label htmlFor="central" className="text-gray-700">Central University</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="state" className="mr-2 accent-coursera-blue" />
                <label htmlFor="state" className="text-gray-700">State University</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="private" className="mr-2 accent-coursera-blue" />
                <label htmlFor="private" className="text-gray-700">Private University</label>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-coursera-blue">Admission Process</h3>
            <div className="space-y-1 text-sm">
              <div className="flex items-center">
                <input type="checkbox" id="entrance" className="mr-2 accent-coursera-blue" />
                <label htmlFor="entrance" className="text-gray-700">Entrance Exam</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="merit" className="mr-2 accent-coursera-blue" />
                <label htmlFor="merit" className="text-gray-700">Merit-Based</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="interview" className="mr-2 accent-coursera-blue" />
                <label htmlFor="interview" className="text-gray-700">Interview</label>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-coursera-blue">Programs</h3>
            <div className="space-y-1 text-sm">
              <div className="flex items-center">
                <input type="checkbox" id="bachelors" className="mr-2 accent-coursera-blue" />
                <label htmlFor="bachelors" className="text-gray-700">Bachelor's</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="masters" className="mr-2 accent-coursera-blue" />
                <label htmlFor="masters" className="text-gray-700">Master's</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="doctoral" className="mr-2 accent-coursera-blue" />
                <label htmlFor="doctoral" className="text-gray-700">Doctoral</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* College Listings */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-coursera-navy">Top Psychology Programs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collegeList.map((college) => (
            <div key={college.name} className="coursera-card overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-coursera-lightGray to-white relative">
                {college.featured && (
                  <div className="absolute top-3 right-3 bg-coursera-blue text-xs font-bold px-2 py-1 rounded-full text-white">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-full">
                    <BookOpen className="h-12 w-12 text-coursera-blue" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-lg text-coursera-navy">{college.name}</h3>
                  <div className="flex items-center bg-coursera-lightGray px-2 py-1 rounded">
                    <Star className="h-3 w-3 text-coursera-blue mr-1" />
                    <span className="text-xs font-medium text-coursera-darkBlue">{college.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mt-1 text-sm mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{college.location}</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs">
                    <div className="w-20 text-gray-500">Programs:</div>
                    <div className="text-gray-700">{college.programs.join(", ")}</div>
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="w-20 text-gray-500">Affiliation:</div>
                    <div className="text-gray-700">{college.affiliation}</div>
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="w-20 text-gray-500">Fee Range:</div>
                    <div className="text-gray-700">{college.feeRange}</div>
                  </div>
                </div>
                <Button variant="outline" className="w-full text-coursera-blue border-coursera-blue/20 hover:bg-coursera-blue/10 mt-2">View Details</Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <Button className="bg-coursera-blue hover:bg-coursera-darkBlue text-white">
            Load More Colleges
          </Button>
        </div>
      </div>
      
      {/* International Opportunities */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-coursera-navy flex items-center">
          <Globe className="h-6 w-6 mr-2 text-coursera-blue" />
          International Opportunities
        </h2>
        
        <div className="coursera-card p-6">
          <p className="text-gray-600 mb-4">
            Looking to study psychology abroad? Explore top international universities offering psychology programs with scholarships and exchange opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {["USA", "UK", "Australia", "Canada", "Germany", "Singapore"].map((country) => (
              <Button key={country} variant="outline" className="border-coursera-blue/20 hover:bg-coursera-blue/10 text-coursera-blue">
                {country}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample data
const collegeList = [
  {
    name: "Delhi University",
    location: "New Delhi",
    programs: ["BA Psychology", "MA Psychology"],
    affiliation: "Central University",
    rating: "4.8",
    feeRange: "₹20,000 - ₹50,000 per year",
    featured: true
  },
  {
    name: "Tata Institute of Social Sciences",
    location: "Mumbai, Maharashtra",
    programs: ["MA Psychology", "M.Phil Clinical Psychology"],
    affiliation: "Deemed University",
    rating: "4.7",
    feeRange: "₹55,000 - ₹1,20,000 per year",
    featured: true
  },
  {
    name: "Christ University",
    location: "Bangalore, Karnataka",
    programs: ["BSc Psychology", "MSc Psychology", "PhD"],
    affiliation: "Private University",
    rating: "4.5",
    feeRange: "₹1,00,000 - ₹2,50,000 per year",
    featured: false
  },
  {
    name: "Banaras Hindu University",
    location: "Varanasi, UP",
    programs: ["MA Psychology", "M.Phil Clinical Psychology"],
    affiliation: "Central University",
    rating: "4.4",
    feeRange: "₹25,000 - ₹45,000 per year",
    featured: false
  },
  {
    name: "University of Hyderabad",
    location: "Hyderabad, Telangana",
    programs: ["MA Psychology", "PhD"],
    affiliation: "Central University",
    rating: "4.6",
    feeRange: "₹20,000 - ₹40,000 per year",
    featured: false
  },
  {
    name: "Jamia Millia Islamia",
    location: "New Delhi",
    programs: ["BA Psychology", "MA Psychology"],
    affiliation: "Central University",
    rating: "4.3",
    feeRange: "₹15,000 - ₹35,000 per year",
    featured: false
  }
];

export default CollegeDatabase;
