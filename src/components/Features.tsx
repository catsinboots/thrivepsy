
import { Check, Layout, Shield, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Layout,
    title: "Responsive Design",
    description: "Websites that look great on all devices, from desktops to mobile phones.",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
    borderColor: "border-blue-200",
  },
  {
    icon: Shield,
    title: "Secure & Fast",
    description: "Built with security and performance in mind, ensuring a smooth experience for your users.",
    color: "bg-green-50",
    iconColor: "text-green-500",
    borderColor: "border-green-200",
  },
  {
    icon: Zap,
    title: "Easy Updates",
    description: "Make changes to your website quickly and easily without any technical knowledge.",
    color: "bg-amber-50",
    iconColor: "text-amber-500",
    borderColor: "border-amber-200",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Powerful Features</h2>
        <p className="section-subtitle">
          Everything you need to create and manage your website, all in one place.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-border transition-all duration-300 hover:shadow-md"
            >
              <div className={cn("rounded-full w-12 h-12 flex items-center justify-center mb-4", feature.color)}>
                <feature.icon className={cn("h-6 w-6", feature.iconColor)} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
              <p className="text-muted-foreground mb-6">
                We provide a complete solution for your website needs, with all the tools and support you need for success.
              </p>
              <ul className="space-y-3">
                {[
                  "No coding knowledge required",
                  "Free updates and support",
                  "Custom domain integration",
                  "SEO optimization tools"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80"
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary/10 w-32 h-32 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
