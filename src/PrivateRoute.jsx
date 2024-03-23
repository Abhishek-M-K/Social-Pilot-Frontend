// PrivateRoute.js
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Layout from "./Layout";

const PrivateRoute = ({ user, component: Component, ...rest }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {

    setAuthenticated(user !== null);
  }, [user]);


  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }


  return (
    <Layout>
      <Component {...rest} />
    </Layout>
  );
};

export default PrivateRoute;
