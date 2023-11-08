import { useEffect, useState } from 'react';
import styles from './App.module.css';
import CreateDishForm from './components/CreateDishForm/CreateDishForm.jsx';
import CreateDishBtn from './components/CreateDishBtn/CreateDishBtn.jsx';
import Header from "./components/Header/Header"
import Hero from './components/Hero/Hero';
import MainSection from './components/MainSection/MainSection.jsx';
import OurTeam from './components/OurTeam/OurTeam.jsx';
import * as chefService from './services/chefServise.js'

function App() {

  return (
    <div className="App">

      <Header />
      <Hero />
      {/* <CreateDishBtn /> */}
      <MainSection />

      {/* <CreateDishForm /> */}
     
    </div>
  )
};

export default App;
