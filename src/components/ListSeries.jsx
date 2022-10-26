// di sini kita import apis/tmdb.js
import tmdb from "../apis/tmdb";

import React, { useEffect, useState } from "react";
import { Box, Typography, CardContent, CardMedia, Rating } from "@mui/material";

import Carousel from "react-material-ui-carousel";

const ListSeries = () => {
	const [movies, setMovies] = useState([]);
	const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";
	useEffect(() => {
		const fetchDataMovies = async () => {
			try {
				// Gunakan instance tmdb di sini
				const responseDariTMDB = await tmdb.get(
					// Nah di sini kita tidak perlu menuliskan terlalu panjang lagi
					"/tv/latest"
				);

				// Jangan lupa set statenya
				// Perhatikan di sini responseDariTMDB ada .data (response schema axios)
				setMovies(responseDariTMDB.data.results);
			} catch (err) {
				console.log(err);
			}
		};

		fetchDataMovies();
	}, []);

	return (
		// <Box className="boxy">
		// 	<Typography variant="h5">
		// 		Container ListMovies (Data Real)
		// 	</Typography>

		// 	{movies.map((movie) => {
		// 		return <CardMovie movie={movie} />;
		// 	})}
		// </Box>
		<Carousel
			next={(active, next) => {
				/* Do stuff */
				console.log(`we left ${active}, and are now at ${next}`);
			}}
			prev={(active, prev) => {
				/* Do other stuff */
				console.log(`we left ${active}, and are now at ${prev}`);
			}}
			indicators={false}
			navButtonsAlwaysVisible={true}
		>
			{movies.map((movie, i) => (
				<div key={i}>
					<CardContent
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 2,
							width: 1,
							minHeight: "500px",
							color: "black",
						}}
					>
						<Typography variant="h4">Popular</Typography>
						<CardMedia
							component="img"
							sx={{ maxHeight: "400px", maxWidth: "200px" }}
							// Kita gunakan image berdasarkan prefix dari image tmdb
							image={`${baseUrlForMovie}${movie.poster_path}`}
							// image={props.movie.poster_path}
							alt={movie.title}
						></CardMedia>
						<Typography component="div" variant="body1">
							{movie.title}
						</Typography>
						<Rating
							value={movie.vote_average / 2}
							precision={0.1}
							readOnly
						/>
						<Typography variant="body2">
							Release date: {movie.release_date}
						</Typography>
						<Typography variant="body2">
							{movie.overview}
						</Typography>
					</CardContent>
				</div>
			))}
		</Carousel>
	);
};

export default ListSeries;
