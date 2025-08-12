import Header from '../components/Header.tsx';


const PrivacyNotice = () => {

    const handleAuthClick = (mode: 'signin' | 'signup') => {
      console.log(mode)
    };

    return (
    <div className="bg-[#02010d] text-white min-h-screen overflow-x-hidden">
        <Header onAuthClick={handleAuthClick} />
        <div className="text-white mt-[100px] bg-[#0a0121] rounded-2xl p-8 border border-[#0a0121] mx-10 group">
            <h1 className="text-3xl font-bold">Privacy Notice</h1>
                <p><strong>Last Updated:</strong> [12/8/2024]</p>

                <p>At <strong>AutomatedMS.io</strong>, we respect your privacy and are committed to protecting your personal information. This Privacy Notice explains how we collect, use, and safeguard your data.</p>

                <h2>1. Information We Collect</h2>
                <ul>
                <li><strong>Account Information:</strong> Name, email address, payment details.</li>
                <li><strong>Usage Data:</strong> IP address, browser type, access times, pages visited.</li>
                <li><strong>Communications:</strong> Emails or messages sent to our support team.</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <ul>
                <li>To provide, maintain, and improve our Service.</li>
                <li>To process payments and manage subscriptions.</li>
                <li>To communicate with you regarding service updates or promotions.</li>
                <li>To ensure the security and integrity of our platform.</li>
                </ul>

                <h2>3. Sharing Your Information</h2>
                <p>We do not sell your personal information. We may share it with:</p>
                <ul>
                <li>Third-party service providers (e.g., payment processors, hosting services).</li>
                <li>Authorities if required by law or to protect our rights.</li>
                </ul>

                <h2>4. Data Security</h2>
                <p>We implement industry-standard security measures to protect your data. However, no system can be 100% secure.</p>

                <h2>5. Data Retention</h2>
                <p>We retain your information for as long as necessary to provide the Service and comply with legal obligations.</p>

                <h2>6. Your Rights</h2>
                <p>Depending on your location, you may have rights under data protection laws (e.g., access, rectification, deletion). Contact us at <a href="mailto:automatedmsio@gmail.com">automatedmsio@gmail.com</a> to exercise your rights.</p>

                <h2>7. Cookies</h2>
                <p>We use cookies and similar technologies to improve user experience and analyze usage.</p>

                <h2>8. International Users</h2>
                <p>If you are accessing the Service from outside [US], your information may be transferred and stored in our servers in [US].</p>

                <h2>9. Changes to This Notice</h2>
                <p>We may update this Privacy Notice. Changes will be posted on this page with an updated effective date.</p>

        </div>
    </div>
    );
  };
  
export default PrivacyNotice;