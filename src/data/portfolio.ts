import type {
  Profile,
  AboutContent,
  Project,
  TechStackGroup,
  ExperienceEntry,
} from "../types.ts";

export const profile: Profile = {
  name: "Robert Antwi",
  title: "Software Engineer | Full-Stack Developer",
  positioning:
    "I build full-stack products across the stack—from SaaS interfaces and backend APIs to PostgreSQL data models and real-time AI applications.",
  availability: "Open to software engineering opportunities",
  email: "robertantwi84@gmail.com",
  github: "https://github.com/antwirobert",
  linkedin: "https://www.linkedin.com/in/antwirobert/",
};

export const about: AboutContent = {
  paragraphs: [
    "I'm a software engineer who enjoys the parts of engineering most people don't see — the data models, the failure modes, and the queries that become expensive as systems grow. I care about building things that work correctly under real conditions, not just in a demo.",
    "My approach is straightforward: understand the problem before writing code, design systems that are simple to reason about, and write code that the next engineer (often me, six months later) can actually maintain.",
  ],
  learning: [
    "Advanced system design for multi-tenant SaaS",
    "Real-time architectures and event-driven systems",
    "Production observability and performance optimization",
  ],
  interestedIn: [
    "Full-stack and backend roles where ownership and craft matter",
    "Teams that value code review, clear architecture, and shipping reliable software",
    "Products with real users and meaningful technical complexity",
  ],
};

