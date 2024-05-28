import { useNavigate } from 'react-router-dom';
import './App.css'
import SideBar from './components/SideBar';
import GlobalRoutes from './components/GlobalRoutes';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import eventEmitter from './lib/eventEmitter';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    const handleLoggedIn = (e) => {
      window.localStorage.setItem("token", JSON.stringify(e.token))
      setIsAuthenticated(true)
      navigate("/")
    }
    eventEmitter.on('logged-in', handleLoggedIn);
    return () => {
      eventEmitter.off('logged-in', handleLoggedIn);
    };
  }, [])
  useEffect(() => {
    const token = window.localStorage.getItem("token")
    console.log(token)
    if (token) {
      setIsAuthenticated(true)
    } else {
      navigate('/login');
    }
  }, [navigate, isAuthenticated])

  return (
    <>
      {isAuthenticated && (
        <>
          <Header />
          <SideBar />
        </>
      )}
      <GlobalRoutes isAuthenticated={isAuthenticated} />

    </>
  )
}

export default App
