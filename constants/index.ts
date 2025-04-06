import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

export const mappings = {
  // Frontend Frameworks & Libraries
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "svelte.js": "svelte",
  sveltejs: "svelte",
  svelte: "svelte",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",

  // Backend Frameworks & Libraries
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  nestjs: "nestjs",
  "koa.js": "koa",
  koa: "koa",
  hapi: "hapi",
  django: "django",
  flask: "flask",
  fastapi: "fastapi",
  "spring boot": "springboot",
  springboot: "springboot",
  laravel: "laravel",
  rails: "rails",
  ruby: "ruby",

  // Databases
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  mariadb: "mariadb",
  redis: "redis",
  dynamodb: "dynamodb",
  firebase: "firebase",
  firestore: "firestore",
  prisma: "prisma",

  // DevOps & Cloud Platforms
  aws: "aws",
  "aws amplify": "amplify",
  azure: "azure",
  digitalocean: "digitalocean",
  docker: "docker",
  gcp: "gcp",
  heroku: "heroku",
  kubernetes: "kubernetes",
  netlify: "netlify",
  vercel: "vercel",

  // UI & Styling
  bootstrap: "bootstrap",
  css: "css3",
  css3: "css3",
  html: "html5",
  html5: "html5",
  jquery: "jquery",
  less: "less",
  sass: "sass",
  scss: "sass",
  tailwind: "tailwindcss",
  tailwindcss: "tailwindcss",

  // Programming Languages
  "c#": "csharp",
  "c++": "cpp",
  csharp: "csharp",
  cpp: "cpp",
  dart: "dart",
  go: "golang",
  golang: "golang",
  java: "java",
  javascript: "javascript",
  js: "javascript",
  kotlin: "kotlin",
  php: "php",
  python: "python",
  r: "r",
  "r language": "r",
  rust: "rust",
  swift: "swift",
  ts: "typescript",
  typescript: "typescript",

  // State Management & APIs
  apollo: "apollo",
  flux: "flux",
  graphql: "graphql",
  "graph ql": "graphql",
  mobx: "mobx",
  recoil: "recoil",
  redux: "redux",
  restapi: "restapi",
  vuex: "vuex",

  // Build Tools & Package Managers
  babel: "babel",
  "parcel.js": "parcel",
  parcel: "parcel",
  parceljs: "parcel",
  "rollup.js": "rollup",
  rollup: "rollup",
  rollupjs: "rollup",
  turbo: "turbo",
  vite: "vite",
  webpack: "webpack",
  npm: "npm",
  pnpm: "pnpm",
  yarn: "yarn",

  // Testing
  chai: "chai",
  cypress: "cypress",
  jest: "jest",
  karma: "karma",
  mocha: "mocha",
  playwright: "playwright",
  selenium: "selenium",

  // Version Control & CI/CD
  bitbucket: "bitbucket",
  circleci: "circleci",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  jenkins: "jenkins",
  travisci: "travisci",

  // CMS & Headless CMS
  contentful: "contentful",
  ghost: "ghost",
  sanity: "sanity",
  strapi: "strapi",
  wordpress: "wordpress",

  // Design & Collaboration
  adobe: "adobe",
  "adobe photoshop": "photoshop",
  canva: "canva",
  figma: "figma",
  photoshop: "photoshop",
  sketch: "sketch",
};



export const interviewer: CreateAssistantDTO = {
  name: "Interviewer",
  firstMessage:
    "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming:

Use official yet friendly language.
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing—sound natural and conversational.
Answer the candidate’s questions professionally:

If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

Conclude the interview properly:
Thank the candidate for their time.
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.


- Be sure to be professional and polite.
- Keep all your responses short and simple. Use official language, but be kind and welcoming.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
      },
    ],
  },
};

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/yahoo.png",
  "/google.png"
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
  {
    id: "3",
    userId: "user2",
    role: "Backend Developer",
    type: "Technical",
    techstack: ["Python", "Django", "PostgreSQL"],
    level: "Mid",
    questions: ["Explain Django's ORM."],
    finalized: true,
    createdAt: "2024-03-12T08:45:00Z",
  },
  {
    id: "4",
    userId: "user3",
    role: "Data Scientist",
    type: "Behavioral",
    techstack: ["Python", "TensorFlow", "SQL"],
    level: "Senior",
    questions: ["How do you handle missing data in a dataset?"],
    finalized: false,
    createdAt: "2024-03-10T12:15:00Z",
  },
  {
    id: "5",
    userId: "user4",
    role: "DevOps Engineer",
    type: "Technical",
    techstack: ["AWS", "Docker", "Kubernetes", "Terraform"],
    level: "Mid",
    questions: ["Explain the benefits of containerization."],
    finalized: true,
    createdAt: "2024-03-08T09:30:00Z",
  },
  {
    id: "6",
    userId: "user5",
    role: "Mobile Developer",
    type: "Technical",
    techstack: ["Flutter", "Dart", "Firebase"],
    level: "Junior",
    questions: ["What are widgets in Flutter?"],
    finalized: false,
    createdAt: "2024-03-07T14:20:00Z",
  },
];