export const projects: Project[] = [
  {
    id: "workloom",
    name: "Workloom",
    tagline:
      "Multi-tenant project-management SaaS organized around organizations, workspaces, projects, and tasks.",
    category: "Full-Stack",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "TanStack Query",
      "Zustand",
      "Docker",
    ],
    contribution:
      "Independently designed and developed the application architecture, frontend, backend, and core workflows.",
    links: [],
    showcaseTechnologies: [
      "React / TypeScript",
      "Node.js / Express",
      "PostgreSQL / Prisma",
      "Redis",
      "TanStack Query / Zustand",
    ],
    engineeringHighlights: [
      "Multi-tenant organization → workspace → project → task model",
      "Node.js and Express REST APIs with PostgreSQL and Prisma",
      "Authentication and authorization, Redis caching and sessions, and TanStack Query/Zustand state management",
    ],
    showcaseScreenshot: {
      src: "/project-images/workloom-dashboard.png",
      alt: "Workloom dashboard showing assigned tasks, priorities, due dates, and active workspaces.",
      width: 1383,
      height: 768,
    },
    detailScreenshots: [
      {
        src: "/project-images/workloom-kanban.png",
        alt: "Workloom Kanban board showing task columns, project tasks, and workflow statuses.",
        caption: "Kanban task board",
        width: 1366,
        height: 768,
      },
      {
        src: "/project-images/workloom-task-drawer.png",
        alt: "Workloom task detail drawer open over the intentionally blurred Kanban board, showing task properties, description, and attachments.",
        caption: "Task detail drawer, with the board visible behind it",
        width: 1366,
        height: 480,
      },
    ],
    featured: true,
    detail: {
      sections: [
        {
          heading: "Problem",
          body: "Existing project tools either feel bloated or force teams into rigid workflows. I wanted a clean, multi-tenant workspace that supports real collaboration — organizations, workspaces, projects, tasks, discussions, and file handling — without unnecessary complexity.",
        },
        {
          heading: "Solution",
          body: "Workloom is a production-oriented project management SaaS built around a clear hierarchy: Organization → Workspace → Project → Task. It supports assignments, priorities, deadlines, discussions, file handling, and both List and Kanban views.",
        },
        {
          heading: "What I Built",
          body: "I designed and implemented the full stack: React + TypeScript frontend with TanStack Query and Zustand, Node.js + Express REST APIs, PostgreSQL + Prisma data layer, Redis for caching and sessions, authentication & authorization, and Docker-based development environments.",
        },
        {
          heading: "Technical Architecture",
          body: "The system follows a layered architecture. The frontend manages complex client and server state with TanStack Query and Zustand. The backend exposes well-structured REST endpoints. PostgreSQL stores the hierarchical domain model, while Redis handles caching and session state. Docker ensures reproducible environments across development and deployment.",
        },
      ],
      keyDecisions: [
        {
          title: "Hierarchical domain model (Org → Workspace → Project → Task)",
          body: "This structure mirrors how real teams organize work and makes multi-tenancy and permissions straightforward to reason about and enforce.",
        },
        {
          title: "TanStack Query + Zustand for state management",
          body: "Server state and client state have different concerns. Separating them kept the data layer predictable while still allowing rich interactive UI behavior.",
        },
      ],
      challenges: [
        {
          title:
            "Designing multi-user collaboration without over-complicating the data model",
          body: "Balancing flexibility (multiple workspaces, shared projects, role-based access) with a clean schema required careful modeling of ownership and membership relationships.",
        },
      ],
      features: [
        "Organization → Workspace → Project → Task hierarchy",
        "Task assignments, priorities, deadlines, and discussions",
        "List and Kanban views",
        "File handling and project progress tracking",
        "Authentication, authorization, and Redis-backed sessions",
      ],
      learnings:
        "Owning nearly an entire SaaS taught me how architecture decisions compound. Clear domain modeling and deliberate state management paid off more than any individual library choice.",
      results:
        "Implemented a multi-tenant project management platform organized around an Organization → Workspace → Project → Task hierarchy.",
    },
  },
  {
    id: "agentmeet-ai",
    name: "AgentMeet AI",
    tagline:
      "Real-time AI meeting product where agents participate in live video conversations and support post-meeting workflows.",
    category: "Full-Stack",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "tRPC",
      "TanStack Query",
      "Drizzle ORM",
      "PostgreSQL",
      "Better Auth",
      "Stream Video",
      "Stream Chat",
      "OpenAI Realtime API",
      "AgentKit",
      "Polar",
    ],
    contribution:
      "Designed and developed end-to-end — architecture, real-time integrations, and AI agent workflows",
    links: [],
    showcaseTechnologies: [
      "Next.js / TypeScript",
      "tRPC",
      "Stream Video / Chat",
      "OpenAI Realtime / AgentKit",
      "Better Auth / Polar billing",
    ],
    engineeringHighlights: [
      "AI agents participate in live meetings through OpenAI Realtime and AgentKit",
      "Stream Video and Chat provide meeting media and in-call messaging",
      "tRPC APIs with Drizzle/PostgreSQL persistence, Better Auth, and Polar subscriptions",
    ],
    showcaseScreenshot: {
      src: "/project-images/agentmeet-live-meeting.png",
      alt: "AgentMeet live meeting with a real-time AI participant, another attendee, and call controls.",
      width: 1560,
      height: 768,
    },
    detailScreenshots: [
      {
        src: "/project-images/agentmeet-meetings.png",
        alt: "AgentMeet meetings dashboard showing meeting records, statuses, filters, and durations.",
        caption: "Meetings dashboard",
        width: 1178,
        height: 700,
      },
    ],
    featured: false,
    detail: {
      sections: [
        {
          heading: "Problem",
          body: "Most AI meeting tools are post-processing only. I wanted agents that could actually participate in live conversations — for language tutoring, interview coaching, sales assistance, and custom personas — with real-time video, chat, and downstream AI workflows.",
        },
        {
          heading: "Solution",
          body: "AgentMeet AI is a production-oriented SaaS built on Next.js 15 and React 19. It combines Stream Video/Chat for real-time meetings with the OpenAI Realtime API and AgentKit so AI agents can listen and respond live. Post-meeting, transcripts are processed and AI-generated summaries are produced automatically.",
        },
        {
          heading: "What I Built",
          body: "Full application with App Router and Server Components, type-safe APIs via tRPC, Drizzle + PostgreSQL persistence, Better Auth for authentication, Polar for subscription billing, Stream for real-time media, and OpenAI Realtime + AgentKit for live agent participation and post-meeting intelligence.",
        },
        {
          heading: "Technical Architecture",
          body: "Next.js 15 App Router handles the web layer with Server Components. tRPC provides end-to-end type safety. Real-time media flows through Stream. AI agents connect via the OpenAI Realtime API. Background processing turns live meeting data into transcripts and summaries after the session ends.",
        },
      ],
      keyDecisions: [
        {
          title: "tRPC over traditional REST",
          body: "End-to-end type safety between client and server significantly reduced API contract bugs and sped up iteration on complex real-time features.",
        },
        {
          title: "OpenAI Realtime API + AgentKit for live participation",
          body: "Post-meeting summarization alone was not enough. Real-time agent interaction required low-latency streaming and careful orchestration of conversation state.",
        },
      ],
      challenges: [
        {
          title: "Coordinating real-time video, chat, and AI agent state",
          body: "Keeping the agent context coherent while media and chat streams run concurrently required careful handling of session state and timing.",
        },
      ],
      features: [
        "Real-time video meetings with Stream Video",
        "Live AI agent participation via OpenAI Realtime API",
        "In-meeting chat with Stream Chat",
        "Automated transcript processing",
        "AI-generated post-meeting summaries",
        "Authentication and subscription billing (Better Auth + Polar)",
      ],
      learnings:
        "Real-time AI systems force you to think about latency, state consistency, and failure modes much earlier than traditional request-response applications.",
      results:
        "Shipped a production-oriented real-time AI meeting platform with live agent participation and post-meeting intelligence workflows.",
    },
  },
];

