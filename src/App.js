import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Main from './Main';
import Testimonials from './Testimonials';
import LatestReleases from './LatestReleases';
import PopularShows from './PopularShows';
import { Route, Routes } from 'react-router-dom';
import LatestReleasesPage from './LatestReleasesPage';
import Home from './Home';
import disney from "./logos/viewers-disney.png"
import pixAR from "./logos/viewers-pixar.png"
import marvel from "./logos/viewers-marvel.png"
import starwars from "./logos/viewers-starwars.png"
import natgeo from "./logos/viewers-national.png"
import disneyvid from "./videos/disneyvideo.mp4"
import pixarvid from "./videos/1564676714-pixar.mp4"
import marvelvid from "./videos/1564676115-marvel.mp4"
import starwarsvid from "./videos/1608229455-star-wars.mp4"
import natgeovid from "./videos/1564676296-national-geographic.mp4"
import aashiqanaCover from "./images/aashiqana cover.webp"
import aashiqanaProfile from "./images/aasiqanaprofile.webp"
import trial from "./images/trial+profile.webp"
import trialCover from "./images/the trial img.webp"
import IB71Profile from "./images/IB71profile.webp"
import Kizaziprofile from "./images/kizazi motoprofile.webp"
import GoodnightProfile from "./images/good nightprofile.webp"
import avatar from "./images/avatar image.webp"
import keralacrime from "./images/kerala crime files img.webp"
import anupamaprofile from "./popularshowsImages/anupamaprofile_2.webp"
import tamilumprofile from "./popularshowsImages/tamium+srasprofile.webp"
import koffeekaranprofile from "./popularshowsImages/koffeewithkaranprofile.webp"
import shinchan from "./popularshowsImages/shinchanprofile_2.webp"
import secretinvansion from "./popularshowsImages/secretivasionprofile1.webp"
import aashiqanaCover1 from "./images/aashiqanacover1.webp"
import disneyLogo1 from "./disney logo/disney logo.svg"
import goodnightcover from "./popularshowsImages/goodnightcover2.jpg"
import kizazicover from "./images/kizazi moto cover.webp"
import IB71cover from "./popularshowsImages/ib71cover1.png"
import Search from './Search';
import LatestReleasesAll from './LatestReleasesAll';
import pichaikaranprofile from "./images/pichaikaaran+2+profile.webp"
import pichaikarancover from "./images/pichaikaaran cover.webp"
import TestimonialsPage from './TestimonialsPage';
import PlayVideo from './PlayVideo';
import kanaprofile from "./popularshowsImages/kanaprofile.webp"
import kanacover from "./popularshowsImages/kanacover1.jpg"
import mahabaratprofile from "./popularshowsImages/Mahabaratprofile.webp"
import mahabaratcover from "./popularshowsImages/mahabarathcover1.webp"
import anupamacover from "./popularshowsImages/anupamacover1.webp"
import koffeekarancover from "./popularshowsImages/koffeewithkarancover.jpeg"
import secretinvasioncover from "./popularshowsImages/secretinvasioncover.jpg"
import tamilumcover from "./popularshowsImages/tamilumcover1.webp"
import shinchancover from "./popularshowsImages/shinchan cover.jpeg"
import PopularShowsPage from './PopularshowsPage';
import PopularShowsAll from './PopularShowsAll';
import Login from './Login';
import spidermanprofile from "./superheroes/amazingspidermanprofile.webp"
import quatumaniaprofile from "./superheroes/quatumaniaprofile.webp"
import gogprofile from "./superheroes/gogprofile.webp"
import thorprofile from "./superheroes/thorlovendthunderprofile.webp"
import wakandaprofie from "./superheroes/wakandaforeverprofile.webp"
import wakandacover from "./superheroes/wakandaforevercover.webp"
import spidermancover from "./superheroes/amazingspdermancover.png"
import thorcover from "./superheroes/thorcover.webp"
import quantamniacover from "./superheroes/quantamaniacover.webp"
import gogcover from "./superheroes/gogcover.webp"
import SuperHeroesPage from './SuperHeroesPage';
import gntrailer from "./movietrailers/goodnighttrialer.mp4"
import aashiqanatrailer from "./movietrailers/aashiqana (2).mp4"
import ib71trailer from "./movietrailers/ib71.mp4"
import kizazitrailer from "./movietrailers/kizazi moto.mp4"
import trialtrailer from "./movietrailers/the trial.mp4"
import pichaikarantrailer from "./movietrailers/pichaikaaran 2.mp4"
import BestOfsuperheroes from './BestOfsuperheroes';
import Footer from './Footer';
import Showfooter from './Showfooter';
import anupamavideo from "./movietrailers/anupamaserial.mp4"
import tamilserial from "./movietrailers/tamilserial.mp4"
import shinchanvideo from "./movietrailers/shinchan.mp4"
import secretinvasion from "./movietrailers/sedret.mp4"
import koffekaranvideo from "./movietrailers/videoplayback.mp4"
import kanavideo from "./movietrailers/kanavideo.mp4"
import mahabhartvideo from "./movietrailers/mahabharatvideo.mp4"
//#090613

