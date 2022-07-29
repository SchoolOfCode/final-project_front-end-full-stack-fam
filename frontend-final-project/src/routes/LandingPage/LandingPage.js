import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../../components/Login/LoginButton';
import LogoutButton from '../../components/Login/LogoutButton';
import './LandingPage.css'
import LoginPage from '../LoginPage/LoginPage';

export default function LandingPage() {
  const {isAuthenticated } = useAuth0();
    if(isAuthenticated){
      return <LoginPage/>
    }
    return (
    <>
      <LoginButton />
      <LogoutButton/>
    </>
    );
  }