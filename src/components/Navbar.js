import React from 'react';
import {Link} from "react-router-dom";
import {useAuth} from "../contexts/AuthProvider";

const Navbar = () => {
  const {user, logout} = useAuth()
  const loggedInElements = (
    <>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><button onClick={logout}>Log out</button></li>
    </>
  )
  const notLoggedInElements = (
    <>
      <li><Link to="/login">Log in</Link></li>
      <li><Link to="/register">Register</Link></li>
    </>
  )

  return (
    <nav>
      <ul>
        <ul>
          {user ? loggedInElements : notLoggedInElements}
          <li><Link to="/">Home</Link></li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;