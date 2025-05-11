
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, X, Check } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const ResourcePopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      // Check if user hasn't dismissed the popup already in this session
      const hasSeenPopup = sessionStorage.getItem("hasSeenResourcePopup");
      if (!hasSeenPopup) {
        setOpen(true);
      }
    }, 10000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleClose = () => {
    setOpen(false);
    // Mark popup as seen in this session
    sessionStorage.setItem("hasSeenResourcePopup", "true");
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    // In a real app, you'd send this to your backend
    console.log("Email submitted:", email);
    setSubmitted(true);
    toast.success("Success! Check your email for resources.");
    
    // Close popup after delay
    setTimeout(() => {
      handleClose();
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-2 border-coursera-blue/20">
        <div className="absolute top-4 right-4 z-10">
          <button 
            onClick={handleClose}
            className="rounded-full p-1 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        </div>
        
        {!submitted ? (
          <>
            <div className="bg-gradient-to-r from-coursera-blue to-coursera-lightBlue p-6 text-white">
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <DialogTitle className="text-2xl font-bold mb-1">Free Psychology Resources</DialogTitle>
              <DialogDescription className="text-white/90">
                Get our curated collection of study materials, practice tests, and career guides for psychology students.
              </DialogDescription>
            </div>
            
            <div className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
                
                <div className="flex flex-col space-y-3">
                  <Button 
                    type="submit" 
                    className="w-full bg-coursera-blue hover:bg-coursera-darkBlue text-white"
                  >
                    Get Free Resources
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full text-gray-500"
                    onClick={handleClose}
                  >
                    Maybe Later
                  </Button>
                </div>
                
                <div className="mt-4 text-xs text-center text-gray-500">
                  By subscribing, you agree to receive occasional updates and resources.
                </div>
              </form>
            </div>
          </>
        ) : (
          <div className="p-8 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <DialogTitle className="text-xl font-bold mb-2">Thank You!</DialogTitle>
            <DialogDescription className="text-gray-600">
              We've sent the resources to your email. Check your inbox in a few minutes.
            </DialogDescription>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ResourcePopup;
