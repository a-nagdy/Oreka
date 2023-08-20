"use client";

import SystemUpdateIcon from "@mui/icons-material/SystemUpdate";
import { useSession } from "next-auth/react";
import Link from "next/link";
import UserProfile from "../user/UserProfile";
const SignOptions = (props) => {
  const { data: session } = useSession();
  return (
    <nav
      className={`lg:w-full lg:h-8 lg:flex lg:justify-end lg:items-center lg:p-8 bg-slate-200 dark:bg-gray-900 dark:border-gray-700 dark:text-orange-400 ${props.class} border-t-2 border-black/10 w-full pt-5`}
    >
      <ul
        className={`lg:flex lg:justify-center lg:items-center gap-6 ${props.className}`}
      >
        <Link className="flex items-center text-blue-400" href="/">
          <SystemUpdateIcon />
          Get the app
        </Link>
        <Link href="/seller">Become a Seller</Link>
        {session && <UserProfile userName={session.user.name} />}

        {!session && <Link href="/user/login">Sign In</Link>}
        {!session && <Link href="/user/register">Sign Up</Link>}
      </ul>
    </nav>
  );
};

export default SignOptions;
