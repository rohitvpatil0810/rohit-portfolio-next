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
    title: "Software Engineer",
    company: "UBS",
    companyLink: "https://ubs.com/",
    experienceLetterLink: null,
    date: "Aug 2024 - Present",
    location: "Pune, India",
    description: [
      "Built Spring Boot REST APIs and a React-based admin portal for managing Life Insurance company and product setup, removing recurring Liquibase data migrations required for operational updates.",
      "Integrated enterprise document classification and protection workflows within report pipelines using OAuth token exchange, mTLS authentication, and internal data sensitivity APIs to satisfy firm-wide regulatory and compliance requirements.",
      "Engineered the frontend architecture and UI of a dashboard with React, Tailwind CSS, ag-Grid, Highcharts, and UWR widgets; integrated SSO authentication via Microsoft Identity (MSAL).",
      "Developed Flask APIs with PostgreSQL, CRUD workflows, email alerts, and Alembic-based database migrations for dashboard modules.",
      "Migrated legacy ITIL data sources to MongoDB aggregation pipelines through API integrations.",
      "Optimized GitLab CI/CD pipelines, reducing execution time from 13 to 2 minutes through build optimization and dependency caching.",
      "Built a scheduled FX rates synchronization workflow using Spring Boot Batch, Azure Functions, and internal SOAP-based MAP services to automate FX rate ingestion and persistence for configured currency pairs.",
      "Automated Month-End Reporting with Python scripts featuring retry handling, error management, and email alerts; reduced manual operational effort by approximately 150 minutes per month.",
      "Automated file transfer workflows through Axway Secure Transport, eliminating approximately 100 minutes of recurring manual effort monthly.",
    ],
    skills: [
      "Java",
      "Spring Boot",
      "React.js",
      "TypeScript",
      "JavaScript",
      "Azure Functions",
      "Python (Programming Language)",
      "Flask",
      "ag-Grid",
      "Axway SecureTransport",
      "GitLab CI/CD",
      "PostgreSQL",
      "Tailwind CSS",
      "Highcharts",
      "OAuth",
      "Liquibase",
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
