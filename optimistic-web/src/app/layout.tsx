import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Amazing Background Patterns using CSS Gradients ✨",
  description:
    "Unleash your creativity with CSS gradients as we delve into the art of creating amazing CSS background patterns using a single CSS property. In this tutorial, we explore the versatility of CSS gradients, including linear gradients, conic gradients, and repeating conic gradients, to design captivating background patterns. Whether you're aiming for simple stripes or intricate geometric shapes, learn how to implement repeating patterns using functions like conic-gradient and repeating-conic-gradient. With CSS, the possibilities are endless, allowing you to create mesmerizing background gradients that enhance the visual appeal of your website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
