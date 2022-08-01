//!!!NOTE!!!! OUR USE OF AUTH0 MAY HAVE MADE THIS PAGE REDUNTANT.
//IM NOT DELETING IT JUST IN CASE, BUT ITS CURRENTLY NOT IN USE- NOAH

import { Link } from "react-router-dom";
import "./SignupPage.css";

export default function SignupPage() {
  return (
    <>
      <main>
        <h2>welcome to the Signup Page</h2>
      </main>
      <nav>
        <Link to="/">Login Page</Link>
      </nav>
    </>
  );
}
