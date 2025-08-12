import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import ProfilePage from './pages/ProfilePage.tsx';
import PrivateRoute from './components/PrivateRoute.tsx';
import DownloadPage from './pages/Download.tsx';
import TermsofService from './pages/TermsofService.tsx';
import PrivacyNotice from './pages/PrivacyNotice.tsx';
import RefundPolicy from './pages/RefundPolicy.tsx';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/download" element={<DownloadPage />} />
      <Route path="/terms" element={<TermsofService />} />
      <Route path="/privacy" element={<PrivacyNotice />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />

      {/* Protected Route */}
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
