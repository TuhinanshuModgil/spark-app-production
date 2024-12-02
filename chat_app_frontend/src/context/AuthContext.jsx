import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);
	const [jwtCookies, setJwtCookies] = useState(parseCookies())

	return <AuthContext.Provider value={{ authUser, setAuthUser, jwtCookies, setJwtCookies }}>{children}</AuthContext.Provider>;
};


const parseCookies = () => {
	const cookieString = document.cookie; // Get cookies as a string
	const cookiesArray = cookieString.split('; '); // Split into key-value pairs
	const cookiesObject = {};
	cookiesArray.forEach(cookie => {
	  const [key, value] = cookie.split('=');
	  cookiesObject[key] = decodeURIComponent(value); // Decode URI components
	});
	console.log("cookies: ", cookiesObject)
	if(cookiesObject.jwt) return true 

	return false
 };