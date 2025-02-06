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
    }
  ]
};
