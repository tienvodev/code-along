import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "300 400 500 600 700",
});
const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-inter",
  weight: "300 400 500 600 700",
});

export const metadata: Metadata = {
  title: "DevOverflow",
  description:
    "DevOverflow is a modern StackOverflow-inspired web application built using Next.js 15, TypeScript, TailwindCSS, MongoDB, and more. This project showcases advanced features like AI-generated answers, a post recommendation system, badge and reputation mechanics, and comprehensive filtering and pagination. Developed as part of a JSMastery tutorial led by Adrian Hajdin.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
