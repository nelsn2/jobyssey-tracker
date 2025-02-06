export interface CareerRecommendation {
  title: string;
  description: string;
  salaryRange: string;
  skills: string[];
  matchScore: number;
  workLocation: string;
  stressLevel: string;
}

export interface CareerPreferences {
  field: string;
  degree: string;
  preferredSkills: string[];
  workLocation: string;
  maxStressLevel: string;
}

export const AVAILABLE_SKILLS = [
  "JavaScript",
  "Python",
  "React",
  "Data Analysis",
  "Project Management",
  "Communication",
  "Leadership",
  "Problem Solving",
  "Design",
  "Marketing",
  "Sales",
  "Customer Service",
  "Machine Learning",
  "Cloud Computing",
  "DevOps",
  "UI/UX Design",
  "Content Strategy",
  "SEO",
  "Digital Marketing",
  "Business Analysis"
];

export const careerPaths: Record<string, CareerRecommendation[]> = {
  tech: [
    {
      title: "Cloud Solutions Architect",
      description: "Design and implement scalable cloud infrastructure solutions",
      salaryRange: "$120,000 - $180,000",
      skills: ["AWS", "Azure", "System Design", "DevOps"],
      matchScore: 95,
      workLocation: "Hybrid",
      stressLevel: "Medium"
    },
    {
      title: "Machine Learning Engineer",
      description: "Develop and deploy AI/ML models for production environments",
      salaryRange: "$130,000 - $190,000",
      skills: ["Python", "TensorFlow", "Deep Learning", "MLOps"],
      matchScore: 88,
      workLocation: "Remote",
      stressLevel: "Low"
    },
    {
      title: "Full Stack Developer",
      description: "Build end-to-end web applications and services",
      salaryRange: "$90,000 - $150,000",
      skills: ["JavaScript", "React", "Node.js", "SQL"],
      matchScore: 92,
      workLocation: "Hybrid",
      stressLevel: "Medium"
    },
    {
      title: "DevOps Engineer",
      description: "Automate and optimize deployment pipelines and infrastructure",
      salaryRange: "$110,000 - $170,000",
      skills: ["Docker", "Kubernetes", "CI/CD", "Cloud Platforms"],
      matchScore: 90,
      workLocation: "Remote",
      stressLevel: "High"
    },
    {
      title: "UI/UX Designer",
      description: "Create intuitive and engaging user interfaces and experiences",
      salaryRange: "$80,000 - $140,000",
      skills: ["Design", "Figma", "User Research", "Prototyping"],
      matchScore: 85,
      workLocation: "Hybrid",
      stressLevel: "Low"
    }
  ],
  business: [
    {
      title: "Product Operations Manager",
      description: "Optimize product development and delivery processes",
      salaryRange: "$90,000 - $140,000",
      skills: ["Project Management", "Agile", "Analytics", "Leadership"],
      matchScore: 92,
      workLocation: "In Office",
      stressLevel: "High"
    },
    {
      title: "Business Intelligence Analyst",
      description: "Transform data into actionable business insights",
      salaryRange: "$85,000 - $130,000",
      skills: ["SQL", "Data Visualization", "Statistical Analysis"],
      matchScore: 85,
      workLocation: "Hybrid",
      stressLevel: "Medium"
    },
    {
      title: "Management Consultant",
      description: "Advise organizations on business strategy and operations",
      salaryRange: "$100,000 - $180,000",
      skills: ["Strategy", "Problem Solving", "Communication", "Analysis"],
      matchScore: 88,
      workLocation: "Hybrid",
      stressLevel: "High"
    },
    {
      title: "Financial Analyst",
      description: "Analyze financial data and provide investment recommendations",
      salaryRange: "$75,000 - $120,000",
      skills: ["Financial Modeling", "Excel", "Data Analysis", "Forecasting"],
      matchScore: 86,
      workLocation: "In Office",
      stressLevel: "Medium"
    },
    {
      title: "Supply Chain Manager",
      description: "Optimize logistics and supply chain operations",
      salaryRange: "$90,000 - $150,000",
      skills: ["Logistics", "Inventory Management", "Process Optimization"],
      matchScore: 84,
      workLocation: "In Office",
      stressLevel: "High"
    }
  ],
  marketing: [
    {
      title: "Digital Marketing Strategist",
      description: "Create and execute comprehensive digital marketing campaigns",
      salaryRange: "$75,000 - $120,000",
      skills: ["SEO", "Content Strategy", "Analytics", "Social Media"],
      matchScore: 90,
      workLocation: "Remote",
      stressLevel: "Medium"
    },
    {
      title: "Marketing Analytics Manager",
      description: "Drive data-driven marketing decisions and optimization",
      salaryRange: "$95,000 - $150,000",
      skills: ["Data Analysis", "Marketing Automation", "CRM"],
      matchScore: 87,
      workLocation: "In Office",
      stressLevel: "High"
    },
    {
      title: "Content Marketing Manager",
      description: "Develop and execute content strategy across channels",
      salaryRange: "$70,000 - $120,000",
      skills: ["Content Creation", "SEO", "Social Media", "Editorial"],
      matchScore: 86,
      workLocation: "Remote",
      stressLevel: "Low"
    },
    {
      title: "Brand Manager",
      description: "Develop and maintain brand strategy and identity",
      salaryRange: "$85,000 - $140,000",
      skills: ["Branding", "Marketing Strategy", "Project Management"],
      matchScore: 88,
      workLocation: "Hybrid",
      stressLevel: "Medium"
    },
    {
      title: "Growth Marketing Manager",
      description: "Drive user acquisition and retention through data-driven strategies",
      salaryRange: "$90,000 - $150,000",
      skills: ["Growth Hacking", "Analytics", "A/B Testing", "User Acquisition"],
      matchScore: 89,
      workLocation: "Remote",
      stressLevel: "High"
    }
  ],
  manufacturing: [
    {
      title: "Process Improvement Engineer",
      description: "Optimize manufacturing processes and workflows",
      salaryRange: "$85,000 - $130,000",
      skills: ["Lean Six Sigma", "Quality Control", "Industrial Engineering"],
      matchScore: 93,
      workLocation: "Hybrid",
      stressLevel: "Medium"
    },
    {
      title: "Manufacturing Technology Lead",
      description: "Lead implementation of new manufacturing technologies",
      salaryRange: "$100,000 - $160,000",
      skills: ["Automation", "Industry 4.0", "Project Management"],
      matchScore: 89,
      workLocation: "In Office",
      stressLevel: "High"
    },
    {
      title: "Quality Assurance Manager",
      description: "Ensure product quality and compliance with standards",
      salaryRange: "$80,000 - $120,000",
      skills: ["Quality Control", "ISO Standards", "Process Improvement"],
      matchScore: 87,
      workLocation: "In Office",
      stressLevel: "Medium"
    },
    {
      title: "Production Supervisor",
      description: "Oversee daily manufacturing operations and team management",
      salaryRange: "$65,000 - $95,000",
      skills: ["Team Management", "Operations", "Safety Protocols"],
      matchScore: 85,
      workLocation: "In Office",
      stressLevel: "High"
    },
    {
      title: "Industrial Designer",
      description: "Design products for manufacturability and user experience",
      salaryRange: "$70,000 - $110,000",
      skills: ["CAD", "Product Design", "3D Modeling", "Prototyping"],
      matchScore: 86,
      workLocation: "Hybrid",
      stressLevel: "Low"
    }
  ]
};