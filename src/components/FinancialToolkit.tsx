import React from 'react';
import { Calculator, CreditCard, TrendingUp, PieChart, DollarSign, FileText } from 'lucide-react';

const FinancialToolkit: React.FC = () => {
  const stats = [
    { value: '45%', label: 'Faster Decision Making', description: 'Reduce time to insights' },
    { value: '89%', label: 'Data Accuracy', description: 'Reliable business intelligence' },
    { value: '200+', label: 'Integrations', description: 'Connect your tools' },
    { value: '24/7', label: 'Support', description: 'Always here to help' }
  ];

  const features = [
    {
      icon: Calculator,
      title: 'Advanced Analytics',
      description: 'Complex calculations and predictive modeling made simple'
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Secure and efficient payment tracking and analysis'
    },
    {
      icon: TrendingUp,
      title: 'Growth Tracking',
      description: 'Monitor your business growth with detailed metrics'
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Transform raw data into compelling visual stories'
    },
    {
      icon: DollarSign,
      title: 'Revenue Optimization',
      description: 'Identify opportunities to maximize your revenue streams'
    },
    {
      icon: FileText,
      title: 'Automated Reports',
      description: 'Generate comprehensive reports automatically'
    }
  ];

  return (
    <section className="py-24 bg-[#02010d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            All-in-One Financial Toolkit for
            <br />
            <span className="bg-gradient-to-r from-[#5B51D8] to-[#5B51D8]/80 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to manage, analyze, and optimize your business finances in one comprehensive platform
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-[#5B51D8] transition-colors">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-300 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-[#0a0121] rounded-2xl p-8 border border-[#0a0121] hover:border-[#5B51D8] transition-all duration-300 group"
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

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#5B51D8] to-[#5B51D8]/80 rounded-2xl p-8 border border-[#5B51D8]">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/80 mb-6">
              Join thousands of businesses that trust AutomateDms for their Automation Dms
            </p>
            <button className="bg-white text-[#5B51D8] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialToolkit;