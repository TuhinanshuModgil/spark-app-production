import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import EmailVerification from "./pages/emailVerification/EmailVerification";

function App() {
	const { authUser } = useAuthContext();
	console.log("This is envoremnet variable", import.meta.env.VITE_BACKEND_URL);
	return (
		<div className='h-screen flex items-center justify-center'>
			<Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
				<Route path='/verify-email/:verificationToken' element={authUser ? <Navigate to='/' /> : <EmailVerification />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
