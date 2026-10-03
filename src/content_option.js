import filmzone from "./assets/images/filmzone.jpg"
import wordping from "./assets/images/Word_Ping.jpg"
import heroImage from "./assets/images/hero-generated.webp"

const logotext = "TheSultann";

const meta = {
    title: "TheSultann",
    description: "I'm Sultan, Full-Stack & Backend Developer",
};

const introdata = {
    title: "I'm Sultan ",
    animated: {
        first: "Backend Developer",
        second: "Backend Enthusiast",
        third: "Full-Stack Creator",
    },
    description: "Otanazarov Sultan is a developer who creates user-friendly, high-performance backends and aesthetic interfaces. Attentive to details, responsible, purposeful and strives for an ideal result.",
    your_img_url: heroImage,
};

const dataabout = {
    title: "Briefly about my self",
    aboutme: "As a Computer Engineering student with hands-on experience in backend & frontend development, I focus on creating high-impact solutions using Node.js, Express.js, MongoDB, React, and TypeScript. My project portfolio includes an enterprise university management platform (MBOS), an AI-integrated Telegram bot for English learners, and full-stack educational platforms. My participation in hackathons and tech competitions has honed my ability to innovate under pressure. I am seeking opportunities to apply my skills to real-world challenges and contribute to a forward-thinking development team.",
};

const worktimeline = [{
    jobtitle: "Frontend Developer Intern",
    where: "MBOS",
    date: "March 2026 - Present",
    link: "https://mbos.uz/",
    description: "Developing responsive web interfaces, building reusable frontend components, fixing UI bugs, improving user experience, and working with the team on clean, maintainable frontend code.",
},
{
    jobtitle: "AI Data Annotator",
    where: "BigBro.AI",
    date: "June 2025 - January 2026",
    link: "https://bigbro.ai/",
    description: "Annotated and prepared datasets for AI/ML models, improving attention to detail and gaining practical experience with the data preparation lifecycle for AI products.",
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
    value: 70,
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
    status: "partial",
},
{
    img: wordping,
    title: "WordPing",
    tag1: "TypeScript",
    tag2: "PostgreSQL",
    description: "Telegram SRS learning bot with spaced repetition, contextual AI examples, quizzes, reminders, Mini App stats, background workers, and backup flow.",
    link: "https://t.me/WordPing_bot",
    status: "active",
},
];

const githubProjects = [{
    title: "M-University",
    subtitle: "Commercial University ERP & Access Control",
    company: "MBOS",
    companyLink: "https://mbos.uz/",
    tags: ["React 19", "TypeScript", "Ant Design", "TanStack Query", "Zustand"],
    description: "Коммерческий проект MBOS: Enterprise ERP-система для университетов. Учет посещаемости через FaceID/турникеты (СКУД), интерактивное расписание, мониторинг и аналитика.",
    status: "private",
},
{
    title: "SpeakCheck",
    subtitle: "Grammar & IELTS practice bot",
    tags: ["Node.js", "Telegram Bot", "Gemini"],
    description: "Telegram bot for grammar correction and IELTS Speaking practice with AI feedback and speech-to-text support.",
    telegram: "https://t.me/Speak_CheckBot",
    repo: "https://github.com/TheSultann/SpeakCheck",
    status: "inactive",
},
{
    title: "HEMIS-Notify",
    subtitle: "Schedule notification bot",
    tags: ["Node.js", "Express.js", "MongoDB"],
    description: "Telegram notification system for HEMIS schedules with account linking, reminders, group support, and protected API endpoints.",
    repo: "https://github.com/TheSultann/HEMIS-Notify",
    telegram: "https://t.me/HEMISnotify_bot",
    status: "inactive",
},
{
    title: "Golden Study",
    subtitle: "Education management platform",
    tags: ["React", "Node.js", "Redis"],
    description: "Full-stack education platform with role-based access, lessons, grading, finance modules, dashboards, caching, and background jobs.",
    repo: "https://github.com/TheSultann/Golden_Study",
    demo: "https://golden-study-olive.vercel.app",
    status: "partial",
},
{
    title: "PieStat",
    subtitle: "AI sales assistant",
    tags: ["JavaScript", "Telegram Bot", "Gemini"],
    description: "AI-assisted sales and inventory bot for small businesses with product tracking, analytics, and Gemini-powered forecasting.",
    repo: "https://github.com/TheSultann/PieTrack-A",
    status: "inactive",
},
];

const contactConfig = {
    YOUR_EMAIL: "otanazarovsultanbek@gmail.com",
    YOUR_FONE: "+998(93)-743-27-21",
    description: "Ready for cooperation and new projects! Contact me in a convenient way:",
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
    githubProjects,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
