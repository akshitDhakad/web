import "@/styles/loan-steps.css";

export default function LoanStepsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="overflow-x-clip">{children}</div>;
}
