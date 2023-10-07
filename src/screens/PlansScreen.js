import React, { useEffect, useState } from 'react';
import './PlansScreen.css';
import db from '../firebase';
import { query } from 'firebase/firestore';
import { data } from '../data';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { loadStripe } from '@stripe/stripe-js';

function PlansScreen() {
	const [products, setProducts] = useState();
	const user = useSelector(selectUser);
	const [sub, setSub] = useState(null);

	// useEffect(() => {
	// 	db.collection('customers')
	// 		.doc(user.uid)
	// 		.collection('subscriptions')
	// 		.get()
	// 		.then((querySnapshot) => {
	// 			querySnapshot.forEach(async (subscription) => {
	// 				setSub({
	// 					role: subscription.data().role(),
	// 					current_period_end: subscription.data().current_period_end.second,
	// 					current_period_start:
	// 						subscription.data().current_period_start.second,
	// 				});
	// 			});
	// 		});
	// }, []);

	// useEffect(() => {
	// 	db.collection('products')
	// 		.where('active', '==', true)
	// 		.get()
	// 		.then((querySnapshot) => {
	// 			const products = {};
	// 			querySnapshot.forEach(async (productDoc) => {
	// 				products[productDoc.id] = productDoc.data();
	// 				const priceSnap = await productDoc.ref.collection('prices').get();
	// 				priceSnap.docs.forEach((price) => {
	// 					products[productDoc.id].prices = {
	// 						priceId: price.id,
	// 						priceData: price.data(),
	// 					};
	// 				});
	// 			});
	// 			setProducts(products);
	// 		});
	// }, []);

	// const loadCheckout = async (priceld) => {
	// 	const docRef = await db
	// 		.collection('customers')
	// 		.doc(user.uid)
	// 		.collection('checkout_sessions')
	// 		.add({
	// 			price: priceld,
	// 			success_url: window.location.origin,
	// 			cancel_url: window.location.origin,
	// 		});
	// 	docRef.onSanpshot(async (snap) => {
	// 		const { error, sessionID } = snap.data();
	// 		if (error) alert(`An error occured ${error.message}`);

	// 		if (sessionID) {
	// 			const stripe = loadStripe('secret_key');
	// 		}
	// 	});
	// };

	const plans = data;

	return (
		<div className='plans'>
			<br />
			{/* {sub && (
				<p>
					Renewel date:{' '}
					{new Date(sub.current_period_end * 1000).toLocaleDateString}
				</p>
			)}

			{Object.entries(products).map(([productId, productData]) => {
				const isCurrentPackage = productData.name
					?.toLowerCase()
					.includes(sub?.role);

				return (
					<div
						key={productId}
						className={`${
							isCurrentPackage && 'plans__plan--disabled'
						} plans__plan`}>
						<div className='plans__info'>
							<h5>{productData.name}</h5>
							<h6>{productData.description}</h6>
						</div>
						<button
							onClick={() =>
								!isCurrentPackage && loadCheckout(productData.prices.priceID)
							}>
							{isCurrentPackage ? 'Current Package' : 'Subscribe'}
						</button>
					</div>
				);
			})} */}

			{plans.map((plan) => {
				return (
					<div className='plans__plan'>
						<div className='plans__info'>
							<h5>{plan.name}</h5>
							<h6>{plan.description}</h6>
						</div>
						<button>Subscribe</button>
					</div>
				);
			})}
		</div>
	);
}

export default PlansScreen;
