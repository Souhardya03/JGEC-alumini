"use client";

import { ErrorMessage, Form, Formik } from "formik";
import Image from "next/image";
import React, { useState } from "react";

import { MdCloudUpload } from "react-icons/md";
import { InputField } from "../ui/input";
import { SelectField } from "../ui/select";
import { TextareaField } from "../ui/textarea";
import { Button } from "../ui/button";
import * as Yup from "yup";
const ContactSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "Too Short!")
		.max(70, "Too Long!")
		.required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	studentId: Yup.number()
		.max(11, "Must be 11 digits")
		.required("Required")
		.typeError("Student ID must be a number"),
	passingYear: Yup.number()
		.max(4, "Must be 4 digits")
		.required("Required")
		.typeError("Passing Year must be a number"),
	message: Yup.string().required("Required"),
	department: Yup.string().required("Required"),
});

const Contact: React.FC = () => {
	return (
		<>
			{/* Contact Banner */}
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
						src="/assets/membership.jpg"
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
					<Formik
						initialValues={{
							email: "",
							name: "",
							studentId: "",
							passingYear: "",
							department: "",
							message: "",
						}}
						validationSchema={ContactSchema}
						onSubmit={(values) => {
							console.log(values);
						}}>
						{({ handleChange, values, setFieldValue }) => (
							<Form>
								<div className="flex flex-col w-full gap-4">
									<div className="flex md:flex-row flex-col gap-4 ">
										<div className="flex w-full flex-col gap-1">
											<InputField
												type="email"
												name="email"
												label="Email"
												placeholder="Enter your email"
												className="w-full"
												onChange={handleChange}
											/>
											<ErrorMessage
												name="email"
												component="div"
												className="text-red-500 text-xs"
											/>
										</div>

										<div className="flex w-full flex-col gap-1">
											<InputField
												name="name"
												label="Full Name"
												placeholder="Enter your full name"
												onChange={handleChange}
												className="w-full"
											/>
											<ErrorMessage
												name="name"
												component="div"
												className="text-red-500 text-xs"
											/>
										</div>
									</div>
									<div className="flex gap-4">
										<div className="flex w-full flex-col gap-1">
											<InputField
												name="studentId"
												label="Student ID"
												placeholder="Student ID"
												onChange={handleChange}
												className="w-full"
											/>
											<ErrorMessage
												name="studentId"
												component="div"
												className="text-red-500 text-xs"
											/>
										</div>
										<div className="flex w-full flex-col gap-1">
											<InputField
												name="passingYear"
												label="Passing Year"
												placeholder="Passing Year"
												onChange={handleChange}
												className="w-full"
											/>
											<ErrorMessage
												name="passingYear"
												component="div"
												className="text-red-500 text-xs"
											/>
										</div>
									</div>
									<div>
										<SelectField
											name="department"
											label="Department"
											placeholder="Select your department"
											data={["CSE", "ECE", "IT", "EE", "ME", "CE"]}
											onValueChange={(value) =>
												setFieldValue("department", value)
											}
											
											value={values.department}
										/>
										<ErrorMessage
											name="department"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<TextareaField
											name="message"
											label="Message"
											placeholder="Enter your message"
											onChange={handleChange}
										/>
										<ErrorMessage
											name="message"
											component="div"
											className="text-red-500 text-xs"
										/>
									</div>
								</div>

								<Button
									className="py-3 text-white mt-4 hover:scale-100 w-1/4 max-w-xs"
									type="submit">
									Send
								</Button>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</>
	);
};

export default Contact;
