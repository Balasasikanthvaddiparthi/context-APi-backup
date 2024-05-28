import { useContext, useEffect, useState } from 'react';
//import eventEmitter from '../lib/eventEmitter';
import { useNavigate } from 'react-router-dom';
import { MyContext } from "../MyContext";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {authed,setAuthed}=useContext(MyContext)
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Create a data object with the username and password
        const data = {
            username: username,
            password: password
        };
        try {
            const response = await fetch('https://www.jeevikasjy.in/livelihood/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {          
                const data = await response.json()
                
                const accessToken = data.accessToken
               
                // Handle successful login
                console.log(accessToken)
                setAuthed(accessToken)
                //eventEmitter.emit('logged-in', { token: accessToken })
                console.log('Login successful');
            } else {
                // Handle unsuccessful login
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        console.log(token)
        if (token) {
          navigate("/")
        } 
      }, [navigate])
    

    return (
       
        <div className="max-w-sm bg-gray-600 border border-gray-200 rounded-lg p-4 mt-44 ml-28">
        <form onSubmit={handleSubmit}>
      
          <div className="space-y-3">
            <div className="relative">
              <input type="text" className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter name" value={username}
                onChange={(e) => setUsername(e.target.value)} />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                <svg className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
      
            <div className="relative">
              <input type="password" className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                <svg className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path>
                  <circle cx="16.5" cy="7.5" r=".5"></circle>
                </svg>
              </div>
            </div>
          </div>
          <button type="submit" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-200 text-gray-800 hover:bg-gray-400 my-1 mx-28 ">
            Button
          </button>
          <br />
          <a className="block text-center underline text-white " href="">forgot password</a>
        </form>
      </div>     
    );
}

export default LoginForm;