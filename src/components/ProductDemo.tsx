import React from 'react';
import { BarChart3, Users, TrendingUp, DollarSign, Globe, Calendar, Send } from 'lucide-react';

const ProductDemo: React.FC = () => {
  const featureImages = [
    {
      title: 'Profile Management',
      description: 'unlimted accounts instagram login support proxy and profiles to send dms',
      image: '/Screenshot_5.png',
      icon: Users
    },
    {
      title: 'Message Automation',
      description: 'Automated messaging system with customizable settings and progress tracking',
      image: '/Screenshot_6.png',
      icon: Send
    },
    {
      title: 'Success Analytics',
      description: 'Track your success metrics with detailed analytics and real-time reporting',
      image: '/Screenshot_7.png',
      icon: BarChart3
    },
    {
      title: 'Anti-detected Browsers',
      description: 'Automated messaging with anti-detected chrome browsers',
      image: '/Screenshot_4.png',
      icon: Globe
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#02010d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your All-in-One
            <br />
            <span className="bg-gradient-to-r from-[#5B51D8] to-[#5B51D8]/80 bg-clip-text text-transparent">
              Automate DMs Like a Pro
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            the ultimate tool for sending automated DMs on Instagram. Whether you're growing a brand, managing clients, or running a campaign
          </p>
        </div>

        {/* Feature Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {featureImages.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group">
                <div className="bg-[#0a0121] rounded-2xl p-6 border border-[#0a0121] hover:border-[#5B51D8] transition-all duration-300">
                  {/* Feature Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#5B51D8] to-[#5B51D8]/80 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-[#5B51D8]/80 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Feature Image */}
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5B51D8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Dashboard */}
        <div className="relative">
          <div className="bg-[#0a0121] rounded-2xl p-6 border border-[#0a0121] shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="text-sm text-gray-400">Watch your business grow</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-[#02010d] rounded-lg p-6 border border-[#0a0121]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-300 font-medium">Revenue</h3>
                  <DollarSign className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white">$127.5K</div>
                <div className="text-sm text-green-400">+12.5% from last month</div>
              </div>

              <div className="bg-[#02010d] rounded-lg p-6 border border-[#0a0121]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-300 font-medium">Customers</h3>
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white">2,847</div>
                <div className="text-sm text-blue-400">+18.2% growth</div>
              </div>

              <div className="bg-[#02010d] rounded-lg p-6 border border-[#0a0121]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-300 font-medium">Conversion</h3>
                  <TrendingUp className="w-5 h-5 text-[#5B51D8]" />
                </div>
                <div className="text-2xl font-bold text-white">4.2%</div>
                <div className="text-sm text-[#5B51D8]">+0.8% improvement</div>
              </div>

              <div className="bg-[#02010d] rounded-lg p-6 border border-[#0a0121]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-300 font-medium">Activity</h3>
                  <Globe className="w-5 h-5 text-orange-400" />
                </div>
                <div className="text-2xl font-bold text-white">98.7%</div>
                <div className="text-sm text-orange-400">System uptime</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#02010d] rounded-lg p-6 border border-[#0a0121]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-medium">Performance Overview</h3>
                  <BarChart3 className="w-5 h-5 text-gray-400" />
                </div>
                <div className="h-32 bg-[#0a0121] rounded-lg flex items-end justify-center space-x-2 p-4">
                  <div className="bg-[#5B51D8] w-6 h-16 rounded-sm"></div>
                  <div className="bg-[#5B51D8]/80 w-6 h-20 rounded-sm"></div>
                  <div className="bg-[#5B51D8] w-6 h-12 rounded-sm"></div>
                  <div className="bg-[#5B51D8]/90 w-6 h-24 rounded-sm"></div>
                  <div className="bg-[#5B51D8]/80 w-6 h-18 rounded-sm"></div>
                  <div className="bg-[#5B51D8] w-6 h-28 rounded-sm"></div>
                </div>
              </div>

              <div className="bg-[#02010d] rounded-lg p-6 border border-[#0a0121]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-medium">Recent Activity</h3>
                  <Calendar className="w-5 h-5 text-gray-400" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="text-sm text-gray-300">New user registration</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="text-sm text-gray-300">Payment processed</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#5B51D8] rounded-full"></div>
                    <div className="text-sm text-gray-300">Report generated</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <div className="text-sm text-gray-300">System backup completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;