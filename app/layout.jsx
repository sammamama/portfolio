import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samridh Sharma — Web Developer",
  description: "Full-stack web developer building real-world applications with Next.js, React, and TypeScript.",
  openGraph: {
    title: "Samridh Sharma — Web Developer",
    description: "Full-stack web developer building real-world applications with Next.js, React, and TypeScript.",
    images: ["/site.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samridh Sharma — Web Developer",
    description: "Full-stack web developer building real-world applications with Next.js, React, and TypeScript.",
    images: ["/site.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="bottom-right" theme="dark" />
      </body>
    </html>
  );
}
