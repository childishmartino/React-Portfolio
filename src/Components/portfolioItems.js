import cafe from '../assets/img/cafe.png';
import store from '../assets/img/store.png';
import book from '../assets/img/book.png';
import workout from '../assets/img/workout.png';
import bracket from '../assets/img/bracket.png';
import notes from '../assets/img/notetaker.png';


const portfolioItems = [
    {
        id: 1,
        name: "Baileys Cafe",
        img: cafe,
        desc: "Worked with a group to build an e-commerce platform to serve a hypothetical restaurant. The platform uses React, Redux, and Stripe.",
        github: "https://github.com/childishmartino/Baileys-Cafe",
        link: "https://thebaileycafe.herokuapp.com/",
    },
    {
        id: 2,
        name: "Redux Store",
        img: store,
        desc: "Refactored an e-commerce platform so that it uses Redux.",
        github: "https://github.com/childishmartino/Redux-Store",
        link: "https://obscure-scrubland-45843.herokuapp.com/",
    },
    {
        id: 3,
        name: "MERN: Book Search Engine",
        img: book,
        desc: "Took starter code with a fully functioning Google Books API search engine built with a RESTful API and refactored to use GraphQL API built with Apollo Server.",
        github: "https://github.com/childishmartino/Book-Search-Engine",
        link: "https://pacific-river-46975.herokuapp.com/",
    },
    {
        id: 4,
        name: "Work Out Tracker",
        img: workout,
        desc: "I utilized front end starter code and created a Mongo database with Mongoose schema and routes using Express, to allow users to view, create and track daily workouts.",
        github: "https://github.com/childishmartino/Work-Out-Tracker",
        link: "https://dry-sierra-05814.herokuapp.com/",
    },
    {
        id: 5,
        name: "Bracket Guys",
        img: bracket,
        desc: "I worked with a group to create a webste that allows users to create a NHL playoff bracket. The websites uses Sequelize, Express, Javascript, MySQL and Handlebars",
        github: "https://github.com/childishmartino/NHL-Playoff-Bracket",
        link: "https://vast-falls-89463.herokuapp.com/",
    },
    {
        id: 6,
        name: "Note Taker Express",
        img: notes,
        desc: "I modified starter code to create an application that can be used to write, save and delete notes. The application retrieves saves and dletes note data from a JSON file.",
        github: "https://github.com/childishmartino/Note-Taker-Express-js",
        link: "https://calm-sierra-21064.herokuapp.com/",
    }
]

export default portfolioItems;