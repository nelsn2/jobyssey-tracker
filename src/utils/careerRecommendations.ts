export interface CareerRecommendation {
  title: string;
  description: string;
  salaryRange: string;
  skills: string[];
  matchScore: number;
}

export const careerPaths: Record<string, CareerRecommendation[]> = {
  tech: [
    {
      title: "Cloud Solutions Architect",
      description: "Design and implement scalable cloud infrastructure solutions",
      salaryRange: "$120,000 - $180,000",
      skills: ["AWS", "Azure", "System Design", "DevOps"],
      matchScore: 95
    },
    {
      title: "Machine Learning Engineer",
      description: "Develop and deploy AI/ML models for production environments",
      salaryRange: "$130,000 - $190,000",
      skills: ["Python", "TensorFlow", "Deep Learning", "MLOps"],
      matchScore: 88
    }
  ],
  business: [
    {
      title: "Product Operations Manager",
      description: "Optimize product development and delivery processes",
      salaryRange: "$90,000 - $140,000",
      skills: ["Project Management", "Agile", "Analytics", "Leadership"],
      matchScore: 92
    },
    {
      title: "Business Intelligence Analyst",
      description: "Transform data into actionable business insights",
      salaryRange: "$85,000 - $130,000",
      skills: ["SQL", "Data Visualization", "Statistical Analysis"],
      matchScore: 85
    }
  ],
  marketing: [
    {
      title: "Digital Marketing Strategist",
      description: "Create and execute comprehensive digital marketing campaigns",
      salaryRange: "$75,000 - $120,000",
      skills: ["SEO", "Content Strategy", "Analytics", "Social Media"],
      matchScore: 90
    },
    {
      title: "Marketing Analytics Manager",
      description: "Drive data-driven marketing decisions and optimization",
      salaryRange: "$95,000 - $150,000",
      skills: ["Data Analysis", "Marketing Automation", "CRM"],
      matchScore: 87
    }
  ],
  manufacturing: [
    {
      title: "Process Improvement Engineer",
      description: "Optimize manufacturing processes and workflows",
      salaryRange: "$85,000 - $130,000",
      skills: ["Lean Six Sigma", "Quality Control", "Industrial Engineering"],
      matchScore: 93
    },
    {
      title: "Manufacturing Technology Lead",
      description: "Lead implementation of new manufacturing technologies",
      salaryRange: "$100,000 - $160,000",
      skills: ["Automation", "Industry 4.0", "Project Management"],
      matchScore: 89
    }
  ]
};