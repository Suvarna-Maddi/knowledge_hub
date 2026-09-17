import { useState, Fragment } from "react";
import { X, Trophy, Wifi } from "lucide-react";
import { EnquiryModal } from "../services/EnquiryModal";

// --- Types ---
export type Course = {
  id: string;
  title: string;
  description: string;
  dotColor: string;
  themeText: string;
  themeBorder: string;
  logoUrl: string;
  overview: string;
  learnings: string[];
  modules: string[];
  tags: string[];
  // Kept for modal compatibility
  category: string;
  duration: string;
};

// --- Mock Data ---
const coursesData: Course[] = [
  {
    id: "c-1",
    title: "JAVA",
    description: "Master object-oriented programming, Spring Boot, and enterprise applications.",
    dotColor: "bg-yellow-500", themeText: "text-yellow-500", themeBorder: "border-yellow-500",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    category: "IT & Software", tags: ["Java", "Spring Boot", "OOP"], duration: "6 Months", 
    modules: ["Module 1 - Core Java", "Module 2 - Advanced Java (Servlets & JSP)", "Module 3 - Spring Boot Framework", "Module 4 - Microservices & APIs"],
    overview: "Master enterprise application development with Java. Learn to build robust, scalable applications using core Java concepts and the powerful Spring Boot framework.",
    learnings: ["Core Java Fundamentals", "Multithreading & Collections", "Spring Boot & REST APIs", "Database Connectivity (Hibernate/JPA)"]
  },
  {
    id: "c-2",
    title: "PYTHON",
    description: "Learn Python from basics to advanced, including Django, Flask, data science,...",
    dotColor: "bg-blue-400", themeText: "text-blue-400", themeBorder: "border-blue-400",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    category: "IT & Software", tags: ["Python", "Django", "Data Science"], duration: "5 Months", 
    modules: ["Module 1 - Python Basics", "Module 2 - Django Web Framework", "Module 3 - RESTful APIs", "Module 4 - Data Science Basics (Pandas/NumPy)"],
    overview: "Learn Python from scratch. This course covers everything from basic syntax to advanced web development with Django and introduces data science libraries.",
    learnings: ["Python Syntax & Logic", "Web Development with Django", "API Creation (DRF)", "Data Manipulation"]
  },
  {
    id: "c-3",
    title: ".NET",
    description: "Build robust Windows and web applications using C#, ASP.NET Core,...",
    dotColor: "bg-purple-600", themeText: "text-purple-600", themeBorder: "border-purple-600",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg",
    category: "IT & Software", tags: [".NET", "C#", "SQL Server"], duration: "4 Months", 
    modules: ["Module 1 - C# Fundamentals", "Module 2 - ASP.NET Core MVC", "Module 3 - Entity Framework", "Module 4 - Web APIs"],
    overview: "Become a proficient Microsoft stack developer. Build secure and scalable web applications using C#, ASP.NET Core, and SQL Server.",
    learnings: ["C# Object-Oriented Programming", "Building Web Apps with ASP.NET Core", "Database Management with Entity Framework", "API Development"]
  },
  {
    id: "c-4",
    title: "PHP",
    description: "Create dynamic websites with PHP, Laravel framework, MySQL databases...",
    dotColor: "bg-indigo-400", themeText: "text-indigo-400", themeBorder: "border-indigo-400",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    category: "IT & Software", tags: ["PHP", "Laravel", "MySQL"], duration: "3 Months", 
    modules: ["Module 1 - Core PHP", "Module 2 - Advanced PHP & OOP", "Module 3 - Laravel Framework", "Module 4 - MySQL Integration"],
    overview: "Learn to create dynamic, interactive websites. This course covers core PHP and dives deep into the modern Laravel framework.",
    learnings: ["PHP Scripting & OOP", "Laravel Routing & MVC", "Database Operations with Eloquent", "Authentication & Security"]
  },
  {
    id: "c-5",
    title: "WEB DEVELOPMENT",
    description: "Full-stack web development covering HTML5, CSS3, JavaScript, React,...",
    dotColor: "bg-red-500", themeText: "text-red-500", themeBorder: "border-red-500",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    category: "IT & Software", tags: ["HTML5", "CSS3", "JavaScript", "React"], duration: "6 Months", 
    modules: ["Module 1 - HTML & CSS Basics", "Module 2 - Advanced JavaScript", "Module 3 - React.js Front-end", "Module 4 - Node.js Backend Basics"],
    overview: "Master full-stack web development. Build responsive, interactive user interfaces and connect them to robust backend services.",
    learnings: ["Responsive UI Design", "Modern ES6+ JavaScript", "Component-Based Architecture (React)", "State Management"]
  },
  {
    id: "c-6",
    title: "WEB TECHNOLOGIES",
    description: "Deep dive into modern web technologies including TypeScript, GraphQL,...",
    dotColor: "bg-yellow-400", themeText: "text-yellow-400", themeBorder: "border-yellow-400",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    category: "IT & Software", tags: ["TypeScript", "GraphQL", "Next.js"], duration: "4 Months", 
    modules: ["Module 1 - TypeScript Fundamentals", "Module 2 - GraphQL APIs", "Module 3 - Next.js Framework", "Module 4 - Performance Optimization"],
    overview: "Upgrade your web development skills with cutting-edge technologies widely used in top tech companies.",
    learnings: ["Static Typing with TypeScript", "Data Fetching with GraphQL", "Server-Side Rendering (Next.js)", "Web Performance"]
  },
  {
    id: "c-7",
    title: "C, C++",
    description: "Foundation programming with C and advanced C++ including STL, memory...",
    dotColor: "bg-blue-500", themeText: "text-blue-500", themeBorder: "border-blue-500",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    category: "IT & Software", tags: ["C", "C++", "STL"], duration: "2 Months", 
    modules: ["Module 1 - C Basics & Logic", "Module 2 - Pointers & Memory", "Module 3 - C++ OOP", "Module 4 - Standard Template Library (STL)"],
    overview: "Build a rock-solid programming foundation. Learn memory management, pointers, and object-oriented principles in C and C++.",
    learnings: ["Algorithm Design & Logic", "Low-level Memory Management", "C++ Classes & Objects", "Data Structures with STL"]
  },
  {
    id: "c-8",
    title: "AWS",
    description: "Cloud computing with Amazon Web Services - EC2, S3, Lambda, RDS, and...",
    dotColor: "bg-orange-500", themeText: "text-orange-500", themeBorder: "border-orange-500",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    category: "Cloud & DevOps", tags: ["AWS Console", "AWS CLI", "CloudFormation", "Terraform", "Docker", "Jenkins"], duration: "2.5 Months", 
    modules: ["Module 1 - AWS Fundamentals", "Module 2 - Compute & Storage", "Module 3 - Serverless & Database", "Module 4 - DevOps"],
    overview: "Master cloud computing with AWS. Learn to design, deploy, and manage scalable applications using core AWS services, serverless architecture, and DevOps practices.",
    learnings: ["AWS Core Services", "S3 & CloudFront", "RDS & DynamoDB", "CI/CD with CodePipeline", "EC2 & Auto Scaling", "Lambda & Serverless", "IAM & Security"]
  },
  {
    id: "c-9",
    title: "POWER BI",
    description: "Business intelligence and data visualization using Microsoft Power BI,...",
    dotColor: "bg-yellow-500", themeText: "text-yellow-500", themeBorder: "border-yellow-500",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    category: "Data & Analytics", tags: ["Power BI Desktop", "DAX", "Power Query"], duration: "2 Months", 
    modules: ["Module 1 - Data Preparation", "Module 2 - Data Modeling", "Module 3 - DAX Formulas", "Module 4 - Dashboard Design"],
    overview: "Transform complex data into actionable insights. Master data modeling, DAX, and create stunning interactive dashboards.",
    learnings: ["Data Cleaning (Power Query)", "Relational Data Modeling", "Advanced DAX Calculations", "Interactive Visualizations"]
  },
  {
    id: "c-10",
    title: "MANUAL & AUTOMATION TESTING",
    description: "Complete testing lifecycle with Selenium, Cypress, JUnit, and CI/CD integration...",
    dotColor: "bg-green-500", themeText: "text-green-500", themeBorder: "border-green-500",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
    category: "IT & Software", tags: ["Selenium", "Cypress", "JUnit"], duration: "3 Months", 
    modules: ["Module 1 - Manual Testing Basics", "Module 2 - Selenium WebDriver", "Module 3 - Cypress Automation", "Module 4 - Test Frameworks & CI/CD"],
    overview: "Ensure software quality by mastering both manual testing concepts and industry-standard automation tools.",
    learnings: ["Test Case Design", "UI Automation (Selenium)", "API Testing", "Continuous Testing in CI/CD"]
  },
  {
    id: "c-11",
    title: "ORACLE",
    description: "Enterprise database management with Oracle SQL, PL/SQL, performance...",
    dotColor: "bg-red-600", themeText: "text-red-600", themeBorder: "border-red-600",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
    category: "Data & Analytics", tags: ["Oracle Database", "SQL", "PL/SQL"], duration: "2 Months", 
    modules: ["Module 1 - RDBMS & SQL", "Module 2 - Advanced Queries", "Module 3 - PL/SQL Basics", "Module 4 - Database Administration"],
    overview: "Master enterprise database systems. Learn to write complex queries and build robust stored procedures using Oracle SQL and PL/SQL.",
    learnings: ["Database Design Principles", "Complex SQL Joins & Subqueries", "PL/SQL Triggers & Procedures", "Performance Tuning"]
  },
  {
    id: "c-12",
    title: "ANDROID",
    description: "Mobile app development with Kotlin/Java, Android Studio, Material...",
    dotColor: "bg-green-400", themeText: "text-green-400", themeBorder: "border-green-400",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
    category: "IT & Software", tags: ["Android Studio", "Kotlin", "Java"], duration: "4 Months", 
    modules: ["Module 1 - UI & Layouts", "Module 2 - Activities & Intents", "Module 3 - Data Storage", "Module 4 - API Integration"],
    overview: "Build native mobile applications for Android. Learn UI design, activity lifecycles, and how to connect apps to cloud databases.",
    learnings: ["Material Design UI", "Kotlin Programming", "Local Database (Room)", "Consuming REST APIs"]
  },
  {
    id: "c-13",
    title: "DSA",
    description: "Data Structures and Algorithms essential for coding interviews - arrays, trees,...",
    dotColor: "bg-purple-500", themeText: "text-purple-500", themeBorder: "border-purple-500",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg",
    category: "IT & Software", tags: ["Algorithms", "Problem Solving"], duration: "3 Months", 
    modules: ["Module 1 - Arrays & Strings", "Module 2 - Linked Lists & Stacks", "Module 3 - Trees & Graphs", "Module 4 - Dynamic Programming"],
    overview: "Crack top tech interviews by mastering core computer science concepts, algorithmic thinking, and problem-solving.",
    learnings: ["Time & Space Complexity", "Sorting & Searching Algorithms", "Graph Traversal (BFS/DFS)", "Dynamic Programming Strategies"]
  },
  {
    id: "c-14",
    title: "ARTIFICIAL INTELLIGENCE",
    description: "Build intelligent systems using data and machine learning with hands-on AI...",
    dotColor: "bg-cyan-500", themeText: "text-cyan-500", themeBorder: "border-cyan-500",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    category: "IT & Software", tags: ["Python", "TensorFlow", "Scikit-Learn"], duration: "6 Months", 
    modules: ["Module 1 - Python for AI", "Module 2 - Machine Learning Models", "Module 3 - Deep Learning", "Module 4 - NLP & Computer Vision"],
    overview: "Step into the future of technology. Learn to train machine learning models and build neural networks to solve complex problems.",
    learnings: ["Data Preprocessing", "Supervised & Unsupervised Learning", "Building Neural Networks", "Deploying AI Models"]
  }
];

