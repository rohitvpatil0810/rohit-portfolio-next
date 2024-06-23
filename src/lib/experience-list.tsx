export type Experience = {
  title: string;
  company: string;
  companyLink: string;
  experienceLetterLink: string | null;
  date: string;
  location: string;
  description: string[];
  skills: string[];
};

const experienceList: Experience[] = [
  {
    title: "Software Engineer Intern",
    company: "Quoppo LLC",
    companyLink: "https://quoppo.com/",
    experienceLetterLink: null,
    date: "Jan 2024 - Present",
    location: "Pune, India",
    description: [
      "Developed APIs using TypeScript and Express.js for various SaaS Products, showcasing proficiency in backend development.",
      "Engineered a collaborative browsing plugin with chatting functionality using Automerge CRDT, Node.js, and Express.js, demonstrating expertise in both frontend and backend technologies. Additionally, developed a plugin injection script using JavaScript DOM manipulation to enhance its functionality.",
      "Designed and developed an internal tool for contact forms and early access forms, utilizing Node.js, Express.js, TypeScript, SendGrid for email notifications, and PostgreSQL for data storage, demonstrating versatility in full-stack development and proficiency in database management.",
      "Implemented GitHub Actions workflows to optimize Docker image building and publishing, thereby improving deployment efficiency.",
    ],
    skills: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "Automerge CRDT",
      "JavaScript",
      "MongoDB",
    ],
  },
  {
    title: "Summer Intern",
    company: "UBS",
    companyLink: "https://ubs.com/",
    experienceLetterLink:
      "https://drive.google.com/file/d/1h30dHp-C82Mgg_vh0HSKL7s6VgtvRYHN/view",
    date: "Jun 2023 - July 2023",
    location: "Pune, India",
    description: [
      "Assisted in automating the package building and deployment process using GitLab CI/CD.",
      "Streamlined the workflow, resulting in improved efficiency and consistency.",
    ],
    skills: ["GitLab CI/CD"],
  },
  {
    title: "Web Development Intern",
    company: "Virtuebyte Pvt. Ltd.",
    companyLink: "https://virtuebyte.in/",
    experienceLetterLink:
      "https://drive.google.com/file/d/1MReCyWzQ8MeAPsx426Iz_G2XRZkyghtO/view",
    date: "Sept 2022 - Feb 2023",
    location: "Pune, India",
    description: [
      "Developed a RESTful API for a Task Manager mobile application using Node.js, Express.js, and MySQL, showcasing full-stack proficiency.",
      "Integrated advanced features such as Multer for file uploads and Nodemailer for email notifications, highlighting expertise in utilizing external libraries to enhance application capabilities.",
      "Deployed the API to an Ubuntu 22.04 Digital Ocean server, ensuring reliable performance for client usage, and demonstrating proficiency in server administration and deployment procedures.",
    ],
    skills: ["Node.js", "Express.js", "MySQL", "JavaScript", "MongoDB"],
  },
];
export default experienceList;
