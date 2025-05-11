
import { FileText, Download, ArrowRight, BookOpen, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const SyllabusArchive = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search initiated",
      description: `Searching for: ${searchQuery}`,
    });
  };

  const handleDownload = (item: string) => {
    toast({
      title: "Download started",
      description: `Downloading ${item}`,
      variant: "default", // Changed from "success" to "default"
    });
  };

  const handleViewSyllabus = (university: string) => {
    toast({
      title: "Loading syllabus",
      description: `Viewing syllabus for ${university}`,
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-coursera-black font-heading">
        Syllabus <span className="gradient-text">Archive</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mb-12">
        Access comprehensive syllabi from major psychology programs across India. Find details about course structure, subjects, and specializations offered by top universities.
      </p>
      
      {/* Search Bar */}
      <div className="mb-10">
        <form onSubmit={handleSearch} className="relative max-w-xl mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by university, course, or topic..."
            className="pl-10 border-gray-300 focus:border-coursera-blue focus:ring-coursera-blue"
          />
          <Button 
            type="submit"
            className="absolute right-1 top-1 bg-coursera-blue hover:bg-coursera-darkBlue"
            size="sm"
          >
            Search
          </Button>
        </form>
      </div>
      
      {/* University List */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-coursera-black">Major Universities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((uni) => (
            <div key={uni.name} className="coursera-card p-6 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg text-coursera-black mb-3">{uni.name}</h3>
              <div className="space-y-3 mb-4">
                {uni.programs.map((program) => (
                  <div key={program.title} className="bg-gray-50 p-3 rounded-md border border-gray-100">
                    <div className="font-medium text-coursera-blue">{program.title}</div>
                    <div className="text-xs text-gray-500 mt-1">Duration: {program.duration}</div>
                  </div>
                ))}
              </div>
              <Button 
                variant="default" 
                className="w-full bg-coursera-blue hover:bg-coursera-darkBlue text-white mt-2"
                onClick={() => handleViewSyllabus(uni.name)}
              >
                View Full Syllabus
              </Button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Comparison Charts */}
      <div className="coursera-card p-6 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-coursera-black">Subject Comparison</h2>
        <p className="text-gray-600 mb-6">Compare core and elective subjects offered across different universities to make an informed decision about your psychology education path.</p>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 text-left text-coursera-blue font-medium">Subject</th>
                <th className="py-3 px-4 text-center text-coursera-blue font-medium">Delhi University</th>
                <th className="py-3 px-4 text-center text-coursera-blue font-medium">JNU</th>
                <th className="py-3 px-4 text-center text-coursera-blue font-medium">TISS</th>
                <th className="py-3 px-4 text-center text-coursera-blue font-medium">BHU</th>
              </tr>
            </thead>
            <tbody>
              {subjectComparison.map((subject, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 px-4 text-coursera-black font-medium">{subject.name}</td>
                  <td className="py-3 px-4 text-center text-gray-600">{subject.du}</td>
                  <td className="py-3 px-4 text-center text-gray-600">{subject.jnu}</td>
                  <td className="py-3 px-4 text-center text-gray-600">{subject.tiss}</td>
                  <td className="py-3 px-4 text-center text-gray-600">{subject.bhu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex justify-end mt-4">
          <Button 
            size="sm" 
            className="bg-coursera-blue hover:bg-coursera-darkBlue text-white text-xs"
            onClick={() => handleDownload("Comparison PDF")}
          >
            <Download className="h-3 w-3 mr-1" />
            Download Comparison PDF
          </Button>
        </div>
      </div>
      
      {/* Sample Syllabus */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-coursera-black">Sample Detailed Syllabus</h2>
        
        <div className="coursera-card p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-xl text-coursera-blue">M.A. Psychology - Delhi University</h3>
            <Button 
              size="sm" 
              className="bg-coursera-blue hover:bg-coursera-darkBlue text-white"
              onClick={() => handleDownload("DU MA Psychology Syllabus")}
            >
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
          
          <div className="space-y-6">
            {sampleSyllabus.map((semester) => (
              <div key={semester.title} className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                <h4 className="font-bold text-lg text-coursera-black mb-3">{semester.title}</h4>
                <div className="space-y-4">
                  {semester.papers.map((paper, index) => (
                    <div key={index} className="bg-white rounded-md p-4 border border-gray-100">
                      <div className="flex items-start justify-between">
                        <h5 className="font-medium text-coursera-blue">{paper.title}</h5>
                        <span className="bg-blue-50 text-coursera-blue text-xs px-2 py-1 rounded">{paper.credits} Credits</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">{paper.description}</p>
                      {paper.units && (
                        <div className="mt-3">
                          <div className="text-sm font-medium text-coursera-black mt-2 mb-1">Units:</div>
                          <ul className="space-y-1">
                            {paper.units.map((unit, i) => (
                              <li key={i} className="text-xs text-gray-500 flex items-center">
                                <ArrowRight className="h-3 w-3 text-coursera-blue mr-2" />
                                {unit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Additional Content: Recent Syllabus Updates */}
      <div className="coursera-card p-6 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-coursera-black">Recent Syllabus Updates</h2>
        <p className="text-gray-600 mb-6">Stay informed about the latest changes in psychology program syllabi across major universities.</p>
        
        <div className="space-y-4">
          {syllabusUpdates.map((update, index) => (
            <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-coursera-black">{update.university}</h4>
                  <p className="text-sm text-gray-600">{update.program}</p>
                </div>
                <span className="bg-blue-50 text-coursera-blue text-xs px-2 py-1 rounded">
                  {update.date}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-2">{update.description}</p>
              <Button 
                variant="link" 
                className="text-coursera-blue p-0 h-auto text-sm mt-2"
                onClick={() => handleViewSyllabus(update.university)}
              >
                View updated syllabus <ArrowRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Faculty Insights */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-coursera-black">Faculty Insights on Curriculum</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facultyInsights.map((insight, index) => (
            <div key={index} className="coursera-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-coursera-blue/10 flex items-center justify-center text-coursera-blue font-bold">
                  {insight.professor.split(" ").map(name => name[0]).join("")}
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-coursera-black">{insight.professor}</h4>
                  <p className="text-xs text-gray-500">{insight.position}, {insight.university}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic">"{insight.quote}"</p>
              <div className="mt-4">
                <p className="text-sm text-gray-500">{insight.commentary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Sample data
const universities = [
  {
    name: "Delhi University",
    programs: [
      {
        title: "B.A. (Hons) Psychology",
        duration: "3 Years"
      },
      {
        title: "M.A. Psychology",
        duration: "2 Years"
      },
      {
        title: "M.Phil Clinical Psychology",
        duration: "2 Years"
      }
    ]
  },
  {
    name: "Jawaharlal Nehru University",
    programs: [
      {
        title: "M.A. Psychology",
        duration: "2 Years"
      },
      {
        title: "PhD Psychology",
        duration: "3-5 Years"
      }
    ]
  },
  {
    name: "Tata Institute of Social Sciences",
    programs: [
      {
        title: "M.A. Applied Psychology",
        duration: "2 Years"
      },
      {
        title: "M.Phil Psychiatric Social Work",
        duration: "2 Years"
      }
    ]
  },
  {
    name: "Banaras Hindu University",
    programs: [
      {
        title: "M.A./M.Sc. Psychology",
        duration: "2 Years"
      },
      {
        title: "M.Phil Clinical Psychology",
        duration: "2 Years"
      }
    ]
  },
  {
    name: "Jamia Millia Islamia",
    programs: [
      {
        title: "B.A. (Hons) Psychology",
        duration: "3 Years"
      },
      {
        title: "M.A. Psychology",
        duration: "2 Years"
      }
    ]
  },
  {
    name: "Christ University",
    programs: [
      {
        title: "B.A. Psychology",
        duration: "3 Years"
      },
      {
        title: "M.Sc. Psychology",
        duration: "2 Years"
      },
      {
        title: "M.Phil Clinical Psychology",
        duration: "2 Years"
      }
    ]
  }
];

const subjectComparison = [
  {
    name: "Research Methods",
    du: "Core", 
    jnu: "Core", 
    tiss: "Core", 
    bhu: "Core"
  },
  {
    name: "Statistics",
    du: "Core", 
    jnu: "Core", 
    tiss: "Core", 
    bhu: "Core"
  },
  {
    name: "Cognitive Psychology",
    du: "Core", 
    jnu: "Core", 
    tiss: "Elective", 
    bhu: "Core"
  },
  {
    name: "Clinical Psychology",
    du: "Core", 
    jnu: "Elective", 
    tiss: "Core", 
    bhu: "Core"
  },
  {
    name: "Neuropsychology",
    du: "Elective", 
    jnu: "Elective", 
    tiss: "Not Offered", 
    bhu: "Elective"
  },
  {
    name: "Positive Psychology",
    du: "Elective", 
    jnu: "Not Offered", 
    tiss: "Elective", 
    bhu: "Not Offered"
  },
  {
    name: "Community Psychology",
    du: "Not Offered", 
    jnu: "Core", 
    tiss: "Core", 
    bhu: "Elective"
  }
];

const sampleSyllabus = [
  {
    title: "Semester I",
    papers: [
      {
        title: "Cognitive Processes",
        credits: 4,
        description: "This paper introduces the basic cognitive processes such as perception, attention, memory, and thinking.",
        units: [
          "Perception and Attention",
          "Learning and Memory",
          "Thinking and Problem Solving",
          "Language and Communication"
        ]
      },
      {
        title: "Research Methodology",
        credits: 4,
        description: "Covers basic and advanced research methods in psychology, including experimental designs and qualitative approaches.",
        units: [
          "Scientific Method and Research Design",
          "Measurement and Scaling Techniques",
          "Sampling Methods",
          "Qualitative Research Approaches"
        ]
      },
      {
        title: "Statistical Methods",
        credits: 4,
        description: "Covers descriptive and inferential statistics for psychological research.",
        units: [
          "Descriptive Statistics",
          "Probability and Normal Distribution",
          "Parametric Tests",
          "Non-parametric Tests and ANOVA"
        ]
      }
    ]
  },
  {
    title: "Semester II",
    papers: [
      {
        title: "Social Psychology",
        credits: 4,
        description: "Study of how people's thoughts, feelings, and behaviors are influenced by the presence of others.",
        units: [
          "Social Cognition and Perception",
          "Attitudes and Behavior Change",
          "Group Processes and Intergroup Relations",
          "Culture and Social Behavior"
        ]
      },
      {
        title: "Developmental Psychology",
        credits: 4,
        description: "Explores human development across the lifespan, from infancy through old age.",
        units: [
          "Theories of Development",
          "Cognitive Development",
          "Social and Emotional Development",
          "Adulthood and Aging"
        ]
      }
    ]
  }
];

// New data for additional sections
const syllabusUpdates = [
  {
    university: "Delhi University",
    program: "M.A. Psychology",
    date: "April 2025",
    description: "Added new electives in Positive Psychology and Forensic Psychology. Restructured Research Methods to include more practical components."
  },
  {
    university: "Jawaharlal Nehru University",
    program: "M.Phil Clinical Psychology",
    date: "March 2025",
    description: "Updated internship requirements and increased practical training hours in clinical settings."
  },
  {
    university: "TISS",
    program: "M.A. Applied Psychology",
    date: "February 2025",
    description: "Integrated AI in Psychology as a new course module. Added specialized workshops on tech-psychology interface."
  },
  {
    university: "Banaras Hindu University",
    program: "M.Sc. Psychology",
    date: "January 2025",
    description: "Restructured core curriculum to include more indigenous psychology perspectives and cultural context studies."
  }
];

const facultyInsights = [
  {
    professor: "Dr. Anita Sharma",
    position: "Head of Department",
    university: "Delhi University",
    quote: "Our curriculum aims to balance theoretical frameworks with practical applications to prepare students for both research and clinical practice.",
    commentary: "Dr. Sharma's approach has led to a 30% increase in research publications by MA students over the last two years."
  },
  {
    professor: "Dr. Rajesh Kumar",
    position: "Professor of Clinical Psychology",
    university: "NIMHANS",
    quote: "We've intentionally designed our syllabus to address the evolving mental health needs specific to the Indian context while maintaining global standards.",
    commentary: "Under his guidance, the program has established partnerships with 15 mental health institutions for internship placements."
  },
  {
    professor: "Dr. Meenakshi Patel",
    position: "Associate Professor",
    university: "JNU",
    quote: "The integration of research methodology throughout all semesters rather than as standalone courses has improved the quality of student dissertations remarkably.",
    commentary: "This innovative approach has been adopted by three other universities in the past year."
  },
  {
    professor: "Dr. Vikram Singh",
    position: "Dean, Faculty of Psychology",
    university: "BHU",
    quote: "Our new curriculum incorporates traditional Indian psychological concepts alongside contemporary Western frameworks to provide a truly holistic education.",
    commentary: "This unique approach has attracted international exchange students from six countries in the last academic year."
  }
];

export default SyllabusArchive;
