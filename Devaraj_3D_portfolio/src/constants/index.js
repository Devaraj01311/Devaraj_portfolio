
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  analytics,
  database,
  CXimage,
  image,
  AIChat,
  Koharent,
  IoT,
    c,
  java,
  python,
  springboot,
  mysql,
  aws,
  eclipse,
  cims,
  vvfgc,
  sslc,
  puc,
  careerguidex,
  foodie,
  jobportal,
  nammaride,
  AIchat,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer (React)",
    icon: mobile,
  },
  {
    title: "Backend Developer (Node & Spring Boot)",
    icon: backend,
  },
  {
    title: "Cloud & DevOps Enthusiast",
    icon: creator,
  },
  {
    title: "Data Analytics Beginner",
    icon: analytics,
  },
   { title: "Database & SQL Developer",
     icon: database,
     },
];


const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Eclipse",
    icon: eclipse,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C++",
    icon: c,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "AWS",
    icon: aws,
  }
];

 const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Koharent Global Technologies Pvt Ltd, Bengaluru",
    icon: Koharent,
    iconBg: "#383E56",
    date: "July 2025 - Sep 2025",
    points: [
      "Worked on full-stack web application development using MongoDB, Express.js, React.js, and Node.js.",
      "Built responsive user interfaces and integrated RESTful APIs.",
      "Implemented authentication and authorization using JWT.",
      "Collaborated with team members using Git and Agile methodology.",
    ],
  },
  {
    title: "CareerGuideX",
    company_name: "Personal Project",
    icon: CXimage,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Developed an analytical career guidance platform using the MERN stack.",
      "Built a personalized recommendation engine to suggest job roles based on user skills.",
      "Designed a modern, fully responsive UI with dark and light mode support using Tailwind CSS.",
      "Implemented backend logic for career suggestions based on user-inputted skill sets and career goals.",
    ],
  },
  {
    title: "NammaRide",
    company_name: "Academic Project",
    icon: image,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Built a real-time ride-booking platform for users and captains.",
      "Implemented live tracking and ride updates using Socket.io.",
      "Added OTP-based ride confirmation system.",
      "Used React.js, Node.js, Express.js, and MongoDB.",
    ],
  },
  {
    title: "AI Chat",
    company_name: "Personal Project",
    icon: AIChat,
    iconBg: "#E6DEDD",
    date: "2026",
    points: [
      "Developed an AI-powered chat application enabling real-time conversational responses.",
      "Built secure REST APIs using Spring Boot with JWT-based authentication.",
      "Implemented user registration, login, and protected endpoints.",
      "Designed a fully responsive chat UI with animations, auto-growing input, and multimedia message support.",
    ],
  },
  {
    title: "LIGHTHUB",
    company_name: "IoT Project",
    icon: IoT,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Developed an IoT-based smart lighting system using NodeMCU ESP8266.",
      "Enabled automatic light control based on LDR sensor input and real-time clock.",
      "Integrated Blynk app for remote monitoring and control.",
      "Displayed live device status on an I2C LCD display.",
    ],
  },
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Community Institute of Management Studies, Bengaluru",
    icon: cims,
    date: "Dec 2023 – Nov 2025",
    points: [
      "CGPA: 8.6",
    ],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "VidyaVahini First Grade College, Tumkur",
    icon: vvfgc,
    date: "Aug 2020 – Sep 2023",
    points: [
      "CGPA: 8.3",
    ],
  },
  {
    degree: "Pre-University Course (PUC)",
    institution: "Vivekananda PU College, Turuvekere",
    icon: puc,
    date: "2018 – 2020",
    points: [
      "Percentage: 89%",
    ],
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Shri Ghanamateshwar International Public School, Bijapur",
    icon: sslc,
    date: "2017 – 2018",
    points: [
    ],
  },
];

const projects = [
  {
    name: "CareerGuideX",
    description:
      "An analytical career guidance platform that provides personalized job role recommendations based on user skills, interests, and career goals using intelligent matching logic.",
    tags: [
      { name: "react.js", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "express.js", color: "blue-text-gradient" },
      { name: "tailwind css", color: "green-text-gradient" },
    ],
    image: careerguidex,
    source_code_link: "https://github.com/Devaraj01311/CareerGuideX",
    source_web_link: "https://careerguidex.onrender.com",
  },

  {
    name: "NammaRide",
    description:
      "A real-time ride-booking platform connecting users and captains with live ride tracking, OTP-based ride confirmation, and instant ride updates using socket communication.",
    tags: [
      { name: "react.js", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "express.js", color: "blue-text-gradient" },
      { name: "tailwind css", color: "green-text-gradient" },
      { name: "socket.io", color: "pink-text-gradient" },
    ],
    image: nammaride,
    source_code_link: "https://github.com/Devaraj01311/NammaRide__",
    source_web_link: "https://nammaride-1-2ii1.onrender.com",
  },

  {
    name: "AI Chat",
    description:
      "An AI-powered chat application delivering real-time conversational responses with secure authentication, multimedia messaging, and an animated responsive chat interface.",
    tags: [
      { name: "spring boot", color: "blue-text-gradient" },
      { name: "react.js", color: "green-text-gradient" },
      { name: "java", color: "pink-text-gradient" },
      { name: "rest api", color: "blue-text-gradient" },
    ],
    image: AIchat,
    source_code_link: "https://github.com/Devaraj01311/AIChat",
    source_web_link: "https://aichat-frontend-xa3k.onrender.com",
  },

  {
    name: "Foodie",
    description:
      "A full-stack food ordering web application where users can browse menus, add items to cart, and place orders with secure authentication and responsive UI design.",
    tags: [
      { name: "react.js", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "express.js", color: "blue-text-gradient" },
      { name: "tailwind css", color: "green-text-gradient" },
    ],
    image: foodie,
    source_code_link: "https://github.com/Devaraj01311/Foodie",
    source_web_link: "https://foodie-1frontend.onrender.com",
  },

  {
    name: "JobPortalAI",
    description:
      "An AI-powered job portal that allows users to upload resumes, extracts skills automatically, and matches them with relevant job opportunities with auto-apply functionality.",
    tags: [
      { name: "react.js", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "express.js", color: "blue-text-gradient" },
      { name: "tailwind css", color: "green-text-gradient" },
    ],
    image: jobportal,
    source_code_link: "https://github.com/Devaraj01311/JobPortalAI",
    source_web_link: "https://jobportalai-1-gkf6.onrender.com",
  },
];




export { services, technologies, experiences, projects, education, };
