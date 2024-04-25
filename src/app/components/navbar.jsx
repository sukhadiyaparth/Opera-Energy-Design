"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import Flag from "../../../public/Flag.png";

function navbar() {
    return (
        <div>
            <div className="session-1 mt-2 sm:m-auto sm:mt-4  lg:w-20 xl:w-21 lg:mt-5 ">
                <div className="container-1 flex flex-col gap-5  sm:flex sm:flex-row sm:gap-2 sm:items-center  sm:justify-between   lg:flex lg:flex-row lg:justify-between lg:items-center  ">
                    <div className="content-1 flex justify-center sm:w-[11%]">
                        <div className=" ">
                            <Image
                                src={Logo}
                                alt="Logo image"
                                height={150}
                                width={150}
                                className=""
                            ></Image>
                        </div>
                    </div>
                    <div className="content-2 ">
                        <div>
                            <ul className=" flex flex-col items-center sm:flex sm:flex-row sm:gap-0.4 md:gap-2 lg:flex lg:flex-row lg:gap-2  xl:gap-5   ">
                                <li>Home</li>
                                <li className="lg:border-l-2 border-silver  ">
                                    <span className="text-white"> r</span>
                                </li>
                                <li>About Us</li>
                                <li className="lg:border-l-2 border-silver ">
                                    <span className="text-white"> r</span>
                                </li>
                                <li>Businesses</li>
                                <li className="lg:border-l-2 border-silver ">
                                    <span className="text-white"> r</span>
                                </li>
                                <li>Projects</li>
                                <li className="lg:border-l-2 border-silver ">
                                    <span className="text-white"> r</span>
                                </li>
                                <li>Career</li>
                                <li className="lg:border-l-2 border-silver ">
                                    <span className="text-white"> r</span>
                                </li>
                                <li>Contact</li>
                                <li className="lg:border-l-2 border-silver ">
                                    <span className="text-white"> r</span>
                                </li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-3 flex justify-center  sm:flex sm:flex-row sm:items-center sm:gap-1 lg:flex lg:flex-row lg:items-center lg:gap-3 xl:gap-5   ">
                        <div className="box-1 sm:w-[25%]">
                            <Image src={Flag} alt="Logo image" height={40} width={40}></Image>
                        </div>
                        <div className="box-2 bg-[#009846] text-white rounded text-center p-2 sm:p-1">
                            Book Now
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default navbar;
