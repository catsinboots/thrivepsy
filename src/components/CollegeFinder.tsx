
import { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface CollegeFinderProps {
  onSearch: (score: number) => void;
}

const CollegeFinder = ({ onSearch }: CollegeFinderProps) => {
  const [score, setScore] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const parsedScore = parseInt(score, 10);
    if (!isNaN(parsedScore)) {
      onSearch(parsedScore);
    }
  };

  return (
    <section id="finder" className="bg-[#eaf1fb] p-6 sm:p-8 rounded-2xl shadow-lg mb-8">
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <label 
          htmlFor="scoreInput" 
          className="font-['Poppins'] text-[#0055d3] text-lg font-semibold whitespace-nowrap"
        >
          Your CUET-PG Score:
        </label>
        <Input
          id="scoreInput"
          type="number"
          min={0}
          max={1000}
          placeholder="e.g. 210"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          required
          className="border-2 border-[#b3cdfa] rounded-xl p-3 text-lg w-full sm:w-[180px] focus:border-[#0055d3] focus:ring-4 focus:ring-[#0055d3]/20 transition-all"
        />
        <Button 
          type="submit"
          className="bg-[#0055d3] text-white font-['Poppins'] font-bold text-lg rounded-xl py-3 px-8 hover:bg-[#003b8e] transition-colors shadow-lg shadow-[#0055d3]/20 w-full sm:w-auto"
        >
          Find Colleges
        </Button>
      </form>
    </section>
  );
};

export default CollegeFinder;
