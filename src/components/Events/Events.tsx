"use client";
import Image from "next/image";
import React from "react";

const Events = () => {
	return (
		<>
			<div className="lg:mt-[8em]  mt-[6em] h-[60vh] overflow-hidden  ">
				<div className="h-full  rotate-0 w-full">
					<Image
						layout="fill"
						objectFit="cover"
						src="/assets/IMG_20240429_013756.jpg"
						alt=""
						className="   object-cover brightness-[30%]"
					/>
					<div className="text-white h-full w-full top-0 flex flex-col items-center justify-center gap-2  absolute ">
						<div className="text-5xl text-white font-medium">
							All <span className="text-blue-400">Event</span> Archieve
						</div>
						<div className="text-sm  text-center">
							Get information about all our events.
						</div>
					</div>
				</div>
			</div>
			<div className="my-8 flex flex-col  justify-center items-center">
				<div className=" bg-[#3a60c8] rounded-md flex lg:flex-row flex-col items-center gap-4 justify-between lg:h-[50vh] p-6 w-[80%]">
					<div className=" h-[60vh] lg:h-full border border-black overflow-hidden lg:flex justify-center items-center rotate-0 w-full">
						<Image
                            objectPosition="center"
                            objectFit="cover"
                            layout="fill"
							
							src="/assets/IMG_20240429_013756.jpg"
							alt=""
							
						/>
					</div>
					<div className=" flex flex-col gap-4 justify-between h-full">
						{/* Remaining Time */}
						<div className="flex gap-4 items-center">
							<div className="flex flex-col items-center">
								<div className="text-white font-medium">Days</div>
								<div className="text-white p-2 px-3 border border-white bg-black">
									00
								</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="text-white font-medium">Hr</div>
								<div className="text-white p-2 px-3 border border-white bg-black">
									00
								</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="text-white font-medium">Min</div>
								<div className="text-white p-2 px-3 border border-white bg-black">
									00
								</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="text-white font-medium">Sec</div>
								<div className="text-white p-2 px-3 border border-white bg-black">
									00
								</div>
							</div>
							<div className="text-white mt-6 font-medium">Remaining</div>
						</div>
						{/* title */}
						<div className="text-white text-3xl font-semibold">
							We are going to arrange a get together!
						</div>
						{/* descrition */}
						<div className="text-white">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Asperiores, accusantium? Ratione nisi, odio illo id sapiente,
							temporibus iure qui reprehenderit quisquam unde fugiat mollitia
							aperiam eum tempore cumque, recusandae earum.
						</div>
						{/* button */}
						<button className="border-2 w-[30%] hover:bg-white hover:text-black duration-200 border-white p-4 text-white bg-[#2e4da0] font-medium">
							JOIN WITH US
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Events;
