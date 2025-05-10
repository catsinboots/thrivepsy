
import Layout from "@/components/Layout";
import { FileText, Download, ArrowRight, BookOpen, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SyllabusArchive = () => {
  return (
    <Layout>
      <div className="page-container">
        <h1 className="page-title">Syllabus <span className="gradient-text">Archive</span></h1>
        <p className="page-subtitle">Comprehensive syllabi from major psychology programs across India.</p>
        
        {/* Search Bar */}
        <div className="mb-10">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by university, course, or topic..."
              className="pl-10 bg-white/5 border-white/10 text-white"
            />
          </div>
        </div>
        
        {/* University List */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Major Universities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((uni) => (
              <div key={uni.name} className="glass-card p-6 hover:border-amber-500/30 transition-all">
                <h3 className="font-bold text-lg text-white mb-3">{uni.name}</h3>
                <div className="space-y-3 mb-4">
                  {uni.programs.map((program) => (
                    <div key={program.title} className="bg-amber-900/10 p-3 rounded-md">
                      <div className="font-medium text-amber-400">{program.title}</div>
                      <div className="text-xs text-gray-400 mt-1">Duration: {program.duration}</div>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full text-amber-400 border-amber-500/20 hover:bg-amber-500/10 mt-2"
                >
                  View Full Syllabus
                </Button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Comparison Charts */}
        <div className="glass-card p-6 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Subject Comparison</h2>
          <p className="text-gray-300 mb-6">Compare core and elective subjects across different universities.</p>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr className="border-b border-amber-900/20">
                  <th className="py-3 px-4 text-left text-amber-500 font-medium">Subject</th>
                  <th className="py-3 px-4 text-center text-amber-500 font-medium">Delhi University</th>
                  <th className="py-3 px-4 text-center text-amber-500 font-medium">JNU</th>
                  <th className="py-3 px-4 text-center text-amber-500 font-medium">TISS</th>
                  <th className="py-3 px-4 text-center text-amber-500 font-medium">BHU</th>
                </tr>
              </thead>
              <tbody>
                {subjectComparison.map((subject, index) => (
                  <tr key={index} className="border-b border-amber-900/10">
                    <td className="py-3 px-4 text-white font-medium">{subject.name}</td>
                    <td className="py-3 px-4 text-center text-gray-300">{subject.du}</td>
                    <td className="py-3 px-4 text-center text-gray-300">{subject.jnu}</td>
                    <td className="py-3 px-4 text-center text-gray-300">{subject.tiss}</td>
                    <td className="py-3 px-4 text-center text-gray-300">{subject.bhu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex justify-end mt-4">
            <Button size="sm" className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 text-xs">
              <Download className="h-3 w-3 mr-1" />
              Download Comparison PDF
            </Button>
          </div>
        </div>
        
        {/* Sample Syllabus */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Sample Detailed Syllabus</h2>
          
          <div className="glass-card p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-xl text-amber-500">M.A. Psychology - Delhi University</h3>
              <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-amber-950">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
            
            <div className="space-y-6">
              {sampleSyllabus.map((semester) => (
                <div key={semester.title} className="bg-amber-900/10 rounded-lg p-5">
                  <h4 className="font-bold text-lg text-white mb-3">{semester.title}</h4>
                  <div className="space-y-4">
                    {semester.papers.map((paper, index) => (
                      <div key={index} className="bg-black/20 rounded-md p-4">
                        <div className="flex items-start justify-between">
                          <h5 className="font-medium text-amber-400">{paper.title}</h5>
                          <span className="bg-amber-500/20 text-amber-400 text-xs px-2 py-1 rounded">{paper.credits} Credits</span>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">{paper.description}</p>
                        {paper.units && (
                          <div className="mt-3">
                            <div className="text-sm font-medium text-white mt-2 mb-1">Units:</div>
                            <ul className="space-y-1">
                              {paper.units.map((unit, i) => (
                                <li key={i} className="text-xs text-gray-400 flex items-center">
                                  <ArrowRight className="h-3 w-3 text-amber-500 mr-2" />
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
      </div>
    </Layout>
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

export default SyllabusArchive;
