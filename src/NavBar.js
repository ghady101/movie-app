import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';

function NavBar() {
	const [show, handleShow] = useState(false);
	const navigate = useNavigate();

	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', transitionNavBar);
		return () => window.removeEventListener('scroll', transitionNavBar);
	}, []);

	return (
		<div className={`nav ${show && 'nav__black'}`}>
			<div className='nav__contents'>
				<img
					onClick={() => navigate('/')}
					className='nav__logo'
					src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
					alt='netflix logo'
				/>

				<img
					onClick={() => navigate('/profile')}
					className='nav__avatar'
					src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAY1BMVEUNfoD///8AenwAd3kAcnQAdXhYnZ5yq6z4+/tspqc+j5FhoqPX6emAs7TI3d58r7Dh7O0nhYe+19iMtLXU4uOqyckUg4akw8RMlpe21NTx+fiix8eIt7iSv8Bmn6Ezi42YurvCQV2ZAAACJElEQVRoge2Y7XaiMBCGw+QDFIQQBFGgeP9X2SxWBdfa5IS2u+e8D7/zziSZGWbCGAAAAAAAAAAAAMCvwS1raRG3n9cKyYq6rhrht+o5XKpDfWiluxaxYzRhynAHZHyatPRGupovdfSB3oY6QN1VK+odHeD725IoCzUf37Wi1GkzlM6WRH1YFDZ6prV3ss/N3H4mQszT21wrap0c0Is1rlHzFD4stHZOh5ks1gQFIO8WWm6Xudx/0Pnz3n//v33/1M6XFIEFIJtp5W5acnYAbinzOYtkVo5iTX47/TG4/t0joHAtJUTDJQdqtkL9Ty/xnCmPTOZCnc8bHpT7V0iM1bkqPf+lxD1/2a+11hMDAAAAwP8DCb7KOH8RI08p4sroY3A3eVVT8danoyH+NrW0ulzHvm3Qk650bWc521wb6niVB5VLS32qmMObColmuA90uzXsy+v7RFK3LxtLsg10cZslfCaQ1/aPd0HdKSae+EBko73t88UsnayyfTsgLlS1qdTIuLRH8Qfba9trGVVv9HKQT47Bj0k3B7JoySnLzXkXK0vRH0z+YHq6K6+M+cIBUehHAy/RQ+nx/ufiAaX512Y/tm7S9d5S7x6wbedwCKc8Hn2LpasHskm7v296bvwYb2n9rc9dkNuifozGiawuWhLftPW5CzbTRaOqoTb53mJMPVSqEbYq/NzMa52gC2yqAT9oGgAAAAAAAAAAAAAAAAD413gHnPoSxZlBQh4AAAAASUVORK5CYII='
					alt='user logo'
				/>
			</div>
		</div>
	);
}

export default NavBar;
