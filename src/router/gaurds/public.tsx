import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from './private';

const Public = () => {
  const auth = useAuth();

  return !auth ? <Outlet /> : <Navigate to="/home" />;
};

export default Public;
