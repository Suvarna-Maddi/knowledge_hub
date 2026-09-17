import { Braces, CloudCog, MonitorCog, ReceiptIndianRupee, Network, type LucideIcon } from "lucide-react";
export type CourseCategory = { title: string; description: string; courses: string[]; icon: LucideIcon };
export const courseCategories: CourseCategory[] = [
  { title: "IT & Software", description: "Master programming languages and software development.", courses: ["C", "C++", "Java", "Python (Full Stack)", "Data Structures", "SQL", "Oracle", "PL/SQL"], icon: Braces },
  { title: "Cloud & DevOps", description: "Learn modern infrastructure, deployment, and automation.", courses: ["AWS", "Azure", "GCP", "DevOps", "Docker", "Kubernetes"], icon: CloudCog },
  { title: "Office Tools", description: "Work smarter with essential workplace and analytics tools.", courses: ["MS Office", "Advanced Excel", "Power BI", "Tally"], icon: MonitorCog },
  { title: "Non-IT Skills", description: "Improve your communication and prepare for exams.", courses: ["Spoken English", "IELTS / TOEFL / GRE / PTE", "Communication Skills"], icon: ReceiptIndianRupee },
  { title: "Academic Courses", description: "Tuition and coaching for school and college subjects.", courses: ["SSC, CBSE, ICSE", "Intermediate (1st & 2nd Year)", "All subjects (1st–12th)", "Engineering subjects"], icon: Network },
];
