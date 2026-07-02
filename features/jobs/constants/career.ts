import type { CareerFeatureCard, RecruitmentStep } from "@/features/jobs/types/job";

export const CAREER_HERO = {
  title: "Build your Career",
  jobsAvailable: 25,
} as const;

export const CAREER_INTRO = {
  title: "Forget the expected. Do the exceptional",
  description:
    "Banca is one of the world's leading international banks. Whether you are looking for a first job or taking the next step in your career, we offer many ways for you to realise your ambitions. Come and work with us and you'll have opportunities to make connections all over the world and help build the bank for the future.",
} as const;

export const CAREER_FEATURE_CARDS: CareerFeatureCard[] = [
  {
    title: "Who We Are",
    description:
      "Our purpose is to help people and businesses prosper. That's why we're simple and personal in all that we do.",
    buttonLabel: "Learn more",
    href: "/about",
  },
  {
    title: "Career Areas",
    description:
      "Unique skills and diverse backgrounds allow us to grow and prosper. See where you could make a difference.",
    buttonLabel: "Explore",
    href: "/jobs",
  },
  {
    title: "Student Opportunities",
    description:
      "Whether you're a student pursuing a graduate pursuing a career, put your talents to the test at Banca.",
    buttonLabel: "Find out more",
    href: "/jobs",
  },
  {
    title: "Benefits",
    description: "Learn more about the comprehensive benefits packages we offer to you and your family.",
    buttonLabel: "Discover",
    href: "#",
  },
  {
    title: "Diversity & Inclusion",
    description:
      "At Banca, we seek out diverse viewpoints. It's why we work hard to build an inclusive environment.",
    buttonLabel: "Read more",
    href: "#",
  },
  {
    title: "Join Our Community",
    description:
      "When you become a member of Banca's talent community, you'll receive job opportunity alerts here.",
    buttonLabel: "Join Now",
    href: "#",
  },
];

export const RECRUITMENT_STEPS: RecruitmentStep[] = [
  {
    icon: "/img/recruitment-proccess/icon-1.svg",
    title: "CV Submission",
    description: "Submit your CV or resume through our online portal if you meet our requirements.",
  },
  {
    icon: "/img/recruitment-proccess/icon-2.svg",
    title: "Phone Screening",
    description: "After looking at your CV you will be invited for a telephone interview at a time.",
  },
  {
    icon: "/img/recruitment-proccess/icon-3.svg",
    title: "Skill Assessment",
    description: "You will be invited at our head office to take a skills and knowledge assessment.",
  },
  {
    icon: "/img/recruitment-proccess/icon-4.svg",
    title: "Final Interview",
    description: "If you can pass all stages we will invite you for a final interview with our CEO.",
  },
];

export const RECRUITMENT_INTRO = {
  title: "Learn our recruitment process",
  description:
    "Recruitment is a process of finding and attracting the potential resources for filling up the vacant positions in an organization. It sources the candidates with the abilities and attitude, which are required for achieving the objectives of an organization.",
} as const;
