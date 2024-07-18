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
      <SystemUpdateIcon className="text-blue-400" />
      <ul
        className={`lg:flex lg:justify-center lg:items-center gap-6 ${props.className}`}
      >
        <Link className="text-blue-400" href="/">
          Get the app
        </Link>
        <li>
          <Link href="/seller">Become a Seller</Link>
        </li>
        {session && (
          <li>
            {" "}
            <UserProfile userName={session.user.name} />
          </li>
        )}

        {!session && (
          <li>
            {" "}
            <Link href="/user/login">Sign In</Link>
          </li>
        )}
        {!session && (
          <li>
            <Link href="/user/register">Sign Up</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default SignOptions;
