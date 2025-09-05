import { useState } from 'react';
import { 
  Shield, 
  ChevronDown, 
  Download, 
  Monitor, 
  Apple, 
} from 'lucide-react';
import Header from '../components/Header.tsx';

function DownloadPage() {
  const [selectedOS, setSelectedOS] = useState('Windows');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const osOptions = [
    'Windows',
    'macOS'
  ];

  const devices = [
    { icon: Monitor, name: 'Windows', url: '/AutomateDms.zip' },
    { icon: Apple, name: 'macOS', url: '' }
  ];

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    console.log(mode)
  };

    return (
        <div className="min-h-screen text-white bg-gradient-to-br from-[#02010d] via-[#0a0121] to-[#5B51D8] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-96 h-96 bg-[#5B51D8] rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#5B51D8] rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#5B51D8] rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <Header onAuthClick={handleAuthClick} />
        {/* Main Content */}

        <main className="relative z-10 px-6 mt-10 py-12">
            <div className="max-w-4xl mx-auto text-center">
            {/* Download Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#5B51D8] to-[#7C3AED] text-white px-4 py-2 rounded-full text-sm mb-8 shadow-lg">
                <span>Download AutomateDms</span>
                <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
            </div>

            {/* Hero Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Download AutomateDms
                <br />
                <span className="text-gray-300">Software Today!</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Automte Dms to Thousands 
                <br />
                by downloading AutomateDms.
            </p>

            {/* Download Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                {/* OS Selector */}
                <div className="relative">
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center space-x-3 bg-[#0a0121] border border-gray-700 rounded-lg px-4 py-3 text-white hover:border-[#5B51D8] transition-colors duration-200 min-w-[200px]"
                >
                    <Monitor className="w-5 h-5" />
                    <span>{selectedOS}</span>
                    <ChevronDown className="w-4 h-4 ml-auto" />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-[#0a0121] border border-gray-700 rounded-lg shadow-xl z-50">
                    {osOptions.map((option) => (
                        <button
                        key={option}
                        onClick={() => {
                            setSelectedOS(option);
                            setIsDropdownOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left text-white hover:bg-[#5B51D8] transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                        >
                        {option}
                        </button>
                    ))}
                    </div>
                )}
                </div>

                {/* Download Button */}
                {devices.map((dev) =>
                dev.name === selectedOS && (
                    <a key={dev.name} href={dev.url} download>
                    <button className="bg-gradient-to-r from-[#5B51D8] to-[#7C3AED] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#6B61E8] hover:to-[#8B4AF8] transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2">
                        <Download className="w-5 h-5" />
                        <span>Download</span>
                    </button>
                    </a>
                )
                )}

            </div>

            {selectedOS === 'macOS' && <p className='font-semibold text-lg mb-16'>Comeing soon on Mac!</p>}

            {/* Central Icon */}
            <div className="flex justify-center mb-16">
                <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-[#5B51D8] to-[#7C3AED] rounded-2xl flex items-center justify-center shadow-2xl">
                    <Shield className="w-16 h-16 text-white" />
                </div>
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5B51D8] to-[#7C3AED] rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                </div>
            </div>

            {/* Device Compatibility */}
            <div className="text-center">
                <p className="text-gray-300 text-lg mb-8">We are available on many devices</p>
                
                <div className="flex flex-wrap justify-center items-center gap-8">
                {devices.map((device, index) => (
                    <div
                    key={device.name}
                    className="group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    >
                    <div className="w-16 h-16 bg-[#0a0121] border border-gray-700 rounded-full flex items-center justify-center hover:border-[#5B51D8] hover:bg-[#5B51D8] transition-all duration-300 group-hover:scale-110">
                        <device.icon className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-gray-400 text-sm mt-2 group-hover:text-white transition-colors duration-300">{device.name}</p>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </main>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#02010d] to-transparent"></div>
        </div>
    );
}

export default DownloadPage;