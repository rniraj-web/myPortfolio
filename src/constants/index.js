import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/portfolio.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import redevelop from "../assets/projects/redevelop_home1.png"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated software engineer who loves designing effective and user-friendly web applications. I have experience as an Analyst (Software Developer) at Merkle, where I focused on frontend development. I also obtained hands-on knowledge with JavaScript, React, Node.js, MongoDB, and MySQL while working on several projects. Motivated to constant learning, as I am now learning Next.js to better my full-stack development skills. I thrive in collaborative workplaces and enjoy solving complex problems. In addition to my programming skills, I have represented India at both the World Pencak Silat Championship and the Asian Championship.`;

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
  address: "142 Colum Road Cardiff",
  phoneNo: "+44 7767929624 ",
  email: "rawatniraj0205@gmail.com",
};
