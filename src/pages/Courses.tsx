import { BookOpen, Clock, Award, PenTool, Scale, Star, CheckCircle, Clipboard, Brain as BrainIcon, ChartBar as ChartBarIcon, Heart as HeartIcon, Lightbulb as LightbulbIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Courses = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Online <span className="gradient-text">Courses</span></h1>
      <p className="page-subtitle">Enhance your psychology knowledge through our specialized courses and exam preparation resources.</p>
      
      {/* Course Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {courseCategories.map((category) => (
          <div key={category.name} className="coursera-card p-4 text-center hover:shadow-md transition-all cursor-pointer">
            <div className="bg-coursera-blue/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <category.icon className="h-6 w-6 text-coursera-blue" />
            </div>
            <h3 className="font-bold text-coursera-navy">{category.name}</h3>
            <p className="text-xs text-gray-500 mt-1">{category.count} courses</p>
          </div>
        ))}
      </div>
      
      {/* Featured Courses */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-coursera-navy">Popular Courses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <div key={course.title} className="coursera-card overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-coursera-lightGray to-white relative">
                {course.featured && (
                  <div className="absolute top-3 right-3 bg-coursera-blue text-xs font-bold px-2 py-1 rounded-full text-white">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-full">
                    <course.icon className="h-12 w-12 text-coursera-blue" />
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-coursera-blue/20 text-coursera-blue text-xs px-2 py-1 rounded">
                    {course.level}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-coursera-blue mr-1" />
                    <span className="text-xs font-medium text-coursera-darkBlue">{course.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-lg text-coursera-navy mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 text-coursera-blue mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="text-coursera-navy font-bold">
                    {course.isFree ? "Free" : `₹${course.price}`}
                  </div>
                </div>
                
                <Button className="w-full bg-coursera-blue hover:bg-coursera-darkBlue text-white">
                  Enroll Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <Button className="bg-coursera-blue hover:bg-coursera-darkBlue text-white">
            View All Courses
          </Button>
        </div>
      </div>
      
      {/* Exam Prep Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-coursera-navy">Exam Preparation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {examPrep.map((exam) => (
            <div key={exam.title} className="coursera-card p-6 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="h-full bg-gradient-to-br from-coursera-lightGray to-white rounded-lg flex items-center justify-center p-6">
                  <exam.icon className="h-16 w-16 text-coursera-blue" />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="font-bold text-xl text-coursera-navy mb-2">{exam.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{exam.description}</p>
                
                <div className="space-y-2 mb-4">
                  {exam.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-coursera-blue mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Button className="bg-coursera-blue hover:bg-coursera-darkBlue text-white">
                    Start Preparation
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Certificate Courses */}
      <div className="coursera-card p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4 text-coursera-navy flex items-center">
          <Award className="h-6 w-6 mr-2 text-coursera-blue" />
          Professional Certificate Courses
        </h2>
        
        <p className="text-gray-600 mb-6">
          Enhance your skills with professional certificate courses designed for practical application in psychology.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificateCourses.map((course) => (
            <div key={course.title} className="bg-coursera-lightGray p-4 rounded-lg">
              <div className="font-bold text-coursera-navy mb-1">{course.title}</div>
              <div className="text-xs text-gray-500 mb-3">Duration: {course.duration}</div>
              <div className="text-sm text-gray-600">{course.description}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex justify-center">
          <Button variant="outline" className="border-coursera-blue/20 hover:bg-coursera-blue/10 text-coursera-blue">
            Browse All Certificate Courses
          </Button>
        </div>
      </div>
    </div>
  );
};

// Sample data
const courseCategories = [
  { name: "Theory Courses", count: 24, icon: BookOpen },
  { name: "Research Methods", count: 18, icon: PenTool },
  { name: "Exam Preparation", count: 15, icon: Award },
  { name: "Practical Skills", count: 22, icon: Scale }
];

const featuredCourses = [
  {
    title: "Introduction to Cognitive Psychology",
    description: "Explore the core concepts of cognitive psychology including perception, attention, memory, and problem solving.",
    level: "Beginner",
    duration: "6 weeks",
    price: "1,999",
    rating: "4.8",
    isFree: false,
    featured: true,
    icon: BrainIcon
  },
  {
    title: "Research Methods in Psychology",
    description: "Learn to design and conduct psychological research using qualitative and quantitative methodologies.",
    level: "Intermediate",
    duration: "8 weeks",
    price: "2,499",
    rating: "4.7",
    isFree: false,
    featured: false,
    icon: PenTool
  },
  {
    title: "Statistical Analysis with SPSS",
    description: "Master data analysis in psychology research using SPSS software with practical exercises.",
    level: "Advanced",
    duration: "5 weeks",
    price: "2,999",
    rating: "4.9",
    isFree: false,
    featured: true,
    icon: ChartBarIcon
  },
  {
    title: "Basics of Counseling Psychology",
    description: "Learn fundamental counseling techniques and theories used in psychological practice.",
    level: "Beginner",
    duration: "4 weeks",
    price: "1,799",
    rating: "4.6",
    isFree: false,
    featured: false,
    icon: HeartIcon
  },
  {
    title: "Introduction to Psychological Testing",
    description: "Understand the principles and applications of psychological assessment and testing.",
    level: "Intermediate",
    duration: "6 weeks",
    price: "2,299",
    rating: "4.7",
    isFree: false,
    featured: false,
    icon: Clipboard
  },
  {
    title: "Psychology of Learning",
    description: "Free introductory course on learning theories and their applications in educational settings.",
    level: "Beginner",
    duration: "3 weeks",
    rating: "4.5",
    isFree: true,
    featured: false,
    icon: LightbulbIcon
  }
];

const examPrep = [
  {
    title: "CUET-PG Psychology Test Series",
    description: "Comprehensive test series with mock tests, previous years' questions, and detailed solutions for CUET-PG Psychology entrance.",
    features: [
      "15 Full-length Mock Tests",
      "Topic-wise Question Banks (2000+ questions)",
      "Video Solutions for Complex Topics",
      "Performance Analytics and Progress Tracking",
      "24x7 Doubt Resolution Support"
    ],
    icon: Award
  },
  {
    title: "NET Psychology Preparation",
    description: "Complete preparation for UGC NET Psychology with concept videos, mock tests, and study material.",
    features: [
      "Comprehensive Coverage of All Units",
      "20 Full-length Mock Tests",
      "Previous 10 Years' Question Analysis",
      "Concept Videos by Experts",
      "Strategy Sessions for Paper 1 and Paper 2"
    ],
    icon: BookOpen
  }
];

const certificateCourses = [
  {
    title: "Cognitive Behavioral Therapy (CBT) Basics",
    duration: "8 weeks",
    description: "Learn fundamental principles and techniques of CBT for various psychological conditions."
  },
  {
    title: "Advanced SPSS for Psychology Research",
    duration: "6 weeks",
    description: "Master advanced statistical techniques using SPSS for psychology research and data analysis."
  },
  {
    title: "Psychometric Assessment",
    duration: "10 weeks",
    description: "Learn to administer, score, and interpret common psychological assessment tools."
  },
  {
    title: "Mental Health First Aid",
    duration: "4 weeks",
    description: "Essential skills to identify and support individuals experiencing mental health challenges."
  },
  {
    title: "Child and Adolescent Psychology",
    duration: "8 weeks",
    description: "Understanding developmental stages and intervention strategies for children and adolescents."
  },
  {
    title: "Positive Psychology Applications",
    duration: "6 weeks",
    description: "Learn to apply positive psychology principles to enhance well-being and resilience."
  }
];

export default Courses;
