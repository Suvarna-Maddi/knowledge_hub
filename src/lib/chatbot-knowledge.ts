export interface ChatResponse {
  text: string;
  options?: string[];
}

export function getChatbotResponse(userInput: string): ChatResponse {
  const lowerInput = userInput.toLowerCase();

  // 1. GREETINGS
  if (/(hi|hello|hey|greetings|morning|afternoon|evening)/.test(lowerInput) && lowerInput.length < 20) {
    return {
      text: "Hello! Welcome to Knowledge Hub. I'm your AI assistant. I can answer questions about our courses, trainers, placements, fees, and location. How can I help you today?",
      options: ["What courses do you offer?", "Where are you located?", "Contact details"]
    };
  }

  // 2. MENTORS & TRAINERS
  if (/(faculty|trainer|teacher|mentor|instructor|syed zia|priya|rajesh|anjali)/.test(lowerInput)) {
    return {
      text: "We have highly experienced industry professionals as trainers:\n• Syed Zia: Veteran Trainer (20+ yrs exp)\n• Priya Sharma: Cloud & DevOps Architect (8+ yrs exp)\n• Rajesh Kulkarni: Data Analytics Lead (9+ yrs exp)\n• Anjali Rao: IELTS & Corporate Fluency Master (7+ yrs exp)",
      options: ["What courses do you offer?"]
    };
  }

  // 3. CERTIFICATIONS & QUALITY
  if (/(certificate|certification|iso|accreditation|recognized|quality)/.test(lowerInput)) {
    return {
      text: "Knowledge Hub provides recognized course completion certificates. We are proud to be ISO 9001:2015 and ISO 29990:2010 Certified, ensuring top-tier education quality.",
      options: ["Tell me about Placements"]
    };
  }

  // 4. IELTS / ENGLISH / OVERSEAS
  if (/(english|spoken|communication|soft skill|ielts|toefl|pte|gre|duolingo|abroad|visa)/.test(lowerInput)) {
    return {
      text: "Our English & Competitive Exams program is led by expert trainers. We offer:\n• Spoken English & Fluency\n• IELTS (Targeting 7.5+ Band)\n• TOEFL, GRE, PTE, and Duolingo Prep\nOur students have achieved 8.0 Bands in their first attempt with our small-batch focus!",
      options: ["Contact details", "Other courses"]
    };
  }

  // 5. IT & PROGRAMMING
  if (/(software|coding|programming|python|java|web|fullstack|c\+\+|dsa|\.net|oracle|sql)/.test(lowerInput)) {
    return {
      text: "Our IT & Programming courses include:\n• Python Full Stack Development\n• Java Enterprise Stack\n• C, C++ & DSA\n• .NET Framework\n• Oracle DB & SQL\nTraining is 100% practical with live projects and 1:1 mentorship.",
      options: ["Tell me about Placements", "Other courses"]
    };
  }

  // 6. CLOUD & DEVOPS
  if (/(cloud|devops|aws|azure|gcp|docker|kubernetes|ci\/cd)/.test(lowerInput)) {
    return {
      text: "Our Cloud & DevOps program covers AWS Cloud Architecture, Microsoft Azure, GCP, Docker, Kubernetes, and CI/CD Pipelines. You'll work on real EC2 clusters and container deployments in our live lab.",
      options: ["Tell me about Placements", "Other courses"]
    };
  }

  // 7. DATA ANALYTICS & OFFICE SKILLS
  if (/(data|analytics|excel|power bi|tableau|ms office|tally|gst|dtp|dca|hardware|networking)/.test(lowerInput)) {
    return {
      text: "We offer powerful courses in Data & Office Skills:\n• Data Analytics (Power BI, Advanced Excel, SQL)\n• Office Skills (MS Office Mastery, Tally Prime with GST, DTP)\n• DCA/PGDCA & Hardware Networking.",
      options: ["Other courses", "Contact details"]
    };
  }

  // 8. ACADEMIC COACHING (TUITIONS)
  if (/(school|tuition|academic|ssc|cbse|icse|intermediate|mpc|bipc|eamcet|engineering)/.test(lowerInput)) {
    return {
      text: "We offer rigorous Academic Coaching for:\n• SSC, CBSE & ICSE (1st to 12th Class)\n• Intermediate 1st & 2nd Year (MPC/BiPC)\n• EAMCET Entrance Coaching\n• Engineering Core Subjects\nWe conduct regular weekly mock tests to track student performance.",
      options: ["Contact details"]
    };
  }

  // 9. GENERAL COURSES OVERVIEW
  if (/(course|learn|training|teach|classes|subject|program|offer)/.test(lowerInput)) {
    return {
      text: "At Knowledge Hub, we offer 6 main domains:\n1. IT & Programming (Python, Java)\n2. Cloud & DevOps (AWS, Azure)\n3. Data & Analytics (Power BI, Excel)\n4. Office & Computer Skills (Tally, MS Office)\n5. English & Exams (Spoken English, IELTS, GRE)\n6. Academic Coaching (Tuitions, EAMCET)\n\nWhich one are you interested in?",
      options: ["IT & Programming", "English & IELTS", "Academic Coaching"]
    };
  }

  // 10. PLACEMENTS, JOBS & SERVICES
  if (/(placement|job|career|interview|hire|hiring|internship|resume)/.test(lowerInput)) {
    return {
      text: "We provide 100% Placement Assistance! Our services include:\n• Resume & Portfolio Building\n• 1:1 Corporate Mock Interviews\n• Active Hiring Referrals\n• Internship Opportunities\nOur graduates are currently working as Software Engineers, Cloud Associates, and Data Analysts in top companies.",
      options: ["What courses do you offer?", "Contact details"]
    };
  }

  // 11. LOCATION, ADDRESS & FACILITIES
  if (/(location|address|where|located|place|facility|lab|practical)/.test(lowerInput)) {
    return {
      text: "📍 We are located at Suncity Main Road, Bandlaguda Jagir, Hyderabad.\nOur facility features modern computer labs where every student gets 1:1 hands-on execution. It's not just theory; it's 100% practical training.",
      options: ["Contact details", "Courses"]
    };
  }

  // 12. CONTACT & PHONE
  if (/(contact|phone|number|call|email|reach|message)/.test(lowerInput)) {
    return {
      text: "You can reach us easily!\n📞 Phone: 7997908465, 8790116519\n📧 Email: knowledgehub.suncity@gmail.com\n📍 Location: Suncity, Hyderabad\n\nYou can also click the WhatsApp button on the bottom right to chat with us directly.",
      options: ["Where are you located?", "Book Free Demo"]
    };
  }

  // 13. FEES, DURATION & DEMO
  if (/(fee|cost|price|duration|time|month|how long|demo|free)/.test(lowerInput)) {
    return {
      text: "Our course durations range from 1 to 6 months depending on the program. We have a highly affordable fee structure with flexible installments. \n\nBefore you enroll, we highly encourage you to attend a FREE 1-on-1 demo class with our expert trainers!",
      options: ["Book Free Demo", "Contact details"]
    };
  }
  
  // 14. TIMINGS & PROCESS
  if (/(timing|batch|weekend|morning|evening|schedule|process|how do i join)/.test(lowerInput)) {
    return {
      text: "We offer flexible timings:\n• Morning Batches (7:30 AM - 10:00 AM)\n• Regular Day Batches\n• Evening Batches (5:30 PM - 8:30 PM)\n• Weekend Batches for Working Professionals\n\nProcess: Counsel -> Learn -> Labs -> Certify -> Get Placed.",
      options: ["Contact details"]
    };
  }
  
  // 15. ABOUT KNOWLEDGE HUB
  if (/(about|who|what is knowledge hub|institution|why choose)/.test(lowerInput)) {
    return {
      text: "Knowledge Hub (est. 2017) is a premium ISO-certified EdTech institute in Suncity, Hyderabad. We specialize in transforming learners into industry-ready professionals through small batches, 100% practical labs, and expert mentorship.",
      options: ["What courses do you offer?", "Tell me about Placements"]
    };
  }

  // DEFAULT FALLBACK
  return {
    text: "That's a great question! While I don't have the exact answer right now, our expert counseling team would love to help you. You can reach us at 7997908465 or message us on WhatsApp for a quick reply.",
    options: ["Contact details", "What courses do you offer?", "Tell me about Placements"]
  };
}
