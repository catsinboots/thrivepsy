
import Layout from "@/components/Layout";
import { BookOpen, Download, ShoppingBag, FileText, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  return (
    <Layout>
      <div className="page-container">
        <h1 className="page-title">Study <span className="gradient-text">Resources</span></h1>
        <p className="page-subtitle">Access comprehensive study materials, guides, and resources for psychology students.</p>
        
        {/* Featured Resources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Featured Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <div key={resource.title} className="glass-card p-6 hover:border-amber-500/30 transition-all">
                <div className="bg-gradient-to-br from-amber-900/30 to-gray-900/30 h-40 rounded-lg flex items-center justify-center mb-4">
                  <resource.icon className="h-16 w-16 text-amber-500" />
                </div>
                
                <h3 className="font-bold text-lg text-white mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-amber-400 font-bold">{resource.price}</div>
                  <Button variant="outline" className="text-amber-400 border-amber-500/20 hover:bg-amber-500/10">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Books Recommendations */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
            <BookOpen className="h-6 w-6 mr-2 text-amber-500" />
            Recommended Books
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <div key={book.title} className="glass-card p-5">
                <div className="bg-gradient-to-br from-amber-900/30 to-gray-900/30 h-48 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-12 w-12 text-amber-400" />
                </div>
                
                <h3 className="font-bold text-white mb-1 line-clamp-1">{book.title}</h3>
                <p className="text-sm text-amber-400 mb-3">by {book.author}</p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  {book.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-amber-500/10 text-amber-400 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-white font-bold">₹{book.price}</div>
                  <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-amber-950">
                    <ShoppingBag className="h-4 w-4 mr-1" />
                    Buy
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/20">
              View All Books
            </Button>
          </div>
        </div>
        
        {/* Downloadable Notes */}
        <div className="glass-card p-6 mb-16">
          <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
            <FileText className="h-6 w-6 mr-2 text-amber-500" />
            Downloadable Study Notes
          </h2>
          
          <p className="text-gray-300 mb-6">Access high-quality notes prepared by psychology professors and experts.</p>
          
          <div className="space-y-4">
            {studyNotes.map((note) => (
              <div key={note.title} className="bg-amber-900/10 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-white">{note.title}</h3>
                  <div className="text-xs text-gray-400 mt-1">{note.pages} pages • {note.downloads}+ downloads</div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-amber-400 font-bold">{note.free ? "Free" : `₹${note.price}`}</div>
                  <Button size="sm" variant={note.free ? "outline" : "default"} className={note.free ? "border-amber-500/20 text-amber-400" : "bg-amber-500 text-amber-950"}>
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Merchandise */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
            <Tag className="h-6 w-6 mr-2 text-amber-500" />
            Psychology Merchandise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {merchandise.map((item) => (
              <div key={item.title} className="glass-card p-4">
                <div className="bg-gradient-to-br from-amber-900/30 to-gray-900/30 h-40 rounded-lg flex items-center justify-center mb-4">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                    <item.icon className="h-10 w-10 text-amber-400" />
                  </div>
                </div>
                
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-gray-400 mb-3">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-white font-bold">₹{item.price}</div>
                  <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-amber-950">
                    <ShoppingBag className="h-4 w-4 mr-1" />
                    Buy Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
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

export default Resources;
