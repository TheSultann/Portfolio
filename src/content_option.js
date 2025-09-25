import filmzone from "./assets/images/filmzone.jpg"
import SpeakChek from "./assets/images/SpeakChek.jpg"



const logotext = "TheSultann";
const meta = {
    title: "TheSultann",
    description: "I’m Xayrullo data scientist _ Front-End devloper,currently working in Urgench",
};

const introdata = {
    title: "I’m Sultan ",
    animated: {
        second: "Backend Enthusiast",
        third: "Full-Stack Creator",
    },
    description: "Otanazarov Sultan is a back-end developer who creates user-friendly and aesthetic interfaces. Attentive to details, responsible, purposeful and strives for an ideal result.",
    your_img_url: "https://cimg.co/w/articles-attachments/0/611/e04b918532.jpeg",
};

const dataabout = {
    title: "Briefly about my self",
    aboutme: "As a Computer Engineering student with hands-on experience in backend development, I focus on creating high-impact solutions using Node.js, Express.js, and MongoDB. My project portfolio includes an AI-integrated Telegram bot for English learners and a full-stack educational platform with role-based user management. My participation in hackathons and tech competitions has honed my ability to innovate under pressure. I am seeking opportunities to apply my skills to real-world challenges and contribute to a forward-thinking development team.",
};
const worktimeline = [{
    jobtitle: "AI Data Annotator",
    where: "BigBro.AI",
    date: "June 2025 - Present",
    link: "https://bigbro.ai/",
    description: "Responsible for data annotation and preparing datasets for AI/ML models. This role sharpened my attention to detail and provided a practical understanding of the data lifecycle in AI projects.",
},
{
    jobtitle: "Freelance Backend Developer",
    where: "Personal & University Projects",
    date: "2023 - Present",
    description: "Developed and maintained several projects, including AI-powered Telegram bots and educational platforms using the MERN stack. Focused on creating RESTful APIs, managing databases, and implementing server-side logic.",
},
];
const skills = [{
    name: "Html",
    value: 76,
},
{
    name: "Css",
    value: 75,
},

{
    name: "Javascript",
    value: 85,
},
{
    name: "NodeJS",
    value: 80,
},
{
    name: "ExpressJs",
    value: 80,
},
{
    name: "MongoDB",
    value: 75,
},
{
    name: "SQL",
    value: 40,
},
];

const services = [{
    title: "Backend & API Development",
    description: "Developing robust and scalable server-side applications. Specializing in creating secure RESTful APIs, managing databases (MongoDB, PostgreSQL), and implementing complex business logic to power web and mobile apps.",
},
{
    title: "AI & Bot Integration",
    description: "Integrating intelligent solutions into applications. From developing AI-powered Telegram bots using Google Gemini to automating tasks, I can enhance your project with smart, interactive features.",
},
{
    title: "Full-Stack System Design",
    description: "Designing and consulting on full-stack application architecture. I help bridge the gap between front-end and back-end, ensuring seamless data flow and a well-structured, maintainable codebase for MERN stack projects.",
},
];

const dataportfolio = [{
    img: filmzone,
    title: "FilmZone",
    tag1: "Node.js",
    tag2: "Express.js",
    description: "Built the backend for the FilmZone project, focusing on user authentication (registration/login) and watchlist functionality.",
    link: "https://filmzonee.netlify.app/",
},
{
    img: SpeakChek,
    title: "English Grammar & IELTS Speaking Bot",
    tag1: "Node.js",
    tag2: "Telegram bot",
    description: "A Telegram bot designed to improve English grammar and practice for the IELTS Speaking test, utilizing the Google Gemini and Speech-to-Text APIs.",
    link: "https://t.me/Speak_CheckBot",
},


];

const contactConfig = {
    YOUR_EMAIL: "otanazarovsultanbek@gmail.com",
    YOUR_FONE: "+998(93)-743-27-21",
    description: "Ready for cooperation and new projects! Contact me in a convenient way:",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_xjp3zhc",
    YOUR_TEMPLATE_ID: "template_mq5ytaf",
    YOUR_USER_ID: "8YHB7Q-aZIrwXZNM0"

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