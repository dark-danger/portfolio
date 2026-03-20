import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kirti Sharma | Architect, Interior Designer & Planner",
  description: "Portfolio of Kirti Sharma - A young architect and interior designer dedicated to creating functional, aesthetic, and sustainable spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