export const techStack: TechStackGroup[] = [
  {
    category: "Languages",
    items: [{ name: "TypeScript", note: "Primary" }],
  },
  {
    category: "Frontend",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TanStack Query" },
      { name: "Zustand" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    category: "Backend",
    items: [{ name: "Node.js" }, { name: "Express.js" }, { name: "tRPC" }],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", note: "Primary" },
      { name: "Prisma" },
      { name: "Drizzle ORM" },
      { name: "Redis" },
    ],
  },
  {
    category: "Infrastructure & Tools",
    items: [
      { name: "Docker" },
      { name: "Vercel" },
      { name: "Railway" },
      { name: "Git / GitHub" },
    ],
  },
];

export const experience: ExperienceEntry[] = [
  {
    id: "exp-kofa",
    type: "experience",
    role: "Software Engineer Intern",
    org: "Kofa Technologies",
    period: "June 2025 – November 2025",
    location: "Ghana",
    description:
      "Developed and shipped full-stack features across Kofa’s web platforms using React, TypeScript, Node.js, and Express. Built and integrated REST APIs and database-backed functionality with PostgreSQL and Prisma. Contributed to the Fleet Dashboard (B2B logistics) and Network Platform (battery-swap station network). Implemented forms, tables, dashboards, filtering, pagination, authentication, and authorization. Collaborated with a 10–20 engineer team through Git workflows and code reviews.",
    tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
  },
  {
    id: "exp-freelance",
    type: "experience",
    role: "Software Engineer",
    org: "Freelance",
    period: "2024",
    location: "Ghana",
    description:
      "Independently designed, developed, and deployed ~3 client applications spanning analytics dashboards, internal management tools, and web applications. Owned end-to-end development from requirements and architecture through frontend, backend, database integration, deployment, and maintenance. Used React, TypeScript, Tailwind, Zustand, TanStack Query, Node.js, Express, PostgreSQL, Prisma, Vercel, and Railway.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Vercel",
      "Railway",
    ],
  },
  {
    id: "edu-1",
    type: "education",
    role: "BTech in Computer Science",
    org: "Accra Technical University",
    period: "Expected 2027",
    location: "Ghana",
    description:
      "GPA: 4.7/5.0. Relevant coursework: Data Structures & Algorithms, Database Systems, Software Engineering, Web Development, Computer Networks, Operating Systems, Object-Oriented Programming.",
  },
];

export const githubRepos = [
  {
    name: "workloom",
    description:
      "Full-stack project management SaaS — multi-tenant workspaces, tasks, and collaboration",
    language: "TypeScript",
    url: "https://github.com/antwirobert",
  },
  {
    name: "agentmeet-ai",
    description:
      "Real-time AI meeting platform with live agent participation and post-meeting intelligence",
    language: "TypeScript",
    url: "https://github.com/antwirobert",
  },
];
