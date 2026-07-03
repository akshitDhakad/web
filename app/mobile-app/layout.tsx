import "@/styles/mobile-app.css";

export default function MobileAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="overflow-x-clip">{children}</div>;
}
