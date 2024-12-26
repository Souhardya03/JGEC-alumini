"use client";
import Image from "next/image";
import { React } from "react";
// import "./vissiom_style.css";
import { GoPeople } from "react-icons/go";
import { IoMedalOutline } from "react-icons/io5";

const VissionMission = () => {
	return (
		<>
			<div className="lg:mt-[8em]  mt-[6em] h-[60vh] overflow-hidden  ">
				<div className="h-full  rotate-0 w-full">
					<Image
						loading="lazy"
						layout="fill"
						objectFit="cover"
						src="/assets/IMG_20240429_013756.jpg"
						alt=""
						className="   object-cover brightness-[30%]"
					/>
					<div className="text-white h-full w-full top-0 flex flex-col items-center justify-center gap-2  absolute ">
						<div className="text-5xl text-blue-400 font-medium">
							About <span className="text-white">Us</span>
						</div>
						<div className="text-xs  text-center">
							Alumni Needs enables you to harness the power of your alumni
							network. Whatever may be the need
						</div>
					</div>
				</div>
			</div>
			{/* About Details */}
			<div className=" py-14 flex justify-center flex-col items-center  bg-[#edf1f4]">
				<div className=" relative  shadow-xl bg-white lg:w-2/3 w-[90%] xl:h-full lg:h-full md:h-full my-10 2xl:h-full ">
					<div className="absolute rotate-0 right-0 -top-[0.8em] li text-6xl text-white">
						2010
					</div>
					<div className="h-2/3 lg:w-1/2 overflow-hidden lg:absolute rotate-0 -top-[2em] -left-[4em]">
						<img
							loading="lazy"
							src="https://codeboxr.net/themedemo/unialumni/html/assets/images/about-page/about-img-1.jpg"
							alt=""
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="text-xl p-4  lg:flex  flex-col items-end xl:gap-2  h-1/2 ">
						<div className=" xl:text-3xl text-left mb-3 lg:w-[55%] font-medium lg:text-xl 2xl:text-3xl">
							ESTD of This Alumni Assotitation
						</div>
						<div className="lg:text-[13px] 2xl:text-[16px] text-[10px] lg:w-[55%]">
							The Alumni association got registration on 22 nd day of April 2010
							from Registrar of Socities West Bengal Act XXVI of 1961 vide
							No:-S/L/70053 of 2010-11 after obtaining permission from Principal
							Dr. Jyotirmoy Jhampati to function from College Administrative
							Building in his letter to Mr.D. Sarkar, thee then President of the
							Alumni Association, dated 07/04/2010.
						</div>
						<div className="text-[10px] 2xl:mt-6 lg:text-[13px] xl:text-[14px]  2xl:text-[16px]">
							To achieve vision &amp; mission, the Alumni Association shall have
							a broad based Executive committee comprising of representing any
							chapter, centre, area, group of member by way of invitation and or
							representation, representatives of teachings, non-teaching,
							students forums of the college, shall have the volume of members
							not exceeding 15(fifteen) and shall recommend, advice, suggest,
							forward its observations and programmes as are felt assessed
							helpful in attainment of objectives of the Association.
						</div>
					</div>
				</div>
				<div className=" relative  shadow-xl bg-white lg:w-2/3 w-[90%]  my-10 ">
					<div className="absolute rotate-0 left-0 -top-[0.8em]  text-6xl text-white ">
						2010
					</div>
					<div className="h-[60%] lg:w-1/2 overflow-hidden lg:absolute rotate-0 -top-[2em] -right-[4em]">
						<img
							loading="lazy"
							src="https://codeboxr.net/themedemo/unialumni/html/assets/images/about-page/about-img-1.jpg"
							alt=""
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="text-xl   flex p-4 flex-col  gap-2  h-1/2 ">
						<div className="  text-left lg:w-[55%] font-medium text-3xl">
							Our Vission & Mission
						</div>
						<div className=" text-[10px] px-5 lg:text-[14px] xl:text-[16px] lg:w-[55%]">
							<ul className=" list-disc">
								<li>
									To develop and maintain functional co-ordination between the
									Alumni and the college.
								</li>
								<li>
									To promote close and healthy interaction between members to
									facilitate mutual development.
								</li>
								<li>
									To foster activities conducive towards the cause of overall
									academic elevation of the college.
								</li>
								<li>
									To arrange extension lectures, debates, discussions, seminars,
									workshop, conferences, educational tours, exhibitions, etc. as
									far as practicable.
								</li>
								<li>
									To distribute study materials and extend assistances to poor
									and or needy students as far as permissible.
								</li>
							</ul>
						</div>
						<div className="text-[10px] px-5 lg:text-[14px] xl:text-[16px]">
							<ul className="list-disc">
								<li>
									To co-ordinate training and placement programmes of the
									college.
								</li>
								<li>
									To promote development of healthy socio-technical interaction
									with the Society by way of conducting awareness and appraisal
									programmes of demanding events such as energy management,
									management of carbon emission, disaster management, domestic
									and industrial discharge management and management of
									Socio-Industrial hazards, management of natural resources like
									water, foresting etc, and such other activities as may deem
									necessary and beneficiary towards the cause of the Association
									in general.
								</li>
								<li>
									To organise, promote or undertaken such other activities, or
									functions as are considered beneficial or conducive towards
									attainment of the objects of the Association.
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="h-[20vh] bg-[#171f36] text-white w-full flex justify-evenly items-center ">
					<div className="flex items-center justify-center gap-2">
						<GoPeople
							color="white"
							className="w-10 h-8 lg:w-12 lg:h-12"
						/>
						<div className="flex lg:text-[16px] text-[10px] flex-col justify-center ">
							<div>543</div>
							<div>Members</div>
						</div>
					</div>
					<div className="flex items-center justify-center gap-2">
						<IoMedalOutline
							color="white"
							className="w-10 h-8 lg:w-12 lg:h-12"
						/>
						<div className="flex text-[10px] lg:text-[16px] flex-col justify-center ">
							<div>17+</div>
							<div>Medals</div>
						</div>
					</div>
					<div className="flex items-center justify-center gap-2">
						<img
							loading="lazy"
							src="assets/scholarship_icon.png"
							className="w-10 h-8 lg:w-12 lg:h-12"
							alt=""
						/>
						<div className="flex lg:text-[16px] text-[10px] flex-col  ">
							<div>100+</div> <div>Scholarships</div>
						</div>
					</div>
				</div>
				<div className=" pt-10 bg-white w-full flex items-center flex-col">
					<div className="flex flex-col items-center w-full">
						<div className="lg:text-4xl text-3xl text-center font-medium">
							Our Honourable Committe
						</div>
						<div className="w-[15%] my-2 border border-blue-500"></div>
					</div>
					{/* Member Details */}
					<div className="w-full  flex flex-wrap justify-center gap-4  p-10">
						<div className=" relative group  duration-200 lg:h-[50vh] h-[40vh] mb-10 lg:w-[40vh]">
							<img
								loading="lazy"
								src="https://codeboxr.net/themedemo/unialumni/html/assets/images/committee/commitee-1.jpg"
								alt=""
								className="object-cover duration-200  group-hover:brightness-50 group-hover:-translate-y-3 h-full w-full"
							/>
							<div className="lg:h-[10vh] group-hover:-translate-y-3 duration-200 h-[8vh] absolute flex justify-center items-center rotate-0 -bottom-6 w-full ">
								<div className="bg-blue-500 h-full w-2/3"></div>
							</div>
						</div>
					</div>
				</div>
				<div className=" flex gap-8 flex-col items-center mt-10">
					<div className="flex gap-1 flex-col items-center">
						<div className="lg:text-3xl text-3xl text-center font-medium">
							Some Speech By Our Aluminis
						</div>
						<div className="border border-blue-400 w-1/2"></div>
					</div>
					<div className="flex lg:px-14 justify-center gap-8 mt-14 flex-wrap">
						<div className=" h-[40vh] group lg:mb-10 mb-16 hover:scale-105 duration-200 bg-white relative w-[40vh] lg:w-[50vh]">
							<div className="h-full w-full flex justify-center absolute -top-[3em]">
								<div className="w-[20vh] group-hover:border-4 duration-200  group-hover:border-blue-400 h-[20vh] rounded-full">
									<img
										loading="lazy"
										src="https://codeboxr.net/themedemo/unialumni/html/assets/images/testimonial/testi-3.png"
										className="h-full w-full object-cover rounded-full"
										alt=""
									/>
								</div>
							</div>
							<div className="flex text-[12px] md:text-[12px] sm:text-[12px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px] h-[80%] px-4 justify-end items-end">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
								rerum nihil totam nobis qui molestiae modi quae neque ut non
								animi accusantium harum dolores officia enim quidem dicta,
								laboriosam ipsa?
							</div>
							<div className="h-[10vh] flex justify-end w-full -bottom-[2em] absolute rotate-0">
								<div className="bg-blue-400 h-full w-[80%]"></div>
							</div>
						</div>
						
						
						
					</div>
				</div>
			</div>
		</>
	);
};

export default VissionMission;
