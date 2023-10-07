import React, { useRef } from 'react';
import './SignupScreen.css';
import { auth } from '../firebase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

function SignUp() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const register = (e) => {
		e.preventDefault();

		createUserWithEmailAndPassword(
			auth,
			emailRef.current.value,
			passwordRef.current.value
		)
			.then(() => {
				console.log('done');
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	const signIn = (e) => {
		e.preventDefault();

		signInWithEmailAndPassword(
			auth,
			emailRef.current.value,
			passwordRef.current.value
		)
			.then((authUser) => {
				console.log(authUser);
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<div className='signup'>
			<form action=''>
				<h1>Sign In</h1>
				<input type='email' placeholder='email' ref={emailRef} />
				<input type='password' placeholder='password' ref={passwordRef} />
				<button type='submit' onClick={signIn}>
					Sign In
				</button>
				<h4>
					<span className='signup__gray'>New to Netflix? </span>
					<span className='signup__link' onClick={register}>
						Sign Up now.
					</span>
				</h4>
			</form>
		</div>
	);
}

export default SignUp;
