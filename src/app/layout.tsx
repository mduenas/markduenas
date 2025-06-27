import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ConditionalNavigation from "@/components/ConditionalNavigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mark Duenas - Mobile App Developer",
  description: "Professional mobile application developer with 30+ years of experience in iOS and Android development. Specializing in innovative mobile solutions and user experiences.",
  keywords: ["mobile app developer", "iOS developer", "Android developer", "software engineer", "mobile applications"],
  authors: [{ name: "Mark Duenas" }],
  creator: "Mark Duenas",
  openGraph: {
    title: "Mark Duenas - Mobile App Developer",
    description: "Professional mobile application developer with 30+ years of experience",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <ConditionalNavigation />
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}