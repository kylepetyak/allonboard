import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "All On Board Project | Empowering Youth Through Skiing & Snowboarding",
  description: "All On Board Project is a 501(c)(3) nonprofit organization in Arizona that takes underprivileged kids to experience skiing and snowboarding for the first time, developing leadership, teamwork, and courage.",
  keywords: ["nonprofit", "skiing", "snowboarding", "youth development", "Arizona", "501c3", "underprivileged kids", "winter sports", "leadership"],
  authors: [{ name: "All On Board Project" }],
  openGraph: {
    title: "All On Board Project | Empowering Youth Through Skiing & Snowboarding",
    description: "A 501(c)(3) nonprofit empowering underprivileged youth through skiing and snowboarding experiences.",
    url: "https://www.allonboardproject.com",
    siteName: "All On Board Project",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All On Board Project",
    description: "Empowering youth through skiing and snowboarding experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
