
const Hero = () => {
  return (
    <section className="pt-28 pb-8 md:pt-32">
      <div className="flex flex-wrap md:flex-nowrap items-center gap-8">
        {/* Left side - Text */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-[#0055d3] font-['Poppins']">
            Find Your Best Fit College
          </h1>
          <p className="text-lg md:text-xl text-[#23407a] max-w-lg">
            Enter your CUET-PG score to instantly discover top colleges you're eligible for. Compare cutoffs, specializations, and more.
          </p>
        </div>
        
        {/* Right side - Image */}
        <div className="w-full md:w-1/2 max-w-[260px] md:max-w-none mx-auto">
          <div className="rounded-xl p-2 shadow-lg bg-[#eaf1fb] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Graduation Illustration" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
