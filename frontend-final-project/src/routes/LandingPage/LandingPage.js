import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../components/Login/LoginButton";
import LogoutButton from "../../components/Login/LogoutButton";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    navigate("/login");
  } else {
    return (
      <>
        <LoginButton />
        <LogoutButton />
        <nav>
          <Link to="/signup">Sign Up</Link>
        </nav>
      </>
    );
  }
}
