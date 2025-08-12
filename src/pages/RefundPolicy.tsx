import Header from '../components/Header.tsx';


const RefundPolicy = () => {

    const handleAuthClick = (mode: 'signin' | 'signup') => {
      console.log(mode)
    };

    return (
    <div className="bg-[#02010d] text-white min-h-screen overflow-x-hidden">
        <Header onAuthClick={handleAuthClick} />
        <div className="text-white mt-[100px] bg-[#0a0121] rounded-2xl p-8 border border-[#0a0121] mx-10 group">
            <h1 className="text-3xl font-bold">Refund Policy</h1>
                <p><strong>Effective Date:</strong> [12/8/2024]</p>

                <p>At <strong>AutomatedMS.io</strong>, we stand behind our product and want our customers to be satisfied. This Refund Policy outlines our practices regarding refunds.</p>

                
                <h2>1. Monthly Subscriptions</h2>
                <ul>
                <li>Refunds are <strong>not provided</strong> for monthly subscriptions once payment has been processed.</li>
                <li>If you cancel your subscription, you will retain access for the remainder of the billing period.</li>
                </ul>

                <h2>2. Annual Subscriptions</h2>
                <ul>
                <li>If you cancel within 14 days of purchase, you may be eligible for a <strong>full refund</strong>.</li>
                <li>After 14 days, refunds are <strong>not available</strong>, but you will retain access for the full paid period.</li>
                </ul>

                <h2>4. Cancellation</h2>
                <p>You may cancel your subscription at any time from your account dashboard. Cancellation prevents future billing but does not automatically trigger a refund.</p>

                <h2>5. Exceptions</h2>
                <p>Refunds may be granted in limited circumstances (e.g., technical issues that we are unable to resolve). Please contact <a href="mailto:automatedmsio@gmail.com">automatedmsio@gmail.com</a> with any concerns.</p>
        </div>
    </div>
    );
  };
  
export default RefundPolicy;