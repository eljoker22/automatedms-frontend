import React from 'react';
import { Building2, Zap, Shield, Briefcase, Globe, TrendingUp } from 'lucide-react';

const TrustSection: React.FC = () => {
  const companies = [
    { name: 'Enterprise Corp', icon: Building2 },
    { name: 'TechFlow', icon: Zap },
    { name: 'SecureBank', icon: Shield },
    { name: 'BizSolutions', icon: Briefcase },
    { name: 'GlobalTech', icon: Globe },
    { name: 'GrowthCo', icon: TrendingUp },
  ];

  return (
    <section className="py-16 bg-[#02010d]/50 border-t border-[#0a0121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Backed by 200+ Growing Businesses
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of clients that trust AutomatedMS.io for Auto DM Engine for Instagram Growth
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => {
            const Icon = company.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity duration-300 group"
              >
                <div className="w-12 h-12 bg-[#0a0121] rounded-lg flex items-center justify-center group-hover:bg-[#5B51D8]/20 transition-colors">
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-[#5B51D8] transition-colors" />
                </div>
                <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                  {company.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;