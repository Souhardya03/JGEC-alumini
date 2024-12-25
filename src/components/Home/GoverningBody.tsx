"use client"

import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";

const GoverningBody = () => {
	return (
		<div className="lg:p-10 pt-10 px-2 flex flex-col lg:flex-row gap-3 justify-center">
			<div className="lg:w-[90%] bg-[#94c73e] h-full ">
				<h1 className="text-2xl bg-[#6cab05] text-white p-2 font-medium">
					Governing Body
				</h1>
				<div className="grid text-center text-white lg:grid-cols-4 grid-cols-2 w-full h-full">
					<div className="border-r lg:border-b-0 border-b flex justify-center flex-col items-center w-full ">
						<h1 className="lg:text-xl text-sm font-medium mb-2">President</h1>
						<h1>Mr. Bhaskar Dasgupta</h1>
						<h1>(1979-1983)</h1>
					</div>
					<div className="border-r border-b lg:border-b-0 flex justify-center flex-col items-center w-full  h-[40vh]">
						<h1 className="lg:text-xl text-sm font-medium mb-2">Vice President</h1>
						<h1>Mr. Dilip Kumar Roy</h1>
						<h1>(1980-1984)</h1>
					</div>
					<div className="border-r flex justify-center flex-col items-center w-full  h-[40vh]">
						<h1 className="lg:text-xl text-sm font-medium mb-2">Secretary</h1>
						<h1>Mr. Partha Halder</h1>
						<h1>(1989-1993)</h1>
					</div>
					<div className="border-b flex justify-center flex-col items-center w-full  h-[40vh]">
						<h1 className="lg:text-xl text-sm font-medium mb-2">Governing Body Member</h1>
						<h1>Dr. Mala De</h1>
						<h1>(1996-2000)</h1>
						<h1>Mr. Tufan Dutta</h1>
						<h1>(1996-2000)</h1>
						<h1>Mr. Soumyajit Das</h1>
						<h1>(2007-2011)</h1>
						<h1>Ms. Durba Shil</h1>
						<h1>(2019-2023)</h1>
					</div>
					<div className="border-r border-t flex justify-center flex-col items-center w-full  h-[40vh]">
						<h1 className="lg:text-xl text-sm font-medium mb-2">Treasurer</h1>
						<h1>Dr. Mousam Chatterjee</h1>
						<h1>(2000-2004)</h1>
					</div>
					<div className="border-r border-b lg:border-b-0 border-t flex justify-center flex-col items-center w-full  h-[40vh]">
						<h1 className="lg:text-xl text-sm font-medium ">Project Director</h1>
						<h1 className=" font-medium mb-2">
							(Kanchenjunga Construction and Operations)
						</h1>
						<h1>Mr. Rajib Bhattacharya</h1>
						<h1>(1996-2000)</h1>
					</div>
					<div className="border-r border-t flex justify-center flex-col items-center w-full  h-[40vh]">
						<h1 className="lg:text-xl text-sm font-medium mb-2">Internal Auditor</h1>
						<h1>Mr. Bithin Basu</h1>
						<h1>(1989-1993)</h1>
					</div>
				</div>
			</div>
			<div className="lg:w-[30%]">
				<div className=" bg-[#3dace5]  h-[60vh]">
					<div className="bg-[#1787be]  p-3 text-white font-semibold lg:text-xl text-sm">
						Upcoming Events
					</div>
				</div>
                <div className=" pt-4 hidden lg:block">
                    <div className="flex text-blue-500 font-medium gap-2 items-center"><FaChevronCircleRight color="red"/>Gallery</div>
                    <div className="flex text-blue-500 font-medium gap-2 items-center"><FaChevronCircleRight color="red"/>Alumini Fan Club</div>
                    <div className="flex text-blue-500 font-medium gap-2 items-center"><FaChevronCircleRight color="red"/>Constitution</div>
                    <div className="flex text-blue-500 font-medium gap-2 items-center"><FaChevronCircleRight color="red"/>Alumini Activities</div>
                </div>
			</div>
		</div>
	);
};

export default GoverningBody;
