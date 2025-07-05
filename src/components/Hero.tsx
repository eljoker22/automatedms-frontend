import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


interface HeroProps {
  onAuthClick: (mode: 'signin' | 'signup') => void;
  user: any
}

const Hero: React.FC<HeroProps> = ({ onAuthClick, user }) => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#02010d] via-[#0a0121] to-[#02010d]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(91,81,216,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(91,81,216,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(91,81,216,0.05),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#5B51D8] rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-[#5B51D8]/80 rounded-full animate-pulse animation-delay-1000" />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-[#5B51D8] rounded-full animate-pulse animation-delay-2000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-[80px]">
        <div className="max-w-4xl mx-auto">
          {/* Title and Content */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-[#5B51D8]/80 bg-clip-text text-transparent leading-tight">
          AutomatedMS.io,
            <br />
            <span className="bg-gradient-to-r from-[#5B51D8] to-[#5B51D8]/80 bg-clip-text text-transparent">
            Dms to Thousands.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            More Messages. More Leads. More Sales.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => user ? scrollToSection('pricing') : onAuthClick('signup')}
              className="group bg-gradient-to-r from-[#5B51D8] to-[#5B51D8]/80 hover:from-[#5B51D8]/90 hover:to-[#5B51D8]/70 px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button onClick={() => navigate('/download')} className="group flex items-center space-x-2 px-8 py-4 rounded-lg border border-[#0a0121] hover:border-[#5B51D8] transition-all duration-300 text-gray-300 hover:text-white">
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Download</span>
            </button>
          </div>

          <div className="text-gray-400 text-sm mb-16">
            Trusted by 200+ growing businesses worldwide
          </div>

          {/* Dashboard Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-[#5B51D8]/10 to-transparent rounded-2xl p-4">
              <img 
                src="/Screenshot_1.png" 
                alt="AutomateDms Dashboard Interface"
                className="w-full h-auto rounded-xl shadow-2xl border border-[#5B51D8]/20"
              />
              
              {/* Floating UI Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#5B51D8] rounded-lg flex items-center justify-center animate-pulse">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#5B51D8] to-[#5B51D8]/80 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#5B51D8]/5 to-transparent rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;