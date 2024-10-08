import { Inter } from "next/font/google";

import "./globals.css";
import { AuthProvider } from "@/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "All For One - Start Your Journey Here",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Inline Script */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `var LlbZT_Mmz_VxsSPc = {"it":3517283, "key":"62c02"};`,
          }}
        />
        {/* External Script */}
        <script src="https://d2zk8mk8hghu3d.cloudfront.net/c8569c5.js" async />
      </head>
      <AuthProvider>
        <body className={`${inter.className} bg-[#0B0B50]`}>{children}</body>
      </AuthProvider>
    </html>
  );
}
