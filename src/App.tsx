import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import ProfilePage from './pages/ProfilePage.tsx';
import PrivateRoute from './components/PrivateRoute.tsx';
import DownloadPage from './pages/Download.tsx';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/download" element={<DownloadPage />} />

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
