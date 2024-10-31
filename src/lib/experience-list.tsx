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
    title: "Graduate Trainee - SWE",
    company: "UBS",
    companyLink: "https://ubs.com/",
    experienceLetterLink: null,
    date: "Aug 2024 - Present",
    location: "Pune, India",
    description: [],
    skills: [],
  },
  {
    title: "Software Engineer Intern",
    company: "Quoppo LLC",
    companyLink: "https://quoppo.com/",
    experienceLetterLink:
      "https://drive.google.com/file/d/17T6ux13VtAcxSY5So2lJGgEvnBFFtN3-/view?usp=drive_link",
    date: "Jan 2024 - July 2024",
    location: "Pune, India",
    description: [
      "Developed an API server for a subscription management portal using Node.js, Express.js, Prisma, PostgreSQL, and TypeScript. Integrated the Lago Open Source Billing System for precise usage-based and metered billing.",
      "Integrated the payment service provider Adyen to handle recurring payments and implemented webhooks to process event messages from the Lago billing system efficiently.",
      "Engineered a collaborative browsing plugin with chatting functionality using Automerge CRDT, Node.js, and Express.js, to improve real-time communication and collaboration. Utilized Prisma with MongoDB to efficiently save chat data, enhancing data management and retrieval capabilities.",
      "Developed an image-sharing feature in chats using Cloudflare R2 Object Storage to expand user interaction and functionality. Created a plugin injection script using JavaScript DOM manipulation to enhance the plugin's capabilities and user experience.",
      "Designed and developed an internal tool for contact forms and early access forms, using Node.js, Express.js, TypeScript, SendGrid for email notifications, and PostgreSQL for data storage, demonstrating versatility in full-stack development and effective database management.",
      "Implemented GitHub Actions workflows to optimize Docker image building and publishing, thereby improving deployment efficiency and consistency.",
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
      "Cloudflare R2 Object Storage",
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
