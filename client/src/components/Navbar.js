import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="navbar">
      <div className="logo">K-FanVerse 💜</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        {user && <li><Link to="/bias-profile">My Bias Profile</Link></li>}
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/news">K-News</Link></li>
        {user ? (
          <li><button onClick={() => signOut(auth)}>Logout</button></li>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}
