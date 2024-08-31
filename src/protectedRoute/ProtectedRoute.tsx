// ProtectedRoute.js
import { useContext } from 'react';
import { Navigate,Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext.js';
import { getToken } from '../utils/data.js';
const ProtectedRoute = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const token=getToken();
  return (
    <div>
      {isLoggedIn||token ? <Outlet/> : <Navigate to="/signin" replace />}
    </div>   
  );
};

export default ProtectedRoute;
