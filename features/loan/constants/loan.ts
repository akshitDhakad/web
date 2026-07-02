export const LOAN_STEPS = [
  { step: 1, label: "Loan Details", href: "/loan/details" },
  { step: 2, label: "Personal Details", href: "/loan/personal-details" },
  { step: 3, label: "Documants Upload", href: "/loan/document-upload" },
] as const;

export const LOAN_BANNER_STEPS = [
  {
    icon: "/img/steps/icon-1.png",
    title: "Check Eligibility",
    description: "Select your loan amount, answer a few questions and get instant loan amount",
  },
  {
    icon: "/img/steps/icon-2.png",
    title: "Submit Documents",
    description: "Share required documents with our representative hassle-free",
  },
  {
    icon: "/img/steps/icon-3.png",
    title: "Approval in Principle",
    description: "Choose the final sanctioned loan offer with the terms that work best for you",
  },
] as const;

export const LOAN_TYPES = [
  { id: "personal", label: "Personal Loan", icon1: "/img/apply-loan/icon-4.1.png", icon2: "/img/apply-loan/icon-4.2.png" },
  { id: "home", label: "home Loan", icon1: "/img/apply-loan/icon-5.1.png", icon2: "/img/apply-loan/icon-5.2.png" },
  { id: "business", label: "Buisness Loan", icon1: "/img/apply-loan/icon-6.1.png", icon2: "/img/apply-loan/icon-6.2.png" },
  { id: "car", label: "car Loan", icon1: "/img/apply-loan/icon-7.1.png", icon2: "/img/apply-loan/icon-7.2.png" },
] as const;

export const LOAN_TYPE_OPTIONS = [
  "Select your Loan",
  "Home Loan",
  "Loan Against Property",
  "Loan Renovation",
  "Commercial Property",
] as const;

export const FINANCING_TYPES = ["Debt Financing", "Equity Finance"] as const;

export const BANK_SERVICES = [
  "Individual Banking",
  "Business Banking",
  "Digital Banking",
  "Loans",
] as const;

export const LOAN_DURATIONS = ["12 months", "18 months", "24 months", "36 months", "48 months"] as const;

export const DOCUMENT_REQUIREMENTS = [
  {
    text: "Selfie Photo. Your Personal Photo. The photo must be done by yourself. The photo must show your face and your both shoulders. (Please attach file )",
  },
  {
    text: "ID Card. Valid Government ID Card. Front and Back side. Original ID Card. Full photo. All parts of the ID card must be shown. The four corners of the ID card must show on the photo. ID must be original and valid. ID card must be very clear. (Please attach file) *",
  },
] as const;

export const LOAN_TESTIMONIALS = [
  {
    id: "1",
    image: "/img/testimonial/img-2.png",
    name: "Maxwell Wood",
    location: "New York, US",
  },
  {
    id: "2",
    image: "/img/testimonial/img-1.png",
    name: "Maxwell Wood",
    location: "New York, US",
  },
] as const;

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export const BIRTH_YEARS = Array.from({ length: 52 }, (_, index) => String(1970 + index));
