import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import {
  ClerkProvider,

} from '@clerk/nextjs'
import "./globals.css";


export const metadata: Metadata = {
  title: "trvl",
  description: "The Travel Social Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Theme>
      <html lang="en">
        <body>
          {children}</body>
      </html>
      </Theme>
    </ClerkProvider>
  );
}
