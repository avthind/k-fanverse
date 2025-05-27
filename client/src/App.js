import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BiasProfile from './pages/BiasProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bias-profile" element={<BiasProfile />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
