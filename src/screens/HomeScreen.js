import React from 'react';
import './HomeScreen.css';
import NavBar from '../NavBar';
import Banner from '../Banner';
import Row from '../Row';
import requests from '../Requests';

function HomeScreen() {
	return (
		<div>
			{/* nav */}
			<NavBar />

			{/* banner */}
			<Banner />

			<Row title='Trending Now' fetchURL={requests.fetchTrending} isLargeRow />
			<Row title='Top Rated' fetchURL={requests.fetchTopRated} />
			<Row title='Action Movies' fetchURL={requests.fetchActionMovies} />
			<Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />
			<Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies} />
			<Row title='Romance Movies' fetchURL={requests.fetchRomanceMovies} />
			<Row title='Documentaries' fetchURL={requests.fetchDocumentaries} />
		</div>
	);
}

export default HomeScreen;
