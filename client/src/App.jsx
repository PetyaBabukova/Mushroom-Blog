import './App.module.css';
import BlogArticles from './components/BlogArticles/BlogArticles.jsx';
import CreateArticle from './components/CreateArticle/CreateArticle.jsx';
import Header from "./components/Header/Header"
import Hero from './components/Hero/Hero';
import MainSection from './components/MainSection/Main.jsx';

function App() {

  return (
    <div className="App">

      <Header />
      <Hero />
      <MainSection />

      <CreateArticle />
      
    </div>
  )
}

export default App
