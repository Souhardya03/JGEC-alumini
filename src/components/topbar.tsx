"use client";

import Link from "next/link";
import React from "react";

const Topbar = () => {
	return (
		<nav className="text-white fixed top-0 z-[999] w-full lg:flex hidden justify-between items-center px-[6em] bg-[#161f37]">
			<div className="flex xl:w-[45%] lg:w-2/3 w-full items-center  text-sm xl:text-sm lg:text-sm gap-4">
				<div className="font-medium line-clamp-1">
					Reg.No:-S/1L/No-70053 of 2010-2011.
				</div>
				<div>
					<Link
						href="https://jgec.ac.in/"
						className="bg-[#663298] p-2 px-4 font-medium ">
						JGEC OFFICIAL WEBSITE
					</Link>
				</div>
			</div>
			<div className="flex xl:text-sm lg:text-sm  gap-6">
				<Link href="/login">
					<button className="bg-[#3a60c8] p-2 px-4 font-medium ">LOGIN</button>
				</Link>
				<Link href="/login">
					<button className="bg-[#1fc178] p-2 px-4 font-medium ">
						SIGN UP
					</button>
				</Link>
			</div>
		</nav>
	);
};

export default Topbar;
