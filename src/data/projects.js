import pj_one from "../../public/devMind.png";
import pj_two from "../../public/chatAppV2.png";
export const projects = [
  {
    id: "1",
    title: "Dev Mind Application",
    description:
      "Dev Mind is a developer productivity and learning companion app designed to help programmers manage tasks, track learning progress, organize ideas, and improve daily coding workflow with build in AI integration.",
    //image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop",
    image: pj_one,
    tech: ["React Native", "TypeScript", "Tailwind", "Node.js", "Tanstack Query", "Zustand", "Web Socket", "Prisma ORM", "OLLAMA AI", "MYSQL"],
    github: "https://github.com/Kzt224/Dev-Mind.git",
    //live: "#",
  },
  {
    id: "2",
    title: "Real-time Chat App",
    description:
      "Mini real time chat Application, creating for educational purpose, can sent image, text to each other with real time.",
    image: pj_two,
    tech: ["React.js", "MongoDB", "Tanstack Query", "Zustand", "Web socket", "Node.js"],
    github: "https://github.com/Kzt224/chat_app.git",
  },
  {
    id: "3",
    title: "Mini php framework",
    description:
      "A lightweight Laravel-style Mini MVC framework built with PHP for learning and small projects. This project demonstrates how the MVC (Model–View–Controller) architecture works internally.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=450&fit=crop",
    tech: ["Php", "Html", "Css", "Javascript"],
    github: "https://github.com/Kzt224/Mini_Mvc.git",
    live: null,
  },
];
