export interface JobSummary {
  slug: string;
  title: string;
  location: string;
  category: string;
  schedule: "Full-time" | "Part-time";
  postedAt: string;
  excerpt: string;
}

export interface JobDetailSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

export interface JobDetail extends JobSummary {
  publishedOn: string;
  vacancy: string;
  experience: string;
  age: string;
  jobLocation: string;
  salary: string;
  applicationDeadline: string;
  description: JobDetailSection[];
  applicationNote: string;
  applicationRequirements: string[];
  disclaimer: string;
}

export interface CareerFeatureCard {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
}

export interface RecruitmentStep {
  icon: string;
  title: string;
  description: string;
}

export interface JobCategory {
  label: string;
  count: number;
}
