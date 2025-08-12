import Header from '../components/Header.tsx';


const Terms = () => {

    const handleAuthClick = (mode: 'signin' | 'signup') => {
      console.log(mode)
    };

    return (
    <div className="bg-[#02010d] text-white min-h-screen overflow-x-hidden">
        <Header onAuthClick={handleAuthClick} />
        <div className="text-white mt-[100px] bg-[#0a0121] rounded-2xl p-8 border border-[#0a0121] mx-10 group">
            <h1 className="text-3xl font-bold">Terms of Service</h1>
            <p><strong>Effective Date:</strong> [12/8/2024]</p>

            <p>Welcome to <strong>AutomatedMS.io</strong> ("Company", "we", "our", or "us"). By accessing or using our software-as-a-service platform ("Service"), you agree to be bound by the following Terms of Service ("Terms"). If you do not agree with these Terms, you may not use the Service.</p>

            <h2>1. Use of the Service</h2>
            <ul>
            <li>You must be at least 18 years old to use our Service.</li>
            <li>You agree to provide accurate, complete, and updated information when registering.</li>
            <li>You are responsible for safeguarding your account credentials and for any activity under your account.</li>
            </ul>

            <h2>2. Subscription and Payment</h2>
            <ul>
            <li>The Service is provided on a subscription basis. Details of plans and pricing are available on our website.</li>
            <li>By subscribing, you authorize us to charge your payment method on a recurring basis.</li>
            <li>Failure to pay may result in suspension or termination of your account.</li>
            </ul>

            <h2>3. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
            <li>Use the Service for any unlawful purpose.</li>
            <li>Attempt to gain unauthorized access to other systems or networks.</li>
            <li>Transmit malware, spam, or any malicious code.</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>All content, trademarks, and software related to the Service are owned by or licensed to AutomatedMS.io. You are granted a limited, non-transferable, non-exclusive license to use the Service in accordance with these Terms.</p>

            <h2>5. Termination</h2>
            <p>We may suspend or terminate your access to the Service at our sole discretion for any reason, including breach of these Terms.</p>

            <h2>6. Disclaimer of Warranties</h2>
            <p>The Service is provided "as is" and "as available". We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.</p>

            <h2>7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, we are not liable for any indirect, incidental, special, or consequential damages arising out of your use of the Service.</p>

            <h2>8. Changes to Terms</h2>
            <p>We may update these Terms at any time. Your continued use of the Service after changes are posted constitutes acceptance of those changes.</p>

            <h2>9. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of [US].</p>

            <p>Contact us at <a href="mailto:automatedmsio@gmail.com">automatedmsio@gmail.com</a> with any questions.</p>
        </div>
    </div>
    );
  };
  
export default Terms;