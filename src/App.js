// useEffect sudah tidak digunakan lagi
import React from "react";

import NavBar from "./components/NavBar";
import HomePage from "./containers/HomePage";

// Ini sudah tidak digunakan karena sudah ada ProtectedComponent
// import { useNavigate } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "./authentication/firebase";

function App() {
	// Bagian ini pun jadi tidak digunakan karena sudah ada ProtectedComponent
	// const navigate = useNavigate();
	// const [user, isLoading, error] = useAuthState(auth);

	// useEffect(
	//   () => {
	//     // Bila ada logic / Component login
	//     if (isLoading) {
	//       return;
	//     }

	//     // Bila Authnya null, kita kembalikan ke halaman login
	//     if (!user) {
	//       navigate("/login");
	//     }
	//   },
	//   // dependency list
	//   [user, isLoading, navigate]
	// );

	return (
		<div className="App">
			<NavBar />
			<HomePage />
		</div>
	);
}

export default App;
