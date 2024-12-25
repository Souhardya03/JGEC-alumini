"use client"

import Link from "next/link";
import React from "react";


const Topbar = () => {
	return (
		<nav className="text-white fixed top-0 z-[999] w-full lg:flex hidden justify-between items-center px-[6em] bg-[#161f37]">
			<div className="flex w-[45%] items-center justify-between">
				<div className="font-medium">Reg.No:-S/1L/No-70053 of 2010-2011.</div>
				<div>
					<button className="bg-[#663298] p-2 px-4 font-medium ">
						JGEC OFFICIAL WEBSITE
					</button>
				</div>
			</div>
			<div className="flex gap-6">
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
