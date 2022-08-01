import { Link } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <>
      <div class="second">
      </div>

      <button class="child">
        {<Link to="/child">To Child Homepage</Link>}
      </button>

      <button class="parent">
        {<Link to="/parent">To Parent Homepage</Link>}
      </button>
    </>
  );
}
