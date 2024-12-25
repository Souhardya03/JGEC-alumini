"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
// import Logo from "";

import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Links = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Vision & Mission",
		link: "/vision-mission",
	},
	{
		name: "Giving Back",
		link: "/giving-back",
	},
	{
		name: "Kanchenjunga",
		link: "/kanchenjunga",
	},
	{
		name: "Take a trip",
		link: "/take-a-trip",
	},
];

const moreLinks = [
	{
		name: "Research & Internship",
		link: "/research-internship",
	},
	{
		name: "Contact",
		link: "/contact",
	},
	{
		name: "Digital Database",
		link: "/digital-database",
	},
	{
		name: "Rooms",
		link: "/rooms",
	},
	{
		name: "Alumini-Fun-Club",
		link: "/alumini-fun-club",
	},
	{
		name: "Upcoming Events",
		link: "/upcoming-events",
	},
	{
		name: "Scholarships",
		link: "/scholarships",
	},
];

const Navbar = () => {
	const [open, setopen] = useState(false);
	const [openNav, setopenNav] = useState(false);

	const pathname = usePathname();

	return (
		<>
			<nav className=" h-[6.2em] w-full z-[999] lg:top-10 top-0 bg-white fixed shadow-lg flex items-center justify-between lg:px-[5rem]">
				<div className="flex items-center justify-between w-[90%] lg:w-full ">
					<div className="">
						<Image
							src="/Logo.webp"
							height={120}
							width={120}
							alt="Alumini Logo"
						/>
					</div>
					<div className="flex w-full flex-col">
						<h1 className="text-blue-500 font-bold lg:text-xl">
							Alumini Association
						</h1>
						<p className="lg:text-xs line-clamp-1 text-xs font-medium">
							Jalpaiguri Government Engineering College
						</p>
					</div>
				</div>
				<div
					onClick={() => setopenNav(!openNav)}
					className="text-3xl lg:hidden px-4">
					<RxHamburgerMenu />
				</div>

				<div className="lg:flex hidden h-full text-[0.88rem] items-center duration-200  justify-between font-medium w-full">
					{Links.map((link, index) => (
						<Link
							key={link.name}
							href={link.link}
							className={` items-center hover:text-blue-500 duration-200 flex px-4 h-full ${
								pathname == link.link
									? "bg-[#dae5f2] border-b-4 border-b-[#3a60c8] text-blue-500"
									: "text-black"
							}`}>
							{link.name}
						</Link>
					))}
					{/* More links */}
					<div
						className="flex cursor-pointer  items-center gap-1 duration-200"
						onClick={() => setopen(!open)}>
						<div
							className={`hover:text-blue-600 ${
								open ? "text-blue-600" : ""
							} duration-200`}>
							More
						</div>
						<div className={`${open ? "rotate-180" : "rotate-0"} duration-200`}>
							{" "}
							<IoIosArrowDown />
						</div>
						<div
							className={`${
								open
									? "block absolute  w-[15%] right-[4em] bg-[#ffffff] rounded-sm shadow-lg top-[7em]"
									: "hidden pointer-events-none"
							}`}>
							<div className="flex flex-col justify-center">
								{moreLinks.map((links, index) => (
									<Link
										key={links.name}
										href="/research&internship"
										className={`border-b hover:text-blue-600 border-b-[#ebeaea] ${
											pathname == links.link
												? "bg-[#dae5f2] border-b-4 border-b-[#3a60c8] text-blue-500"
												: ""
										} text-black`}>
										<div className="p-3">{links.name}</div>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</nav>

			{/* MobileNav */}

			<div
				className={`fixed h-[100vh] overflow-scroll w-full z-[999]  duration-300 ${
					openNav ? "left-0  " : "-left-[400em] pointer-events-none"
				} top-0 bg-white`}>
				<div className="flex flex-col  mt-4 items-center">
					<div className="flex flex-col justify-center items-center">
						<div className="">
							<Image
								height={120}
								width={120}
								src="/Logo.webp"
								alt="Alumini Logo"
								className="pl-2"
							/>
						</div>
						<div className="flex items-center w-full flex-col">
							<h1 className="text-blue-500 font-bold text-2xl">
								Alumini Association
							</h1>
							<p className="lg:text-xs line-clamp-1 text-xs font-medium">
								Jalpaiguri Government Engineering College
							</p>
						</div>
						<div
							onClick={() => setopenNav(!openNav)}
							className="text-3xl absolute top-0 right-0 border p-1 rounded-b-sm bg-[#e4e4e4] ">
							<RxCross2 />
						</div>
					</div>
					<div className="flex text-white mt-4 gap-6">
						<button className="bg-[#3a60c8] p-2 px-4 font-medium ">
							LOGIN
						</button>
						<button className="bg-[#1fc178] p-2 px-4 font-medium ">
							SIGN UP
						</button>
						<button className="bg-[#663298] p-2 px-4 font-medium ">
							VISIT
						</button>
					</div>
					<hr className="mt-4 border border-[#e8e8e8] w-full" />
					<div className="flex text-lg font-medium flex-col justify-center w-full">
						{Links.map((link, index) => (
							<Link
								key={link.name}
								href={link.link}
								className={` items-center flex px-4 p-3 h-full ${
									pathname == link.link
										? "bg-[#dae5f2] border-l-4  border-l-[#3a60c8] text-blue-500"
										: "text-black"
								} border-b`}>
								{link.name}
							</Link>
						))}
						<div
							className="cursor-pointer   w-full  items-center  duration-200"
							onClick={() => setopen(!open)}>
							<div
								className={`flex ${open ? "bg-[#dae5f2]" : ""} items-center `}>
								<div
									className={`hover:text-blue-600 ${
										open ? "text-blue-600" : ""
									} duration-200 p-3 pl-4`}>
									More
								</div>
								<div
									className={`${
										open ? "rotate-180" : "rotate-0"
									} duration-200`}>
									{" "}
									<IoIosArrowDown />
								</div>
							</div>
							<div
								className={`${
									open
										? "h-full pl-4    right-[4em] bg-[#ffffff] rounded-sm shadow-lg "
										: "h-0 overflow-hidden pointer-events-none"
								} duration-200`}>
								<div className="flex flex-col justify-center">
								{moreLinks.map((links, index) => (
									<Link
										key={links.name}
										href="/research&internship"
										className={`border-b hover:text-blue-600 border-b-[#ebeaea] ${
											pathname == links.link
												? "bg-[#dae5f2] border-l-4 border-l-[#3a60c8] text-blue-500"
												: ""
										} text-black border-b-4`}>
										<div className="p-3">{links.name}</div>
									</Link>
								))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
