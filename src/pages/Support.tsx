
import { useState } from "react";
import Layout from "@/components/Layout";
import { MessageSquare, Users, HelpCircle, FileQuestion, ChevronDown, ChevronUp, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Support = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(0);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  
  const toggleFaq = (id: number) => {
    if (openFaqId === id) {
      setOpenFaqId(null);
    } else {
      setOpenFaqId(id);
    }
  };
  
  return (
    <Layout>
      <div className="page-container">
        <h1 className="page-title">Student <span className="gradient-text">Support</span> Hub</h1>
        <p className="page-subtitle">Get guidance, connect with mentors, and access resources to support your psychology journey.</p>
        
        {/* Support Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {supportOptions.map((option) => (
            <div key={option.title} className="glass-card p-6 text-center hover:border-amber-500/30 transition-all">
              <div className="bg-amber-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <option.icon className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="font-bold text-white mb-2">{option.title}</h3>
              <p className="text-sm text-gray-400">{option.description}</p>
              <Button className="mt-4 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400">
                {option.buttonText}
              </Button>
            </div>
          ))}
        </div>
        
        {/* Internship Opportunities */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
            <Users className="h-6 w-6 mr-2 text-amber-500" />
            Internship Opportunities
          </h2>
          
          <div className="glass-card p-6">
            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                Explore psychology internship and volunteer opportunities crowdsourced from our community.
              </p>
            </div>
            
            <div className="space-y-6">
              {internships.map((internship) => (
                <div key={internship.title} className="bg-amber-900/10 p-5 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-white">{internship.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      internship.type === "Paid" 
                        ? "bg-green-500/20 text-green-400" 
                        : "bg-blue-500/20 text-blue-400"
                    }`}>
                      {internship.type}
                    </span>
                  </div>
                  
                  <div className="mb-3 text-sm text-gray-300">
                    <div><span className="text-amber-400">Organization:</span> {internship.organization}</div>
                    <div><span className="text-amber-400">Location:</span> {internship.location}</div>
                    <div><span className="text-amber-400">Duration:</span> {internship.duration}</div>
                    <div><span className="text-amber-400">Last Date to Apply:</span> {internship.lastDate}</div>
                  </div>
                  
                  <p className="text-sm text-gray-400 mb-4">{internship.description}</p>
                  
                  <Button className="bg-amber-500 hover:bg-amber-600 text-amber-950">
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-amber-500/20 hover:bg-amber-500/10 text-amber-400">
                View All Opportunities
              </Button>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
            <HelpCircle className="h-6 w-6 mr-2 text-amber-500" />
            Frequently Asked Questions
          </h2>
          
          <div className="glass-card p-6">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className={`bg-amber-900/10 rounded-lg overflow-hidden ${openFaqId === faq.id ? 'border border-amber-500/20' : ''}`}
                >
                  <button 
                    className="w-full p-4 flex justify-between items-center text-left focus:outline-none"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <h3 className="font-bold text-white">{faq.question}</h3>
                    {openFaqId === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-amber-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-amber-500" />
                    )}
                  </button>
                  
                  {openFaqId === faq.id && (
                    <div className="p-4 pt-0 border-t border-amber-900/20">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
            <MessageSquare className="h-6 w-6 mr-2 text-amber-500" />
            Get in Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6">
              <h3 className="font-bold text-lg text-white mb-4">Send Us a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-amber-400 mb-1">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-amber-400 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    className="bg-white/5 border-white/10 text-white min-h-32"
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="font-bold text-lg text-white mb-4">Join Our Community</h3>
              
              <p className="text-gray-300 mb-6">
                Connect with fellow psychology students and professionals in our community forums and social media groups.
              </p>
              
              <div className="space-y-4">
                {communityLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center p-3 bg-amber-900/10 rounded-lg hover:bg-amber-900/20 transition-colors"
                  >
                    <link.icon className="h-6 w-6 text-amber-500 mr-3" />
                    <div>
                      <div className="font-medium text-white">{link.name}</div>
                      <div className="text-xs text-gray-400">{link.members} members</div>
                    </div>
                    <ChevronRight className="ml-auto h-5 w-5 text-amber-500" />
                  </a>
                ))}
              </div>
              
              <div className="mt-6">
                <Button variant="outline" className="w-full border-amber-500/20 hover:bg-amber-500/10 text-amber-400">
                  <Users className="h-4 w-4 mr-2" />
                  Explore All Communities
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Sample data
const supportOptions = [
  {
    title: "Connect with Mentors",
    description: "Get guidance from experienced psychology professionals and academics.",
    buttonText: "Find Mentors",
    icon: Users
  },
  {
    title: "Community Forum",
    description: "Join discussions with fellow psychology students and professionals.",
    buttonText: "Join Forum",
    icon: MessageSquare
  },
  {
    title: "Academic Support",
    description: "Get help with assignments, research projects, and exam preparation.",
    buttonText: "Get Help",
    icon: HelpCircle
  },
  {
    title: "Resource Library",
    description: "Access our curated collection of psychology resources and materials.",
    buttonText: "Browse Resources",
    icon: FileQuestion
  }
];

const internships = [
  {
    title: "Clinical Psychology Intern",
    organization: "Mind Wellness Center",
    location: "Delhi (On-site)",
    duration: "3 months",
    type: "Paid",
    lastDate: "December 15, 2024",
    description: "Assist clinical psychologists in assessment, intervention planning, and research activities."
  },
  {
    title: "Research Assistant - Child Development",
    organization: "Institute for Cognitive Development",
    location: "Remote",
    duration: "6 months",
    type: "Volunteer",
    lastDate: "November 20, 2024",
    description: "Support research on early childhood cognitive development through data collection and analysis."
  },
  {
    title: "Counseling Psychology Intern",
    organization: "Student Wellness Department, Delhi University",
    location: "Delhi (On-site)",
    duration: "4 months",
    type: "Paid",
    lastDate: "January 10, 2025",
    description: "Assist in providing counseling services to university students under supervision."
  }
];

const faqs = [
  {
    id: 1,
    question: "How can I prepare for psychology entrance exams?",
    answer: "Start by understanding the exam pattern and syllabus. Focus on NCERT books for basics, then move to standard psychology textbooks. Practice previous years' questions and take mock tests regularly. Join a test series to benchmark your preparation against others."
  },
  {
    id: 2,
    question: "What career options are available after a Psychology degree?",
    answer: "After a psychology degree, you can pursue careers in clinical psychology, counseling, organizational psychology, educational psychology, research, academia, forensic psychology, or neuropsychology. You can also work in HR, marketing, UX research, or social work with additional qualifications."
  },
  {
    id: 3,
    question: "How do I choose between different psychology specializations?",
    answer: "Consider your interests, strengths, career goals, and the job market. Shadow professionals in different specializations, attend workshops, and speak with faculty members. Take diverse electives during your undergraduate studies to explore different areas before specializing."
  },
  {
    id: 4,
    question: "Is M.Phil necessary for practicing as a clinical psychologist in India?",
    answer: "Yes, an M.Phil in Clinical Psychology from an RCI-recognized institution is currently required for practicing as a clinical psychologist in India. The M.Phil provides specialized training and supervised clinical experience essential for professional practice."
  },
  {
    id: 5,
    question: "How can I find psychology internships?",
    answer: "Look for internships through university placement cells, psychology department notice boards, professional psychology associations, mental health NGOs, online platforms like Internshala, and networking at psychology conferences and seminars."
  }
];

// The necessary icons from lucide-react
const ChevronRight = FileQuestion; // Placeholder for ChevronRight icon which is not available

const communityLinks = [
  {
    name: "Thrive Psychology Discord",
    url: "https://discord.gg/thrivepsych",
    members: "5,240+",
    icon: MessageSquare
  },
  {
    name: "Psychology Students Telegram",
    url: "https://t.me/psychstudents",
    members: "8,750+",
    icon: MessageSquare
  },
  {
    name: "Research Methodology Group",
    url: "https://discord.gg/researchmethods",
    members: "3,120+",
    icon: FileQuestion
  }
];

export default Support;
