import weatherapp from "../assets/weatherapp.png";
import hoobank from "../assets/hoobank.png";
import todoapp from "../assets/todoapp.png";


export const navLinks =[
    {
        id:'about',
        title: 'About'
    },
    {
        id:'skills',
        title: 'Skills'
    },
    {
        id:'projects',
        title: 'Projects'
    }
]


export const skills =[
    {
        id:1,
        title:"Web Development"
    },
    {
        id:2,
        title:"Flutter Development"
    },
    {
        id:3,
        title:"UI/UX Design"
    },
    {
        id:4,
        title:"Web Design"
    },

]


export const project=[
    {
        title: "Weather App",
        imgUrl: weatherapp,
        description: " It supports searching locations by city name.Creat with Open Weather API and axios library ",
        livePath : "https://tufanmerve-weather-app.netlify.app/",
        repoPath:"https://github.com/tufanmerve/weather-app"
    },
    {
        title: "HooBank",
        imgUrl: hoobank,
        description: "Modern UI/UX website using React.js & Tailwind CSS",
        livePath : "https://landing-page-tufanmerve.netlify.app/",
        repoPath:"https://github.com/tufanmerve/vite-project"
    },
    {
        title: "Todo App",
        imgUrl: todoapp,
        description: "Simple todo list web app to save and manage todos.",
        livePath : "https://tufanmerve-todoapp.netlify.app/",
        repoPath:"https://github.com/tufanmerve/todo-app"
    },
    
]