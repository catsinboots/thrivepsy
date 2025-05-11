
import Layout from "@/components/Layout";
import { Book, Brain, Briefcase, GraduationCap, Heart, Scale, Award, CheckCircle, User, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CareerPathways = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Career <span className="text-coursera-blue">Pathways</span> in Psychology</h1>
      <p className="page-subtitle">Explore various career paths from Class 12 to PhD and beyond. Find the right specialization for your interests and strengths.</p>
      
      {/* Overview Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 font-heading">Why Choose Psychology?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4 text-gray-700">
              Psychology is one of the most versatile fields of study, opening doors to careers in healthcare, education, business, research, and social services. The demand for mental health professionals continues to grow worldwide, with psychology graduates employed across diverse sectors.
            </p>
            <p className="text-gray-700">
              Whether your interest lies in helping individuals overcome mental health challenges, understanding consumer behavior, improving workplace dynamics, or advancing research in cognitive science, a psychology education equips you with valuable skills in understanding human behavior, critical thinking, and research methods.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-coursera-blue font-heading">Psychology Career Outlook</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-coursera-blue mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">15% growth projected for clinical, counseling, and school psychologists (2019-2029)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-coursera-blue mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">8% growth for industrial-organizational psychologists</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-coursera-blue mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Median annual salary for psychologists: ₹6-12 lakhs (entry-level)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-coursera-blue mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Increasing demand for mental health services post-pandemic</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {/* Specialization Cards */}
        {specializations.map((spec) => (
          <Card key={spec.title} className="border border-gray-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <spec.icon className="h-6 w-6 text-coursera-blue" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800">{spec.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{spec.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm font-medium text-gray-500">Average Salary Range:</span>
                <span className="block text-coursera-blue font-medium mt-1">{spec.salary}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Career Flow */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center font-heading">Your Psychology Career Journey</h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">The path to becoming a psychology professional involves several stages of education and training. Here's a comprehensive roadmap to help you navigate your career journey.</p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-coursera-blue/20 transform md:translate-x-0"></div>
          
          {/* Timeline steps */}
          {careerFlowSteps.map((step, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
              <div className="flex-1 md:mx-8">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <GraduationCap className="h-4 w-4 text-coursera-blue" />
                      </div>
                      <CardTitle className="text-xl font-bold">{step.stage}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <div className="text-sm text-coursera-blue font-medium">{step.duration}</div>
                    
                    {step.keyPoints && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <h4 className="font-medium text-gray-800 mb-2">Key Points:</h4>
                        <ul className="space-y-1">
                          {step.keyPoints.map((point, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-coursera-blue mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-600">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              <div className="absolute left-4 md:left-1/2 transform -translate-y-1/4 md:-translate-x-1/2 w-8 h-8 rounded-full bg-coursera-blue border-4 border-white flex items-center justify-center">
                <span className="text-xs font-bold text-white">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Switching Disciplines */}
      <section className="mb-16">
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-coursera-blue font-heading">Switching to Psychology from Other Disciplines</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">Transitioning from a non-psychology background? Here's what you need to know:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <GraduationCap className="h-4 w-4 text-coursera-blue mr-2" />
                  Bridge Courses
                </h4>
                <p className="text-gray-600">Many universities offer bridge courses or conversion diplomas specifically designed to help non-psychology graduates qualify for psychology master's programs.</p>
                <p className="mt-4 text-gray-600">These typically cover fundamental concepts in cognitive psychology, developmental psychology, social psychology, and research methods.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Users className="h-4 w-4 text-coursera-blue mr-2" />
                  Complementary Skills
                </h4>
                <p className="text-gray-600">Your background in another field can be valuable - statistics, biology, sociology, computer science, philosophy, and linguistics all complement psychology research and practice.</p>
                <p className="mt-4 text-gray-600">Highlight your transferable skills when applying to programs or positions in psychology.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Award className="h-4 w-4 text-coursera-blue mr-2" />
                  Career Pathways
                </h4>
                <p className="text-gray-600">Consider specialized areas where your previous education can give you an edge - e.g., engineers might excel in human factors psychology, business graduates in I/O psychology.</p>
                <p className="mt-4 text-gray-600">Research-focused careers may be more accessible than clinical paths, which often require extensive supervised practice.</p>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
              <Button className="bg-coursera-blue hover:bg-coursera-darkBlue text-white">
                Find Bridge Programs
              </Button>
              <Button variant="outline" className="border-coursera-blue text-coursera-blue hover:bg-blue-50">
                Download Transition Guide
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
      
      {/* Student Success Stories */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center font-heading">Student Success Stories</h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">Real stories from students who successfully navigated their psychology education journey.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <User className="h-12 w-12 text-coursera-blue bg-blue-50 p-2 rounded-full" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{story.name}</h3>
              <p className="text-sm text-coursera-blue font-medium mb-3">{story.path}</p>
              <p className="text-gray-600 mb-4">{story.quote}</p>
              <p className="text-sm text-gray-500">{story.current}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-blue-50 p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4 text-coursera-blue font-heading">Ready to Start Your Psychology Journey?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Explore our comprehensive resources for psychology students, from entrance exam preparation to college selection guidance and career planning.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-coursera-blue hover:bg-coursera-darkBlue text-white">
            Explore College Database
          </Button>
          <Button variant="outline" className="border-coursera-blue text-coursera-blue hover:bg-blue-50">
            Prepare for Entrance Exams
          </Button>
        </div>
      </section>
    </div>
  );
};

// Sample data
const specializations = [
  {
    title: "Clinical Psychology",
    description: "Work with patients to diagnose and treat psychological disorders through assessment, therapy, and personalized interventions.",
    icon: Heart,
    salary: "₹5-15 lakhs per annum"
  },
  {
    title: "Counseling Psychology",
    description: "Help people resolve personal, social, vocational, and relationship issues to improve mental health and well-being.",
    icon: Brain,
    salary: "₹4-12 lakhs per annum"
  },
  {
    title: "Industrial-Organizational",
    description: "Apply psychological principles in workplace settings to improve productivity, employee satisfaction, and organizational culture.",
    icon: Briefcase,
    salary: "₹8-20 lakhs per annum"
  },
  {
    title: "Forensic Psychology",
    description: "Apply psychological knowledge within the legal and criminal justice system to assist in legal proceedings and criminal profiling.",
    icon: Scale,
    salary: "₹6-18 lakhs per annum"
  },
  {
    title: "Neuropsychology",
    description: "Study the relationships between brain function, cognition, and behavior, often working with patients who have brain injuries.",
    icon: Brain,
    salary: "₹8-25 lakhs per annum"
  },
  {
    title: "Educational Psychology",
    description: "Develop effective teaching methods and learning environments by understanding how people learn and process information.",
    icon: Book,
    salary: "₹5-15 lakhs per annum"
  }
];

const careerFlowSteps = [
  {
    stage: "Class 11-12 (High School)",
    description: "Focus on building a strong foundation in biology, mathematics, and social sciences. Choose Psychology as an elective if available in your school.",
    duration: "2 years",
    keyPoints: [
      "Take Psychology elective if available",
      "Participate in psychology-related extracurriculars",
      "Explore undergraduate program requirements",
      "Develop strong research and writing skills"
    ]
  },
  {
    stage: "Bachelor's Degree",
    description: "Pursue BA/BSc in Psychology with focus on core psychological concepts, research methods, and statistics. Participate in research projects for practical experience.",
    duration: "3-4 years",
    keyPoints: [
      "Core courses in developmental, social, cognitive psychology",
      "Research methodology and statistics training",
      "Internships in clinical or research settings",
      "Begin specialization exploration in final year"
    ]
  },
  {
    stage: "Master's Degree",
    description: "Specialize in your chosen field (Clinical, Counseling, I/O, etc.) through MA/MSc Psychology programs. This is when your career path becomes more defined.",
    duration: "2 years",
    keyPoints: [
      "In-depth specialization courses",
      "Research thesis or practicum",
      "Networking with professionals",
      "Preparation for licensing requirements"
    ]
  },
  {
    stage: "M.Phil/Licensure",
    description: "For clinical practice, most countries require additional training through M.Phil or equivalent programs and supervised practice hours under licensed professionals.",
    duration: "2 years",
    keyPoints: [
      "Supervised clinical experience",
      "Case presentations and assessments",
      "Ethics training and cultural competence",
      "Preparation for professional licensing exams"
    ]
  },
  {
    stage: "PhD (Optional)",
    description: "For academic or research careers, pursue a PhD focusing on original research in your specialized area of psychology. This opens doors to teaching and advanced research positions.",
    duration: "3-5 years",
    keyPoints: [
      "Original dissertation research",
      "Advanced statistical methods",
      "Publishing in peer-reviewed journals",
      "Teaching experience and mentorship"
    ]
  },
  {
    stage: "Professional Practice/Teaching/Research",
    description: "Begin your career in clinical practice, academia, research institutions, or organizational settings. Continuing education is important to stay current in the field.",
    duration: "Ongoing",
    keyPoints: [
      "Continuing education requirements",
      "Professional association membership",
      "Specialization certification opportunities",
      "Career advancement through experience"
    ]
  }
];

const successStories = [
  {
    name: "Priya Sharma",
    path: "BSc to Clinical Psychologist",
    quote: "Thrive Psychology's resources helped me navigate the journey from a BSc student to becoming a licensed clinical psychologist. The entrance exam guides were invaluable.",
    current: "Now working at NIMHANS, Bangalore"
  },
  {
    name: "Arjun Mehta",
    path: "Engineering to I/O Psychology",
    quote: "Switching from engineering to I/O psychology seemed daunting until I found detailed transition guides on this platform. Their college database helped me find programs accepting non-psychology graduates.",
    current: "HR Consultant at a multinational corporation"
  },
  {
    name: "Sanya Kapoor",
    path: "BA to Research Psychologist",
    quote: "The career pathway tools helped me map out my journey from BA to PhD. The syllabus archives were essential for my entrance exam preparation.",
    current: "Research Associate at Delhi University"
  }
];

export default CareerPathways;
