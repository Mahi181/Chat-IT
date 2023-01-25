import logo from './logo.svg';
import './App.css';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style.scss"
import Login from './pages/Login';
import Home from './pages/Home';
import { useContext } from "react";
import { AuthContext } from './context/AuthContext';
function App() {
 
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };

  const PublicRoute = ({ children }) => {
    if (currentUser) {
      return <Navigate to="/" />;
    }

    return children
  };

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
      <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        <Route path="login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="register" element={<PublicRoute><Register /></PublicRoute>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
