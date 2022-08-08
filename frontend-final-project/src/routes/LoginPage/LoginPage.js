import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../../components/Login/LogoutButton";
import getDataChild from "../../components/Data/Data";

export default function LoginPage() {
  const [password, setPassword] = useState("1234");
  const navigate = useNavigate();

  const childName = "Charlie"
  const parentName = "Susan"

function parentPassword() {
  let access = prompt("Please enter your password");
  if (access === password) {
    return  navigate('/Parent')
  } else {
    alert("Please try again!")
  }
}

  function handleClick () {

    getDataChild();
  }

  return (
    <>
      <div id="container">
        <LogoutButton />
        <section className = 'child-text-button-container'>
          <h2 className = {"child-welcome " + "animate__animated " + "animate__pulse " + "animate__infinite " + "animate__slow " + "animate__delay-2s"}>
          Welcome, {childName}!
          <br/> 
          Ready for another adventure? 
          </h2>
          <Link to="/child">
            <button className="child-button">
              Let's Go!
            </button>
          </Link>
          <button onClick = {handleClick}>Click Me!</button>
        </section>
        <section className = 'parent-text-button-container'>
          <h2 className = {"parent-welcome " + "animate__animated " + "animate__pulse " + "animate__infinite " + "animate__slow " + "animate__delay-2s"}>
            Welcome, {parentName}! 
            <br/> 
            Log in to see {childName}'s achievements.
          </h2>
          <button className="parent-button" onClick={parentPassword}>
            Parent Dashboard
          </button>
        </section>
      </div>
    </>
  );
}
