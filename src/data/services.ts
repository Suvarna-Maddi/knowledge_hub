import { Service } from "../types/service";

export const categories = [
  "All",
  "IT & Software",
  "Cloud & DevOps",
  "Office Tools",
  "Non-IT Skills",
  "Academic Courses"
];

export const servicesData: Service[] = [
  {
    id: "it-1",
    title: "Full Stack Web Development",
    category: "IT & Software",
    description: "Master modern web development with React, Node.js, and MongoDB.",
    tags: ["React", "Node.js", "MongoDB"],
    icon: "Code2",
    fullDetails: "This comprehensive course covers everything from basic HTML/CSS to advanced backend architecture. You'll build 5 real-world projects, learn how to deploy scalable applications, and master industry-standard version control workflows.",
    duration: "6 Months",
    placementSupport: true
  },
  {
    id: "it-2",
    title: "Python for Data Science",
    category: "IT & Software",
    description: "Learn Python programming, pandas, and machine learning basics.",
    tags: ["Python", "Data Science", "ML"],
    icon: "MonitorCog",
    fullDetails: "Dive deep into data manipulation, visualization, and predictive modeling using Python. You will work with real datasets to solve business problems and build predictive models.",
    duration: "4 Months",
    placementSupport: true
  },
  {
    id: "cloud-1",
    title: "AWS Cloud Practitioner",
    category: "Cloud & DevOps",
    description: "Start your cloud journey with Amazon Web Services fundamentals.",
    tags: ["AWS", "Cloud", "Infrastructure"],
    icon: "Cloud",
    fullDetails: "Learn the core AWS services, security, architecture, and pricing to prepare for the AWS Certified Cloud Practitioner exam. Hands-on labs are included.",
    duration: "2 Months",
    placementSupport: true
  },
  {
    id: "office-1",
    title: "Advanced Excel Mastery",
    category: "Office Tools",
    description: "Learn advanced formulas, VBA macros, and data visualization.",
    tags: ["Excel", "VBA", "Data"],
    icon: "BriefcaseBusiness",
    fullDetails: "Master VLOOKUP, Pivot Tables, Power Query, and basic VBA to automate repetitive tasks and create insightful business dashboards for corporate environments.",
    duration: "1 Month",
    placementSupport: false
  },
  {
    id: "non-it-1",
    title: "Digital Marketing",
    category: "Non-IT Skills",
    description: "Learn SEO, SEM, and social media marketing strategies.",
    tags: ["SEO", "Marketing", "Ads"],
    icon: "HeartHandshake",
    fullDetails: "Understand how to drive traffic and conversions using Google Ads, Facebook Marketing, and advanced SEO techniques. Create complete campaign strategies from scratch.",
    duration: "3 Months",
    placementSupport: true
  },
  {
    id: "acad-1",
    title: "High School Mathematics",
    category: "Academic Courses",
    description: "Comprehensive math tutoring for high school students.",
    tags: ["Math", "Tutoring", "Academics"],
    icon: "GraduationCap",
    fullDetails: "In-depth coverage of algebra, geometry, and calculus designed to help students excel in board exams and competitive tests. Includes regular mock exams.",
    duration: "6 Months",
    placementSupport: false
  }
];
