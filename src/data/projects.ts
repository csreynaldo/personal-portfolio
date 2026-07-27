import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ai-powered-analytics",
    title: "AI-Powered Analytics Dashboard",
    description:
      "A real-time analytics platform with AI-driven insights, predictive modeling, and interactive visualizations. Handles millions of events per day.",
    image: "/images/projects/analytics.jpg",
    technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Redis", "Docker"],
    githubUrl: "https://github.com/johndoe/analytics",
    liveUrl: "https://analytics.example.com",
    category: "Full Stack",
    featured: true,
  },
  {
    id: "ecommerce-platform",
    title: "Modern E-Commerce Platform",
    description:
      "A high-performance e-commerce solution with server-side rendering, real-time inventory, and seamless payment integration.",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "GraphQL", "MongoDB", "Stripe", "AWS"],
    githubUrl: "https://github.com/johndoe/ecommerce",
    liveUrl: "https://ecommerce.example.com",
    category: "Full Stack",
    featured: true,
  },
  {
    id: "data-pipeline",
    title: "Real-Time Data Pipeline",
    description:
      "A scalable data processing pipeline handling streaming data with Apache Kafka, Spark, and real-time analytics capabilities.",
    image: "/images/projects/pipeline.jpg",
    technologies: ["Python", "Kafka", "Spark", "Airflow", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/johndoe/data-pipeline",
    category: "Backend",
    featured: true,
  },
  {
    id: "design-system",
    title: "Component Design System",
    description:
      "A comprehensive design system with 50+ accessible components, documentation, and theming support for multiple brands.",
    image: "/images/projects/design-system.jpg",
    technologies: ["React", "TypeScript", "Storybook", "Tailwind CSS", "Figma"],
    githubUrl: "https://github.com/johndoe/design-system",
    liveUrl: "https://design-system.example.com",
    category: "Frontend",
    featured: false,
  },
  {
    id: "ml-model-deployer",
    title: "ML Model Deployment Platform",
    description:
      "A platform for deploying, monitoring, and managing machine learning models in production with automatic scaling.",
    image: "/images/projects/ml-platform.jpg",
    technologies: ["Python", "FastAPI", "Docker", "Kubernetes", "MLflow", "AWS"],
    githubUrl: "https://github.com/johndoe/ml-platform",
    category: "AI/ML",
    featured: true,
  },
  {
    id: "task-management",
    title: "Collaborative Task Manager",
    description:
      "A real-time collaborative project management tool with Kanban boards, Gantt charts, and team analytics.",
    image: "/images/projects/task-manager.jpg",
    technologies: ["Next.js", "WebSocket", "Prisma", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/johndoe/task-manager",
    liveUrl: "https://tasks.example.com",
    category: "Full Stack",
    featured: false,
  },
];
