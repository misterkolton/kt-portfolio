import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import MainGolfLogo from "./Icons/mainGolfLogo";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
        <Link href="/users">Users List</Link> | <Link href="/pga">PGA</Link> |{" "}
        <Link href="/login">Login</Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>Contact</span>
    </footer>
  </div>
);

export default Layout;
