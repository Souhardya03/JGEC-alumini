"use client";

import Image from "next/image";
import React, { useState } from "react";

import { MdCloudUpload } from "react-icons/md";

const Contact: React.FC = () => {
	const [formData, setformData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e: any) => {
		setformData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<>
			{/* Membership Banner */}
			<div className="lg:mt-[8em] w-full   mt-[6em] h-[60vh] overflow-hidden  ">
				<div className="h-full  rotate-0 w-full">
					<div className="text-white h-full z-20 w-full top-0 flex flex-col items-center justify-center gap-3  absolute ">
						<div className="lg:text-5xl text-3xl text-blue-400 font-medium">
							Get <span className="text-white">in Touch</span>
						</div>
						<div className="text-sm px-4 lg:w-1/2 text-center">
							For any query or suggestion, please feel free to contact us.
						</div>
					</div>
					<Image
						loading="lazy"
						layout="fill"
						objectFit="cover"
						src="/assets/IMG_20240429_013756.jpg"
						alt=""
						className=" brightness-[30%]"
					/>
				</div>
			</div>

			<div className="h-full lg:py-28 py-20 overflow-hidden flex lg:flex-row flex-col justify-center gap-8 items-center bg-white">
				{/* TODO: Implement Map  */}
				<div className="">TODO : Implement Map here</div>
				{/* Divider */}
				{/* <div className="border border-blue-500 h-1/2 rounded-md"></div> */}
				{/* Contact Form */}
				<div className="lg:w-[35%] border-t-2 lg:border-l-2 lg:border-t-0 lg:pt-0 pt-6 lg:pl-6 border-t-blue-500 mx-4 lg:mx-0 lg:border-l-blue-500">
					<div className="text-3xl font-medium mb-8">SEND MESSAGE</div>
					<form
						onSubmit={handleSubmit}
						className="">
						<div className="grid grid-cols-1 gap-3">
							<div className="flex w-full gap-3">
								<div className="w-full">
									<label
										htmlFor="name"
										className="font-medium text-sm">
										Name
										<div className="border text-xs text-gray-500 border-gray-500 duration-200  p-3">
											<input
												type="text"
												name="name"
												onChange={handleChange}
												value={formData.name}
												className="bg-transparent w-full outline-none"
												placeholder=""
											/>
										</div>
									</label>
								</div>
								<div className="w-full">
									<label
										htmlFor="email"
										className="font-medium text-sm">
										Email
										<div className="border text-xs text-gray-500 border-gray-500 duration-200  p-3">
											<input
												type="email"
												name="email"
												onChange={handleChange}
												value={formData.email}
												className="bg-transparent w-full outline-none"
												placeholder=""
											/>
										</div>
									</label>
								</div>
							</div>
							<div>
								<label
									htmlFor="subject"
									className="font-medium  text-sm">
									Subject
									<div className="border text-xs text-gray-500 border-gray-500 duration-200  p-3">
										<input
											type="text"
											name="subject"
											onChange={handleChange}
											value={formData.subject}
											className="bg-transparent w-full outline-none"
											placeholder=""
										/>
									</div>
								</label>
							</div>

							<div>
								<label
									htmlFor="message"
									className="font-medium text-sm">
									Message
									<div className="border text-xs text-gray-500 border-gray-500 duration-200  p-3">
										<textarea
											name="message"
											onChange={handleChange}
											value={formData.message}
											rows={6}
											className="bg-transparent resize-y w-full outline-none"
											placeholder=""
										/>
									</div>
								</label>
							</div>
						</div>

						<button
							onClick={handleSubmit}
							className=" bg-blue-600 mt-4 w-full lg:w-1/4 hover:bg-blue-700 duration-200 p-3 text-white">
							Send
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
