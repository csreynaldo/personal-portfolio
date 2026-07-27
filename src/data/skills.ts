import type { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "react", level: 95, yearsExperience: 6, category: "Frontend" },
  { name: "Next.js", icon: "nextjs", level: 92, yearsExperience: 5, category: "Frontend" },
  { name: "TypeScript", icon: "typescript", level: 90, yearsExperience: 5, category: "Frontend" },
  { name: "JavaScript", icon: "javascript", level: 95, yearsExperience: 7, category: "Frontend" },
  { name: "Tailwind CSS", icon: "tailwind", level: 90, yearsExperience: 4, category: "Frontend" },
  { name: "HTML/CSS", icon: "html", level: 95, yearsExperience: 8, category: "Frontend" },

  // Backend
  { name: "Node.js", icon: "nodejs", level: 88, yearsExperience: 6, category: "Backend" },
  { name: "Python", icon: "python", level: 90, yearsExperience: 5, category: "Backend" },
  { name: "GraphQL", icon: "graphql", level: 82, yearsExperience: 4, category: "Backend" },
  { name: "REST APIs", icon: "api", level: 92, yearsExperience: 6, category: "Backend" },
  { name: "FastAPI", icon: "fastapi", level: 78, yearsExperience: 3, category: "Backend" },

  // Database
  { name: "PostgreSQL", icon: "postgresql", level: 88, yearsExperience: 5, category: "Database" },
  { name: "MongoDB", icon: "mongodb", level: 82, yearsExperience: 4, category: "Database" },
  { name: "Redis", icon: "redis", level: 75, yearsExperience: 3, category: "Database" },
  { name: "Prisma", icon: "prisma", level: 85, yearsExperience: 3, category: "Database" },

  // Cloud
  { name: "AWS", icon: "aws", level: 80, yearsExperience: 4, category: "Cloud" },
  { name: "Vercel", icon: "vercel", level: 90, yearsExperience: 4, category: "Cloud" },
  { name: "Docker", icon: "docker", level: 82, yearsExperience: 4, category: "Cloud" },

  // DevOps
  { name: "CI/CD", icon: "cicd", level: 80, yearsExperience: 4, category: "DevOps" },
  { name: "Kubernetes", icon: "kubernetes", level: 70, yearsExperience: 2, category: "DevOps" },
  { name: "Git", icon: "git", level: 90, yearsExperience: 7, category: "DevOps" },

  // Programming Languages
  {
    name: "TypeScript",
    icon: "typescript",
    level: 90,
    yearsExperience: 5,
    category: "Programming Languages",
  },
  {
    name: "Python",
    icon: "python",
    level: 90,
    yearsExperience: 5,
    category: "Programming Languages",
  },
  { name: "Java", icon: "java", level: 70, yearsExperience: 3, category: "Programming Languages" },
  { name: "Go", icon: "go", level: 65, yearsExperience: 2, category: "Programming Languages" },

  // Tools
  { name: "VS Code", icon: "vscode", level: 95, yearsExperience: 8, category: "Tools" },
  { name: "Figma", icon: "figma", level: 75, yearsExperience: 3, category: "Tools" },
  { name: "Linear", icon: "linear", level: 85, yearsExperience: 3, category: "Tools" },

  // Data Analytics
  { name: "Pandas", icon: "pandas", level: 82, yearsExperience: 4, category: "Data Analytics" },
  { name: "NumPy", icon: "numpy", level: 80, yearsExperience: 4, category: "Data Analytics" },
  { name: "SQL", icon: "sql", level: 88, yearsExperience: 6, category: "Data Analytics" },

  // Data Visualization
  {
    name: "Tableau",
    icon: "tableau",
    level: 72,
    yearsExperience: 3,
    category: "Data Visualization",
  },
  { name: "D3.js", icon: "d3", level: 70, yearsExperience: 2, category: "Data Visualization" },
  {
    name: "Matplotlib",
    icon: "matplotlib",
    level: 78,
    yearsExperience: 4,
    category: "Data Visualization",
  },
];
