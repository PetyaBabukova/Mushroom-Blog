import { useEffect, useState } from 'react';
import styles from './App.module.css';
import {Routes, Route} from 'react-router-dom';
import CreateDishForm from './components/CreateDishForm/CreateDishForm.jsx';
import Header from "./components/Header/Header"
import Hero from './components/Hero/Hero';
import MainSection from './components/MainSection/MainSection.jsx';
import OurTeam from './components/OurTeam/OurTeam.jsx';
import * as chefService from './services/chefServise.js'
import Footer from './components/Footer/Footer.jsx';
import BlogDishes from './components/BlogDishes/BlogDishes.jsx';
import Profile from './components/Profile/Profile.jsx';
import DishDetails from './components/DishDetails/DishDetails.jsx';

function App() {

  return (
    <div className="App">

      <Header />
      <Hero />
      <div className={styles.container}>
      <Profile />
      <Routes>
        <Route path='/' element={<BlogDishes />} />
        <Route path='/:category' element={<BlogDishes />} />

        <Route path='/our-team' element={<OurTeam />} />
        <Route path='/create-dish' element={<CreateDishForm />} />
        <Route path='/:id/details' element={<DishDetails />} />
      </Routes>
      
      {/* <BlogDishes /> */}
      {/* <MainSection /> */}


      </div>

      {/* <CreateDishBtn /> */}

      {/* <CreateDishForm /> */}

      <Footer />
     
    </div>
  )
};

export default App;
