import type { Metadata } from "next";
import "../app/globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Joan Oji | Author & Educator",
  description: "Official portfolio of Joan Oji, author of 'The Late Bloomer', educator, and philanthropist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased"
        suppressHydrationWarning
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}