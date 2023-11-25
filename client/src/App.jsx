import { useEffect, useState } from 'react';
import styles from './App.module.css';
import * as chefService from './services/chefServise.js'
import { Routes, Route, useNavigate } from 'react-router-dom';

import AuthContext from './contexts/authContext.js';
import Path from './paths.js'

import CreateDishForm from './components/dishes/CreateDishForm/CreateDishForm.jsx';
import EditDishForm from './components/dishes/editDishForm/EditDishForm.jsx';
import Header from "./components/header/Header.jsx"
import Hero from './components/Hero/Hero';
import OurTeam from './components/chefs/team/OurTeam.jsx';
import Footer from './components/Footer/Footer.jsx';
import BlogDishes from './components/dishes/blogDishes/BlogDishes.jsx';
import Profile from './components/chefs/profile/Profile.jsx';
import DishDetails from './components/dishes/dishDetails/DishDetails.jsx';
import ChefProfile from './components/chefs/chefProfilePage/ChefProfile.jsx';
import Login from './components/chefs/login/Login.jsx';
import Register from './components/chefs/register/Register.jsx';
import CreateComment from './components/comments/CreateComment/CreateComment.jsx';
import LogoutUser from './components/chefs/logoutUser/LogoutUser.jsx';

function App() {
	const navigate = useNavigate();

	const [auth, setAuth] = useState(()=>{ 
		localStorage.removeItem('accessToken'); //This is for asuure that the localStorrage is empty
		return {};
	});


	const onRegisterSubmit = async (values) => {
		try {
			const result = await chefService.register(values.username, values.email, values.password);
			console.log(result);
			setAuth(result);
			// console.log(auth);
			// console.log(result.accessToken);
			localStorage.setItem('accessToken', result.accessToken)

		} catch (error) {
			console.log('Unsuccessful register', error);
		}

	};

	const onLoginSubmit = async (values) => {
		try {
			const result = await chefService.login(values.email, values.password);
			setAuth(result);
			localStorage.setItem('accessToken', result.accessToken);
			navigate(Path.Home);

		} catch (error) {
			console.log("Unsuccessful login!", error);
		}
	};

	const logoutHandler =  () => {
		
			 localStorage.removeItem('accessToken');
			setAuth({});
			


	}

	
	const values = {
		logoutHandler,
		onRegisterSubmit,
		onLoginSubmit,
		username: auth.username || auth.email,
		email: auth.email,
		isAuthenticated: !!auth.email
	}
	
	// console.log(values.isAuthenticated);

	return (
		<AuthContext.Provider value={values} >

			<div className="App">

				<Header />
				<Hero />
				<div className={styles.container}>
					<Profile />
					<Routes>
						<Route path='/' element={<BlogDishes />} />
						<Route path='/register' element={<Register />} />
						<Route path='/login' element={<Login />} />
						<Route path='/logout' element={<LogoutUser />} />
						<Route path='/:category' element={<BlogDishes />} />
						<Route path='/our-team' element={<OurTeam />} />
						<Route path='/:userId/profile' element={<ChefProfile />} />
						<Route path='/:userId/edit-profile' element={<ChefProfile />} />
						<Route path='/:userFirstName/dishes' element={<BlogDishes />} />
						<Route path='/:userId/dishes' element={<BlogDishes />} />
						<Route path='/:dishId/details' element={<DishDetails />} />
						<Route path='/:id/edit-dish' element={<EditDishForm />} />
						<Route path='/create-dish' element={<CreateDishForm />} />
						<Route path='/:dishId/create-comment' element={<CreateComment />} />
					</Routes>

					{/* <BlogDishes /> */}
					{/* <MainSection /> */}


				</div>

				{/* <CreateDishBtn /> */}

				{/* <CreateDishForm /> */}

				<Footer />

			</div>
		</AuthContext.Provider>
	)
};

export default App;
