import axios from "axios";

// Di sini kita membuat instance dari axios
const tmdbInstance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	params: {
		// TODO: Jangan lupa masukkan API_KEY yang benarnya di sini yah !
		api_key: "6394cb6d892dd02973109eaf16ec50bc",
	},
});

// Jangan lupa diexport karena akan digunakan di tempat lainnya
export default tmdbInstance;
