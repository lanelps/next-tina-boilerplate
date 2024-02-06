import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <header className="fixed top-0 w-full h-[5.5rem] z-50">
      <nav aria-label="Main Navigation">
        <ul className="flex items-center gap-4 p-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
