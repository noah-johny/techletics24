import type { Metadata } from "next";
import "@/app/globals.css";
import { cakra, turretRoad } from "@/public/fonts";
import Navbar from "@/components/navbar";
import Section from "@/layouts/section";
import Copyright from "@/components/copyright";
import { Connect, SocialConnect } from "@/components/connect";

export const metadata: Metadata = {
  title: "Techletics '24",
  description:
    "Tech Fest organized by Christ College of Engineering, Irinjalakuda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/techletics-metal.svg" />
      </head>

      <body
        className={`${turretRoad.variable} ${cakra.variable} antialiased bg-tertiary`}
      >
        <Section float>
          <Navbar />
        </Section>

        {children}
        <footer>
          <Connect />
          <SocialConnect />
          <Copyright />
        </footer>
      </body>
    </html>
  );
}
