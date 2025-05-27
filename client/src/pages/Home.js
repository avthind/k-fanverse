import '../styles/Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to <span>K-FanVerse 💜</span></h1>
      <p>Your AI-powered hub for everything K-pop</p>

      <div className="cta-buttons">
        <Link to="/bias-profile"><button>My Bias Profile</button></Link>
        <Link to="/news"><button>Trending K-News</button></Link>
        <Link to="/quiz"><button>Take a K-pop Quiz</button></Link>
      </div>
    </div>
  );
}
