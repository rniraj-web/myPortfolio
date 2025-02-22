import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import redevelop from "../assets/projects/redevelop_home.png"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Node.js, Express.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Red Hat Academy Student Ambassador",
    company: "Cardiff University",
    description: `Promoted open-source learning and got more students to use Red Hat's free seminars and cloud labs. Worked with instructors and Red Hat team members to make sure that students had simple access to learning resources. Public speaking and presentation skills were important for running lessons and convincing students to engage.`,
    technologies: ["Communication & Networking", "Leadership & Initiative", "Public Speaking & Presentation Skills", "Team Work"],
  },
  {
    year: "2021 - 2023",
    role: "Analyst",
    company: "Merkle Inc.",
    description: `Programmed questionnaire to responsive web-survey using market research tools. Developed client-specific custom requirements and functionality, such as the drag-and-drop of products and selecting the least and most important options. Based on that, survey questions were presented to the user. Performed data checks using SQL queries on survey data stored in IBM SPSS Database. Customised and updated survey templates using Javascript and CSS for Confirmit Forsta.`,
    technologies: ["HTML", "CSS", "Javascript", "MySQL", "Python"],
  },
];

export const PROJECTS = [
  {
    title: "🏗️ReDevelop - A Construction Marketplace",
    image: redevelop,
    description:
      "ReDevelop was built using the MERN stack (MongoDB, Express.js, React, Node.js) with an integrated payment method and login system. It allows users to buy and sell recycled constructing materials that would otherwise go to waste during reconstruction or demolition. The platform includes user login for secure access, product sorting, filtering by price and category, secure transfers, and a seller dashboard for inventory management. The goal of making this app was to support sustainability by lowering construction waste and offering an efficient marketplace for recycled materials.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "142 Colum Road Cardiff",
  phoneNo: "+44 7767929624 ",
  email: "rawatniraj0205@gmail.com",
};
