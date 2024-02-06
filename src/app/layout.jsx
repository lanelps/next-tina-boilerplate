import React from "react";

import Nav from "../components/nav";

import "../styles/main.css";

export const metadata = {
  title: "Next Tina Boilerplate",
  description:
    "A boilerplate for building a modern web application using Next.js, Tailwind CSS, and Tina CMS, ready to be hosted on Netlify.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="text-black bg-yellow-50">
        <Nav />
        <main className="flex flex-col items-center min-h-screen p-24 pt-[5.5rem]">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
