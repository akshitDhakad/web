import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";

import { ConditionalFooter } from "@/components/layout/conditional-footer";
import { Navbar } from "@/components/layout/navbar";
import { AppProviders } from "@/providers/app-providers";
import { SITE_CONFIG } from "@/constants/navigation";

import "@/styles/globals.css";
import "@/styles/finance/fontawesome.css";
import "@/styles/finance/elegant-icons.css";
import "@/styles/banca.css";
import "@/styles/home-variants.css";
import "@/styles/navbar-overrides.css";
import "@/styles/site-footer.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${roboto.variable} min-h-full antialiased`}>
        <AppProviders>
          <Navbar />
          <main>{children}</main>
          <ConditionalFooter />
        </AppProviders>
      </body>
    </html>
  );
}
