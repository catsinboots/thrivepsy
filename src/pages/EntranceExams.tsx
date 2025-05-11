import { Calendar, Clock, Book, CheckCircle, FileText, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const EntranceExams = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Entrance <span className="gradient-text">Exams</span></h1>
      <p className="page-subtitle">Comprehensive information about psychology entrance exams in India and preparation strategies.</p>
      
      {/* Upcoming Exams */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-coursera-navy flex items-center">
          <Calendar className="h-6 w-6 mr-2 text-coursera-blue" />
          Upcoming Exams
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingExams.map((exam) => (
            <div key={exam.name} className="coursera-card p-5 hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg text-coursera-navy">{exam.name}</h3>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  exam.status === "Registration Open" ? "bg-green-100 text-green-600" : 
                  exam.status === "Coming Soon" ? "bg-blue-100 text-blue-600" :
                  "bg-yellow-100 text-yellow-600"
                }`}>
                  {exam.status}
                </span>
              </div>
              
              <div className="space-y-2 text-gray-600 text-sm mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-coursera-blue mr-2" />
                  <span>{exam.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-coursera-blue mr-2" />
                  <span>Registration Deadline: {exam.registrationDeadline}</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full text-coursera-blue border-coursera-blue hover:bg-coursera-blue/10">View Details</Button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Exam Details */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-coursera-navy">Major Psychology Entrance Exams</h2>
        
        <div className="space-y-8">
          {examDetails.map((exam) => (
            <div key={exam.name} className="coursera-card p-6">
              <h3 className="text-xl font-bold text-coursera-blue mb-3">{exam.name}</h3>
              <p className="text-gray-600 mb-4">{exam.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-coursera-lightGray p-4 rounded-lg">
                  <div className="text-sm font-medium text-coursera-blue mb-2">Exam Pattern</div>
                  <div className="text-sm text-gray-700">{exam.pattern}</div>
                </div>
                <div className="bg-coursera-lightGray p-4 rounded-lg">
                  <div className="text-sm font-medium text-coursera-blue mb-2">Eligibility</div>
                  <div className="text-sm text-gray-700">{exam.eligibility}</div>
                </div>
                <div className="bg-coursera-lightGray p-4 rounded-lg">
                  <div className="text-sm font-medium text-coursera-blue mb-2">Top Colleges</div>
                  <div className="text-sm text-gray-700">{exam.colleges}</div>
                </div>
              </div>
              
              <h4 className="font-semibold text-coursera-navy mb-3">Syllabus Highlights:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-5">
                {exam.syllabus.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-coursera-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-3">
                <Button className="bg-coursera-blue hover:bg-coursera-darkBlue text-white">
                  <FileText className="h-4 w-4 mr-2" />
                  Download Syllabus
                </Button>
                <Button variant="outline" className="border-coursera-blue/20 text-coursera-blue hover:bg-coursera-blue/10">
                  <Book className="h-4 w-4 mr-2" />
                  Practice Questions
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Preparation Tips */}
      <div className="coursera-card p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4 text-coursera-navy flex items-center">
          <Award className="h-6 w-6 mr-2 text-coursera-blue" />
          Preparation Tips
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {prepTips.map((tip, index) => (
            <div key={index} className="bg-coursera-lightGray p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="bg-coursera-blue/20 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <tip.icon className="h-4 w-4 text-coursera-blue" />
                </div>
                <h3 className="font-bold text-coursera-navy">{tip.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{tip.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Sample data
const upcomingExams = [
  {
    name: "CUET-PG Psychology",
    date: "May 15-25, 2025",
    registrationDeadline: "March 30, 2025",
    status: "Registration Open"
  },
  {
    name: "TISSNET",
    date: "January 7, 2025",
    registrationDeadline: "December 10, 2024",
    status: "Registration Open"
  },
  {
    name: "JNU Entrance (JNUEE)",
    date: "June 2025",
    registrationDeadline: "April 2025",
    status: "Coming Soon"
  },
  {
    name: "DUET Psychology",
    date: "July 2025",
    registrationDeadline: "May 2025",
    status: "Coming Soon"
  },
  {
    name: "NIMHANS Entrance",
    date: "March 2025",
    registrationDeadline: "January 15, 2025",
    status: "Coming Soon"
  },
  {
    name: "Christ University Entrance",
    date: "April 2025",
    registrationDeadline: "March 2025",
    status: "Coming Soon"
  }
];

const examDetails = [
  {
    name: "CUET-PG Psychology",
    description: "Common University Entrance Test for Postgraduate Psychology programs. This national-level exam is conducted for admission to central universities and participating institutions.",
    pattern: "Multiple choice questions, 100 marks, 2-hour duration, negative marking of 0.25 marks.",
    eligibility: "Bachelor's degree with minimum 50% marks (45% for SC/ST/OBC-NCL/PwD)",
    colleges: "Delhi University, JNU, BHU, Jamia Millia Islamia, and other central universities",
    syllabus: [
      "Research Methods & Statistics",
      "Cognitive Psychology",
      "Social Psychology",
      "Abnormal Psychology",
      "Developmental Psychology",
      "Personality Theories",
      "Psychological Testing",
      "Experimental Psychology"
    ]
  },
  {
    name: "TISSNET",
    description: "Tata Institute of Social Sciences National Entrance Test for admission to MA Applied Psychology, HR & Labor Relations, and other programs.",
    pattern: "Multiple choice questions, 100 marks, no negative marking, 100-minute duration.",
    eligibility: "Bachelor's degree in any discipline with minimum 50% marks",
    colleges: "TISS Mumbai, TISS Hyderabad, TISS Guwahati",
    syllabus: [
      "General Awareness",
      "Analytical & Logical Reasoning",
      "Mathematics & Statistics",
      "English Proficiency",
      "Current Affairs",
      "Social Sensitivity"
    ]
  }
];

const prepTips = [
  {
    title: "Create a Study Schedule",
    content: "Allocate specific time slots for different subjects based on your strengths and weaknesses. Consistency is key.",
    icon: Calendar
  },
  {
    title: "Practice Previous Papers",
    content: "Solve at least 5 years of previous question papers to understand the exam pattern and frequently asked topics.",
    icon: FileText
  },
  {
    title: "Focus on Fundamentals",
    content: "Ensure you have strong conceptual understanding. Don't just memorize; understand the principles and theories.",
    icon: Book
  },
  {
    title: "Revision Strategy",
    content: "Regular revision is crucial. Use mind maps, flashcards, and short notes for quick revision before the exam.",
    icon: CheckCircle
  },
  {
    title: "Time Management",
    content: "Practice timed mock tests to improve your speed and accuracy during the actual examination.",
    icon: Clock
  },
  {
    title: "Subject-wise Approach",
    content: "Focus more on high-weightage subjects and topics that frequently appear in the entrance exams.",
    icon: Award
  }
];

export default EntranceExams;
