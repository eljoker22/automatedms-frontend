import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Social Media Manager',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'AutomatedMS.io has completely changed the way I do outreach on Instagram. What used to take hours now takes minutes, and the response rate is insane. It’s like having a full-time marketing assistant!.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Shopify Store Owner',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'I started using AutomatedMS.io for my e-commerce store and within a week, I saw a 35% increase in DMs leading to sales. It’s fast, simple, and insanely effective.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, GrowthGrid Agency',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'As an influencer agency, we manage multiple accounts. AutomatedMS.io saves us hours every day and keeps client engagement strong across the board. Total game-changer.',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Digital Marketer',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'We used to send messages manually and it was a nightmare. With AutomatedMS.io, we reached 5x more people in half the time. The automation is seamless—and it feels personal.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      role: 'Beauty Brand Owner',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Honestly, I was skeptical at first. But after using it for a month, I cant imagine managing my brands DMs without it. It’s the most valuable tool in my marketing stack.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Online Coach & Course Creator',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'AutomatedMS.io helped me connect with thousands of potential clients without lifting a finger. The interface is clean, the targeting is spot-on, and the results speak for themselves. It\'s like growth on autopilot.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#0a0121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hear It from Those
            <br />
            <span className="bg-gradient-to-r from-[#5B51D8] to-[#5B51D8]/80 bg-clip-text text-transparent">
              Who Matter Most
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See what our customers have to say about their experience with AutomatedMS.io.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#02010d] rounded-2xl p-8 border border-[#0a0121] hover:border-[#5B51D8] transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#5B51D8] opacity-20" />
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9/5</span>
            <span>•</span>
            <span>Based on 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;