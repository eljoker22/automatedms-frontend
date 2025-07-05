import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { supabase } from '../../supabaseClient.ts'; // <-- Import supabase client
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onAuthClick: (mode: 'signin' | 'signup') => void;
}

const Header: React.FC<HeaderProps> = ({ onAuthClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<any>(null); // <-- track logged-in user
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#02010d]/95 backdrop-blur-md border-b border-[#0a0121]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div onClick={() => navigate('/')} className="flex items-center space-x-2 cursor-pointer">
            <img src="/automate-dms.png" alt="Automatedms" className='w-[40px] h-[40px]' />
            <span className="text-xl font-bold">AutomateDms</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['features', 'about', 'testimonials', 'pricing', 'faq'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>

          {/* Desktop Auth Area */}
          <div className="hidden md:flex items-center space-x-4">
            {!user ? (
              <>
                <button
                  onClick={() => onAuthClick('signin')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => onAuthClick('signup')}
                  className="bg-gradient-to-r from-[#5B51D8] to-[#5B51D8]/80 hover:from-[#5B51D8]/90 hover:to-[#5B51D8]/70 px-6 py-2 rounded-lg transition-all duration-200 font-medium"
                >
                  Get Started
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate('/profile')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {user.email}
                </button>

                <button
                  onClick={handleSignOut}
                  className="text-red-400 hover:text-red-300 transition-colors text-sm"
                >
                  Sign Out
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#0a0121] transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#0a0121] py-4">
            <nav className="flex flex-col space-y-4">
              {['features', 'about', 'testimonials', 'pricing', 'faq'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}

              <div className="pt-4 border-t border-[#0a0121] flex flex-col space-y-3">
                {!user ? (
                  <>
                    <button
                      onClick={() => onAuthClick('signin')}
                      className="text-gray-300 hover:text-white transition-colors text-left"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => onAuthClick('signup')}
                      className="bg-gradient-to-r from-[#5B51D8] to-[#5B51D8]/80 hover:from-[#5B51D8]/90 hover:to-[#5B51D8]/70 px-6 py-2 rounded-lg transition-all duration-200 font-medium w-full"
                    >
                      Get Started
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => navigate('/profile')}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {user.email}
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="text-red-400 hover:text-red-300 transition-colors text-left"
                    >
                      Sign Out
                    </button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
