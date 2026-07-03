import "@/styles/simple-banca.css";

export default function SimpleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="overflow-x-clip">{children}</div>;
}
