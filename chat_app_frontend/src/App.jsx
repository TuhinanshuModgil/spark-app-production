import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import EmailVerification from "./pages/emailVerification/EmailVerification";
import { useEffect, useState } from "react";




function App() {
	const { authUser, jwtCookies } = useAuthContext();

	console.log("this is auth user: ", authUser)
	// useEffect(() => {
	// 	// Function to parse cookies
		
		
	//   },[]); // Runs once when the component is mounted
	return (
		<div className='h-dvh flex items-center justify-center'>
			<Routes>
				<Route path='/' element={jwtCookies ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={jwtCookies ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={jwtCookies ? <Navigate to='/' /> : <SignUp />} />
				<Route path='/verify-email/:verificationToken' element={jwtCookies ? <Navigate to='/' /> : <EmailVerification />} />
			</Routes>
			<Toaster />
		</div >
	);
}

export default App;
