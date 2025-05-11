
import Layout from "@/components/Layout";
import { BookOpen, Download, ShoppingBag, FileText, ArrowRight, Tag, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resources = () => {
  const [email, setEmail] = useState("");
  
  const handleDownload = (item: string) => {
    toast({
      title: "Download started",
      description: `Downloading ${item}`,
      variant: "default", // Changed from "success" to "default"
    });
  };
  
  const handlePurchase = (item: string) => {
    toast({
      title: "Item added to cart",
      description: `${item} has been added to your cart`,
      variant: "default", // Changed from "success" to "default" 
    });
  };
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter",
    });
    setEmail("");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-coursera-black font-heading">
        Study <span className="gradient-text">Resources</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mb-12">
        Access comprehensive study materials, guides, and resources designed specifically for psychology students. Enhance your learning with our carefully curated collection.
      </p>
      
      <Tabs defaultValue="study-materials" className="mb-16">
        <TabsList className="mb-8">
          <TabsTrigger value="study-materials">Study Materials</TabsTrigger>
          <TabsTrigger value="books">Books</TabsTrigger>
          <TabsTrigger value="notes">Study Notes</TabsTrigger>
          <TabsTrigger value="merchandise">Merchandise</TabsTrigger>
        </TabsList>
        
        <TabsContent value="study-materials">
          <h2 className="text-2xl font-bold mb-6 text-coursera-black">Featured Study Materials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <div key={resource.title} className="coursera-card p-6 hover:shadow-lg transition-all">
                <div className="bg-coursera-blue/5 h-40 rounded-lg flex items-center justify-center mb-4">
                  <resource.icon className="h-16 w-16 text-coursera-blue" />
                </div>
                
                <h3 className="font-bold text-lg text-coursera-black mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-coursera-blue font-bold">{resource.price}</div>
                  <Button 
                    variant="default" 
                    className="bg-coursera-blue text-white hover:bg-coursera-darkBlue"
                    onClick={() => handleDownload(resource.title)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4 text-coursera-black">Additional Study Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalResources.map((resource, index) => (
                <div key={index} className="coursera-card p-5">
                  <h4 className="font-bold text-coursera-black mb-2">{resource.title}</h4>
                  <p className="text-sm text-gray-500 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium bg-blue-50 text-coursera-blue px-2 py-1 rounded-full">
                      {resource.category}
                    </span>
                    <Button 
                      variant="link" 
                      className="text-coursera-blue p-0 h-auto text-sm"
                      onClick={() => handleDownload(resource.title)}
                    >
                      Access Resource <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="books">
          <h2 className="text-2xl font-bold mb-6 text-coursera-black flex items-center">
            <BookOpen className="h-6 w-6 mr-2 text-coursera-blue" />
            Recommended Books
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <div key={book.title} className="coursera-card p-5">
                <div className="bg-coursera-blue/5 h-48 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-12 w-12 text-coursera-blue" />
                </div>
                
                <h3 className="font-bold text-coursera-black mb-1 line-clamp-1">{book.title}</h3>
                <p className="text-sm text-coursera-blue mb-3">by {book.author}</p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  {book.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-blue-50 text-coursera-blue px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-coursera-black font-bold">₹{book.price}</div>
                  <Button 
                    size="sm" 
                    className="bg-coursera-blue hover:bg-coursera-darkBlue text-white"
                    onClick={() => handlePurchase(book.title)}
                  >
                    <ShoppingBag className="h-4 w-4 mr-1" />
                    Buy
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button 
              className="bg-coursera-blue/10 hover:bg-coursera-blue/20 text-coursera-blue border border-coursera-blue/20"
              onClick={() => {
                toast({
                  title: "Loading",
                  description: "Viewing all books catalog",
                });
              }}
            >
              View All Books
            </Button>
          </div>
          
          {/* Book Bundles */}
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-6 text-coursera-black">Special Book Bundles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bookBundles.map((bundle, index) => (
                <div key={index} className="coursera-card p-6 border-2 border-coursera-blue/10">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-lg text-coursera-blue">{bundle.title}</h4>
                    <span className="bg-coursera-blue text-white text-xs px-3 py-1 rounded-full">
                      Save {bundle.savePercent}%
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{bundle.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    {bundle.books.map((book, idx) => (
                      <div key={idx} className="flex items-center">
                        <BookOpen className="h-4 w-4 text-coursera-blue mr-2" />
                        <span className="text-sm text-gray-700">{book}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <div className="line-through text-sm text-gray-400">₹{bundle.originalPrice}</div>
                      <div className="font-bold text-lg text-coursera-black">₹{bundle.discountedPrice}</div>
                    </div>
                    <Button 
                      className="bg-coursera-blue hover:bg-coursera-darkBlue text-white"
                      onClick={() => handlePurchase(bundle.title)}
                    >
                      Purchase Bundle
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="notes">
          <h2 className="text-2xl font-bold mb-6 text-coursera-black flex items-center">
            <FileText className="h-6 w-6 mr-2 text-coursera-blue" />
            Downloadable Study Notes
          </h2>
          
          <p className="text-gray-600 mb-6">Access high-quality notes prepared by psychology professors and experts from leading universities across India.</p>
          
          <div className="space-y-4">
            {studyNotes.map((note) => (
              <div key={note.title} className="bg-white border border-gray-200 p-4 rounded-lg flex justify-between items-center hover:shadow-md transition-shadow">
                <div>
                  <h3 className="font-medium text-coursera-black">{note.title}</h3>
                  <div className="text-xs text-gray-400 mt-1">{note.pages} pages • {note.downloads}+ downloads</div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-coursera-blue font-bold">{note.free ? "Free" : `₹${note.price}`}</div>
                  <Button 
                    size="sm" 
                    variant={note.free ? "outline" : "default"} 
                    className={note.free ? 
                      "border-coursera-blue/20 text-coursera-blue" : 
                      "bg-coursera-blue text-white hover:bg-coursera-darkBlue"}
                    onClick={() => handleDownload(note.title)}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Premium Notes Section */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4 text-coursera-black">Premium Study Material</h3>
            <div className="coursera-card p-6 border-t-4 border-coursera-blue">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-lg text-coursera-black">Complete Psychology Study Pack</h4>
                <span className="bg-coursera-blue/10 text-coursera-blue px-3 py-1 rounded-full text-sm font-medium">
                  Best Value
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">
                Get access to all our premium study materials, including lecture notes, practice questions, mock tests, and more.
                This comprehensive package covers all major topics in psychology undergraduate and postgraduate curriculum.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="font-medium text-coursera-blue mb-1">800+ Pages</div>
                  <div className="text-xs text-gray-500">Comprehensive coverage</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="font-medium text-coursera-blue mb-1">25+ Topics</div>
                  <div className="text-xs text-gray-500">All major subjects</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="font-medium text-coursera-blue mb-1">Lifetime Access</div>
                  <div className="text-xs text-gray-500">With regular updates</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="line-through text-sm text-gray-400">₹2999</div>
                  <div className="font-bold text-xl text-coursera-blue">₹1999</div>
                </div>
                <Button 
                  className="bg-coursera-blue hover:bg-coursera-darkBlue text-white"
                  onClick={() => handlePurchase("Complete Psychology Study Pack")}
                >
                  Get Premium Access
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="merchandise">
          <h2 className="text-2xl font-bold mb-6 text-coursera-black flex items-center">
            <Tag className="h-6 w-6 mr-2 text-coursera-blue" />
            Psychology Merchandise
          </h2>
          
          <p className="text-gray-600 mb-6">Show your love for psychology with our exclusive merchandise collection. Perfect gifts for psychology students and professionals.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {merchandise.map((item) => (
              <div key={item.title} className="coursera-card p-4">
                <div className="bg-coursera-blue/5 h-40 rounded-lg flex items-center justify-center mb-4">
                  <div className="bg-white/70 backdrop-blur-sm p-3 rounded-full shadow-sm">
                    <item.icon className="h-10 w-10 text-coursera-blue" />
                  </div>
                </div>
                
                <h3 className="font-bold text-coursera-black mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-coursera-black font-bold">₹{item.price}</div>
                  <Button 
                    size="sm" 
                    className="bg-coursera-blue hover:bg-coursera-darkBlue text-white"
                    onClick={() => handlePurchase(item.title)}
                  >
                    <ShoppingBag className="h-4 w-4 mr-1" />
                    Buy Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Featured Merchandise Bundle */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4 text-coursera-black">Featured Bundle</h3>
            <div className="coursera-card p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-coursera-blue/5 w-full md:w-1/3 h-48 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-coursera-blue" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl text-coursera-black mb-2">Psychology Student Starter Kit</h4>
                  <p className="text-gray-600 mb-4">
                    Everything a psychology student needs to get started. This bundle includes a planner, notebook set, 
                    brain anatomy mug, psychology infographic posters, and a premium pen set.
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="text-sm flex items-center text-gray-600">
                      <ArrowRight className="h-3 w-3 text-coursera-blue mr-1" /> 2025 Planner
                    </div>
                    <div className="text-sm flex items-center text-gray-600">
                      <ArrowRight className="h-3 w-3 text-coursera-blue mr-1" /> Notebook Set (3)
                    </div>
                    <div className="text-sm flex items-center text-gray-600">
                      <ArrowRight className="h-3 w-3 text-coursera-blue mr-1" /> Brain Anatomy Mug
                    </div>
                    <div className="text-sm flex items-center text-gray-600">
                      <ArrowRight className="h-3 w-3 text-coursera-blue mr-1" /> Infographic Posters
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="line-through text-sm text-gray-400">₹1799</div>
                      <div className="font-bold text-xl text-coursera-blue">₹1299</div>
                      <div className="text-xs text-gray-500">Save ₹500</div>
                    </div>
                    <Button 
                      className="bg-coursera-blue hover:bg-coursera-darkBlue text-white"
                      onClick={() => handlePurchase("Psychology Student Starter Kit")}
                    >
                      Buy Bundle
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Newsletter Subscription */}
      <div className="coursera-card p-8 mb-12">
        <h2 className="text-2xl font-bold mb-2 text-coursera-black">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-6">Receive the latest psychology resources, study tips, and exclusive offers directly to your inbox.</p>
        
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="email"
              placeholder="Your email address"
              className="pl-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button type="submit" className="bg-coursera-blue hover:bg-coursera-darkBlue text-white">
            Subscribe
          </Button>
        </form>
        <p className="text-xs text-gray-500 mt-2">
          By subscribing, you agree to receive marketing emails from us. You can unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

// Sample data
const featuredResources = [
  {
    title: "Complete CUET-PG Study Guide",
    description: "Comprehensive study material covering all topics for CUET-PG Psychology entrance examination.",
    price: "₹499",
    icon: FileText
  },
  {
    title: "Research Methods Handbook",
    description: "A complete guide to research methodologies, data collection, and analysis techniques in psychology.",
    price: "₹349",
    icon: BookOpen
  },
  {
    title: "Psychology Flashcards Bundle",
    description: "Digital flashcards covering key concepts, theories, and terminology for psychology students.",
    price: "₹199",
    icon: FileText
  }
];

const books = [
  {
    title: "Introduction to Psychology: Concepts & Applications",
    author: "Dr. Anjali Sharma",
    price: "599",
    tags: ["Undergraduate", "Basics"]
  },
  {
    title: "Research Methods for Psychology Students",
    author: "Dr. Rajesh Kumar",
    price: "749",
    tags: ["Research", "Methods"]
  },
  {
    title: "Cognitive Psychology: Indian Perspective",
    author: "Dr. Priya Patel",
    price: "849",
    tags: ["Cognitive", "Advanced"]
  },
  {
    title: "Statistical Analysis in Psychology",
    author: "Prof. Vikram Singh",
    price: "699",
    tags: ["Statistics", "Research"]
  }
];

const studyNotes = [
  {
    title: "Cognitive Psychology - Comprehensive Notes",
    pages: 78,
    downloads: 1250,
    price: "149",
    free: false
  },
  {
    title: "Research Methods in Psychology",
    pages: 65,
    downloads: 980,
    price: "129",
    free: false
  },
  {
    title: "Introduction to Psychology",
    pages: 45,
    downloads: 2350,
    free: true
  },
  {
    title: "Abnormal Psychology Notes",
    pages: 82,
    downloads: 1430,
    price: "169",
    free: false
  },
  {
    title: "Social Psychology Basics",
    pages: 36,
    downloads: 1650,
    free: true
  }
];

const merchandise = [
  {
    title: "Psychology Planner 2025",
    description: "Academic planner with psychology concepts, quotes, and study tips",
    price: "399",
    icon: BookOpen
  },
  {
    title: "Brain Anatomy Mug",
    description: "Ceramic mug with detailed brain anatomy illustration",
    price: "299",
    icon: BookOpen
  },
  {
    title: "Psychology Infographic Poster Set",
    description: "Set of 3 high-quality psychology concept posters",
    price: "599",
    icon: FileText
  },
  {
    title: "Freud vs. Jung T-Shirt",
    description: "100% cotton t-shirt with psychology-themed design",
    price: "499",
    icon: Tag
  }
];

// New additional data
const additionalResources = [
  {
    title: "Psychology Career Guide",
    description: "A comprehensive guide to career paths in psychology, with insights from professionals in various specializations.",
    category: "Career Development"
  },
  {
    title: "Statistics for Psychology Students",
    description: "Interactive tools and guides for understanding statistical concepts commonly used in psychological research.",
    category: "Research Tools"
  },
  {
    title: "APA Citation Style Guide",
    description: "Complete reference for correctly formatting papers and citations according to APA 7th edition guidelines.",
    category: "Academic Writing"
  },
  {
    title: "Psychology Experiment Design Templates",
    description: "Ready-to-use templates for designing psychology experiments and research studies.",
    category: "Research Tools"
  },
  {
    title: "Therapy Techniques Overview",
    description: "Introduction to various therapeutic approaches and techniques used in clinical psychology.",
    category: "Clinical Practice"
  },
  {
    title: "Psychology Podcast Directory",
    description: "Curated list of podcasts covering various psychology topics, perfect for learning on the go.",
    category: "Audio Learning"
  }
];

const bookBundles = [
  {
    title: "Clinical Psychology Essentials",
    description: "Everything you need for understanding clinical psychology concepts and practices.",
    books: [
      "Clinical Psychology: Science, Practice, and Diversity",
      "Diagnostic and Statistical Manual (DSM-5)",
      "Fundamentals of Clinical Interventions",
      "Ethics in Clinical Practice"
    ],
    originalPrice: "2499",
    discountedPrice: "1899",
    savePercent: 24
  },
  {
    title: "Research Methodology Bundle",
    description: "Master psychological research methods with this comprehensive book collection.",
    books: [
      "Research Design in Psychology",
      "Statistical Methods for Psychology",
      "Qualitative Research Methods",
      "Advanced Data Analysis Techniques"
    ],
    originalPrice: "2799",
    discountedPrice: "1999",
    savePercent: 28
  }
];

export default Resources;
