import React, {useEffect, useState} from 'react';
import { Check, Zap, Crown } from 'lucide-react';
import { supabase } from '../../supabaseClient.ts'; // <-- Import supabase client

interface PricingProps {
  onAuthClick: (mode: 'signin' | 'signup') => void;
}

const Pricing: React.FC<PricingProps> = ({ onAuthClick }) => {
  const [user, setUser] = useState<any>(null); // <-- track logged-in user
  
  const plans = [
    {
      name: 'Starter',
      price: '$25',
      period: 'per month',
      description: 'Perfect for small teams and startups',
      icon: Zap,
      features: [
        'Unlimited Dms Daily',
        'Unlimited instagram accounts',
        'Anti Detect Browsers',
        'DM Private Profiles',
        'Proxy Support',
        'Unlimited Traffic',
        'Data export (CSV)',
        '24/7 Support'
      ],
      url: 'https://ko-software.app.fungies.io/subscribe/fdef6d19-4092-4043-9daf-a15c5001ac89',
      popular: false
    },
    {
      name: 'Professional',
      price: '$250',
      period: 'per year',
      description: 'Advanced features for growing businesses',
      icon: Crown,
      features: [
        'Unlimited Dms Daily',
        'Unlimited instagram accounts',
        'Anti Detect Browsers',
        'DM Private Profiles',
        'Proxy Support',
        'Unlimited Traffic',
        'Data export (CSV)',
        '24/7 Support'
      ],
      url: 'https://ko-software.app.fungies.io/subscribe/5ef8dd97-c5ca-4272-8a47-6d908e85e1eb',
      popular: true
    }
  ];

  // 🔐 Fetch session on mount
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };
    getUser();

    // 🎧 Subscribe to auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);




  return (
    <section id="pricing" className="py-24 bg-[#02010d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your
            <br />
            <span className="bg-gradient-to-r from-[#5B51D8] to-[#5B51D8]/80 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:mx-[80px] lg:mx-[150px] gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div 
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-[#5B51D8]/20 to-[#0a0121] border-2 border-[#5B51D8] scale-105' 
                    : 'bg-[#0a0121] border border-[#0a0121] hover:border-[#5B51D8]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#5B51D8] to-[#5B51D8]/80 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-[#5B51D8] to-[#5B51D8]/80' 
                      : 'bg-gradient-to-r from-[#5B51D8] to-[#5B51D8]/80'
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>


              {user ? (
                <a href={plan.url}>
                <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 bg-gradient-to-r from-[#5B51D8] to-[#5B51D8]/80 hover:from-[#5B51D8]/90 hover:to-[#5B51D8]/70 text-white`}

                  >
                  Get Started
                </button>
                </a>
              ) : (
                <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 bg-gradient-to-r from-[#5B51D8] to-[#5B51D8]/80 hover:from-[#5B51D8]/90 hover:to-[#5B51D8]/70 text-white`}
                    onClick={() => onAuthClick('signin')}
                  >
                  Get Started
                </button>
              )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>✓ Cancel anytime</span>
            <span>✓ 24/7 support</span>
            <span>✓ 99.9% uptime SLA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;