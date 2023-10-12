import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import LatestReleasesPage from './components/latestreleases/LatestReleasesPage';
import Home from './components/Home';
import Search from './components/Search';
import LatestReleasesAll from './components/latestreleases/LatestReleasesAll';
import TestimonialsPage from './components/testimonials/TestimonialsPage';
import PopularShowsPage from './components/popularshows/PopularshowsPage';
import PopularShowsAll from './components/popularshows/PopularShowsAll';
import Login from './components/authentication/Login';
import SuperHeroesPage from './components/superheroes/SuperHeroesPage';
import Footer from './components/Footer';
import TestimonialsDb from './models/TestimonialsDb';
import LatestReleasesDb from './models/LatestReleasesDb';
import PopularShowsDb from './models/PopularShowsDb';
import DPMHSDb from './models/DPMHSDb';
import SuperHeroesDb from './models/SuperHeroesDb';
import PlayVideo from './components/PlayVideo'
//#090613

function App() {
  
  const [TestimonialsData, setTestimonials] = React.useState(TestimonialsDb)
  const [LatestReleasesData, setLatestReleasesData] = React.useState(LatestReleasesDb)
  const [PopularShowsData, setPopularShowData] = React.useState(PopularShowsDb)
  const [Disney , setdisney] = React.useState(DPMHSDb)
  const [SuperHeroes, setSuperHeroes] = React.useState(SuperHeroesDb)
  const [search, setsearch] = React.useState("")
  const [searchResults, setsearchResults] = React.useState([])
    
  React.useEffect(() => {
    const searchFilterforlatest =  LatestReleasesData.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    const searchFilterforpopular =  PopularShowsData.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    const searchFilterforsuperheroes =  SuperHeroes.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    const UpdateArray = [...searchFilterforlatest, ...searchFilterforpopular, ...searchFilterforsuperheroes]
    setsearchResults(UpdateArray)
  }, [search])

  
  return (
    <div className='container'>
     
      <Navbar />
      <div className='content'>
      <Routes>
       <Route path='/' element={
         <Home
       TestimonialsData = {TestimonialsData}
       LatestReleasesData={LatestReleasesData}
       popularshows = {PopularShowsData}
       disney= {Disney}
       superheroes = {SuperHeroes}
       />
       } />
       <Route path={`/latestreleases/:id`} element={<LatestReleasesPage LatestReleasesData={LatestReleasesData} />} />
       <Route path='/latestreleasesAll' element={<LatestReleasesAll LatestReleasesData={LatestReleasesData}  />} />
       <Route path='/testimonials/:id' element={<TestimonialsPage TestimonialsData = {TestimonialsData} />} />
       <Route path='/playvideo/:id' element={<PlayVideo LatestReleasesData={LatestReleasesData} popularshows = {PopularShowsData} superheroes = {SuperHeroes} />} />
       <Route path='/popularshows/:id' element={<PopularShowsPage PopularShowsData ={PopularShowsData} />} />
       <Route path='/popularshowsall' element={<PopularShowsAll popularshowsall = {PopularShowsData} />} />
       <Route path='/superheroes/:id' element={<SuperHeroesPage superheroes = {SuperHeroes} />} />
       <Route path='/Search' element={<Search search = {search} setsearch = {setsearch} searchResults = {searchResults}  />} />
       <Route path='/login' element={<Login />} />
     </Routes>
    
      </div>
       
       
      <Footer />
      
    </div>
  );
}

export default App; 
