const SuperHeroesDb = [
    {
      id : 50,
      title: "the amazing spiderman",
      profile: () => require('../superheroes/amazingspidermanprofile.webp'),
      cover: () => require('../superheroes/amazingspdermancover.png'),
      Description : "A Peter Parker grapples with both-high-school and amazing super human crises as his alter-ego spider-man.",
      releasedYear : 2012,
      duration : "2h 16m",
      season: null,
      languages : "Engish",
      dineyplusimage:() => require('../disney logo/disney logo.svg'),
      special: "superheroes",
      category: "Adventure | Action | Superhero | Science Fiction"
    },
  {
    id : 51,
    title: "the antman and the wasp: quantumania",
    profile: () => require('../superheroes/quatumaniaprofile.webp'),
    cover:() => require('../superheroes/quantamaniacover.webp'),
    Description: "Ant-man and Their Wasp with their families, explore the quantum realm and embark on an adventure that pushes them beyond what they thought possible.",
    releasedYear : 2023,
    duration : "2h 4m",
    season: null,
    languages : "5 Languages",
    dineyplusimage: () => require('../disney logo/disney logo.svg'),
    special: "superheroes",
    category: "Science Fiction | Adventure | Action | Fantasy"
  },
  {
    id : 52,
    title: "The guardians of the galaxy",
    profile: () => require('../superheroes/gogprofile.webp'),
    cover:() => require('../superheroes/gogcover1.jpg'),
    Description : "The band heroic renegades embark on a action packed mission to protect one of their own. And a new force threatens to bring the guardians for good.",
    releasedYear : 2023,
    duration : "2h 29m",
    season: null,
    languages : "5 Languages",
    dineyplusimage: () => require('../disney logo/disney logo.svg'),
    special: "superheroes",
    category: "Superheroes | Action | Adventure | Comedy"
  },
  {
    id : 53,
    title: "thor: the love and thunder",
    profile:() => require('../superheroes/thorlovendthunderprofile.webp'),
    cover: () => require('../superheroes/thorcover.webp'),
    Description : "The God Of Thunder teams up with king valkyne , korg and ex-girlfriend-turned-mighty-thor jane foster to take on a galactic killer known as Gorr The God Butcher. ",
    releasedYear : 2022,
    duration : "1h 58m",
    season: null,
    languages : "6 Languages",
    dineyplusimage: () => require('../disney logo/disney logo.svg'),
    special: "superheroes",
    category: "Science Fiction | Action | Adventure | Fantasy"
  },
  {
    id : 54,
    title: "wakanda forever",
    profile: () => require('../superheroes/wakandaforeverprofile.webp'),
    cover:() => require('../superheroes/wakandaforevercover.webp'),
    Description : "Queen Ramonda, Shuri, M'Baku, Okaye, And dora Milaje fight to protect their nation from intrevening world powers after the death of beloved king D'challa.",
    releasedYear : 2022,
    duration : "2h 41m",
    season: null,
    languages : "5 Languages",
    dineyplusimage:() => require('../disney logo/disney logo.svg'),
    special: "superheroes",
    category: "Dark Humor | Superheroes | Action | Fantasy"
  }
  ];


  export default SuperHeroesDb