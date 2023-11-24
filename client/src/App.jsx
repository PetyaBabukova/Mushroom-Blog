import { useEffect, useState } from 'react';
import styles from './App.module.css';
import * as chefService from './services/chefServise.js'
import {Routes, Route} from 'react-router-dom';

import AuthContext from './contexts/authContext.js';

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

function App() {

  const [auth, setAuth] = useState();

  const onRegisterSubmit = async (values) => {
    try {
      const result = await chefService.register(values.email, values.username, values.password);
      console.log(result);
      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken)
      
    } catch (error) {
      console.log('Unsuccessful register', error);
    }
    
  }

  const values = {
    onRegisterSubmit,
  }

  return (
    <AuthContext.Provider value={values} >

    <div className="App">

      <Header />
      <Hero />
      <div className={styles.container}>
      <Profile />
      <Routes>
        <Route path='/' element={<BlogDishes />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/:category' element={<BlogDishes />} />
        <Route path='/our-team' element={<OurTeam />} />
        <Route path='/:userId/profile' element={<ChefProfile />} />
        <Route path='/:userId/edit-profile' element={<ChefProfile />} />
        <Route path='/:userFirstName/dishes' element={<BlogDishes/>} />
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
