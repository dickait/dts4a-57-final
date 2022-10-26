import React, { useState } from "react";

import { AppBar, Box, Toolbar, Typography, Container, Menu, IconButton, MenuItem, Tooltip } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

// Import fungsi untuk melakukan Logout
import { keluarDariApps } from "../authentication/firebase";

import logo from "../logo.png"
import ProfilePicture from "../ProfilePicture.png";
// import styles from "./NavBar.module.css";

const NavBar = () => {
	const navigate = useNavigate();

	// Fungsi ini akan menjadi async await
	// Karena keluarDariApps bersifat async, dan kita harus menunggu
	// keluarDariAppsSelesai, baru boleh navigate
	const buttonLogoutOnClickHandler = async () => {
		// Kita akan memanggil fungsi keluarDariApps di sini
		await keluarDariApps();
		navigate("/login");
	};

	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static" sx={{ bgcolor: 'black' }}>
			<Container maxWidth="xl" >
				<Toolbar disableGutters >
					<Box
						component="img"
						sx={{
							height: 40,
							width: 40,
							mr: 2,
						}}
						alt="Logo"
						src={logo}
					/>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							<MenuItem >
								<Typography component="a"
							href="/" textAlign="center">Home</Typography>
							</MenuItem>
							<MenuItem >
								<Typography component="a"
							href="/series" textAlign="center">Series</Typography>
							</MenuItem>
							<MenuItem >
								<Typography component="a"
							href="/movie" textAlign="center">Movie</Typography>
							</MenuItem>
							<MenuItem >
								<Typography component="a"
							href="/new-and-popular" textAlign="center">New and Popular</Typography>
							</MenuItem>
						</Menu>
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="/"
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							Home
						</Typography>
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="/series"
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							Series
						</Typography>
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="/movies"
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							Movies
						</Typography>
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="/new-and-popular"
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							New and Popular
						</Typography>
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Box
									component="img"
									sx={{
										height: 40,
										width: 40,
										mr: 2,
									}}
									alt="Logo"
									src={ProfilePicture}
								/>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							<MenuItem onClick={buttonLogoutOnClickHandler}>
								<Typography textAlign="center">Logout</Typography>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default NavBar;
