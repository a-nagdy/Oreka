"use client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cards from "../card/Cards";
const UserProfile = ({ userName }) => {
  const [profileIcon, setProfileIcon] = useState(false);
  const handleProfileClick = () => {
    setProfileIcon(() => !profileIcon);
  };
  const router = useRouter();
  const handleSignOut = async () => {
    const response = await signOut({ redirect: false });
    if (!response.error) {
      router.push("/");
    }
  };
  return (
    <div className="relative">
      <span>
        Welcome {userName}
        {profileIcon ? (
          <span onClick={handleProfileClick} className="cursor-pointer">
            <KeyboardArrowUpIcon />
          </span>
        ) : (
          <span onClick={handleProfileClick} className="cursor-pointer">
            <KeyboardArrowDownIcon />
          </span>
        )}
      </span>
      {profileIcon && (
        <Cards className="absolute w-full px-5 py-3 flex justify-start items-center top-10 bg-slate-200 z-20">
          <ul className="flex flex-col items-start justify-center gap-2 text-md">
            <li className="font-serif font-medium text-gray-900 ">
              <Link
                href={`/profile/${userName}`}
                onClick={() => setProfileIcon(false)}
              >
                Profile
              </Link>
            </li>
            <li className="text-red-500 opacity-80 font-serif">
              {" "}
              <Link href="/" onClick={handleSignOut}>
                Logout
              </Link>
            </li>
          </ul>
        </Cards>
      )}
    </div>
  );
};

export default UserProfile;
