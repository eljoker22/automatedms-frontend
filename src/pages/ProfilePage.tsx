import Header from '../components/Header.tsx';
import { supabase } from '../../supabaseClient.ts';
import { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState<any>(null); // <-- track logged-in user

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
  
    const handleAuthClick = (mode: 'signin' | 'signup') => {
      console.log(mode)
    };
    console.log(user)
    return (
    <div className="bg-[#02010d] text-white min-h-screen overflow-x-hidden">
        <Header onAuthClick={handleAuthClick} />
        <div className="text-white text-center mt-[100px] bg-[#0a0121] rounded-2xl p-8 border border-[#0a0121] mx-10 group">
            <h1 className="text-3xl font-bold">Welcome to your Profile</h1>
            <h1 className="text-3xl font-bold">{user?.email}</h1>
            <p className="text-2xl font-bold mt-8">subscribtion: <span className="text-2xl font-normal text-[#5B51D8]">{user?.user_metadata.subscribe == "" ? 'not subscribe on any plan' : user?.user_metadata.subscribe}</span></p>
            <p className="text-2xl font-bold mt-8">renew date: <span className="text-2xl font-normal text-[#5B51D8]">{user?.user_metadata.renew}</span></p>
          
        </div>
    </div>
    );
  };
  
export default ProfilePage;
