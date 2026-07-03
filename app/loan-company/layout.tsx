import "@/styles/nouislider.css";
import "@/styles/loan-company.css";

export default function LoanCompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="overflow-x-clip">{children}</div>;
}
