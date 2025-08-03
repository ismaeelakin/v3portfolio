import { ProjectTypes } from "@/types";

const projects: ProjectTypes[] = [
  {
    name: "Portfolio",
    mainType: "typescript",
    previewLink: "for vercel domain",
    previewImg: "to be from imgur",
    category: ["Typescript", "NextJs", "JavaScript"],
    description: "My current portfolio website.",
  },

  {
    name: "SuperVaani",
    mainType: "typescript",
    previewImg: "/projects/supervaani.png",
    category: [
      "JavaScript",
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
  {
    name: "Academic Research Assistant",
    mainType: "Python",

    previewImg: "https://i.imgur.com/fvavY7m.png", // image from https://imgur.com/a/FzuxWG8
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
    ],
    description:
      "A tool that parses academic documents and generates citations, flashcards, and quizzes.",
    githubUrl: "https://akin-research-powered-academic-assi.vercel.app/",
  },
  {
    name: "AkinSpace",
    mainType: "Typescript",

    previewImg: "https://i.imgur.com/EJKoQqa.png", // image from https://imgur.com/a/Gfzl6IZ
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
];

export default projects;
