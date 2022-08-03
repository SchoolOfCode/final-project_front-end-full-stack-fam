import { Link, Router } from 'react-router-dom'
import Profile from '../../components/Login/Profile';
import './ParentHomepage.css'
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Parent from './Pages/Parent';
import Reports from './Pages/Reports';
import Products from './Pages/Products';

export default function ParentHomepage() {
    return (
      <>
        
        <Navbar />
        <Routes>
          <Route path='/parent' component={Parent} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Routes>
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