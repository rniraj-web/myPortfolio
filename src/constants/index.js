import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/portfolio.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import redevelop from "../assets/projects/redevelop_home1.png"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a software developer that likes developing ideas into things that people want to use. Most days, I create clean, accessible UIs with React and TypeScript, but I am also willing to work with Node.js, Express, and REST APIs when the job requires it. I am really interested in performance and media delivery as being fast feels good and I thrive in Agile teams in which I ship, learn, and iterate. A few tools that I use on a daily basis include Git Docker and Jira. My current focus is on enhancing my full-stack abilities through Next.js development.

Clear states, considerate accessibility, and the little things that make an experience seem "right." At Happy AI (AI Aware), my focus is on simplifying AI-powered workflows into trustworthy interfaces. I believe in verifying assumptions early and maintaining a tight feedback loop.

Outside of coding, I am a national-level athlete and have represented India at the World and Asian Pencak Silat Championships.  This journey taught me discipline, self-control under pressure, and how to be present for a team qualities I bring to each project. I enjoy collaborative problem-solving and gaining new skills with each sprint.`;

export const EXPERIENCES = [
  {
    year: "July 2025 - Present",
    role: "Frontend Developer",
    company: "Happy AI Ltd (trading as AI Aware)",
    description: `I work on the frontend of an AI-generated content detection platform, building fast and accessible interfaces in Next.js, React and TypeScript. I’ve introduced a modular design system and route-based code-splitting so pages feel snappy even with heavy document analysis. I designed the end-to-end document review experience – from upload, async processing and polling, through to interactive result views with confidence highlights, summaries and PDF export – to make complex AI output easy to understand. I’m also responsible for secure, frictionless access, using JWT-based authentication, role-based routing and safe token handling. To keep releases stable, I cover core components with Jest/React Testing Library and ship through a Docker-based setup that keeps builds repeatable and downtime minimal.`,
    technologies: ["Next.js", "React", "TypeScript", "REST APIs", "JWT Auth", "Jest", "React Testing Library", "Docker", "Git", "CI/CD"],
  },
  {
    year: "2021 - 2023",
    role: "Software Developer",
    company: "Merkle Inc.",
    description: `At Merkle I built multilingual, responsive web surveys and reusable templates for major market-research clients. Using React and vanilla JavaScript, I implemented complex survey flows (including MaxDiff) so the same components could be reused across dozens of studies instead of starting from scratch each time. Alongside development, I owned a big part of data quality, running SQL checks and validations on large datasets in IBM SPSS to make sure reported results matched survey logic and quotas. I regularly collaborated with QA and data-processing teams to roll out template updates and fixes safely into production, monitoring live traffic and resolving issues quickly to protect client trust.`,
    technologies: ["React", "Javascript", "MySQL", "Confirmit", "HTML", "CSS"],
  },
  {
    year: "2020 - 2021",
    role: "Junior Backend Developer",
    company: "Salt Tech Software Services ",
    description: `I started my career working on the backend for a real-time video communication platform. I built and maintained Node.js/Express APIs for creating sessions, managing rooms and handling users, giving the React frontend a clean contract to work with. I implemented authentication and authorisation using OAuth and JWT tokens, ensuring only permitted users could start or join calls. On top of the core REST API I added real-time messaging with Socket.IO, handling joins, broadcasts and live updates so calls felt responsive without page reloads. I relied heavily on Postman and systematic debugging to test edge cases and keep the API stable for the frontend team.`,
    technologies: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "OAuth", "JWT", "Postman", "Git"],
  },
];

export const PROJECTS = [
  {
    title: "🏗️ReDevelop - A Construction Marketplace",
    image: redevelop,
    description:
      "ReDevelop is built using the MERN stack (MongoDB, Express.js, React, Node.js) with an integrated payment method and login system. It allows users to buy and sell recycled constructing materials that would otherwise go to waste during reconstruction or demolition. The platform includes user login for secure access, product sorting, filtering by price and category, secure transfers, and a seller dashboard for inventory management. The goal of making this app was to support sustainability by lowering construction waste and offering an efficient marketplace for recycled materials.",
    technologies: ["Javascript", "Node.js", "React.js", "Redux", "MongoDB", "HTML", "CSS", "Figma", "Render"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "Developed my portfolio website using React.js with Vite for optimised performance and a seamless development experience. Tailwind CSS for styling, ensuring a modern, responsive design. To enhance user experience, I implemented Framer Motion for smooth animations and transitions, and it is deployed using Render.",
    technologies: ["HTML", "Javascript", "React", "Motion", "Tailwind CSS", "Vite"],
  }
];

export const CONTACT = {
  // address: "142 Colum Road Cardiff",
  phoneNo: "+44 7767929624 ",
  email: "rwtniraj@gmail.com",
};
