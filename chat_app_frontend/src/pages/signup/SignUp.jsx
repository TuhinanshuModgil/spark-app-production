import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import toast from "react-hot-toast";
import useGetInstitutes from "../../hooks/useGetInstitutes";

// export default SignUp;
export default function SignUp() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
    email: "",
    instituteName: "",
  });	
  const { institutes:options } = useGetInstitutes();
  const { loading, verifyEmail } = useSignup();
  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    if (inputs.password !== inputs.confirmPassword) {
      toast.error("Password and Confirm Password do not match");
      return;
    }

    e.preventDefault();
    await verifyEmail(inputs);
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
                Sign up to WhisperChat
              </h2>
			  {/* <button onClick={() => console.log(inputs)}>console log</button> */}
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Already a member?{" "}
                <Link
                  to="/login"
                  className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
                >
                  Login now!
                </Link>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Institute Name
                    </label>
                    <div className="mt-2">
                      <select
                        className="block w-full px-2 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={inputs.instituteName}
                        onChange={(e) => setInputs({ ...inputs, instituteName: e.target.value })}
                      >
						<option value="---Select Institute---">
						---Select Institute---
                        </option>
                        {options.map((option, index) => (
                          <option key={index} value={option.instituteName}>
                            {option.instituteName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Institute Email
                    </label>
                    <div className="mt-2">
                      <input
                        id="eamil"
                        name="email"
                        type="email"
                        required
                        className="block w-full px-2 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={inputs.email}
                        onChange={(e) =>
                          setInputs({ ...inputs, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Fullname
                    </label>
                    <div className="mt-2">
                      <input
                        id="text"
                        name="text"
                        type="text"
                        placeholder="We don't need a full name ;)"
                        className="block w-full px-2 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						readOnly={true}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Username
                    </label>
                    <div className="mt-2">
                      <input
                        id="text"
                        name="text"
                        type="text"
                        required
                        className="block w-full px-2 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={inputs.username}
                        onChange={(e) =>
                          setInputs({ ...inputs, username: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
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
                        value={inputs.password}
                        onChange={(e) =>
                          setInputs({ ...inputs, password: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className="block w-full px-2 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={inputs.confirmPassword}
                        onChange={(e) =>
                          setInputs({
                            ...inputs,
                            confirmPassword: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <GenderCheckbox
                    onCheckboxChange={handleCheckboxChange}
                    selectedGender={inputs.gender}
                  />

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
                      {loading ? (
                        <span className="loading loading-spinner "></span>
                      ) : (
                        "Sign Up"
                      )}
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
            src="https://plus.unsplash.com/premium_photo-1721955487745-a2c3aea86d1c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
// STARTER CODE FOR THE SIGNUP COMPONENT
// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Sign Up <span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Full Name</span>
// 						</label>
// 						<input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' />
// 					</div>

// 					<div>
// 						<label className='label p-2 '>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Confirm Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Confirm Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>

// 					<GenderCheckbox />

// 					<a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
// 						Already have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default SignUp;
