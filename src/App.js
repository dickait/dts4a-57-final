// Karena kita ingin track auth, harus menggunakan useEffect
import React, { useEffect } from "react";

import NavBar from "./components/NavBar";
import HomePage from "./containers/HomePage";

// Sekarang kita akan membutuhkan useNavigate untuk memaksa pindah rute apabila user belum ada
import { useNavigate } from "react-router-dom";

// Dan juga harus menggunakan useAuthState untuk mengecek apakah sedang ada user yang login
import { useAuthState } from "react-firebase-hooks/auth";

// Dan membutuhkan auth dari authentication/firebase.js karena dibutuhkan oleh useAuthState
import { auth } from "./authentication/firebase";

function App() {
	const navigate = useNavigate();
	const [user, isLoading, error] = useAuthState(auth);

	useEffect(
		() => {
			// Bila ada logic / Component login
			if (isLoading) {
				return;
			}

			// Bila Authnya null, kita kembalikan ke halaman login
			if (!user) {
				navigate("/login");
			}
		},
		// dependency list
		[user, isLoading, navigate]
	);

	return (
		<div className="App">
			<NavBar />
			<HomePage />
		</div>
	);
}

export default App;
