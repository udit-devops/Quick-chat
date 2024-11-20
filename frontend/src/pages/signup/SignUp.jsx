import React from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'
const SignUp = () => {

	const [inputs, setInputs] = useState({
		fullName: '',
		username: '',
		password: '',
		confirmPassword: '',
		gender: ''
	})
	const { loading, signup } = useSignup()
	const handleCheckbox = (gender) => {
		setInputs({ ...inputs, gender })
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(inputs);
		await signup(inputs.fullName,
			inputs.username,
			inputs.password,
			inputs.confirmPassword,
			inputs.gender)


	}
	return <div className='flex flex-col items-center justify-center min-w-96  mx-auto'>
		<div className='w-full p-6  bg-gray-600 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 '>
			<h1 className='text-3xl font-semibold text-center text-gray-200'>
				Signup <span className='text-blue-500 ml-3'> Quick-Talk</span>
			</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label className='label p-2'>
						<span className='text-base label-text text-gray-300'>Fullname</span>

					</label>
					<input type="text" placeholder='Enter Your Full Name' className='w-full bg-gray-900 text-gray-300 input input-bordered h-10'
						value={inputs.fullName || ""}
						onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
					/>



				</div>

				<div>
					<label className='label p-2'>
						<span className='text-base label-text text-gray-300'>Username</span>
					</label>
					<input type="text" placeholder='Enter Username' className='w-full bg-gray-900 text-gray-300 input input-bordered h-10'
						value={inputs.username || ""}
						onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
					/>
				</div>
				<div>
					<label className='label'>
						<span className='text-base label-text text-gray-300'>Password</span>
					</label>
					<input type="password"
						placeholder='password'
						className='w-full bg-gray-900 text-gray-300 input input-bordered h-10'
						value={inputs.password || ""}
						onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
					/>

				</div>
				<div>
					<label className='label'>
						<span className='text-base label-text text-gray-300'>Confirm Password</span>
					</label>
					<input type="password"
						placeholder='confirm password'
						className='w-full bg-gray-900 text-gray-300 input input-bordered h-10'
						value={inputs.confirmPassword || ""}
						onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
					/>
				</div>
				<GenderCheckbox onCheckboxChange={handleCheckbox} selectedGender={inputs.gender} />

				<Link to='/login' className='text-sb hover:underline hover:text-blue-600 text-gray-300 mt-3 inline-block'>
					Already have an account?
				</Link>
				<div>
					<button className='btn btn-block btn-sm mt-3 bg-gray-900 text-gray-300 hover:text-black' disabled={loading}>
						{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}

					</button>
				</div>
			</form>
		</div>
	</div>
}

export default SignUp

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
