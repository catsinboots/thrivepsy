import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import CollegeFinder from "@/components/CollegeFinder";
import CollegeResults from "@/components/CollegeResults";
import CollegeModal from "@/components/CollegeModal";
import { College } from "@/types/college";

const Index = () => {
  const [colleges, setColleges] = useState<College[]>([]);
  const [filteredColleges, setFilteredColleges] = useState<College[]>([]);
  const [userScore, setUserScore] = useState<number | null>(null);
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Simulating data fetch - in a real app, this would be an API call
    const mockColleges: College[] = [
      {
        "College Name": "University of Delhi - Department of Psychology",
        "Course Type": "M.A.",
        "Specialization": "Clinical Psychology",
        "Location (City, State)": "Delhi",
        "2024 CUET-PG Cutoff (Gen)": "220",
        "Admission Process": "CUET-PG",
        "Website": "www.du.ac.in",
        "Contact": "psychology@du.ac.in"
      },
      {
        "College Name": "Jawaharlal Nehru University",
        "Course Type": "M.Phil",
        "Specialization": "Cognitive Psychology",
        "Location (City, State)": "Delhi",
        "2024 CUET-PG Cutoff (Gen)": "210",
        "Admission Process": "CUET-PG",
        "Website": "www.jnu.ac.in",
        "Contact": "psych@jnu.ac.in"
      },
      {
        "College Name": "Banaras Hindu University",
        "Course Type": "M.Sc.",
        "Specialization": "Applied Psychology",
        "Location (City, State)": "Varanasi, UP",
        "2024 CUET-PG Cutoff (Gen)": "195",
        "Admission Process": "CUET-PG",
        "Website": "www.bhu.ac.in",
        "Contact": "psychology@bhu.ac.in"
      },
      {
        "College Name": "Aligarh Muslim University",
        "Course Type": "M.A.",
        "Specialization": "Organizational Psychology",
        "Location (City, State)": "Aligarh, UP",
        "2024 CUET-PG Cutoff (Gen)": "185",
        "Admission Process": "CUET-PG",
        "Website": "www.amu.ac.in",
        "Contact": "psych@amu.ac.in"
      },
      {
        "College Name": "University of Hyderabad",
        "Course Type": "M.Sc.",
        "Specialization": "Health Psychology",
        "Location (City, State)": "Hyderabad, Telangana",
        "2024 CUET-PG Cutoff (Gen)": "175",
        "Admission Process": "CUET-PG",
        "Website": "www.uohyd.ac.in",
        "Contact": "psychology@uohyd.ac.in"
      },
      {
        "College Name": "Jamia Millia Islamia",
        "Course Type": "M.A.",
        "Specialization": "Social Psychology",
        "Location (City, State)": "Delhi",
        "2024 CUET-PG Cutoff (Gen)": "165",
        "Admission Process": "CUET-PG",
        "Website": "www.jmi.ac.in",
        "Contact": "psychology@jmi.ac.in"
      }
    ];
    setColleges(mockColleges);
  }, []);

  const handleSearch = (score: number) => {
    setUserScore(score);
    const filtered = filterColleges(score);
    setFilteredColleges(filtered);
  };

  const parseCutoff = (cutoffStr: string): number | null => {
    if (!cutoffStr) return null;
    const match = cutoffStr.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  };

  const filterColleges = (score: number) => {
    return colleges
      .filter(college =>
        college['Admission Process'] === "CUET-PG" &&
        parseCutoff(college['2024 CUET-PG Cutoff (Gen)']) !== null &&
        score >= parseCutoff(college['2024 CUET-PG Cutoff (Gen)'])!
      )
      .sort((a, b) => 
        parseCutoff(b['2024 CUET-PG Cutoff (Gen)'])! - parseCutoff(a['2024 CUET-PG Cutoff (Gen)'])!
      );
  };

  const openModal = (college: College) => {
    setSelectedCollege(college);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <CollegeFinder onSearch={handleSearch} />
      <CollegeResults 
        colleges={filteredColleges} 
        score={userScore} 
        onViewDetails={openModal}
      />
      <CollegeModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        college={selectedCollege} 
      />
    </div>
  );
};

export default Index;
