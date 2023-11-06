import { useEffect, useState } from 'react';
import './App.module.css';
import CreateArticle from './components/CreateArticle/CreateArticle.jsx';
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

      {/* <CreateArticle /> */}
     
    </div>
  )
};

export default App;
