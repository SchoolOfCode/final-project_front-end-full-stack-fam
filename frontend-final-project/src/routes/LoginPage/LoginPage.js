import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../../components/Login/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginPage({ childName, setChildName }) {

  const [password, setPassword] = useState("1234");
  const {user, isAuthenticated} = useAuth0()
  const navigate = useNavigate();


    async function getChildDataByEmail() {
      let response = await fetch(`https://fullstack-fam.herokuapp.com/parent/search/?email=${user.email}`);
      let data = await response.json();
      setChildName(data.payload[0].name)
      console.log(data.payload[0].name)
    }
    
    useEffect(() => {
      if(isAuthenticated){
        console.log(user.email)
        getChildDataByEmail();
      }
    }, []);
  
    const child = childName
    const parent = user.name
  


function parentPassword() {
  let access = prompt("Please enter your password");
  if (access === password) {
    return  navigate('/Parent')
  } else {
    alert("Please try again!")
  }
}

  return (
    <>
      <div id="container">
        <LogoutButton />
        <section className = 'child-text-button-container'>
          <h2 className = {"child-welcome " + "animate__animated " + "animate__pulse " + "animate__infinite " + "animate__slow " + "animate__delay-2s"}>
          Welcome, {child}!
          <br/> 
          Ready for another adventure? 
          </h2>
          <Link to="/child">
            <button className="child-button">
              Let's Go!
            </button>
          </Link>
        </section>
        <section className = 'parent-text-button-container'>
          <h2 className = {"parent-welcome " + "animate__animated " + "animate__pulse " + "animate__infinite " + "animate__slow " + "animate__delay-2s"}>
            Welcome, {parent}! 
            <br/> 
            Log in to see {child}'s achievements.
          </h2>
          <button className="parent-button" onClick={parentPassword}>
            Parent Dashboard
          </button>
        </section>
      </div>
    </>
  );
}
