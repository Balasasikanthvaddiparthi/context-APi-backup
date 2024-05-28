import { Route, Routes } from "react-router-dom";
import Dashed from "../Dashed";
import Profile from "./Profile";
import Weather from "./Weather";
import LoginForm from "./LoginForm";
import { useContext } from "react";
import { MyContext } from "../MyContext";

export default function GlobalRoutes({ isAuthenticated }) {

    const {role}=useContext(MyContext)
    
    return (
        <main className=" w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 ">
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                {isAuthenticated && (
                    <>
                        <Route path="/" element={<Dashed />} />
                        <Route path="/profile" element={<Profile />} />
                        {role==="Superadmin" &&(
                            <Route path="/weather" element={<Weather />} />
                        )}
                        
                    </>
                )}

            </Routes>
        </main>
    )
}
