import { useContext, useEffect, useState } from 'react';
import styles from './App.module.css';
import * as chefService from './services/chefServise.js';
import { Routes, Route, useNavigate } from 'react-router-dom';

import AuthContext, { AuthProvider } from './contexts/authContext.jsx';
import Path from './paths.js';

import CreateDishForm from './components/dishes/CreateDishForm/CreateDishForm.jsx';
import EditDishForm from './components/dishes/editDishForm/EditDishForm.jsx';
import Header from "./components/header/Header.jsx";
import Hero from './components/Hero/Hero';
import OurTeam from './components/chefs/team/OurTeam.jsx';
import Footer from './components/Footer/Footer.jsx';
import BlogDishes from './components/dishes/blogDishes/BlogDishes.jsx';
import DishDetails from './components/dishes/DishDetails/DishDetails.jsx';
import ChefProfile from './components/chefs/chefProfilePage/ChefProfile.jsx';
import Login from './components/chefs/login/Login.jsx';
import Register from './components/chefs/register/Register.jsx';
import CreateComment from './components/comments/CreateComment/CreateComment.jsx';
import EditComment from './components/comments/editComment/EditComment.jsx';
import LogoutUser from './components/chefs/logoutUser/LogoutUser.jsx';
import EditProfile from './components/chefs/editProfile/EditProfile.jsx';
import { ProfileProvider } from './contexts/profileContext.jsx';
import SetProfile from './components/chefs/setProfile/SetProfile.jsx';
import ChefList from './components/chefs/chefList/ChefList.jsx';

function App() {

	return (
		<AuthProvider>
			<div className="App">
				<Header />
				<Hero />
				<div className={styles.container}>
					<ProfileProvider>
						<ChefList />
						<Routes>
							<Route path='/' element={<BlogDishes />} />
							<Route path='/register' element={<Register />} />
							<Route path='/login' element={<Login />} />
							<Route path='/logout' element={<LogoutUser />} />
							<Route path='/:category' element={<BlogDishes />} />
							<Route path='/:dishId/details' element={<DishDetails />} />
							<Route path='/:dishId/edit-dish' element={<EditDishForm />} />
							<Route path='/create-dish' element={<CreateDishForm />} />
							<Route path='/:dishId/create-comment' element={<CreateComment />} />
							<Route path='/:commentId/edit-comment' element={<EditComment />} />
							<Route path='/our-team' element={<OurTeam />} />
							<Route path='/:_ownerId/profile' element={<ChefProfile />} />
							<Route path='/:profileId/edit-profile' element={<EditProfile />} />
							<Route path='/:userId/set-profile' element={<SetProfile />} />
							<Route path='/:userId/view-profile' element={<ChefProfile />} />
							<Route path='/:userFirstName/dishes' element={<BlogDishes />} />
							<Route path='/:userId/dishes' element={<BlogDishes />} />
						</Routes>
					</ProfileProvider>
				</div>
				<Footer />
			</div>
		</AuthProvider>
	);
}

export default App;
