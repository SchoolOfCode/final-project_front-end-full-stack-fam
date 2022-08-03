import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../../components/Login/LogoutButton";


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
      <LogoutButton />

        <Link to="/child">
          <button className="child">Child Homepage</button>
        </Link>

      <button className="parent" onClick={parentPassword}>
       Parent Dashboard
      </button>
      </div>
    </>
  );
}
