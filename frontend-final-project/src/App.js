import './App.css';
import {Routes, Route, Link} from 'react-router-dom'

const url = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:3000";

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/parent">About</Link>
      </nav>
    </>
  );
}

function Parent() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function App() {



  return (
    <div className="App">
     <h1> Welcome to Noah's React Router! </h1>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="parent" element={<Parent/>} />
      </Routes>
    </div>
  );
}

export default App;
