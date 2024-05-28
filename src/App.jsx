import { useNavigate } from 'react-router-dom';
import './App.css'
import SideBar from './components/SideBar';
import GlobalRoutes from './components/GlobalRoutes';
import Header from './components/Header';
import { useEffect, useState } from 'react';
//import eventEmitter from './lib/eventEmitter';
import { MyContext } from "./MyContext";
import { jwtDecode } from 'jwt-decode';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authed, setAuthed] = useState(false)
  const [role,setRole]=useState(null)
  const navigate = useNavigate();
  
  useEffect(() => {
    if (typeof (authed) === "string") {
      //console.log(authed)
      const decode = jwtDecode(authed);
      
    
    
      window.localStorage.setItem("token", JSON.stringify(authed))
      setIsAuthenticated(true)
      navigate("/")
    }
  }, [authed])
  useEffect(() => {
    const token = window.localStorage.getItem("token")
    
    
    
    //console.log(token)
    if (token) {
      setIsAuthenticated(true)
      const decode = jwtDecode(token);

      console.log(decode.roles)
       setRole(decode.roles)
    } else {
      navigate('/login');
    }
  }, [navigate, isAuthenticated])

  return (
    <MyContext.Provider value={{ authed, setAuthed,role }} >
      {isAuthenticated && (
        <>
          <Header />
          <SideBar />
        </>
      )}
      <GlobalRoutes isAuthenticated={isAuthenticated} />

    </MyContext.Provider >
  )
}

export default App
