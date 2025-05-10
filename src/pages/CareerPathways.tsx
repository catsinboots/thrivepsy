
import Layout from "@/components/Layout";
import { Book, Brain, Briefcase, GraduationCap, Heart, Scale } from "lucide-react";

const CareerPathways = () => {
  return (
    <Layout>
      <div className="page-container">
        <h1 className="page-title">Career <span className="gradient-text">Pathways</span> in Psychology</h1>
        <p className="page-subtitle">Explore various career paths from Class 12 to PhD and beyond.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Specialization Cards */}
          {specializations.map((spec) => (
            <div key={spec.title} className="glass-card p-6 hover:border-amber-500/50 transition-colors">
              <div className="bg-amber-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <spec.icon className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{spec.title}</h3>
              <p className="text-gray-400">{spec.description}</p>
            </div>
          ))}
        </div>
        
        {/* Career Flow */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-amber-500">From High School to Career: Your Psychology Journey</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-amber-500/20 transform md:translate-x-0"></div>
            
            {/* Timeline steps */}
            {careerFlowSteps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className="flex-1 md:mx-8">
                  <div className="glass-card p-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-amber-500/20 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <GraduationCap className="h-4 w-4 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{step.stage}</h3>
                    </div>
                    <p className="text-gray-400 mb-3">{step.description}</p>
                    <div className="text-sm text-amber-400 font-medium">{step.duration}</div>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 transform -translate-y-1/4 md:-translate-x-1/2 w-8 h-8 rounded-full bg-amber-500 border-4 border-black flex items-center justify-center">
                  <span className="text-xs font-bold text-black">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Switching Disciplines */}
        <div className="glass-card p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4 text-amber-500">Switching to Psychology from Other Disciplines</h2>
          <p className="text-gray-300 mb-6">Transitioning from a non-psychology background? Here's what you need to know:</p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-amber-500/20 p-1 rounded-full mr-3 mt-1">
                <GraduationCap className="h-4 w-4 text-amber-500" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Bridge Courses</h4>
                <p className="text-gray-400">Many universities offer bridge courses to help non-psychology graduates qualify for psychology masters programs.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-amber-500/20 p-1 rounded-full mr-3 mt-1">
                <GraduationCap className="h-4 w-4 text-amber-500" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Additional Entrance Requirements</h4>
                <p className="text-gray-400">You may need to take additional exams or prerequisites before enrolling in psychology graduate programs.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-amber-500/20 p-1 rounded-full mr-3 mt-1">
                <GraduationCap className="h-4 w-4 text-amber-500" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Complementary Skills</h4>
                <p className="text-gray-400">Your background in another field can be valuable - statistics, biology, sociology, and computer science all complement psychology research.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

// Sample data
const specializations = [
  {
    title: "Clinical Psychology",
    description: "Work directly with patients to diagnose and treat psychological disorders and conditions.",
    icon: Heart
  },
  {
    title: "Counseling Psychology",
    description: "Help people resolve personal, social, and psychological issues to improve well-being.",
    icon: Brain
  },
  {
    title: "Industrial-Organizational",
    description: "Apply psychological principles to workplace settings to improve productivity and employee well-being.",
    icon: Briefcase
  },
  {
    title: "Forensic Psychology",
    description: "Apply psychological principles within the legal and criminal justice system.",
    icon: Scale
  },
  {
    title: "Neuropsychology",
    description: "Study the relationship between brain function and behavior, often in clinical settings.",
    icon: Brain
  },
  {
    title: "Educational Psychology",
    description: "Study how people learn and develop effective teaching methods.",
    icon: Book
  }
];

const careerFlowSteps = [
  {
    stage: "Class 11-12 (High School)",
    description: "Choose Psychology as an elective subject if available. Focus on building a strong foundation in biology, mathematics, and social sciences.",
    duration: "2 years"
  },
  {
    stage: "Bachelor's Degree",
    description: "Pursue BA/BSc in Psychology with focus on core psychological concepts, research methods, and statistics.",
    duration: "3-4 years"
  },
  {
    stage: "Master's Degree",
    description: "Specialize in your chosen field (Clinical, Counseling, I/O, etc.) through MA/MSc Psychology programs.",
    duration: "2 years"
  },
  {
    stage: "M.Phil/Licensure",
    description: "For clinical practice, most countries require additional training through M.Phil or equivalent programs and supervised practice.",
    duration: "2 years"
  },
  {
    stage: "PhD (Optional)",
    description: "For academic or research careers, pursue a PhD focusing on original research in your specialized area.",
    duration: "3-5 years"
  },
  {
    stage: "Professional Practice/Teaching/Research",
    description: "Begin your career in clinical practice, academia, research institutions, or organizational settings.",
    duration: "Ongoing"
  }
];

export default CareerPathways;
