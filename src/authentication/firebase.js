import { initializeApp } from "firebase/app";

import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDdxWoQk-MYcPVZFj4kWERsBHp4fAuKYEQ",
	authDomain: "dts4a-57-final.firebaseapp.com",
	projectId: "dts4a-57-final",
	storageBucket: "dts4a-57-final.appspot.com",
	messagingSenderId: "884198499331",
	appId: "1:884198499331:web:7bcb885bdba89b9211da36",
};

// Inisialisasi Firebase dan menggunakan Authentcation
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerDenganEmailDanPassword = async (email, password) => {
	// Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth
	try {
		const response = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);

		// Pada aturan firebase authentication
		// Setelah user selesai registrasi, maka secara otomatis akan melakukan Sign In
		// sehingga kita bisa mengecek apakah seseorang sudah berhasil masuk atau belum

		console.log(
			"User yang teregistrasi dan berhasil login adalah",
			response.user
		);
	} catch (err) {
		console.log(err);

		// Sebenarnya di dalam err dari Firebase ini (dalam bentuk Object)
		// ada 2 property yang penting:
		// - code: error code dari firebase authentication ketika terjadi error
		// - message: error message dari firebase authentication ketika terjadi error
		console.log("error code auth", err.code);
		console.log("error message auth", err.message);
	}
};

// Fungsi untuk Login
// Kita gunakan versi async / await untuk memudahkan yah
const loginDenganEmailDanPassword = async (email, password) => {
	// Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);

		console.log("User yang berhasil login adalah", userCredential.user);
	} catch (err) {
		console.log(err);
		// Sama dengan register
		console.log("error code auth", err.code);
		console.log("error message auth", err.message);
	}
};

// Fungsi untuk reset Password
const resetPassword = async (email) => {
	// Dokumentasi: https://firebase.google.com/docs/reference/js/auth.md#sendpasswordresetemail
	try {
		await sendPasswordResetEmail(auth, email);

		console.log("Password reset sudah dikirimkan");
	} catch (err) {
		console.log(err);
	}
};

// Fungsi untuk sign out
const keluarDariApps = async () => {
	// Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth#next_steps
	try {
		await signOut(auth);
	} catch (err) {
		console.log(err);
	}
};

// Export seluruh fungsi yang dibuat + auth
export {
	auth, // Nanti akan digunakan untuk hooks react-hooks-firebase
	registerDenganEmailDanPassword,
	loginDenganEmailDanPassword,
	resetPassword,
	keluarDariApps,
};
