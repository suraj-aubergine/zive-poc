import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// import { fetchUserDetails } from "store/auth/user-slice";

export const useAuth = () => {
  // Set a 'token' in the browser localstorage to get authenticated

  const token = localStorage.getItem('token');

  if ((token == null) || token === 'undefined') {
    return false;
  }

  return token;
};

const Private = () => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default Private;
