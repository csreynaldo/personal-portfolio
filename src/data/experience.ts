import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "senior-engineer",
    company: "TechCorp Inc.",
    role: "Senior Full-Stack Engineer",
    duration: "2022 - Present",
    description:
      "Leading development of next-generation analytics platform serving millions of users.",
    responsibilities: [
      "Architected and built a real-time analytics platform handling 10M+ events/day",
      "Led a team of 5 engineers, implementing agile methodologies",
      "Reduced infrastructure costs by 40% through optimization",
      "Implemented CI/CD pipelines reducing deployment time by 80%",
    ],
    achievements: [
      "Promoted to Senior Engineer within 18 months",
      "Company-wide Engineering Excellence Award 2023",
      "Published 3 technical blog posts on system design",
    ],
  },
  {
    id: "fullstack-engineer",
    company: "StartupXYZ",
    role: "Full-Stack Engineer",
    duration: "2020 - 2022",
    description: "Built and scaled the core product from MVP to production with 100K+ users.",
    responsibilities: [
      "Developed the entire frontend using React and TypeScript",
      "Designed and implemented RESTful APIs with Node.js",
      "Set up cloud infrastructure on AWS with auto-scaling",
      "Implemented real-time features using WebSockets",
    ],
    achievements: [
      "Scaled application to support 100K+ concurrent users",
      "Reduced page load time by 60%",
      "Mentored 3 junior developers",
    ],
  },
  {
    id: "data-engineer",
    company: "DataFlow Analytics",
    role: "Data Engineer",
    duration: "2018 - 2020",
    description: "Built data pipelines and analytics infrastructure for enterprise clients.",
    responsibilities: [
      "Designed ETL pipelines processing 5TB+ of data daily",
      "Built real-time dashboards using Python and D3.js",
      "Optimized database queries improving performance by 70%",
      "Implemented data quality monitoring systems",
    ],
    achievements: [
      "Delivered 15+ client projects on time and under budget",
      "Developed internal tools saving 200+ engineering hours/month",
    ],
  },
  {
    id: "junior-dev",
    company: "WebAgency Pro",
    role: "Junior Developer",
    duration: "2016 - 2018",
    description: "Started career building responsive web applications for diverse clients.",
    responsibilities: [
      "Built responsive websites using React and modern CSS",
      "Collaborated with design team on UI/UX improvements",
      "Maintained and improved existing client applications",
    ],
    achievements: [
      "Completed 30+ client projects successfully",
      "Introduced component library reducing development time by 30%",
    ],
  },
];
