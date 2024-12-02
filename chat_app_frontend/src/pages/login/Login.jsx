import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};
	return (
		
	  <>
		{/*
		  This example requires updating your template:
  
		  ```
		  <html class="h-full bg-white">
		  <body class="h-full">
		  ```
		*/}
		<div className="flex min-h-full flex-1">
		  <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
			<div className="mx-auto w-full max-w-sm lg:w-96">
			  <div>
				
				<h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
				  Sign in to <span className="font-semibold text-pink-500">Spark</span> 
				</h2>
				<p className="mt-2 text-sm leading-6 text-gray-500">
				  Not a member?{' '}
				  <Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
						Sign up now!
					</Link>
				</p>
			  </div>
  
			  <div className="mt-10">
				<div>
				  <form onSubmit={handleSubmit} className="space-y-6">
					<div>
					  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
						Username
					  </label>
					  <div className="mt-2">
						<input
						  id="text"
						  name="text"
						  type="text"
						  required
						  className="block w-full px-2 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						  value={username}
						  onChange={(e) => setUsername(e.target.value)}
						/>
					  </div>
					</div>
  
					<div>
					  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
						Password
					  </label>
					  <div className="mt-2">
						<input
						  id="password"
						  name="password"
						  type="password"
						  required
						  autoComplete="current-password"
						  className="block w-full px-2 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						  value={password}
						  onChange={(e) => setPassword(e.target.value)}
						/>
					  </div>
					</div>
  
					{/* <div className="flex items-center justify-between">
					  <div className="flex items-center">
						<input
						  id="remember-me"
						  name="remember-me"
						  type="checkbox"
						  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
						/>
						<label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-700">
						  Remember me
						</label>
					  </div>
  
					  <div className="text-sm leading-6">
						<a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
						  Forgot password?
						</a>
					  </div>
					</div> */}
  
					<div>
					  <button
						type="submit"
						className="flex w-full justify-center rounded-md bg-pink-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						disabled={loading}
					  >
						{loading ? <span className='loading loading-spinner '></span> : "Login"}
					  </button>
					</div>
				  </form>
				</div>
			  </div>
			</div>
		  </div>
		  <div className="relative hidden w-0 flex-1 lg:block">
			<img
			  alt=""
			  src="https://plus.unsplash.com/premium_photo-1721955487786-76802cbf0812?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			  className="absolute inset-0 h-full w-full object-cover"
			/>
		  </div>
		</div>
	  </>
	)
  }
  