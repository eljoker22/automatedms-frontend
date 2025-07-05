import React from 'react';
import { Database, Users, MapPin, Shield, MessageSquareMore, Send } from 'lucide-react';

const StorySection: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: 'All-in-One Dashboard',
      description: 'Centralize all your dms data in one comprehensive dashboard with real-time updates and intelligent insights.'
    },
    {
      icon: Users,
      title: 'Mange your Acoounts',
      description: 'A system that allows you to register and manage all your Instagram accounts from one place.'
    },
    {
      icon: Send,
      title: 'Unlimted Dms',
      description: 'Send hundreds of messages without limits.'
    },
    {
      icon: Shield,
      title: 'Undetectable',
      description: 'Secure browsers that are undetectable by anti-robot programs.'
    },
    {
      icon: MapPin,
      title: 'Support Proxy',
      description: 'Supports using proxy servers with different accounts from different locations.'
    },
    {
      icon: MessageSquareMore,
      title: 'Support Team',
      description: 'Provide complete support and explanation of the program and how it works..'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            DMS Your Way to
            <br />
            <span className="bg-gradient-to-r from-[#5B51D8] to-[#5B51D8]/80 bg-clip-text text-transparent">
            Instagram Growth.
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Reach your audience faster and smarter with AutomatedMS.io          
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group bg-[#02010d] rounded-2xl p-8 border border-[#0a0121] hover:border-[#5B51D8] transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#5B51D8] to-[#5B51D8]/80 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#5B51D8]/80 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StorySection;