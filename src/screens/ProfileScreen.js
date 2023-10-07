import React from 'react';
import './ProfileScreen.css';
import NavBar from '../NavBar';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import PlansScreen from './PlansScreen';

function ProfileScreen() {
	const user = useSelector(selectUser);
	return (
		<div className='profile'>
			<NavBar />
			<div className='profile__body'>
				<h1>Edit Profile</h1>
				<div className='profile__info'>
					<img
						src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAY1BMVEUNfoD///8AenwAd3kAcnQAdXhYnZ5yq6z4+/tspqc+j5FhoqPX6emAs7TI3d58r7Dh7O0nhYe+19iMtLXU4uOqyckUg4akw8RMlpe21NTx+fiix8eIt7iSv8Bmn6Ezi42YurvCQV2ZAAACJElEQVRoge2Y7XaiMBCGw+QDFIQQBFGgeP9X2SxWBdfa5IS2u+e8D7/zziSZGWbCGAAAAAAAAAAAAMCvwS1raRG3n9cKyYq6rhrht+o5XKpDfWiluxaxYzRhynAHZHyatPRGupovdfSB3oY6QN1VK+odHeD725IoCzUf37Wi1GkzlM6WRH1YFDZ6prV3ss/N3H4mQszT21wrap0c0Is1rlHzFD4stHZOh5ks1gQFIO8WWm6Xudx/0Pnz3n//v33/1M6XFIEFIJtp5W5acnYAbinzOYtkVo5iTX47/TG4/t0joHAtJUTDJQdqtkL9Ty/xnCmPTOZCnc8bHpT7V0iM1bkqPf+lxD1/2a+11hMDAAAAwP8DCb7KOH8RI08p4sroY3A3eVVT8danoyH+NrW0ulzHvm3Qk650bWc521wb6niVB5VLS32qmMObColmuA90uzXsy+v7RFK3LxtLsg10cZslfCaQ1/aPd0HdKSae+EBko73t88UsnayyfTsgLlS1qdTIuLRH8Qfba9trGVVv9HKQT47Bj0k3B7JoySnLzXkXK0vRH0z+YHq6K6+M+cIBUehHAy/RQ+nx/ufiAaX512Y/tm7S9d5S7x6wbedwCKc8Hn2LpasHskm7v296bvwYb2n9rc9dkNuifozGiawuWhLftPW5CzbTRaOqoTb53mJMPVSqEbYq/NzMa52gC2yqAT9oGgAAAAAAAAAAAAAAAAD413gHnPoSxZlBQh4AAAAASUVORK5CYII='
						alt='user logo'
					/>
					<div className='profile__details'>
						<h2>{user.email}</h2>
						<div className='profile__plans'>
							<h3>Plans</h3>
							<div className='profile'>
								<PlansScreen />
							</div>
							<button
								onClick={() => auth.signOut()}
								className='profile__signout'>
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileScreen;
