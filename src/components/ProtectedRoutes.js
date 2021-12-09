import React from 'react';
import {useAuth} from "../contexts/AuthProvider";
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoutes = ({forLoggedIn = false}) => {
  const {user} = useAuth()
  // Hmm yes, looks like JS
  return (forLoggedIn ? user : !user) ? <Outlet/> : <Navigate to={forLoggedIn ? "/login" : "/dashboard"}/>
};

export default ProtectedRoutes;