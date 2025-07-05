import  { useState, useEffect } from 'react';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import TrustSection from '../components/TrustSection.tsx';
import ProductDemo from '../components/ProductDemo.tsx';
import StorySection from '../components/StorySection.tsx';
import Testimonials from '../components/Testimonials.tsx';
import FAQ from '../components/FAQ.tsx';
import Pricing from '../components/Pricing.tsx';
import Footer from '../components/Footer.tsx';
import AuthModal from '../components/AuthModal.tsx';
import { supabase } from '../../supabaseClient.ts'; // <-- Import supabase client

function HomePage() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [user, setUser] = useState<any>(null); // <-- track logged-in user

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

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
    <div className="bg-[#02010d] text-white overflow-x-hidden">
      <Header onAuthClick={handleAuthClick} />
      <Hero onAuthClick={handleAuthClick} user={user} />
      <TrustSection />
      <ProductDemo />
      <StorySection />
      <Testimonials />
      <Pricing onAuthClick={handleAuthClick} />
      <FAQ />
      <Footer />
      
      {showAuthModal && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuthModal(false)}
          onSwitchMode={setAuthMode}
        />
      )}
    </div>
  );
}

export default HomePage;