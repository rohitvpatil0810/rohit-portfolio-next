export interface Project {
  cover_image?: string;
  name: string;
  description: string;
  live_preview?: string;
  github_link: string;
  technologies: string[];
}

export const projectsList: Project[] = [
  {
    cover_image: "/projects-cover/compress-sync.png",
    name: "CompressSync",
    description:
      "CompressSync is an asynchronous image processing system that extracts image data from CSV files, compresses images by 50%, and stores the processed results. It features MongoDB integration, asynchronous queue processing with BullMQ, and supports API-based status tracking and webhook integration for automation.",
    live_preview: "https://compress-sync.onrender.com/",
    github_link: "https://github.com/rohitvpatil0810/compress-sync",
    technologies: [
      "Node.Js",
      "Express.Js",
      "MongoDB",
      "Prisma",
      "Redis",
      "BullMQ",
      "Cloudflare R2 Object Storage",
      "csv-parser",
      "Zod",
      "Winston",
      "Docker",
      "GitHub Actions",
      "Render",
    ],
  },
  {
    cover_image: "/projects-cover/log-ingestor-and-query-interface.png",
    name: "Log Ingestor and Query Interface",
    description:
      "Log Ingestor and Query Interface is a powerful tool designed for efficient log data management. It allows seamless log ingestion over HTTP and provides a user-friendly query interface with full-text search and various field filters.",
    github_link:
      "https://github.com/rohitvpatil0810/log-ingestor-and-query-interface",
    technologies: [
      "React.Js",
      "Tailwind CSS",
      "Node.Js",
      "Express.Js",
      "MongoDB",
      "Kafka",
      "Redis",
    ],
  },
  {
    cover_image: "/projects-cover/phrms.png",
    name: "Public Health Record Management System",
    description:
      "A web application to manage public health records. It allows users to view their health records, and view their prescriptions. It also allows doctors to prescribe medicines.",
    live_preview:
      "https://public-health-record-management-system.onrender.com/",
    github_link:
      "https://github.com/PICT-PBL-6-2021-22/public_health_record_management_system",
    technologies: [
      "React.Js",
      "Tailwind CSS",
      "Node.Js",
      "Express.Js",
      "MongoDB",
    ],
  },
  {
    cover_image: "/projects-cover/expense-tracker.png",
    name: "Expense Tracker",
    description:
      "Expense Tracker streamlines expense management with a Node.js and Express.js backend, MongoDB for data storage, and React.js for frontend interaction. Tailwind CSS ensures a sleek design, while Chart.js facilitates clear expense visualization for effortless tracking.",
    live_preview: "https://expense-tracker-bugslicers.onrender.com/",
    github_link: "https://github.com/Bug-Slicers/expensetracker",
    technologies: [
      "React.Js",
      "Tailwind CSS",
      "Node.Js",
      "Express.Js",
      "MongoDB",
      "Chart.Js",
    ],
  },
  {
    cover_image: "/projects-cover/task-manager-ts.png",
    name: "Task Manager",
    description:
      "Task Manager is a versatile task management app designed for efficient workflow management. It offers Google authentication, email/password sign-in, and a smooth drag-and-drop interface, making it easy to organize and prioritize tasks. The app's responsive design ensures a seamless experience across devices.",
    live_preview: "https://task-manager-ts.onrender.com/",
    github_link: "https://github.com/rohitvpatil0810/task-manager-ts",
    technologies: [
      "Typescript",
      "Vite",
      "React.Js",
      "Shadcn UI",
      "Pragmatic Drag and Drop",
      "Node.Js",
      "Express.Js",
      "MongoDB",
      "Prisma",
      "Docker",
      "Github Actions",
    ],
  },
  {
    cover_image: "/projects-cover/notes-pRO.png",
    name: "Notes pRO",
    description:
      "Notes pRO is the note-taking app. The feature of the app is that Notes are saved on Cloud. So, you can access your notes from anywhere. You only need a Account on the Notes pRO. And you can create your notes and access them on the go.",
    live_preview: "https://notes-pro.onrender.com/",
    github_link: "https://github.com/rohitvpatil0810/notes-pRO",
    technologies: [
      "React.Js",
      "Tailwind CSS",
      "Node.Js",
      "Express.Js",
      "MongoDB",
    ],
  },
  {
    cover_image: "/projects-cover/rohit-portfolio-mail-server.png",
    name: "Rohit Portfolio Email Server",
    description:
      "This project is a Node.js and Express.js server designed to handle email notifications for Rohit's portfolio website. It includes features such as sending email notifications and ensuring secure communication through API key protection. The server leverages Nodemailer for email handling and uses Handlebars for templating, providing a robust and efficient solution for managing portfolio interactions.",
    github_link: "https://github.com/rohitvpatil0810/portfolio-mail-server",
    technologies: [
      "Node.Js",
      "Express.Js",
      "Nodemailer",
      "JavaScript",
      "Handlebars",
    ],
  },
  {
    cover_image: "/projects-cover/weather-app.png",
    name: "Weather App",
    description:
      "This weather web application built with Next.js and TailwindCSS. It provides real-time weather information for a specified location. The weather data is fetched from weatherAPI.com.",
    live_preview: "https://weather-app-ashy-two.vercel.app/",
    github_link: "https://github.com/rohitvpatil0810/weather-app",
    technologies: ["Next.Js", "Tailwind CSS", "JavaScript"],
  },
  {
    cover_image: "/projects-cover/meme-centre.png",
    name: "Meme Centre",
    description:
      "Meme Centre is an API-based web application built with Next.js and TailwindCSS. This app allows users to fetch and view memes from Reddit, providing a fun and engaging way to browse the latest memes.",
    live_preview: "https://meme-centre-by-annonymous-ninja.vercel.app/",
    github_link: "https://github.com/rohitvpatil0810/memeCentre",
    technologies: ["Next.Js", "Tailwind CSS", "JavaScript"],
  },
  {
    cover_image: "/projects-cover/news-ninja.png",
    name: "News Ninja",
    description:
      "News Ninja is a news app made using News API for practicing React.Js. For building the components, Bootstrap Components are used. News Ninja is built in React.js with React Router for various types of news like general, sports, business, technology, etc.",
    github_link: "https://github.com/rohitvpatil0810/newsNinja",
    technologies: ["React.Js", "Bootstrap"],
  },
  {
    cover_image: "/projects-cover/online-mcq-practice-platform.png",
    name: "Online MCQ Practice Platform",
    description:
      "Online MCQ Practice Platform is a Web App developed for practicing MCQs. HTML, CSS, and JavaScript are used to build the basic structure, styling, and logic of the Web App. The main feature of the Web App is its responsive design.",
    live_preview: "https://online-mcq-practice-platform.web.app/",
    github_link:
      "https://github.com/rohitvpatil0810/Online-MCQ-Practice-Platform",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    cover_image: "/projects-cover/text-transform.png",
    name: "Text Transform",
    description:
      "Text Transform is a simple React App for manipulating text. Components in Text Transform are made using Bootstrap Components. Text-Transform is used for estimating the number of characters and words, estimated reading time, removing extra space, etc.",
    live_preview: "https://text-transform-using-react.web.app/",
    github_link: "https://github.com/rohitvpatil0810/textTransform",
    technologies: ["React.Js", "Bootstrap", "JavaScript"],
  },
  {
    cover_image: "/projects-cover/ninjas-todo.png",
    name: "Ninjas To-Do",
    description:
      "Ninjas To-Do is a web app made using Flask. For building the components, Bootstrap Components are used. SQLalchemy is used for structuring the data of the web app.",
    live_preview: "https://ninjas-todo.onrender.com/",
    github_link: "https://github.com/rohitvpatil0810/ninjas-todo",
    technologies: ["Flask", "Python", "SQLalchemy", "Bootstrap"],
  },
];
