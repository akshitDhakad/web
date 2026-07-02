import type { JobDetail, JobDetailSection, JobSummary } from "@/features/jobs/types/job";

const JOB_EXCERPT =
  "As a Teller at Capital you are the face of the credit union. It's more than just processing financial transactions. It's building lasting relationships and helping others to ...";

const DEFAULT_DESCRIPTION = {
  publishedOn: "31 Jan 2023",
  vacancy: "Not specific",
  experience: "2 to 3 year(s)",
  age: "Age at most 28 years",
  jobLocation: "Dhaka",
  salary: "Negotiable",
  applicationDeadline: "17 Feb 2023",
  description: [
    {
      title: "Position Purpose",
      paragraphs: [
        "As a Teller at Capital you are the face of the credit union. It's more than just processing financial transactions. It's building lasting relationships and helping others to improve their financial well-being. If a philosophy of \"people helping people\" fits with your personal philosophy, we're the place for you!",
      ],
    },
    {
      title: "Job Responsibilities",
      items: [
        "Achieve individual target on daily, weekly & monthly basis set by respective Department",
        "Ensure smooth business operation at Agent Banking Centre maintaining compliance",
        "Follow up day to day activities of Agent Banking Centre and being in touch with Head office regarding any instruction/circular/guideline",
        "Rapport build up with local potential customers to promote financial literacy",
        "Ensure proper service provided to each and every customers as par bank policy",
        "Collect and complete applications with all required documents from good and prospective Agent",
      ],
    },
    {
      title: "Educational Requirements",
      items: ["Bachelor's degree in Public Relations, Journalism or related field."],
    },
    {
      title: "Experience Requirements",
      items: ["At least 1 year(s)", "Freshers are also encouraged to apply."],
    },
    {
      title: "Additional Requirements",
      items: [
        "Age at most 28 years",
        "Both males and females are allowed to apply",
        "The applicants should have experience in Banks or Financial Institutions",
      ],
    },
    {
      title: "Compensation & Other Benefits",
      items: ["Festival Bonus: 2", "As per policy of the Bank"],
    },
  ] satisfies JobDetailSection[],
  applicationNote:
    "Applications must be submitted through the mentioned link on the page by clicking on Apply Button.",
  applicationRequirements: [
    "All applicants must send a cover letter along with an updated CV (we encourage CV no longer than four pages) in English.",
    "Mentioning three referees' details of your present supervisor and HR along with past employment's supervisor with CV.",
  ],
  disclaimer:
    "Application s sent by email will not be considered. In addition, DRC doesn't charge any fee for any of its recruitment process & believes in equal opportunity in employment regardless.",
};

export const DEFAULT_JOB_SLUG = "officer-admin-and-finance-lrs-position";

export const JOB_LISTINGS: JobSummary[] = [
  {
    slug: "manager-products-marketing",
    title: "Manager- Products & Marketing",
    location: "NY, United States",
    category: "Branch Banking",
    schedule: "Full-time",
    postedAt: "Jan 30, 2021",
    excerpt: JOB_EXCERPT,
  },
  {
    slug: DEFAULT_JOB_SLUG,
    title: "Officer Admin and Finance (LRS Position)",
    location: "NY, United States",
    category: "Administration",
    schedule: "Full-time",
    postedAt: "Jan 30, 2021",
    excerpt: JOB_EXCERPT,
  },
  {
    slug: "head-of-information-and-technology",
    title: "Head of Information and Technology",
    location: "NY, United States",
    category: "Technology",
    schedule: "Full-time",
    postedAt: "Jan 30, 2021",
    excerpt: JOB_EXCERPT,
  },
  {
    slug: "assistant-accounts-officer",
    title: "Assistant Accounts Officer",
    location: "NY, United States",
    category: "Accounts Officer",
    schedule: "Full-time",
    postedAt: "Jan 30, 2021",
    excerpt: JOB_EXCERPT,
  },
  {
    slug: "manager-products-marketing-retail-business",
    title: "Manager- Products & Marketing, Retail Business",
    location: "NY, United States",
    category: "Administration",
    schedule: "Full-time",
    postedAt: "Jan 30, 2021",
    excerpt: JOB_EXCERPT,
  },
  {
    slug: "assistant-branch-manager-ii-senior",
    title: "Assistant Branch Manager II (Senior)",
    location: "NY, United States",
    category: "Branch Banking",
    schedule: "Full-time",
    postedAt: "Jan 30, 2021",
    excerpt: JOB_EXCERPT,
  },
  {
    slug: "investment-banking-technology-analyst",
    title: "Investment Banking - Technology, Analyst",
    location: "NY, United States",
    category: "Branch Banking",
    schedule: "Full-time",
    postedAt: "Jan 30, 2021",
    excerpt: JOB_EXCERPT,
  },
  {
    slug: "contact-center-representative",
    title: "Contact Center Representative",
    location: "NY, United States",
    category: "Branch Banking",
    schedule: "Full-time",
    postedAt: "Jan 30, 2021",
    excerpt: JOB_EXCERPT,
  },
];

export const FEATURED_JOB_SLUGS = [
  "manager-products-marketing",
  "investment-banking-technology-analyst",
  "contact-center-representative",
  "its-desktop-technician",
] as const;

const FEATURED_MANAGER_DESCRIPTION: JobDetailSection = {
  title: "Featured Overview",
  paragraphs: [
    "We are looking for a Product Marketing Manager to lead our outbound marketing activities. You'll be responsible for presenting our products in ways that will strengthen our brand and boost sales.",
    "Your goal will be to develop and implement the most profitable plans to position.",
  ],
};

const FEATURED_JOBS_EXTRA: Record<string, Partial<JobDetail>> = {
  "manager-products-marketing": {
    description: [FEATURED_MANAGER_DESCRIPTION, ...DEFAULT_DESCRIPTION.description.slice(1)],
  },
  "its-desktop-technician": {
    slug: "its-desktop-technician",
    title: "ITS Desktop Technician",
    location: "NY, United States",
    category: "Branch Banking",
    schedule: "Full-time",
    postedAt: "Jan 30, 2021",
    excerpt: JOB_EXCERPT,
  },
};

export function getJobBySlug(slug: string): JobDetail | undefined {
  const summary = JOB_LISTINGS.find((job) => job.slug === slug);
  const featuredExtra = FEATURED_JOBS_EXTRA[slug];

  if (!summary && !featuredExtra?.slug) {
    return undefined;
  }

  const base: JobSummary = summary ?? {
    slug: featuredExtra!.slug!,
    title: featuredExtra!.title!,
    location: featuredExtra!.location!,
    category: featuredExtra!.category!,
    schedule: featuredExtra!.schedule ?? "Full-time",
    postedAt: featuredExtra!.postedAt ?? "Jan 30, 2021",
    excerpt: featuredExtra!.excerpt ?? JOB_EXCERPT,
  };

  return {
    ...base,
    ...DEFAULT_DESCRIPTION,
    ...featuredExtra,
    description: featuredExtra?.description ?? DEFAULT_DESCRIPTION.description,
  };
}

export function getFeaturedJobs(): JobDetail[] {
  return FEATURED_JOB_SLUGS.map((slug) => getJobBySlug(slug)).filter(
    (job): job is JobDetail => Boolean(job),
  );
}

export function getJobHref(slug: string): string {
  return `/job-application/${slug}`;
}

export function getAllJobSlugs(): string[] {
  const listingSlugs = JOB_LISTINGS.map((job) => job.slug);
  const featuredOnly = FEATURED_JOB_SLUGS.filter((slug) => !listingSlugs.includes(slug));
  return [...listingSlugs, ...featuredOnly];
}
