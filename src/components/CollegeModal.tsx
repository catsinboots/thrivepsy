
import { College } from "@/types/college";
import { X } from "lucide-react";

interface CollegeModalProps {
  isOpen: boolean;
  onClose: () => void;
  college: College | null;
}

const CollegeModal = ({ isOpen, onClose, college }: CollegeModalProps) => {
  if (!isOpen || !college) return null;

  return (
    <div 
      className="fixed inset-0 bg-[#0055d3]/10 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative max-h-[80vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-6 text-4xl font-bold text-[#0055d3] hover:text-[#003b8e] transition-colors"
          aria-label="Close modal"
        >
          <X size={32} />
        </button>
        
        <div>
          <h2 
            id="modalTitle" 
            className="font-['Poppins'] text-2xl font-bold text-[#0055d3] mb-4"
          >
            {college["College Name"]}
          </h2>
          
          <ul className="space-y-1">
            {Object.entries(college).map(([key, value]) => (
              <li 
                key={key}
                className="py-2 border-b border-[#b3cdfa] text-base"
              >
                <strong className="font-bold text-[#0055d3]">{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CollegeModal;
