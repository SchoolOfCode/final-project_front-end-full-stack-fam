import { Link, Router } from 'react-router-dom'
import Profile from '../../components/Login/Profile';
import './ParentHomepage.css'
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Reports from './Pages/Reports';
import Products from './Pages/Products';

export default function ParentHomepage() {
    return (
      <>
        <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Routes>
      </Router>
        <main>
          <h2>Welcome to the Parent Homepage</h2>
          <p>
            No children allowed!
          </p>
        </main>
        <nav>
          <Link to="/login">Back to Log In</Link>
        </nav>
        <Profile/>
      </>
    );
  }