"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./Home.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import GoverningBody from "./GoverningBody";
const Home: React.FC = () => {
	return (
		<>
			<div className=" lg:h-[100vh]">
				<div className="text-black  flex justify-center  relative h-[40vh] lg:h-[60vh] lg:mt-[8em] mt-[6em] ">
					<Swiper
						direction={"vertical"}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
						className="mySwiper">
						<SwiperSlide>
							<div className="  h-full relative w-full">
								<div className="absolute z-20 rotate-0 h-full  flex flex-col gap-4 lg:gap-10 justify-center lg:w-1/2 w-full left-[2em]  lg:left-[15em]">
									<div className="text-yellow-400 text-left font-medium lg:text-3xl text-xl">
										The Jalpaiguri Government Engineering College Alumini
										Association, Jalpaiguri
									</div>
									<div className="flex gap-8">
										<button className="bg-blue-500 hover:scale-110 duration-150 cursor-pointer text-sm lg:text-lg text-white lg:p-3 lg:px-5  p-2 font-medium">
											Our Mission
										</button>
										<button className="bg-white hover:scale-110 duration-150 cursor-pointer lg:text-lg text-sm shadow-lg text-black p-3 px-4 font-medium">
											Upcoming Events
										</button>
									</div>
								</div>
								<img
									src="https://jgecalum.org/public/site/images/slider/slider1.jpg"
									alt=""
									className=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=" h-full w-full">
								<img
									src="https://jgecalum.org/public/site/images/slider/slider1.jpg"
									alt=""
									className=" "
								/>
							</div>
							<div className="absolute flex flex-col gap-4 lg:gap-10 justify-center lg:w-1/2 h-1/2 left-[3em] lg:left-[15em]">
								<div className="text-yellow-400 text-left font-medium lg:text-3xl text-xl">
									The Jalpaiguri Government Engineering College Alumini
									Association, Jalpaiguri
								</div>
								<div className="flex gap-8">
									<button className="bg-blue-500 hover:scale-110 duration-150 cursor-pointer text-sm lg:text-lg text-white lg:p-3 lg:px-5  p-2 font-medium">
										Our Mission
									</button>
									<button className="bg-white hover:scale-110 duration-150 cursor-pointer lg:text-lg text-sm shadow-lg text-black p-3 px-4 font-medium">
										Upcoming Events
									</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=" h-full w-full">
								<img
									src="https://jgecalum.org/public/site/images/slider/slider1.jpg"
									alt=""
									className=" "
								/>
							</div>
							<div className="absolute flex flex-col gap-4 lg:gap-12 justify-center lg:w-1/2 h-1/2 left-[3em] lg:left-[15em]">
								<div className="text-yellow-400 text-left font-medium lg:text-3xl text-xl">
									The Jalpaiguri Government Engineering College Alumini
									Association, Jalpaiguri
								</div>
								<div className="flex gap-8">
									<button className="bg-blue-500 hover:scale-110 duration-150 cursor-pointer text-sm lg:text-lg text-white lg:p-3 lg:px-5  p-2 font-medium">
										Our Mission
									</button>
									<button className="bg-white hover:scale-110 duration-150 cursor-pointer lg:text-lg text-sm shadow-lg text-black p-3 px-4 font-medium">
										Upcoming Events
									</button>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="w-full mt-4 flex justify-center items-center">
					<div className=" top-[30em] flex w-[90%]  justify-center  items-center p-4 z-10 lg:w-2/3 bg-[#516bb7]  lg:absolute">
						<div className="bg-white flex gap-4 justify-center items-center absolute right-4 -top-[1.5em] font-medium shadow-[#41414169] lg:text-xl shadow-xl p-3 lg:p-4 px-6">
							Scholarship
						</div>
						<Swiper
							slidesPerView={1}
							spaceBetween={30}
							loop={true}
							pagination={{
								clickable: false,
							}}
							// navigation={true}
							modules={[Navigation]}
							className="mySwiper">
							<SwiperSlide>
								<div className="flex mt-4 flex-col lg:flex-row items-center justify-center">
									<div className="lg:w-1/2  h-full">
										<img
											src="https://jgecalum.org/public/site/images/scholarship/1711114478bibhas_bhowmik.jpg"
											className=" profile-pic"
											alt=""
										/>
									</div>
									<div className="flex flex-col  gap-4 items-center justify-center w-full text-white">
										<div className=" text-xl lg:text-3xl font-medium w-full text-center">
											Confident and Profession Personality Scholarship
										</div>
										<div className="flex flex-col text-sm lg:text-lg justify-center items-center">
											<div>For any 4th year Civil Engineering Student</div>
											<div>
												Sponsored by Mr. Bibhas Bhowmik(JGEC, Civil 1985).
											</div>
										</div>
										<div className="text-sm lg:text-lg">
											(Initiated from 2013)
										</div>
									</div>
								</div>
							</SwiperSlide>

							<SwiperButtons />
						</Swiper>
					</div>
				</div>

				{/* Info about College */}
			</div>
			<div className="flex bg-[#ecf0f4]  justify-center items-center">
				<div className="lg:w-2/3 px-2 mt-8 font-semibold flex justify-center items-center flex-col gap-2">
					<h1 className="lg:text-4xl text-3xl  text-center">Welcome To The</h1>
					<h1 className="lg:text-3xl  text-xl text-center">
						Jalpaiguri Government Engineering College Alumini Association,
					</h1>
					<h1 className="lg:text-3xl text-lg text-center">Jalpaiguri</h1>
					<img
						src="https://jgecalum.org/public/site/images/welcome.png"
						alt=""
					/>
					<p className="text-center font-medium">
						It was a vision to establish a centre of professional learning where
						pursuit of knowledge and excellence was not to be barred by
						nationality, language, cultural plurality and religion that drove
						the founders of Jalpaiguri Government Engineering College (JGEC) to
						establish a world class centre of technical excellence. Established
						in 1961, JGEC is the second oldest of all technical institutions in
						the state of West Bengal, India. From the time of its inception,
						JGEC has gone from strength to strength providing essential manpower
						to harness the flood of opportunities in the fields of engineering
						and technology in the country and beyond. The Alumni Association
						works closely with the institution to involve ex-students and
						present students through various activities. JGEC has a number of
						alumni chapters around the globe.
					</p>

					<div className="font-semibold mt-4">
						<p className="text-center text-lg pb-4 font-bold">
							The JGEC Alumni Association provides opportunities to:
						</p>
						<ul className="list-disc text-center">
							&#10003; Promote JGEC pride and tradition at campus and across the
							globe.
						</ul>
						<ul className="list-disc text-center">
							&#10003; Promote relationships between alumni, students and
							administration.
						</ul>
						<ul className="list-disc text-center">
							&#10003; Enhance the college experience through fun, memorable
							events and value addition.
						</ul>
					</div>
				</div>
			</div>
			<div className="bg-[#ecf1f5]">
				<GoverningBody />
			</div>
		</>
	);
};

const SwiperButtons = () => {
	const swiper = useSwiper();
	return (
		<div className="flex relative justify-end items-center gap-1 ">
			<div
				onClick={() => swiper.slidePrev()}
				className="bg-[#5580ff]  cursor-pointer hover:bg-white hover:text-black duration-200 text-white py-4 px-4">
				<FaArrowLeft />
			</div>

			<div
				onClick={() => swiper.slideNext()}
				className="bg-[#5580ff]  cursor-pointer hover:bg-white hover:text-black duration-200 text-white py-4 px-4">
				<FaArrowRight />
			</div>
		</div>
	);
};

export default Home;
