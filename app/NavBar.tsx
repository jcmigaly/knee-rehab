import Link from "next/link";
import React from "react";
import { GiHealing } from "react-icons/gi";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={""}>All About Tendons!</Link>
            </li>
            <li>
              <Link href={""}>Recovery</Link>
              <ul className="p-2">
                <li>
                  <Link href={""}>Time</Link>
                </li>
                <li>
                  <Link href={""}>Supplementation</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={""}>Relevant Research</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-2xl" href={""}>
          <GiHealing />
          ReturnToPlay
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <Link href={""}>All About Tendons!</Link>
          </li>
          <li>
            <Link href={""}>Recovery Time</Link>
          </li>
          <li>
            <Link href={""}>Lifestyle Factors</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn" href={""}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
