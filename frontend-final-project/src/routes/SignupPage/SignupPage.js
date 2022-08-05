import { Link } from "react-router-dom";
import "./SignupPage.css";
import SignupForm from "./SignupForm";

export default function SignupPage() {
  return (
    <>
      <main>
        <h2>welcome to the Signup Page</h2>
      </main>
      <nav>
        <Link to="/">Login Page</Link>
      </nav>
      <div>
        <SignupForm />
      </div>
    </>
  );
}
