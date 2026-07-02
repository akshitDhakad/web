export const ABOUT_STATS_MAIN = [
  { value: "15,000", label: "We employ 15,000 people around the world" },
  { value: "10,000", label: "We employ 15,000 people around the world" },
  { value: "25,000", label: "We employ 15,000 people around the world" },
] as const;

export const ABOUT_STATS_GRID = [
  { value: "75", label: "More than 75 years in business", variant: "widget-3" },
  { value: "450", label: "450 branches worldwide", variant: "widget-4" },
  { value: "25", label: "We are present in 25 markets", variant: "widget-5" },
] as const;

export const RECOGNITION_YEARS = [
  { id: "2020", label: "2020" },
  { id: "2019", label: "2019" },
  { id: "2018", label: "2018" },
  { id: "2017", label: "2017" },
  { id: "2016", label: "2016" },
  { id: "2015", label: "2015" },
  { id: "2014", label: "2014 and before" },
] as const;

export const RECOGNITION_CONTENT: Record<string, { title: string; items: string[] }> = {
  "2020": {
    title: "2020",
    items: [
      "The First Mauritian Bank to join the GRI Community",
      "Instant account opening with a Customer On-boarding App",
    ],
  },
  "2019": {
    title: "2019",
    items: [
      "The First Mauritian Bank to join the GRI Community",
      "Instant account opening with a Customer On-boarding App",
    ],
  },
  "2018": {
    title: "2018",
    items: [
      "The First Mauritian Bank to join the GRI Community",
      "Instant account opening with a Customer On-boarding App",
    ],
  },
  "2017": {
    title: "2017",
    items: [
      "The First Mauritian Bank to join the GRI Community",
      "Instant account opening with a Customer On-boarding App",
    ],
  },
  "2016": {
    title: "2016",
    items: [
      "The First Mauritian Bank to join the GRI Community",
      "Instant account opening with a Customer On-boarding App",
    ],
  },
  "2015": {
    title: "2015",
    items: [
      "The First Mauritian Bank to join the GRI Community",
      "Instant account opening with a Customer On-boarding App",
    ],
  },
  "2014": {
    title: "2014 and before",
    items: [
      "The First Mauritian Bank to join the GRI Community",
      "Instant account opening with a Customer On-boarding App",
      "The First Mauritian Bank to join the GRI Community",
      "Instant account opening with a Customer On-boarding App",
    ],
  },
};

export const ABOUT_AWARDS = [
  { subtitle: "CITI BANK", text: "Straight-Through processing (STP) Excellence Award" },
  { subtitle: "MARCOM AWARDS", text: "Platinum Winner for 'The Believers' Campaign" },
  { subtitle: "BURJ CEO AWARDS", text: "Most Innovative Bank in Mauritius" },
  { subtitle: "GLOBAL BRANDS MAGAZINE", text: "Most Innovative Treasury Services" },
  { subtitle: "GLOBAL BRANDS MAGAZINE", text: "Best Banking Brand in Mauritius" },
  { subtitle: "GLOBAL BRANDS MAGAZINE", text: "Best Credit Card Rewards Program" },
] as const;

export const LEADERSHIP_TEAM = [
  { image: "/img/leadership/img-1.png", name: "Eldridge Robles", role: "Co-Founder, Conis" },
  { image: "/img/leadership/img-2.png", name: "Eldridge Robles", role: "Co-Founder, Conis" },
  { image: "/img/leadership/img-3.png", name: "Eldridge Robles", role: "Co-Founder, Conis" },
] as const;
