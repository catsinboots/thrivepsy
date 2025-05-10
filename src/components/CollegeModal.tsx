
import { useState, useEffect } from "react";
import { College } from "@/types/college";
import { X, MapPin, Globe, Phone, Mail, ExternalLink, Share2, BookOpen, Award, School } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface CollegeModalProps {
  isOpen: boolean;
  onClose: () => void;
  college: College | null;
}

const CollegeModal = ({ isOpen, onClose, college }: CollegeModalProps) => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Reset tab when college changes
  useEffect(() => {
    if (isOpen) {
      setActiveTab("overview");
    }
  }, [college, isOpen]);

  if (!college) return null;

  // Group college details for better organization
  const overview = {
    "Course Type": college["Course Type"],
    "Specialization": college["Specialization"],
    "Location (City, State)": college["Location (City, State)"],
    "2024 CUET-PG Cutoff (Gen)": college["2024 CUET-PG Cutoff (Gen)"],
    "Admission Process": college["Admission Process"],
  };

  const contact = {
    "Website": college["Website"] || "Not provided",
    "Contact": college["Contact"] || "Not provided",
  };

  const remaining = Object.keys(college)
    .filter(key => !['College Name', ...Object.keys(overview), ...Object.keys(contact)].includes(key))
    .reduce((obj, key) => {
      obj[key] = college[key];
      return obj;
    }, {} as Record<string, string>);

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div className="bg-white/20 p-2 rounded-lg">
                <School className="h-5 w-5" />
              </div>
              <div>
                <Badge variant="secondary" className="bg-blue-500/30 text-white border-none mb-2">
                  {college["Course Type"]} • {college["Specialization"]}
                </Badge>
                <DialogTitle className="text-2xl font-bold text-white">
                  {college["College Name"]}
                </DialogTitle>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onClose} 
              className="text-white hover:bg-blue-700/50 rounded-full h-8 w-8"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <DialogDescription className="text-blue-100 mt-2 flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{college["Location (City, State)"]}</span>
          </DialogDescription>
        </div>
        
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="p-6">
          <TabsList className="mb-6 bg-gray-100">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="contact">Contact & Links</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-0 space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                Program Highlights
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">Course Type</div>
                  <div className="font-semibold">{college["Course Type"]}</div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">Specialization</div>
                  <div className="font-semibold">{college["Specialization"]}</div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">Admission Process</div>
                  <div className="font-semibold">{college["Admission Process"]}</div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="text-sm text-blue-500 mb-1">2024 CUET-PG Cutoff (Gen)</div>
                  <div className="font-bold text-lg text-blue-700">{college["2024 CUET-PG Cutoff (Gen)"]}</div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-4">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-600" />
                College Information
              </h3>
              
              <div className="flex items-center gap-4 flex-wrap">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 border-blue-200 text-blue-700"
                  onClick={() => {
                    if (college["Website"]) {
                      window.open(college["Website"], "_blank");
                    }
                  }}
                  disabled={!college["Website"]}
                >
                  <Globe className="h-4 w-4" />
                  Visit Website
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => {
                    navigator.share?.({
                      title: college["College Name"],
                      text: `Check out ${college["College Name"]} - ${college["Course Type"]} in ${college["Specialization"]}`,
                      url: window.location.href,
                    }).catch(() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Link copied to clipboard!");
                    });
                  }}
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="details" className="mt-0 space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">All College Details</h3>
              
              <div className="space-y-2">
                {Object.entries({...overview, ...remaining}).map(([key, value], i) => (
                  <div key={i} className="flex flex-wrap justify-between py-2 border-b border-gray-100 last:border-0">
                    <div className="font-medium text-gray-700">{key}</div>
                    <div>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="contact" className="mt-0 space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
              
              <div className="space-y-3">
                {Object.entries(contact).map(([key, value], i) => (
                  <div key={i} className="flex items-start gap-3">
                    {key === "Website" ? (
                      <Globe className="h-5 w-5 text-blue-600 mt-0.5" />
                    ) : (
                      <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                    )}
                    
                    <div>
                      <div className="text-sm font-medium text-gray-500">{key}</div>
                      {key === "Website" && value !== "Not provided" ? (
                        <a 
                          href={value.startsWith("http") ? value : `https://${value}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline flex items-center gap-1"
                        >
                          {value}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : key === "Contact" && value.includes("@") ? (
                        <a 
                          href={`mailto:${value}`}
                          className="text-blue-600 hover:underline"
                        >
                          {value}
                        </a>
                      ) : (
                        <div>{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold">Need assistance?</h4>
              </div>
              <p className="text-sm text-gray-700">
                If you need more information about this college, contact our support team at 
                <a href="mailto:support@cuetcollegefinder.com" className="text-blue-600 ml-1 hover:underline">
                  support@cuetcollegefinder.com
                </a>
              </p>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Last updated: May 2023
          </div>
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CollegeModal;