function App() {
  
  const [TestimonialsData, setTestimonials] = React.useState([
    {
      id: 0,
      image: aashiqanaCover,
      coverimage: aashiqanaCover1,
      Description : "A series a brutal murders bring Yash and chikki to Bhumigad. Hot on the trail, they end up enveiling the evil curse.",
      releasedYear : 2023,
      duration : null,
      season: "4 Seasons",
      languages : "Hindi",
      dineyplusimage: disneyLogo1,
      category: "Drama | Romance | Thriller | Mystery | Conspiracy"
    },
    {
     id : 1,
      image: avatar,
      coverimage: avatar,
      Description : "set more than a decade after the first film, dive into the story of sully family, the lengths they go to keep each other  safe and the tragedieaa they endure.",
      releasedYear : 2022,
      duration : "3h 12m",
      season: null,
      languages : "6 Languages",
      dineyplusimage: disneyLogo1,
      category: "Sci Fi | Fantasy | Adventure | Action"
    },
    {
     id :2,
      image: keralacrime,
      coverimage: keralacrime,
      Description :"A Sex Worker mysterious death in a sunurban lodge room baffles the police as the only lead they have is a fake address.",
      releasedYear : 2023,
      duration : null,
      season: "4 Seasons",
      languages : "Hindi",
      dineyplusimage: disneyLogo1,
      category: "Drama | Crime | Thriller | Conspiracy"
    },
    {
     id : 4,
      image : trialCover,
      coverimage : trialCover,
      Description : "Noyonika sengupta faces a trial by fire when her family gets hit bya scandal. Watch her defend them in life and in the courtroom.",
      releasedYear : 2023,
      duration : null,
      season: "1 Season",
      languages : "7 Languages",
      dineyplusimage: disneyLogo1,
      category: "Drama | Couples | Emotional | Family-Friendly"
  }
   
  ])
  const [LatestReleasesData, setLatestReleasesData] = React.useState([
    {
        id : 71,
        title: "aashiqana",
        profile : aashiqanaProfile,
        coverImage : aashiqanaCover1,
        Description : "A series a brutal murders bring Yash and chikki to Bhumigad. Hot on the trail, they end up enveiling the evil curse.",
        releasedYear : 2023,
        duration : null,
        season: "4 Seasons",
        languages : "Hindi",
        dineyplusimage: disneyLogo1,
        videos: aashiqanatrailer,
        special: "latestreleases",
        category: "Drama | Romance | Thriller | Mystery | Conspiracy"

    },
    {
        id : 72,
        title: "trial",
        profile : trial,
        coverImage : trialCover,
        Description : "Noyonika sengupta faces a trial by fire when her family gets hit bya scandal. Watch her defend them in life and in the courtroom.",
        releasedYear : 2023,
        duration : null,
        season: "1 Season",
        languages : "7 Languages",
        dineyplusimage: disneyLogo1,
        videos: trialtrailer,
        special: "latestreleases",
        category: "Drama | Couples | Emotional | Family-Friendly"
    },
    {
         id : 73,
         title: "IB71",
        profile : IB71Profile,
        coverImage :  IB71cover,
        Description : "It's 1971; enemies are closing in! IB officer dev jammwal strategises to avert impending attacks. But the plan derails, forcing him to improvise: better combat.",
        releasedYear : 2023,
        duration : "1h 57m",
        languages : "3 Languages",
        dineyplusimage: disneyLogo1,
        videos: ib71trailer,
        special: "latestreleases",
        category: "Historical | Thriller | Conspiracy | Action"
    },
    {
        id : 74,
        title: "kizazi moto",
        profile : Kizaziprofile,
        coverImage : kizazicover,
        Description : "This action packed animated sci-fi anthology presents ten futuristicvision from Africa.",
        releasedYear : 2023,
        duration : null,
        season: "1 Season",
        languages : "English",
        dineyplusimage: disneyLogo1,
        videos: kizazitrailer,
        special: "latestreleases",
        category: "Action | ScienceFiction | Adventure | Animation"
    },
    {
        id : 75,
        title: "Good night",
        profile : GoodnightProfile,
        coverImage : goodnightcover,
        Description : "A chance meeting brings a different mohan and anu together. When his snoring wreaks havoc on their married life, can  the couple find a solution?",
        releasedYear : 2023,
        duration : "2h 28m",
        season: null,
        languages : "5 Languages",
        dineyplusimage: disneyLogo1,
        videos: gntrailer,
        special: "latestreleases",
        category: "Comedy | Drama | Family | Casual viewing"
    },
    {
      id : 76,
      title: "pichaikaaran 2",
      profile : pichaikaranprofile,
      coverImage : pichaikarancover,
      Description : "In Persuit of his lost sister, an impoverished sathya gets embroiled in a situation that forces him to impersonate a dead multi-millionare.",
      releasedYear : 2023,
      duration : "2h 31m",
      season: null,
      languages : "Tamil",
      dineyplusimage: disneyLogo1,
      videos: pichaikarantrailer,
      special: "latestreleases",
      category: "Action | Crime | Betrayal | Conspiracy"
  }
])


const [PopularShowsData, setPopularShowData] = React.useState([
  {
      id : 15,
      title: "anupama",
      profile : anupamaprofile,
      cover : anupamacover,
      Description : "Despite the many challenges through her way, Anupama begins new chapter of her life post-divorce. Head held always-high, What's waiting for the next.",
      releasedYear : 2023,
      duration : "U/A13+  ",
      season: null,
      languages :"Hindi",
      dineyplusimage: disneyLogo1,
      videos: anupamavideo,
      special: "popularshows",
      category: "Girl Power | Drama | Struggles | Family Friendly"
  },
  {
      id :  16,
      title: "tamilum saraswathiyum",
      profile : tamilumprofile,
      cover : tamilumcover,
      Description : "Sarawathi, a dropout, falls in love with uneducated Thamizh, and they tie the knot. Nowe she has to prove herselfand win over her husband's family.",
      releasedYear : 2023,
      duration : "U/A13+",
      season: null,
      languages : "Tamil",
      dineyplusimage: disneyLogo1,
      videos : tamilserial,
      special: "popularshows",
      category: "Feel-Good | Drama | Family | Romance"
  },
  {
      id :  17,
      title: "koffee with karan",
      profile : koffeekaranprofile,
      cover : koffeekarancover,
      Description : "Dig into inside scoopswith Karan johar as he retruns with your fav celebs to explore what's brewing in B-Town.",
      releasedYear : 2022,
      duration : null,
      season: "7 Seasons",
      languages : "English",
      dineyplusimage: disneyLogo1,
      videos: koffekaranvideo,
      special: "popularshows",
      category: "Talk Show | Controversial | People and Culture | Casual Viewing"
  },
  {
      id :  18,
      title: "shinchan",
      profile : shinchan,
      cover : shinchancover,
      Description : "Shinchan follow the journey of five-year-old, Shinnosuke 'shin' Nohara and his family and his dog shiro, neigbours, friends in Kasukabe, Japan.",
      releasedYear : 2019,
      duration : null,
      season: "4 Seasons",
      languages : "Hindi",
      dineyplusimage: disneyLogo1,
      videos: shinchanvideo,
      special: "popularshows",
      category: "Comedy | Childhood | Animation | Kids"
  },
  {
      id : 19,
      title: "secretinvasion",
      profile : secretinvansion,
      cover : secretinvasioncover,
      Description :  "Nick fury learns of a clandestine invasion of earth by a faction of shape shifting skrulls. Together with his allies, he must race against time to save humanity.",
      releasedYear : 2023,
      duration : null,
      season: "1 Season",
      languages : "5 Languages",
      dineyplusimage: disneyLogo1,
      videos : secretinvasion,
      special: "popularshows",
      category: "Sci Fi | Fantasy | Action | Adventure"
  },
   {
    id : 20,
    title: "mahabharath",
    profile : mahabaratprofile,
    cover : mahabaratcover,
    Description : "The Mother Of All Wars, The Epitome Of All of Rivalries, The caudron of emotions, insecurities, jealouses, and Powerplay - Mahabharath.",
    releasedYear : 2014,
    duration : null,
    season: "U/A13+",
    languages : "Hindi",
    dineyplusimage: disneyLogo1,
    videos: mahabhartvideo,
    special: "popularshows",
    category: "History | Novel | Adventure | Action"
  },
  {
    id : 21,
    title: "kana kaanum kaalangal",
    profile : kanaprofile,
    cover : kanacover,
    Description : "NEW EPISODES EVERY FRIDAY, They are back! The siragugal school reopens, and the students are glad to be in the class with their friends. ",
    releasedYear : 2023,
    duration : "U/A16+",
    season: null,
    languages : "Tamil",
    dineyplusimage: disneyLogo1,
    videos: kanavideo,
    special: "popularshows",
    category: "Teen | Drama | Friendship | Feel-Good"
  }
]
)




  const [Disney , setdisney] = React.useState([
    {
      id: 41,
      img: disney,
      video : disneyvid
    },
    {
      id: 42,
      img: pixAR,
      video :  pixarvid
    },
    {
      id: 43,
      img: marvel,
      video : marvelvid
    },

    {
      id: 44,
      img: starwars,
      video : starwarsvid
    },
    {
      id: 45,
      img: natgeo,
      video : natgeovid
    }
  ])
 
  const [SuperHeroes, setSuperHeroes] = React.useState([
    {
      id : 50,
      title: "the amazing spiderman",
      profile: spidermanprofile,
      cover: spidermancover,
      Description : "A Peter Parker grapples with both-high-school and amazing super human crises as his alter-ego spider-man.",
      releasedYear : 2012,
      duration : "2h 16m",
      season: null,
      languages : "Engish",
      dineyplusimage: disneyLogo1,
      special: "superheroes",
      category: "Adventure | Action | Superhero | Science Fiction"
    },
  {
    id : 51,
    title: "the antman and the wasp: quantumania",
    profile: quatumaniaprofile,
    cover: quantamniacover,
    Description: "Ant-man and Their Wasp with their families, explore the quantum realm and embark on an adventure that pushes them beyond what they thought possible.",
    releasedYear : 2023,
    duration : "2h 4m",
    season: null,
    languages : "5 Languages",
    dineyplusimage: disneyLogo1,
    special: "superheroes",
    category: "Science Fiction | Adventure | Action | Fantasy"
  },
  {
    id : 52,
    title: "The guardians of the galaxy",
    profile: gogprofile,
    cover: gogcover,
    Description : "The band heroic renegades embark on a action packed mission to protect one of their own. And a new force threatens to bring the guardians for good.",
    releasedYear : 2023,
    duration : "2h 29m",
    season: null,
    languages : "5 Languages",
    dineyplusimage: disneyLogo1,
    special: "superheroes",
    category: "Superheroes | Action | Adventure | Comedy"
  },
  {
    id : 53,
    title: "thor: the love and thunder",
    profile: thorprofile,
    cover: thorcover,
    Description : "The God Of Thunder teams up with king valkyne , korg and ex-girlfriend-turned-mighty-thor jane foster to take on a galactic killer known as Gorr The God Butcher. ",
    releasedYear : 2022,
    duration : "1h 58m",
    season: null,
    languages : "6 Languages",
    dineyplusimage: disneyLogo1,
    special: "superheroes",
    category: "Science Fiction | Action | Adventure | Fantasy"
  },
  {
    id : 54,
    title: "wakanda forever",
    profile: wakandaprofie,
    cover: wakandacover,
    Description : "Queen Ramonda, Shuri, M'Baku, Okaye, And dora Milaje fight to protect their nation from intrevening world powers after the death of beloved king D'challa.",
    releasedYear : 2022,
    duration : "2h 41m",
    season: null,
    languages : "5 Languages",
    dineyplusimage: disneyLogo1,
    special: "superheroes",
    category: "Dark Humor | Superheroes | Action | Fantasy"
  }
  ])
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