export function CoursesPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const toggleCourse = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  const selectedCourse = coursesData.find(c => c.id === expandedId) || null;

  const enquiryService = selectedCourse ? {
    id: selectedCourse.id,
    title: selectedCourse.title,
    category: selectedCourse.category,
    description: selectedCourse.description,
    tags: selectedCourse.tags,
    icon: "BookOpen", 
    fullDetails: selectedCourse.description
  } : null;

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 font-sans selection:bg-cyan-500/30">
      
      {/* Header */}
      <div className="text-center mb-16 relative z-10 px-5">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 uppercase">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600">
            OUR COURSES
          </span>
        </h1>
        <p className="text-slate-600 text-lg md:text-xl font-medium">
          Master cutting-edge technologies with industry-ready curriculum
        </p>
      </div>

      {/* Main Grid */}
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-slate-200 bg-white shadow-sm">
          {coursesData.map((course) => {
            const isExpanded = expandedId === course.id;

            return (
              <Fragment key={course.id}>
                {/* Course Grid Item */}
                <div 
                  onClick={() => toggleCourse(course.id)}
                  className={`group flex gap-4 p-6 border-b border-r border-slate-200 transition-colors cursor-pointer ${isExpanded ? 'bg-slate-50' : 'hover:bg-slate-50'}`}
                >
                  <div className="w-8 h-8 flex-shrink-0 mt-1 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 duration-300">
                    <img src={course.logoUrl} alt={course.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-slate-900 font-bold text-sm tracking-wide uppercase mb-2 flex items-center gap-2">
                      <span className="truncate">{course.title}</span>
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${course.dotColor}`} />
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                      {course.description}
                    </p>
                  </div>
                </div>

                {/* Expanded Details Row */}
                {isExpanded && (
                  <div className={`col-span-1 sm:col-span-2 lg:col-span-4 bg-slate-50 border-b border-r border-slate-200 relative overflow-hidden animate-in slide-in-from-top-4 fade-in duration-300`}>
                    
                    {/* Top Top Bar (Icon + X) */}
                    <div className={`flex items-center justify-between p-4 border-b ${course.themeBorder} border-opacity-30 bg-white`}>
                       <div className="flex items-center gap-3">
                         <img src={course.logoUrl} alt={course.title} className="w-6 h-6 object-contain" />
                         <span className={`font-bold text-sm tracking-widest uppercase ${course.themeText}`}>{course.title} <span className={`inline-block w-1.5 h-1.5 rounded-full ${course.dotColor} ml-1`} /></span>
                       </div>
                       <button onClick={() => setExpandedId(null)} className={`p-1 hover:bg-slate-200 rounded-md transition-colors ${course.themeText}`}>
                         <X className="w-5 h-5" />
                       </button>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 md:p-10">
                      
                      {/* Big Title & Badge */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <h2 className={`text-4xl md:text-5xl font-bold uppercase ${course.themeText}`}>{course.title}</h2>
                        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${course.themeBorder} border-opacity-40 text-xs font-semibold tracking-wide ${course.themeText} bg-white`}>
                          <Wifi className="w-3.5 h-3.5" /> Online / Offline
                        </div>
                      </div>
                      
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-12 max-w-4xl">
                        {course.overview}
                      </p>

                      <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                        
                        {/* Left Column */}
                        <div className="space-y-10">
                          {/* Overview Section */}
                          <div>
                            <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2 ${course.themeText}`}>
                              <span className="opacity-70">&gt;</span> COURSE OVERVIEW
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed">
                              {course.overview}
                            </p>
                          </div>

                          {/* What you will learn */}
                          <div>
                            <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2 ${course.themeText}`}>
                              <span className="opacity-70">&gt;</span> WHAT YOU WILL LEARN
                            </h4>
                            <ul className="grid sm:grid-cols-2 gap-4">
                              {course.learnings.map((learning, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-600">
                                  <span className={`w-1.5 h-1.5 mt-1 rounded-full flex-shrink-0 ${course.dotColor}`} />
                                  {learning}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tools & Technologies */}
                          <div>
                            <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2 ${course.themeText}`}>
                              <span className="opacity-70">&gt;</span> TOOLS & TECHNOLOGIES
                            </h4>
                            <div className="flex flex-wrap gap-3">
                              {course.tags.map(tag => (
                                <span key={tag} className={`px-3 py-1 text-[11px] font-bold rounded-sm border ${course.themeBorder} border-opacity-30 ${course.themeText}`}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-10">
                          {/* Course Curriculum */}
                          <div>
                            <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2 ${course.themeText}`}>
                              <span className="opacity-70">&gt;</span> COURSE CURRICULUM
                            </h4>
                            <div className="space-y-4">
                              {course.modules.map((mod, idx) => (
                                <div key={idx} className="flex items-center gap-4 text-xs font-bold text-slate-700 bg-white px-4 py-3 rounded-md border border-slate-200 shadow-sm">
                                  <span className="text-slate-400 font-normal text-[10px]">•</span>
                                  {mod}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Certification */}
                          <div>
                            <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2 ${course.themeText}`}>
                              <span className="opacity-70">&gt;</span> CERTIFICATION
                            </h4>
                            <div className="flex items-center gap-4 text-slate-700">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${course.themeBorder} border-opacity-30 bg-white`}>
                                <Trophy className={`w-4 h-4 ${course.themeText}`} />
                              </div>
                              <span className="text-xs font-bold uppercase tracking-wide">Course Completion Certificate</span>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>

      <EnquiryModal 
        service={enquiryService}
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />

    </div>
  );
}
