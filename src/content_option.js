import filmzone from "./assets/images/filmzone.jpg"
import call from "./assets/images/call.jpg"



const logotext = "TheSultann";
const meta = {
    title: "TheSultann",
    description: "I’m Xayrullo data scientist _ Front-End devloper,currently working in Urgench",
};

const introdata = {
    title: "I’m Sultan ",
    animated: {
        first: "I am lazy",
        second: "I love coding",
        third: "I develop Websites",
    },
    description: "Otanazarov Sultan is a back-end developer who creates user-friendly and aesthetic interfaces. Attentive to details, responsible, purposeful and strives for an ideal result.",
    your_img_url: "https://cimg.co/w/articles-attachments/0/611/e04b918532.jpeg",
};

const dataabout = {
    title: "Briefly about my self",
    aboutme: "I am an aspiring Backend Developer, actively working to gain experience in developing server-side solutions using JavaScript, Node.js, and Express.js. I am constantly learning and improving my skills in backend development. When faced with challenges or unfamiliar tasks, I am able to quickly find resources and solutions to solve them on the go.  My goal is to build reliable and scalable solutions, and I am ready to take on new challenges to grow professionally in this field.",
};
const worktimeline = [{
    jobtitle: "Front-End developer",
    where: "Ubtuit",
    date: "2024",
},
{
    jobtitle: "Front-End developer",
    where: "Amusoft",
    date: "2025",
},
// {
//     jobtitle: "Designer of week",
//     where: "ALquds",
//     date: "2019",
// },
];

const skills = [{
    name: "Html",
    value: 70,
},
{
    name: "Css",
    value: 55,
},
    
{
    name: "Javascript",
    value: 60,
},
{
    name: "NodeJS",
    value: 65,
},
{
    name: "ExpressJs",
    value: 65,
},
{
    name: "MongoDB",
    value: 45,
},
{
    name: "SQL",
    value: 35,
},
];

const services = [{
    title: "Web development ",
    description: "Creation of modern and user-friendly websites with thoughtful UX/UI   ",
},
{
    title: "Optimization and improvement",
    description: "Improved performance, redesign and introduction of new features.",
},
{
    title: "Mobile development(Test)",
    description: "Development of cross-platform applications at Expo.",
},
];

const dataportfolio = [{
    img: filmzone,
    title: "FilmZone",
    tag1: "React",
    tag2: "Javascript",
    description: "FilmZone is my own movie site where users can search for movies, view information about them, and add them to their watch list.",
    link: "https://filmzonee.netlify.app/",
},
{
    img: call,
    title: "Call Centre",
    tag1: "Html",
    tag2: "Laravel",
    description: "Welcome to the one-stop safe travel service center!.",
    link: "http://tourismservice.uz/",
},


];

const contactConfig = {
    YOUR_EMAIL: "otanazarovsultanbek@gmail.com",
    YOUR_FONE: "+998(93)-743-27-21",
    description: "Ready for cooperation and new projects! Contact me in a convenient way:",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    // YOUR_SERVICE_ID: "service_20l9zhp",
    // YOUR_TEMPLATE_ID: "template_lrnir4h",
    // YOUR_USER_ID: "Z7fKWBOc1u_NAgipt",
};

const socialprofils = {
    github: "https://github.com/TheSultann",
    instagram: "https://www.instagram.com/_s7ltan_/",
    linkedin: "https://www.linkedin.com/in/sultanbek-otanazarov-142931292/",
    telegram: "https://t.me/S7L5An",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};