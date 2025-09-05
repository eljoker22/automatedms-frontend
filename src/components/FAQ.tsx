import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is AutomateDms?',
      answer: 'AutomatedMS.io is a powerful software tool that allows you to send automated Instagram Direct Messages (DMs) from your Windows or macOS device.'
    },
    {
      question: 'How does the software work?',
      answer: 'Once installed, the software connects to your Instagram account and allows you to schedule and send bulk DMs to your target audience, followers, or new leads—all automatically.'
    },
    {
      question: 'Are there monthly and yearly plans available?',
      answer: 'Yes! We offer flexible monthly and yearly subscription plans. You can choose the one that best suits your needs.'
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription at any time through your account settings. There are no cancellation fees, and you\'ll retain access to your data until the end of your billing period.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer refunds on annual plans if canceled within 14 days. Monthly subscriptions are non-refundable once charged. See our Refund Policy'
    },
    {
      question: 'Can I use my multiple devices?',
      answer: 'Absolutely! AutomateDms is fully responsive and works seamlessly across desktop, windows and Mac devices.'
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
            <a target='_blank' href='https://t.me/+_5EgHjz1iC1lNGQ0'>
              Contact Support →
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;