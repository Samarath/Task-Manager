import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Task Buddy",
  description: "A creatie task Manager",
};

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
