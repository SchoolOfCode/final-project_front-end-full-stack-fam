import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [password, setPassword] = useState("1234");
  const navigate = useNavigate();

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
  
     
      <button className="child">
        {<Link to="/child">To Child Homepage</Link>}
      </button>

      <button className="parent" onClick={parentPassword}>
       Parent Dashboard
      </button>
      </div>
    </>
  );
}
