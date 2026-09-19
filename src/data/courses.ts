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
  category: string;
  duration: string;
};

export const coursesData: Course[] = [
  // Job-Ready Programs
  {
    id: "job-1",
    title: "PYTHON FULL STACK DEVELOPMENT",
    description: "An intensive, job-oriented program covering front-to-back Python web development.",
    dotColor: "bg-blue-600", themeText: "text-blue-600", themeBorder: "border-blue-600",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    category: "Job-Ready Programs", tags: ["Job Guarantee", "Full Stack", "Python"], duration: "6 Months", 
    modules: ["Module 1 - Frontend & UI", "Module 2 - Python & Django", "Module 3 - Databases & APIs", "Module 4 - Real-world Projects"],
    overview: "Get hired faster with our job-ready Python Full Stack program. Focus on practical, real-world development and interview prep.",
    learnings: ["End-to-End Development", "Real-world Projects", "Interview Preparation", "Placement Support"]
  },
  {
    id: "job-2",
    title: "DATA ANALYTICS PROGRAM",
    description: "Comprehensive data program with SQL, Excel, Python, and Power BI for data roles.",
    dotColor: "bg-green-600", themeText: "text-green-600", themeBorder: "border-green-600",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    category: "Job-Ready Programs", tags: ["Data Science", "Analytics", "Job Ready"], duration: "5 Months", 
    modules: ["Module 1 - Advanced Excel & SQL", "Module 2 - Python for Data", "Module 3 - Power BI", "Module 4 - Capstone Project"],
    overview: "Step into the world of data. Learn the exact stack required by top employers and build a strong portfolio.",
    learnings: ["Data Wrangling", "Dashboard Creation", "Statistical Analysis", "Business Intelligence"]
  },
  {
    id: "job-3",
    title: "CLOUD & DEVOPS PROGRAM",
    description: "End-to-end cloud infrastructure and automation program tailored for IT operations.",
    dotColor: "bg-orange-600", themeText: "text-orange-600", themeBorder: "border-orange-600",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    category: "Job-Ready Programs", tags: ["AWS", "DevOps", "Placement"], duration: "6 Months", 
    modules: ["Module 1 - Linux & Networking", "Module 2 - AWS Cloud", "Module 3 - Docker & K8s", "Module 4 - CI/CD Pipelines"],
    overview: "Become a Cloud/DevOps Engineer. Master the most in-demand infrastructure automation tools in the industry.",
    learnings: ["Infrastructure as Code", "Containerization", "Cloud Architecture", "Continuous Deployment"]
  },
  {
    id: "job-4",
    title: "SPOKEN ENGLISH MASTERY PROGRAM",
    description: "Intensive fluency and personality development program to ace corporate interviews.",
    dotColor: "bg-indigo-600", themeText: "text-indigo-600", themeBorder: "border-indigo-600",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/3269/3269817.png",
    category: "Job-Ready Programs", tags: ["Fluency", "Personality", "Interviews"], duration: "3 Months", 
    modules: ["Module 1 - Foundation Grammar", "Module 2 - Advanced Fluency", "Module 3 - Public Speaking", "Module 4 - Mock Interviews"],
    overview: "Transform your communication skills. Perfect for job seekers looking to confidently crack corporate interviews.",
    learnings: ["Flawless Pronunciation", "Corporate Etiquette", "Public Speaking", "Confidence Building"]
  },

  // IT & Programming
  {
    id: "it-1",
    title: "PYTHON (FULL STACK)",
    description: "Learn Python from basics to advanced, including Django, Flask, and database integration.",
    dotColor: "bg-blue-400", themeText: "text-blue-400", themeBorder: "border-blue-400",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    category: "IT & Programming", tags: ["Python", "Django", "Full Stack"], duration: "5 Months", 
    modules: ["Module 1 - Python Basics", "Module 2 - Django Web Framework", "Module 3 - RESTful APIs", "Module 4 - Frontend Integration"],
    overview: "Master full-stack web development with Python. Covers everything from basic syntax to advanced web development with Django and React.",
    learnings: ["Python Syntax & Logic", "Web Development with Django", "API Creation", "Database Management"]
  },
  {
    id: "it-2a",
    title: "JAVA",
    description: "Master foundational programming, OOP, and enterprise applications with Java.",
    dotColor: "bg-orange-500", themeText: "text-orange-500", themeBorder: "border-orange-500",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    category: "IT & Programming", tags: ["Java", "OOP", "Spring"], duration: "3 Months", 
    modules: ["Module 1 - Core Java", "Module 2 - Collections", "Module 3 - Threads", "Module 4 - Advanced Java"],
    overview: "Build a rock-solid programming foundation with Java and enterprise frameworks.",
    learnings: ["Algorithm Design", "Memory Management", "OOP Concepts", "Multithreading"]
  },
  {
    id: "it-2b",
    title: "C PROGRAMMING",
    description: "Learn low-level memory management and foundational programming with C.",
    dotColor: "bg-blue-600", themeText: "text-blue-600", themeBorder: "border-blue-600",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    category: "IT & Programming", tags: ["C", "Programming Basics"], duration: "2 Months", 
    modules: ["Module 1 - C Basics", "Module 2 - Pointers", "Module 3 - Arrays & Strings", "Module 4 - Memory Allocation"],
    overview: "Master the foundation of modern computing with C programming language.",
    learnings: ["Syntax Basics", "Pointers", "Memory Management", "File Handling"]
  },
  {
    id: "it-2c",
    title: "C++",
    description: "Master object-oriented programming and standard template library in C++.",
    dotColor: "bg-blue-500", themeText: "text-blue-500", themeBorder: "border-blue-500",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    category: "IT & Programming", tags: ["C++", "OOP", "STL"], duration: "2 Months", 
    modules: ["Module 1 - C++ Basics", "Module 2 - OOP in C++", "Module 3 - Templates", "Module 4 - STL"],
    overview: "Learn high-performance programming and advanced concepts in C++.",
    learnings: ["OOP Implementation", "STL Containers", "Memory Optimization", "Algorithms"]
  },
  {
    id: "it-3",
    title: "DATA STRUCTURES",
    description: "Essential data structures and algorithms for competitive programming and interviews.",
    dotColor: "bg-purple-500", themeText: "text-purple-500", themeBorder: "border-purple-500",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg",
    category: "IT & Programming", tags: ["DSA", "Algorithms", "Problem Solving"], duration: "3 Months", 
    modules: ["Module 1 - Arrays & Strings", "Module 2 - Linked Lists & Stacks", "Module 3 - Trees & Graphs", "Module 4 - Dynamic Programming"],
    overview: "Crack top tech interviews by mastering core computer science concepts, algorithmic thinking, and problem-solving.",
    learnings: ["Time & Space Complexity", "Sorting & Searching Algorithms", "Graph Traversal (BFS/DFS)", "Dynamic Programming"]
  },
  {
    id: "it-4",
    title: ".NET",
    description: "Build robust Windows and web applications using C# and ASP.NET Core.",
    dotColor: "bg-purple-600", themeText: "text-purple-600", themeBorder: "border-purple-600",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg",
    category: "IT & Programming", tags: [".NET", "C#", "SQL Server"], duration: "4 Months", 
    modules: ["Module 1 - C# Fundamentals", "Module 2 - ASP.NET Core MVC", "Module 3 - Entity Framework", "Module 4 - Web APIs"],
    overview: "Become a proficient Microsoft stack developer. Build secure and scalable web applications using C#, ASP.NET Core, and SQL Server.",
    learnings: ["C# Object-Oriented Programming", "Building Web Apps", "Database Management", "API Development"]
  },
  {
    id: "it-5a",
    title: "ORACLE",
    description: "Enterprise database management and administration with Oracle.",
    dotColor: "bg-red-600", themeText: "text-red-600", themeBorder: "border-red-600",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
    category: "IT & Programming", tags: ["Oracle", "Database Admin"], duration: "2 Months", 
    modules: ["Module 1 - Oracle Architecture", "Module 2 - Security", "Module 3 - Backup/Recovery", "Module 4 - Performance"],
    overview: "Master enterprise database systems. Learn robust administration of Oracle databases.",
    learnings: ["Database Design Principles", "User Management", "Security Implementation", "Performance Tuning"]
  },
  {
    id: "it-5b",
    title: "SQL",
    description: "Master relational databases and complex query writing using SQL.",
    dotColor: "bg-blue-400", themeText: "text-blue-400", themeBorder: "border-blue-400",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    category: "IT & Programming", tags: ["SQL", "RDBMS"], duration: "1.5 Months", 
    modules: ["Module 1 - RDBMS Basics", "Module 2 - Queries & Joins", "Module 3 - Subqueries", "Module 4 - Optimization"],
    overview: "Learn to write complex queries to manipulate and retrieve data from any SQL database.",
    learnings: ["Data Retrieval", "Complex Joins", "Aggregations", "Query Optimization"]
  },
  {
    id: "it-5c",
    title: "PL/SQL",
    description: "Advanced database programming with PL/SQL stored procedures and triggers.",
    dotColor: "bg-purple-500", themeText: "text-purple-500", themeBorder: "border-purple-500",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/2888/2888929.png",
    category: "IT & Programming", tags: ["PL/SQL", "Procedures"], duration: "1.5 Months", 
    modules: ["Module 1 - PL/SQL Basics", "Module 2 - Cursors & Exceptions", "Module 3 - Procedures & Functions", "Module 4 - Triggers"],
    overview: "Build robust stored procedures and triggers inside Oracle using PL/SQL.",
    learnings: ["PL/SQL Blocks", "Exception Handling", "Triggers", "Packages"]
  },

  // Cloud & DevOps
  {
    id: "cloud-1",
    title: "AWS CLOUD",
    description: "Cloud computing with Amazon Web Services - EC2, S3, Lambda, and more.",
    dotColor: "bg-orange-500", themeText: "text-orange-500", themeBorder: "border-orange-500",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    category: "Cloud & DevOps", tags: ["AWS", "Cloud", "Serverless"], duration: "2.5 Months", 
    modules: ["Module 1 - AWS Fundamentals", "Module 2 - Compute & Storage", "Module 3 - Networking", "Module 4 - Security & Deployment"],
    overview: "Master cloud computing with AWS. Learn to design, deploy, and manage scalable applications using core AWS services.",
    learnings: ["AWS Core Services", "S3 & EC2", "VPC & Networking", "IAM & Security"]
  },
  {
    id: "cloud-2",
    title: "MICROSOFT AZURE",
    description: "Master Azure cloud services, virtualization, and enterprise cloud architecture.",
    dotColor: "bg-blue-600", themeText: "text-blue-600", themeBorder: "border-blue-600",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
    category: "Cloud & DevOps", tags: ["Azure", "Cloud", "Microsoft"], duration: "2 Months", 
    modules: ["Module 1 - Azure Basics", "Module 2 - Azure Compute", "Module 3 - Azure Storage", "Module 4 - Azure Security"],
    overview: "Learn to build, deploy, and manage applications using the Microsoft Azure cloud platform.",
    learnings: ["Azure Virtual Machines", "App Services", "Azure Active Directory", "Cloud Architecture"]
  },
  {
    id: "cloud-3",
    title: "GOOGLE CLOUD (GCP)",
    description: "Google Cloud Platform essentials, computing, data storage, and machine learning APIs.",
    dotColor: "bg-red-500", themeText: "text-red-500", themeBorder: "border-red-500",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    category: "Cloud & DevOps", tags: ["GCP", "Google Cloud"], duration: "2 Months", 
    modules: ["Module 1 - GCP Fundamentals", "Module 2 - Compute Engine", "Module 3 - Cloud Storage", "Module 4 - BigQuery & AI"],
    overview: "Discover the power of Google Cloud Platform. Build highly scalable applications and leverage Google's data analytics.",
    learnings: ["Compute Engine", "Kubernetes Engine", "BigQuery", "Cloud Security"]
  },
  {
    id: "cloud-4",
    title: "DEVOPS",
    description: "End-to-end CI/CD pipelines, automation, and infrastructure as code.",
    dotColor: "bg-green-500", themeText: "text-green-500", themeBorder: "border-green-500",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
    category: "Cloud & DevOps", tags: ["Jenkins", "CI/CD", "Ansible"], duration: "3 Months", 
    modules: ["Module 1 - Version Control", "Module 2 - CI/CD Pipelines", "Module 3 - Infrastructure as Code", "Module 4 - Monitoring & Logging"],
    overview: "Automate software delivery. Master continuous integration, continuous deployment, and configuration management.",
    learnings: ["Git & GitHub", "Jenkins Automation", "Terraform / Ansible", "Prometheus & Grafana"]
  },
  {
    id: "cloud-5",
    title: "DOCKER",
    description: "Containerization fundamentals, Docker compose, and building lightweight applications.",
    dotColor: "bg-blue-500", themeText: "text-blue-500", themeBorder: "border-blue-500",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    category: "Cloud & DevOps", tags: ["Docker", "Containers"], duration: "1 Month", 
    modules: ["Module 1 - Docker Basics", "Module 2 - Images & Containers", "Module 3 - Docker Compose", "Module 4 - Docker Swarm"],
    overview: "Learn containerization with Docker. Package, distribute, and run applications in isolated environments.",
    learnings: ["Containerization Concepts", "Building Dockerfiles", "Multi-container Apps", "Volume Management"]
  },
  {
    id: "cloud-6",
    title: "KUBERNETES",
    description: "Container orchestration, scaling, and managing microservices in production.",
    dotColor: "bg-blue-600", themeText: "text-blue-600", themeBorder: "border-blue-600",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
    category: "Cloud & DevOps", tags: ["Kubernetes", "K8s", "Orchestration"], duration: "2 Months", 
    modules: ["Module 1 - Kubernetes Architecture", "Module 2 - Pods & Deployments", "Module 3 - Services & Networking", "Module 4 - Helm & Production"],
    overview: "Master container orchestration. Deploy, scale, and manage containerized applications with Kubernetes.",
    learnings: ["K8s Cluster Setup", "Deployment Strategies", "Service Discovery", "Stateful Sets"]
  },

  // Data & Analytics
  {
    id: "data-1",
    title: "POWER BI",
    description: "Business intelligence and data visualization using Microsoft Power BI.",
    dotColor: "bg-yellow-500", themeText: "text-yellow-500", themeBorder: "border-yellow-500",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    category: "Data & Analytics", tags: ["Power BI", "DAX", "Data Viz"], duration: "2 Months", 
    modules: ["Module 1 - Data Preparation", "Module 2 - Data Modeling", "Module 3 - DAX Formulas", "Module 4 - Dashboard Design"],
    overview: "Transform complex data into actionable insights. Master data modeling, DAX, and create stunning interactive dashboards.",
    learnings: ["Data Cleaning (Power Query)", "Relational Data Modeling", "Advanced DAX Calculations", "Interactive Visualizations"]
  },
  {
    id: "data-2",
    title: "ADVANCED EXCEL",
    description: "Master complex formulas, pivot tables, macros, and data analysis in Excel.",
    dotColor: "bg-green-600", themeText: "text-green-600", themeBorder: "border-green-600",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/732/732220.png",
    category: "Data & Analytics", tags: ["Excel", "Data Analysis", "Macros"], duration: "1.5 Months", 
    modules: ["Module 1 - Advanced Formulas", "Module 2 - Data Validation & Formatting", "Module 3 - Pivot Tables & Charts", "Module 4 - Macros & VBA"],
    overview: "Become an Excel expert. Analyze large datasets, automate tasks, and create powerful financial or analytical models.",
    learnings: ["VLOOKUP/INDEX-MATCH", "Advanced Pivot Tables", "Data Visualization", "VBA Basics"]
  },
  {
    id: "data-3",
    title: "SQL",
    description: "Learn SQL tailored for data analysis and business intelligence.",
    dotColor: "bg-blue-400", themeText: "text-blue-400", themeBorder: "border-blue-400",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    category: "Data & Analytics", tags: ["SQL", "Analytics", "Queries"], duration: "1 Month", 
    modules: ["Module 1 - SQL Basics for Analytics", "Module 2 - Data Extraction", "Module 3 - Aggregations & Grouping", "Module 4 - Window Functions"],
    overview: "Extract, analyze, and manipulate large datasets using SQL to uncover hidden insights.",
    learnings: ["Data Extraction", "Complex Queries", "Window Functions", "Reporting"]
  },

  // Office & Business Skills
  {
    id: "office-1",
    title: "MS OFFICE",
    description: "Essential workplace tools including Word, Excel, PowerPoint, and Outlook.",
    dotColor: "bg-red-500", themeText: "text-red-500", themeBorder: "border-red-500",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/888/888874.png",
    category: "Office & Business Skills", tags: ["Word", "Excel", "PowerPoint"], duration: "1 Month", 
    modules: ["Module 1 - Microsoft Word", "Module 2 - Microsoft Excel", "Module 3 - Microsoft PowerPoint", "Module 4 - Outlook & Collaboration"],
    overview: "Gain proficiency in the most widely used office suite. Essential skills for every modern professional environment.",
    learnings: ["Document Formatting", "Spreadsheet Basics", "Presentation Design", "Email Management"]
  },
  {
    id: "office-2",
    title: "TALLY",
    description: "Comprehensive accounting, GST, and inventory management with Tally Prime.",
    dotColor: "bg-orange-500", themeText: "text-orange-500", themeBorder: "border-orange-500",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/tally-1.svg",
    category: "Office & Business Skills", tags: ["Tally", "Accounting", "GST"], duration: "2 Months", 
    modules: ["Module 1 - Basic Accounting", "Module 2 - Inventory Management", "Module 3 - Taxation & GST", "Module 4 - Payroll Management"],
    overview: "Master computerized accounting with Tally. Perfect for aspiring accountants and business owners.",
    learnings: ["Journal Entries & Ledgers", "GST Filing & Compliance", "Inventory Tracking", "Financial Reporting"]
  },
  {
    id: "office-3",
    title: "DTP",
    description: "Desktop Publishing course covering Photoshop, CorelDRAW, and PageMaker.",
    dotColor: "bg-purple-500", themeText: "text-purple-500", themeBorder: "border-purple-500",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/1055/1055661.png",
    category: "Office & Business Skills", tags: ["DTP", "Design", "Photoshop"], duration: "2 Months", 
    modules: ["Module 1 - Graphic Design Basics", "Module 2 - Adobe Photoshop", "Module 3 - CorelDRAW", "Module 4 - Print Production"],
    overview: "Learn professional layout and design skills for print and digital media.",
    learnings: ["Photo Editing", "Vector Graphics", "Page Layout", "Typography"]
  },
  {
    id: "office-4",
    title: "DCA",
    description: "Diploma in Computer Applications covering essential software and OS skills.",
    dotColor: "bg-blue-500", themeText: "text-blue-500", themeBorder: "border-blue-500",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/2888/2888407.png",
    category: "Office & Business Skills", tags: ["DCA", "Computers", "Basics"], duration: "6 Months", 
    modules: ["Module 1 - Computer Fundamentals", "Module 2 - Windows & Internet", "Module 3 - MS Office Suite", "Module 4 - Basic Financial Accounting"],
    overview: "Gain comprehensive knowledge of basic computer applications required in all professional fields.",
    learnings: ["OS Operations", "Word Processing", "Internet Browsing", "Data Entry"]
  },
  {
    id: "office-5",
    title: "PGDCA",
    description: "Post Graduate Diploma in Computer Applications with advanced topics.",
    dotColor: "bg-indigo-600", themeText: "text-indigo-600", themeBorder: "border-indigo-600",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    category: "Office & Business Skills", tags: ["PGDCA", "Diploma", "IT"], duration: "1 Year", 
    modules: ["Module 1 - IT Foundations", "Module 2 - Programming Basics", "Module 3 - Database Management", "Module 4 - Web Design Basics"],
    overview: "An advanced diploma covering a broad spectrum of IT subjects for comprehensive career preparation.",
    learnings: ["Software Development", "Database Administration", "Network Basics", "Web Publishing"]
  },
  {
    id: "office-6",
    title: "HARDWARE & NETWORKING",
    description: "Computer hardware assembly, troubleshooting, and network administration.",
    dotColor: "bg-gray-700", themeText: "text-gray-700", themeBorder: "border-gray-700",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png",
    category: "Office & Business Skills", tags: ["Hardware", "Networking", "IT Support"], duration: "3 Months", 
    modules: ["Module 1 - PC Assembly", "Module 2 - OS Troubleshooting", "Module 3 - LAN/WAN Basics", "Module 4 - Network Security"],
    overview: "Become an IT support professional. Learn to assemble, repair, and network computer systems.",
    learnings: ["System Assembly", "Troubleshooting", "IP Addressing", "Router Configuration"]
  },

  // English & Exams
  {
    id: "eng-1",
    title: "SPOKEN ENGLISH",
    description: "Improve fluency, grammar, and pronunciation for daily communication.",
    dotColor: "bg-indigo-400", themeText: "text-indigo-400", themeBorder: "border-indigo-400",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/3269/3269817.png",
    category: "English & Exams", tags: ["Speaking", "Grammar", "Fluency"], duration: "2 Months", 
    modules: ["Level 1: Basic (Build strong foundations)", "Level 2: Advanced (Enhance fluency and confidence)", "Level 3: Speaking Skills (Speak with clarity and impact)"],
    overview: "Speak English confidently and fluently in any situation. Focus on practical communication and reducing hesitation through our 3-Levels approach.",
    learnings: ["Correct Grammar Usage", "Enhanced Vocabulary", "Clear Pronunciation", "Public Speaking Skills"]
  },
  {
    id: "eng-2a",
    title: "IELTS",
    description: "Comprehensive preparation for the IELTS English proficiency test.",
    dotColor: "bg-red-500", themeText: "text-red-500", themeBorder: "border-red-500",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/4613/4613247.png",
    category: "English & Exams", tags: ["IELTS", "Study Abroad"], duration: "2 Months", 
    modules: ["Module 1 - Reading", "Module 2 - Listening", "Module 3 - Writing", "Module 4 - Speaking"],
    overview: "Achieve your target band score. Intensive training and mock tests for IELTS.",
    learnings: ["Test Formats", "Time Management", "Advanced Vocabulary", "Essay Structuring"]
  },
  {
    id: "eng-2b",
    title: "TOEFL",
    description: "Preparation for the TOEFL standardized test for academic English.",
    dotColor: "bg-blue-500", themeText: "text-blue-500", themeBorder: "border-blue-500",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/4613/4613247.png",
    category: "English & Exams", tags: ["TOEFL", "Study Abroad"], duration: "2 Months", 
    modules: ["Module 1 - Reading", "Module 2 - Listening", "Module 3 - Speaking", "Module 4 - Writing"],
    overview: "Master the internet-based test format and secure your target score for university admissions.",
    learnings: ["iBT Strategies", "Academic Vocabulary", "Integrated Speaking", "Note-taking"]
  },
  {
    id: "eng-2c",
    title: "GRE",
    description: "Extensive coaching for the GRE quantitative and verbal reasoning.",
    dotColor: "bg-purple-600", themeText: "text-purple-600", themeBorder: "border-purple-600",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/4613/4613247.png",
    category: "English & Exams", tags: ["GRE", "Grad School"], duration: "3 Months", 
    modules: ["Module 1 - Quantitative Reasoning", "Module 2 - Verbal Reasoning", "Module 3 - Analytical Writing", "Module 4 - Mock Tests"],
    overview: "Score high on the GRE to enter top graduate programs globally.",
    learnings: ["Math Shortcuts", "Vocabulary Context", "Essay Analysis", "Adaptive Testing"]
  },
  {
    id: "eng-2d",
    title: "PTE",
    description: "Computer-based PTE Academic English language test preparation.",
    dotColor: "bg-teal-500", themeText: "text-teal-500", themeBorder: "border-teal-500",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/4613/4613247.png",
    category: "English & Exams", tags: ["PTE", "Visas & Study"], duration: "1.5 Months", 
    modules: ["Module 1 - Speaking & Writing", "Module 2 - Reading", "Module 3 - Listening", "Module 4 - Full Mock Tests"],
    overview: "Get familiar with the PTE scoring algorithms and strategies to maximize your score.",
    learnings: ["Algorithm Optimization", "Pronunciation", "Fluency", "Grammar"]
  },
  {
    id: "eng-2e",
    title: "SELT",
    description: "Secure English Language Test (SELT) preparation for UK Visas and Immigration.",
    dotColor: "bg-indigo-500", themeText: "text-indigo-500", themeBorder: "border-indigo-500",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/4613/4613247.png",
    category: "English & Exams", tags: ["SELT", "UKVI"], duration: "1 Month", 
    modules: ["Module 1 - Speaking", "Module 2 - Listening", "Module 3 - Life Skills", "Module 4 - Exam Prep"],
    overview: "Dedicated coaching for UKVI approved SELT exams to guarantee visa success.",
    learnings: ["Exam Format", "Confidence Building", "Listening Skills", "Conversation"]
  },
  {
    id: "eng-3",
    title: "DUOLINGO ENGLISH TEST",
    description: "Focused practice for the Duolingo English Test (DET).",
    dotColor: "bg-green-500", themeText: "text-green-500", themeBorder: "border-green-500",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968846.png",
    category: "English & Exams", tags: ["Duolingo", "DET"], duration: "1 Month", 
    modules: ["Module 1 - DET Format Overview", "Module 2 - Literacy & Comprehension", "Module 3 - Conversation & Production", "Module 4 - Full Mock Tests"],
    overview: "Prepare effectively for the Duolingo English Test with targeted exercises and adaptive practice.",
    learnings: ["Adaptive Testing Strategies", "Quick Response Techniques", "Interview Preparation", "Scoring Criteria"]
  },
  {
    id: "eng-4b",
    title: "CELPIP & SAT",
    description: "Preparation for CELPIP (CLEPIP) language test and SAT reasoning test.",
    dotColor: "bg-pink-500", themeText: "text-pink-500", themeBorder: "border-pink-500",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/3426/3426653.png",
    category: "English & Exams", tags: ["CELPIP", "SAT", "Study Abroad"], duration: "2 Months", 
    modules: ["Module 1 - SAT Mathematics", "Module 2 - SAT Evidence-Based Reading", "Module 3 - CELPIP General", "Module 4 - Full Mock Tests"],
    overview: "Get comprehensive training for the CELPIP Canadian immigration test and the SAT for undergraduate admissions.",
    learnings: ["Immigration Test Strategies", "College Admission Tests", "Analytical Thinking", "Reading Comprehension"]
  },
  {
    id: "eng-4",
    title: "GRAMMAR & COMMUNICATION SKILLS",
    description: "Master English grammar and essential communication skills for professional and academic success.",
    dotColor: "bg-blue-600", themeText: "text-blue-600", themeBorder: "border-blue-600",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/3593/3593922.png",
    category: "English & Exams", tags: ["Grammar", "Communication", "Writing"], duration: "1.5 Months", 
    modules: ["Module 1 - Advanced Grammar Rules", "Module 2 - Sentence Construction", "Module 3 - Professional Writing", "Module 4 - Verbal Communication"],
    overview: "Enhance your overall English proficiency with a strong focus on correct grammar usage and effective communication.",
    learnings: ["Grammar Mechanics", "Business Email Writing", "Effective Speaking", "Vocabulary Expansion"]
  },

  // Academic Coaching
  {
    id: "acad-1a",
    title: "SSC (CLASS 10 – SSC/CBSE)",
    description: "Board exam coaching for all subjects with personalized attention.",
    dotColor: "bg-rose-500", themeText: "text-rose-500", themeBorder: "border-rose-500",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/2097/2097068.png",
    category: "Academic Coaching", tags: ["SSC", "CBSE", "Class 10"], duration: "Academic Year", 
    modules: ["Module 1 - Mathematics", "Module 2 - Sciences", "Module 3 - Social Studies", "Module 4 - Languages"],
    overview: "Comprehensive support for Class 10 board examinations. We focus on conceptual clarity and exam strategies.",
    learnings: ["Subject Mastery", "Previous Year Papers", "Time Management", "Conceptual Clarity"]
  },
  {
    id: "acad-2",
    title: "INTERMEDIATE (1ST & 2ND YEAR)",
    description: "Dedicated coaching for +1 and +2 students across science and commerce streams.",
    dotColor: "bg-fuchsia-500", themeText: "text-fuchsia-500", themeBorder: "border-fuchsia-500",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/3333/3333355.png",
    category: "Academic Coaching", tags: ["Inter", "+2", "Pre-University"], duration: "Academic Year", 
    modules: ["Module 1 - MPC/BIPC/MEC/CEC", "Module 2 - Core Subjects", "Module 3 - Practical Exams Prep", "Module 4 - Revision Sessions"],
    overview: "Strong foundation for pre-university students to score high in board exams and prepare for entrances.",
    learnings: ["In-depth Topic Coverage", "Regular Assessments", "Board Exam Focus", "Doubt Clearing Sessions"]
  },
  {
    id: "acad-3",
    title: "IIT-JEE & EAMCET COACHING",
    description: "Intensive coaching for IIT-JEE, EAMCET engineering, and medical entrance exams.",
    dotColor: "bg-violet-500", themeText: "text-violet-500", themeBorder: "border-violet-500",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/1048/1048950.png",
    category: "Academic Coaching", tags: ["IIT-JEE", "EAMCET", "Entrance Exams"], duration: "6 Months", 
    modules: ["Module 1 - Physics Concepts", "Module 2 - Chemistry Deep Dive", "Module 3 - Mathematics/Biology", "Module 4 - Mock Tests"],
    overview: "Crack IIT-JEE and EAMCET with our specialized coaching program designed by expert faculty.",
    learnings: ["Shortcut Techniques", "Speed & Accuracy", "Extensive Practice", "Exam Strategy"]
  },
  {
    id: "acad-4",
    title: "ALL SUBJECTS (1ST–12TH)",
    description: "Holistic academic support and tuition for students from grade 1 to 12.",
    dotColor: "bg-pink-500", themeText: "text-pink-500", themeBorder: "border-pink-500",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png",
    category: "Academic Coaching", tags: ["School Tuition", "All Grades"], duration: "Academic Year", 
    modules: ["Module 1 - Foundation Building", "Module 2 - Weekend & Regular Tests", "Module 3 - Performance Reports", "Module 4 - One to One Mentoring"],
    overview: "Consistent academic support to ensure your child excels. Includes Weekend Tests, Regular Tests, Performance Reports, and One to One Mentoring with Flexible Schedules.",
    learnings: ["Homework Assistance", "Weekend Tests", "Performance Reports", "1:1 Mentoring"]
  },
  {
    id: "acad-5",
    title: "ENGINEERING SUBJECTS",
    description: "Specialized tuition for B.Tech/B.E. core subjects and programming languages.",
    dotColor: "bg-sky-500", themeText: "text-sky-500", themeBorder: "border-sky-500",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/9127/9127022.png",
    category: "Academic Coaching", tags: ["B.Tech", "Engineering"], duration: "Semester-wise", 
    modules: ["Module 1 - Computer Science", "Module 2 - Electronics", "Module 3 - Mechanical/Civil Basics", "Module 4 - Project Guidance"],
    overview: "Clear your engineering backlogs or score top grades with our expert engineering tuition.",
    learnings: ["Core Engineering Concepts", "Semester Exam Prep", "Practical Applications", "Lab VIVA Prep"]
  }
];

export const CATEGORIES = [
  "Job-Ready Programs",
  "IT & Programming",
  "Cloud & DevOps",
  "Data & Analytics",
  "Office & Business Skills",
  "English & Exams",
  "Academic Coaching"
];
