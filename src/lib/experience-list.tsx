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
      "Integrated firmwide document classification and protection into report workflows using OAuth token exchange, mTLS, and internal data-sensitivity APIs. Re-architected synchronous processing into an asynchronous workflow after tracing intermittent download failures to a 55-second API Gateway timeout, adding request tracking, status polling, and deferred downloads.",
      "Designed an event-driven file processing pipeline for 20+ operation types using Azure Blob Storage, Event Grid, Event Hub, Azure Functions, and Spring Batch.",
      "Introduced an annotation-driven handler model with shared record mapping, entity resolution, and configurable missing-data policies, enabling independent delivery of new operations. Cached static reference data to reduce validation database lookups from N x M to M per file.",
      "Established a reusable FX-rate synchronization service using Spring Batch, Azure Functions, and internal SOAP-based MAP services, feeding reporting data and enabling user-selected currency views in AUM reports.",
      "Migrated the Production Stability Dashboard from periodic CSV-based ITIL ingestion to ServiceNow Atlas Cache API ingestion using REST-based MongoDB aggregation queries. Implemented 5-minute delta loading with application-side enrichment and clustering from inventory and IT service catalog data.",
      "Introduced Alembic-based database migrations in a Flask/PostgreSQL application, replacing manually managed schema changes with version-controlled migrations and reducing deployment issues caused by schema conflicts.",
      "Automated Month-End Reporting and Axway Secure Transport workflows, reducing recurring manual effort by 150 and 100 minutes per month, respectively.",
      "Optimized GitLab CI/CD pipelines through build optimization and dependency caching, reducing execution time from 13 minutes to 2 minutes.",
      "Resolved EVA Vault HTTP 429 errors after VM reboots and patching using file locking, encrypted caching, and retry/backoff handling.",
    ],
    skills: [
      "Java",
      "Spring Boot",
      "Spring Batch",
      "Azure Functions",
      "Azure Blob Storage",
      "Azure Event Grid",
      "Azure Event Hubs",
      "Python (Programming Language)",
      "Flask",
      "Axway SecureTransport",
      "GitLab CI/CD",
      "PostgreSQL",
      "OAuth",
      "mTLS",
      "MongoDB",
      "Alembic",
      "React.js",
      "TypeScript",
      "JavaScript",
      "ag-Grid",
      "Tailwind CSS",
      "Highcharts",
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
