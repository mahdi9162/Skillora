import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import Loading from '../Components/Loading/Loading';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
