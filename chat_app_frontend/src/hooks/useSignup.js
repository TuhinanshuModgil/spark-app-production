import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser, setJwtCookies } = useAuthContext();

	const signup = async ({jwt}) => {
		if(!jwt) return;

		setLoading(true);
		try {
			const res = await fetch(`/api/auth/signup`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ verificationToken: jwt}),
				
				credentials: 'include'
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.setItem("chat-user", JSON.stringify(data));
			setJwtCookies(true)
			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	const verifyEmail = async ({  username, password, confirmPassword, gender, email, instituteName }) => {
		const success = handleInputErrors({  username, password, confirmPassword, gender, email, instituteName });
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch(`/api/auth/email-verification`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({  username, password, gender, email, instituteName}),
			});

			const data = await res.json();
			console.log("this is res data: ", data)
			if (data.error) {
				throw new Error(data.error);
			}
			else if(res.status == 201){
				toast.success(data.message , {
					duration: 4000
				})
			}
			
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup, verifyEmail };
};
export default useSignup;

function handleInputErrors({  username, password, confirmPassword, gender, email, instituteName }) {
	if ( !username || !password || !confirmPassword || !gender || !email || !instituteName) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}
