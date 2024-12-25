import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer:React.FC = () => {
	return (
		<>
			<div className="bg-[#161f37] lg:p-4 p-5 pb-14 lg:pb-10 gap-4 lg:mt-0 mt-4 lg:px-14 text-white flex lg:flex-row flex-col justify-between ">
				<div className="flex flex-col lg:w-1/4 gap-2">
					<Image
						src="/logo.webp"
						width={180}
                        height={180}
						alt=""
					/>
					<div className="text-sm lg:pl-2">
						Address:{" "}
						<span className="text-gray-300 ">
							Jalpaiguri Government Engineering College Campus, P.O.: Denguajhar
							Dist.: Jalpaiguri West Bengal - 735102, India.
						</span>
					</div>
					<div className="text-sm lg:pl-2">
						<div>Phone : +91 7439428480</div>
						<div>Email : jgecalum@gmail.com</div>
					</div>
				</div>
				<div className=" flex flex-col gap-2 py-3  lg:p-4">
					<h1 className="text-2xl font-medium text-white">Get In Touch</h1>
					<div className="lg:mt-10 mt-4 text-lg text-gray-400">
						THE JALPAIGURI
						<div>GOVT.ENGG.COLLEGE ALUMNI</div>
						<div>ASSOCIATION, JALPAIGURI.</div>
					</div>
					<div className="flex mt-4 gap-4">
						<Link href="https://www.facebook.com/groups/communicationcell.jgec/" target="_blank" className="h-10 w-10 cursor-pointer hover:opacity-90 duration-200 bg-[#3b60c9] flex justify-center items-center text-lg ">
							<FaFacebookF />
						</Link>
						<Link href="https://www.linkedin.com/company/jgecaa/" target="_blank" className="h-10 w-10 cursor-pointer hover:opacity-90 duration-200 bg-[#3b60c9] flex justify-center items-center text-lg">
							<FaLinkedinIn />
						</Link>
						<div className="h-10 w-10 cursor-pointer hover:opacity-90 duration-200 bg-[#3b60c9] flex justify-center items-center text-lg">
							<FaYoutube />
						</div>
						<div className="h-10 w-10 cursor-pointer hover:opacity-90 duration-200 bg-[#3b60c9] flex justify-center items-center text-lg">
							<FaInstagram />
						</div>
						<div className="h-10 w-10 cursor-pointer hover:opacity-90 duration-200 bg-[#3b60c9] flex justify-center items-center text-lg">
							<FaWhatsapp />
						</div>
					</div>
				</div>
				<div className="flex flex-col lg:p-4">
					<h1 className="text-2xl font-medium text-white">Useful Links</h1>
					<div className="flex flex-col lg:mt-12 mt-4 gap-2">
						<div className="flex items-center hover:text-blue-500 hover:pl-2 duration-200 cursor-pointer">
							<MdOutlineKeyboardArrowRight size={20} /> Privacy Policy
						</div>
						<div className="flex items-center hover:text-blue-500 hover:pl-2 duration-200 cursor-pointer">
							<MdOutlineKeyboardArrowRight size={20} /> Refund Policy
						</div>
						<div className="flex items-center hover:text-blue-500 hover:pl-2 duration-200 cursor-pointer">
							<MdOutlineKeyboardArrowRight size={20} /> Terms & Conditions
						</div>
					</div>
				</div>
				<div className="flex flex-col lg:p-4">
					<h1 className="text-2xl font-medium text-white">Pages</h1>
					<div className="flex flex-col mt-4 lg:mt-12 gap-2">
						<div className="flex items-center hover:text-blue-500 hover:pl-2 duration-200 cursor-pointer">
							<MdOutlineKeyboardArrowRight size={20} /> Home
						</div>
						<div className="flex items-center hover:text-blue-500 hover:pl-2 duration-200 cursor-pointer">
							<MdOutlineKeyboardArrowRight size={20} /> Official's Desk
						</div>
						<div className="flex items-center hover:text-blue-500 hover:pl-2 duration-200 cursor-pointer">
							<MdOutlineKeyboardArrowRight size={20} /> Constitution
						</div>
						<div className="flex items-center hover:text-blue-500 hover:pl-2 duration-200 cursor-pointer">
							<MdOutlineKeyboardArrowRight size={20} /> Take a Trip
						</div>
						<div className="flex items-center hover:text-blue-500 hover:pl-2 duration-200 cursor-pointer">
							<MdOutlineKeyboardArrowRight size={20} /> Upcoming Events
						</div>
						<div className="flex items-center hover:text-blue-500 hover:pl-2 duration-200 cursor-pointer">
							<MdOutlineKeyboardArrowRight size={20} /> Contact us
						</div>
					</div>
				</div>
			</div>
			<div className="flex gap-2 text-sm lg:text-lg font-medium text-white p-4 items-center justify-center bg-[#3b60c9]">
				<FaRegCopyright />
				JGEC Alumini Association. All Rights Reserved.
			</div>
		</>
	);
};

export default Footer;
