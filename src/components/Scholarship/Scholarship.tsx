"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";


import { ScholarshipDetails } from "@/lib/ScholarshipsData";

const Scholarship = () => {
	return (
		<>
			<div className="lg:mt-[8em] w-full   mt-[6em] h-[60vh] overflow-hidden  ">
				<div className="h-full  rotate-0 w-full">
					<div className="text-white h-full z-20 w-full top-0 flex flex-col items-center justify-center gap-3  absolute ">
						<div className="lg:text-5xl text-3xl text-blue-400 font-medium">
							Scho<span className="text-white">larships</span>
						</div>
						<div className="text-sm px-4 lg:w-1/2 text-center">
							We are committed to helping students achieve their academic goals
							by providing them with the necessary resources and scholarships.
						</div>
					</div>
					<Image
						loading="lazy"
						layout="fill"
						objectFit="cover"
						src="/assets/membership.jpg"
						alt=""
						className=" brightness-[30%]"
					/>
				</div>
			</div>
			{/* Scholarship Details */}
			<div className="h-screen flex items-center justify-center">
				<div className="w-full lg:w-[30%]">
					<div className=" bg-[#7ec9ee]  h-[70vh]">
						<div className="bg-[#3fa3d5] text-lg md:text-xl text-neutral-950 p-2.5 font-medium">
							Scholarship Programs
						</div>
						<div className="w-full overflow-hidden h-[calc(70vh-4rem)]">
							<ul className="bottom-to">
								{ScholarshipDetails.map((item, index) => (
									<li
										key={index}
										className="px-4 py-2.5 border-b border-neutral-200 text-neutral-950">
										<Link
											href={`/scholarships/${item.id}`}
											className="flex flex-col gap-2">
											<h4 className="text-sm font-medium">{item.title}</h4>
											<p className="text-xs">{item.subtitle}</p>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Scholarship;
