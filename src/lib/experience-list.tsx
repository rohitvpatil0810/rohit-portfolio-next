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
    description: [
      "Engineered the frontend architecture and UI of a dashboard with React, Tailwind CSS, ag-Grid, Highcharts, and UWR widgets; integrated SSO authentication via Microsoft Identity (MSAL).",
      "Developed Flask APIs with PostgreSQL for dashboard modules, including CRUD functionality, email alerts via smtplib, and integrated Alembic for version-controlled database migrations, enhancing developer experience and reducing post-deployment issues.",
      "Migrated data source from legacy ITIL system to MongoDB aggregation pipeline via API integration.",
      "Automated Month-End Reporting with Python scripts featuring error handling, retry logic, and email alerts; saved approximately 150 minutes/month.",
      "Eliminated 100 minutes/month of manual work by automating file transfers via Axway Secure Transport.",
      "Optimized GitLab CI/CD pipeline, reducing execution time from 13 to 2 minutes by improving build efficiency and dependency caching.",
    ],
    skills: [
      "React.js",
      "JavaScript",
      "Python",
      "Flask",
      "ag-Grid",
      "Axway SecureTransport",
      "GitLab CI/CD",
      "PostgreSQL",
      "Highchartss",
    ],
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
      "Created a subscription API server using Node.js, TypeScript, PostgreSQL, and Prisma; integrated Lago billing.",
      "Integrated Adyen for recurring payments; implemented webhooks for Lago event handling.",
      "Built collaborative chat plugin using Automerge CRDT; used MongoDB + Prisma for chat data persistence.",
      "Added image-sharing to chat via Cloudflare R2; extended plugin using DOM manipulation.",
      "Built contact/early-access form tool using Node.js, PostgreSQL, SendGrid, and TypeScript; demonstrated end-to-end ownership.",
      "Streamlined Docker builds with GitHub Actions; accelerated deployments and reduced errors.",
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
