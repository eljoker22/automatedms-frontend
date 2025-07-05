import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is AutomateDms?',
      answer: 'AutomateDms is a comprehensive business intelligence platform that helps companies centralize their data, create insightful dashboards, and make data-driven decisions. We combine powerful analytics with an intuitive interface to make business intelligence accessible to everyone.'
    },
    {
      question: 'How do I get started?',
      answer: 'Getting started is easy! Simply sign up for a free trial, connect your data sources, and start building your first dashboard. Our onboarding team will guide you through the setup process and help you get the most out of the platform.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial for all our plans. No credit card required. During your trial, you\'ll have access to all features and can test the platform with your own data.'
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription at any time through your account settings. There are no cancellation fees, and you\'ll retain access to your data until the end of your billing period.'
    },
    {
      question: 'What integrations are available?',
      answer: 'AutomateDms integrates with 200+ popular business tools including Salesforce, HubSpot, Google Analytics, Shopify, Stripe, and many more. We also provide APIs for custom integrations and can work with you to connect any data source.'
    },
    {
      question: 'Can I use my multiple devices?',
      answer: 'Absolutely! AutomateDms is fully responsive and works seamlessly across desktop, tablet, and mobile devices. Your dashboards and data are accessible anywhere, anytime.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0a0121]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Questions?
            <br />
            <span className="bg-gradient-to-r from-[#5B51D8] to-[#5B51D8]/80 bg-clip-text text-transparent">
              Answered
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about AutomateDms and how it can transform your business intelligence.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-[#02010d] rounded-2xl border border-[#0a0121] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#0a0121] transition-colors"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#5B51D8]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#5B51D8]" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 border-t border-[#0a0121]">
                  <p className="text-gray-300 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            Still have questions? We're here to help.
          </p>
          <button className="text-[#5B51D8] hover:text-[#5B51D8]/80 font-semibold">
            Contact Support →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;