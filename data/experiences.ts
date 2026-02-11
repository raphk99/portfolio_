export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  year: string;
  shortDescription: string; // Brief summary for main list (optional)
  description: string; // Detailed company activity for case study
  highlights: string[]; // For main list
  detailedTasks: {
    task: string;
    result: string;
  }[];
  lessons: string[];
  techStack?: string[]; // Optional for case study
}

export const experiences: ExperienceItem[] = [
  {
  id: "datapolitics",
  company: "Datapolitics",
  role: "Fullstack Developer",
  period: "Sept 2024 - Dec 2025",
  year: "2025",
  shortDescription: "Architected scalable data ingestion and RAG-powered intelligence systems.",
  description:
    "At Datapolitics, I led the design and implementation of data-intensive systems transforming large-scale public tender and legislative datasets into structured, queryable intelligence. My work focused on building resilient pipelines, scalable indexing strategies, and integrating AI-driven retrieval systems to support strategic decision-making.",

  highlights: [
    "Architected a scalable ETL pipeline for high-volume public data ingestion",
    "Designed and integrated a modular RAG architecture for intelligent data retrieval",
    "Redefined system boundaries between ingestion, processing, and application layers",
    "Established testing and validation strategies across the data lifecycle",
  ],

  detailedTasks: [
    {
      task: "Architected and implemented an automated ETL pipeline for public tender ingestion.",
      result:
        "Designed a modular ingestion → validation → normalization → indexing architecture capable of processing thousands of tenders daily with fault tolerance and data integrity safeguards.",
    },
    {
      task: "Designed and integrated a Retrieval-Augmented Generation (RAG) architecture.",
      result:
        "Implemented a scalable retrieval layer with structured embeddings and query orchestration, enhancing analytical depth and directly enabling two revenue-generating upsell opportunities.",
    },
    {
      task: "Refactored overall system architecture with clearer domain boundaries.",
      result:
        "Improved maintainability and scalability by separating data services, API layers, and frontend consumption patterns, reducing technical debt and accelerating feature delivery.",
    },
  ],

  lessons: [
    "Architectural decisions in data pipelines compound over time, especially around validation, schema evolution, and observability.",
    "RAG systems require thoughtful orchestration between retrieval logic, indexing strategy, and business use cases to create real value.",
    "Clear separation of concerns across services reduces long-term cognitive load and system fragility.",
  ],

  techStack: ["Python", "Vue.js", "Elasticsearch", "PostgreSQL", "Kubernetes", "Docker"]
}
,
  {
    id: "efficientip",
    company: "EfficientIP",
    role: "Fullstack Developer",
    period: "Sept 2023 - Jan 2024",
    year: "2023",
    shortDescription: "Real-time synchronization and security optimization.",
    description:
      "EfficientIP is a leading provider of DDI (DNS, DHCP, IPAM) solutions, helping organizations simplify and secure their network infrastructure. They offer integrated solutions to enable strategic IT initiatives like cloud computing, virtualization, and mobility.",
    highlights: [
      "Built real-time ETL synchronization pipeline for user ticket data",
      "Optimized system performance with strict data security protocols & rate limiting",
      "Developed role-based access control dashboards with OWASP protection",
      "Integrated ML model for automated recommendations & decision support",
    ],
    detailedTasks: [
      {
        task: "Building a real-time ETL synchronization pipeline.",
        result:
          "Ensured seamless consistency of user ticket data across internal systems, reducing data discrepancies by over 90%.",
      },
      {
        task: "Development of secure RBAC dashboards.",
        result:
          "Delivered a highly secure administrative interface adhering to OWASP standards, significantly improving internal data governance.",
      },
      {
        task: "ML Model Integration.",
        result: "Automated routine decision support, freeing up team resources for complex problem-solving.",
      },
    ],
    lessons: [
      "Deepened understanding of network security principles and OWASP vulnerabilities.",
      "Experience with strict rate-limiting and performance optimization in high-load environments.",
      "The value of role-based access control (RBAC) in enterprise application design.",
    ],
    techStack: ["Java", "Angular", "Spring Boot", "MySQL"],
  },
  {
    id: "cours-en-visio",
    company: "cours-en-visio",
    role: "Fullstack Developer",
    period: "June 2019 - Aug 2019",
    year: "2019",
    shortDescription: "Quiz management system and payment integration.",
    description:
      "cours-en-visio was an ed-tech platform focused on providing remote learning and tutoring services. The startup aimed to bridge the gap between students and tutors through a user-friendly digital interface.",
    highlights: [
      "Created Python REST API for comprehensive quiz management system",
      "Designed & deployed relational database for question tracking",
      "Built monitoring dashboards connected to existing reporting API",
      "Integrated Stripe payment module with PCI-DSS compliance",
    ],
    detailedTasks: [
      {
        task: "Creation of a Python REST API.",
        result:
          "Enabled a flexible and scalable quiz management system that could handle diverse question types and user sessions.",
      },
      {
        task: "Database Design and Deployment.",
        result:
          "Established a robust relational schema for tracking question performance and user progress.",
      },
      {
        task: "Stripe Payment Integration.",
        result:
          "Successfully processed secure transactions with full PCI-DSS compliance, enabling the platform's monetization strategy.",
      },
    ],
    lessons: [
      "First hands-on experience with full lifecycle API development and deployment.",
      "Understanding the complexities of handling financial transactions and compliance (PCI-DSS) securely.",
      "Importance of database normalization in early-stage application design.",
    ],
    techStack: ["Python", "Flask", "PostgreSQL", "Stripe API"],
  },
];
