import { ProjectTypes } from "@/types";

const projects: ProjectTypes[] = [
  {
    name: "Portfolio",
    mainType: "typescript",
    previewLink: "https://v3portfolio-rho.vercel.app/",
    previewImg: "/projects/v3portfolio.png",
    category: ["Typescript", "NextJs", "JavaScript"],
    description: "My current portfolio website.",
  },
  {
    name: "Academic Research Assistant",
    mainType: "Python",
    previewLink: "https://akin-research-powered-academic-assi.vercel.app/",
    previewImg: "/projects/academicresearchassistance.png",
    category: [
      "Python",
      "LangChain",
      "Flask",
      "OpenAI",
      "Jupyter",
      "Typescript",
      "Supabase",
      "Markdown",
      "Tailwind CSS",
      "OpenSource Contributions",
    ],
    description:
      "A tool that parses academic documents and generates citations, flashcards, and quizzes.",
    githubUrl: "https://akin-research-powered-academic-assi.vercel.app/",
  },
  {
    name: "AkinSpace",
    mainType: "Typescript",
    previewLink: "https://akin-space.vercel.app/",
    previewImg: "/projects/akinspace.png",
    category: [
      "NextJs",
      "Typescript",
      "Tailwind CSS",
      "Supabase",
      "Socket.io",
      "PostgreSQL",
      "Express",
      "Node.js",
      "Jitsi Meet",
      "Cloudinary",
      "OpenSource Contributions",
    ],
    description:
      "A real-time collaboration space with chat, whiteboard, file sharing, and video call using Jitsi.",
    githubUrl: "https://akin-space.vercel.app/",
  },
  {
    name: "SuperVaani",
    mainType: "typescript",
    previewImg: "/projects/supervaani.png",
    category: [
      "JavaScript",
      "React",
      "HTML3",
      "CSS3",
      "Python",
      "Flask",
      "Nginx",
      "Haproxy",
      "LangChain",
    ],
    description: "A FullStack RAG Application for a College",
  },
  {
    name: "Systemd",
    mainType: "C",
    previewImg: "/projects/systemd.png",
    category: ["C", "Linux", "Bash Scripting", "OpenSource Contributions"],
    description: "The systemd System and Service Manager",
  },
];

export default projects;
