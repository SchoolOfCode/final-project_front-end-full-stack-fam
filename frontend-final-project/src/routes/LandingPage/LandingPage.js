import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../components/Login/LoginButton";
import LogoutButton from "../../components/Login/LogoutButton";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
 import "./LandingPage.css";

export default function LandingPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();
 

  if (isAuthenticated) {
    navigate("/login");
  } else {
    return (
      <>
        <div className = 'background-image'>
        </div>
        <div className= "landing-page">
          <h1 className = {"app-heading " + "animate__animated " + "animate__rubberBand " + "animate__infinite " + "animate__slow " + "animate__delay-5s"}>WELCOME TO JUNGLE SUMS!</h1>
          <section className= "button-container">
          <LoginButton />
          <LogoutButton />
          </section>
        </div>
      </>
    )
  }
}
