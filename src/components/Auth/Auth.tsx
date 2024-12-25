"use client";

import Image from "next/image";
import React from "react";

import { MdCloudUpload } from "react-icons/md";

const Auth: React.FC = () => {
	return (
		<>
			{/* Membership Banner */}
			<div className="lg:mt-[8em]  mt-[6em] h-[60vh] overflow-hidden  ">
				<div className="h-full  rotate-0 w-full">
					<div className="text-white h-full z-20 w-full top-0 flex flex-col items-center justify-center gap-3  absolute ">
						<div className="lg:text-5xl text-3xl text-blue-400 font-medium">
							Membership <span className="text-white">Form</span>
						</div>
						<div className="text-sm lg:w-1/2 text-center">
							Register here to join our alumini association.
						</div>
					</div>
					<Image
						loading="lazy"
						layout="fill"
						objectFit="cover"
						src="/assets/IMG_20240429_013756.jpg"
						alt=""
						className=" z-10  object-cover brightness-[30%]"
					/>
				</div>
			</div>
			{/* Authentication Form */}
			<div className="h-full lg:py-28 py-20 flex lg:flex-row flex-col justify-center gap-8 items-center bg-white">
				{/* Login Form */}
				<div className="">
					<h2 className="text-3xl text-center mb-8">Already a Member?</h2>
					<form className="flex flex-col gap-3">
						<div className="border border-blue-500 bg-[#ecf1f5] p-3">
							<input
								type="email"
								name="email"
								className="bg-transparent w-full outline-none"
								placeholder="Enter your ID"
							/>
						</div>
						<div className="border border-blue-500 bg-[#ecf1f5] p-3">
							<input
								type="password"
								name="password"
								className="bg-transparent w-full outline-none"
								placeholder="Password"
							/>
						</div>
						<button className=" bg-blue-600 hover:bg-blue-700 duration-200 p-3 text-white">
							Login
						</button>
					</form>
				</div>
				{/* Divider */}
				{/* <div className="border border-blue-500 h-1/2 rounded-md"></div> */}
				{/* Registration Form */}
				<div className="lg:w-[40%] border-t-2 lg:border-l-2 lg:border-t-0 lg:pt-0 pt-6 lg:pl-6 border-t-blue-500 mx-4 lg:mx-0 lg:border-l-blue-500">
					<div className="text-3xl font-medium mb-8">REGISTRATION FORM</div>
					<form>
						<div className="grid lg:grid-cols-2 grid-col-1 gap-3">
							<div>
								<label
									htmlFor="email"
									className="font-medium text-sm">
									Email
									<div className="border text-xs text-gray-500 border-gray-500 duration-200  p-3">
										<input
											type="email"
											name="email"
											className="bg-transparent w-full outline-none"
											placeholder=""
										/>
									</div>
								</label>
							</div>
							<div>
								<label
									htmlFor="password"
									className="font-medium text-sm">
									Password
									<div className="border text-xs text-gray-500 border-gray-500 duration-200  p-3">
										<input
											type="password"
											name="password"
											className="bg-transparent w-full outline-none"
											placeholder=""
										/>
									</div>
								</label>
							</div>
							<div>
								<label
									htmlFor="name"
									className="font-medium text-sm">
									Name
									<div className="border text-xs text-gray-500 border-gray-500 duration-200  p-3">
										<input
											type="text"
											name="name"
											className="bg-transparent w-full outline-none"
											placeholder=""
										/>
									</div>
								</label>
							</div>
							<div>
								<label
									htmlFor="studentID"
									className="font-medium text-sm">
									Student ID
									<div className="border text-xs text-gray-500 border-gray-500 duration-200  p-3">
										<input
											type="number"
											name="studentID"
											className="bg-transparent w-full outline-none"
											placeholder=""
										/>
									</div>
								</label>
							</div>
							<div>
								<label
									htmlFor="passingYear"
									className="font-medium text-sm">
									Passing year
									<div className="border text-xs text-gray-500 border-gray-500 duration-200  p-3">
										<input
											type="number"
											name="passingYear"
											className="bg-transparent w-full outline-none"
											placeholder=""
										/>
									</div>
								</label>
							</div>
							<div>
								<label
									htmlFor="department"
									className="font-medium text-sm">
									Department
									<div className="relative">
										<select
											className="block appearance-none w-full  border border-gray-500 text-gray-700 p-3 text-xs  leading-tight focus:outline-none "
											id="grid-state">
											<option>Select your Department</option>
											<option>CSE</option>
											<option>ECE</option>
											<option>IT</option>
											<option>EE</option>
											<option>ME</option>
											<option>Civil</option>
										</select>
										<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
											<svg
												className="fill-current h-4 w-4"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20">
												<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
											</svg>
										</div>
									</div>
								</label>
							</div>
							<div>
								<label
									htmlFor="residentialaddress"
									className="font-medium text-sm">
									Residential Address
									<div className="border text-xs text-gray-500 border-gray-500 duration-200  p-3">
										<textarea
											name="residentialaddress"
											rows={4}
											className="bg-transparent resize-y w-full outline-none"
											placeholder=""
										/>
									</div>
								</label>
							</div>
							<div>
								<label
									htmlFor="professionaladdress"
									className="font-medium text-sm">
									Professional Address
									<div className="border text-xs text-gray-500 border-gray-500 duration-200  p-3">
										<textarea
											name="professionaladdress"
											rows={4}
											className="bg-transparent resize-y w-full outline-none"
											placeholder=""
										/>
									</div>
								</label>
							</div>
							<div className="mt-2 flex justify-center items-center  bg-[#ecf1f5] border border-gray-900/25 p-3 w-full lg:w-full">
								<div className="text-center">
									<div className="flex w-full text-sm/6 text-gray-600">
										<label
											htmlFor="photo"
											className="relative w-full cursor-pointer rounded-md  font-semibold text-black focus-within:outline-none ">
											<span className="flex justify-center text-xs items-center gap-1">
												<MdCloudUpload size={18} />
												Upload your photo
											</span>
											<input
												id="photo"
												name="photo"
												type="file"
												className="sr-only w-full bg-transparent"
											/>
										</label>
									</div>
								</div>
							</div>
							<div className="mt-2 flex justify-center items-center  bg-[#ecf1f5] border border-gray-900/25 p-3 w-full lg:w-full">
								<div className="text-center">
									<div className="flex w-full text-sm/6 text-gray-600">
										<label
											htmlFor="paymentReceipt"
											className="relative w-full cursor-pointer rounded-md  font-semibold text-black focus-within:outline-none ">
											<span className="flex justify-center text-xs items-center gap-1">
												<MdCloudUpload size={18} />
												Upload your payment receipt
											</span>
											<input
												id="paymentReceipt"
												name="paymentReceipt"
												type="file"
												className="sr-only w-full bg-transparent"
											/>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div className="text-xs mt-2 font-medium">
							NB : Rs. 100 is mandatory for membership and getting permission
							for using your own email id and password to venture into Alumni
							website. i.e. access to Find Your Pal, Finance and Alumni
							Membership Info
						</div>
						<div className="text-xs font-medium mt-2">
							<div>
								Please deposit your combined membership amount and Donation at
								any of the two S.B.I. Current Account:
							</div>
							<ul className="list-decimal pl-4 mt-2 space-y-3">
								<li>
									SBI C.A No:-31904400275 IFSC-SBIN0007194, MICR-735002512,
									Branch Code-7194-Jointly operated by Treasurer &amp; either of
									President/Secretary.
								</li>
								<li>
									SBI C.A NO-31232430610- Jointly operated by Chairman-(Ex
									officio )Principal &amp; either of President/Secretary.
								</li>
							</ul>
						</div>
						<button className=" bg-blue-600 mt-4 w-full lg:w-1/2 hover:bg-blue-700 duration-200 p-3 text-white">
							Registration
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Auth;
