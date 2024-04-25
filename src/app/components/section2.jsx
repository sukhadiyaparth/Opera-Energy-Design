"use client";
import Z1 from "../../../public/Z1.png"
import Z2 from "../../../public/Z2.png"
import Z3 from "../../../public/Z3.png"
import Z4 from "../../../public/Z4.png"

import React from 'react'
import Image from "next/image";

function section2() {
    return (
        <div>
            <div className="session-1 mt-[10rem] m-auto xl:w-21  lg:w-20">
                <div className="container-1  flex flex-col items-center gap-[4rem]      2xl:flex 2xl:flex-row 2xl:gap-[6rem] sm:flex sm:flex-col sm:items-center sm:gap-[4rem]">
                    <div className="content-1">
                        <div className=" 2xl:w-[40rem] sm:w-[30rem] w-[20rem]">
                            <Image src={Z1} alt="Worker Page" height={700} width={700}></Image>
                        </div>
                    </div>
                    <div className="content-2">
                        <div className="box-1  flex  flex-row   justify-center    sm:flex sm:flex-row gap-2 sm:justify-center lg:justify-start">
                            <div> <Image src={Z4} alt="icon"></Image></div>
                            <div>WHO WE ARE</div>
                        </div>
                        <div className="box-2   text-center lg:w-[30rem] my-7 sm:text-center lg:text-left">
                            <p className="text-4xl">The Best Solution Provider
                                For <b>Green Energy</b></p>
                        </div>
                        <div className="box-3    text-center ml-5 mr-5  lg:w-[40rem] sm:text-center lg:text-left sm:ml-5 sm:mr-5 lg:ml-0 lg:mr-0">
                            <p>We have a team of domain experts who strive for excellence in the renewable energy generation sector...</p>
                        </div>
                        <div className="box-4   flex flex-col items-center gap-[4rem]  mt-[3rem] lg:flex lg:flex-row lg:gap-3 sm:flex sm:flex-col sm:items-center sm:gap-[4rem] ">
                            <div className="content-1">
                                <div className=" flex  flex-row  justify-center        sm:flex sm:flex-row sm:justify-center lg:justify-start">
                                    <Image src={Z2} alt={"icon"}></Image>
                                </div>
                                <div className="my-8 text-center sm:text-left">
                                    <p className="font-bold text-3xl">1. Our Culture</p>
                                </div>
                                <div className="sm:w-[22rem] text-center sm:text-left">
                                    <p>Our passion to work with the client satisfaction is the source of our success. We 100% believe in ethics...</p>
                                </div>
                             </div>
                             <div className="content-2">
                             <div className="  flex  flex-row  justify-center    sm:flex sm:flex-row sm:justify-center lg:justify-start">
                                    <Image src={Z3} alt={"icon"}></Image>
                                </div>
                                <div className="my-8 text-center sm:text-left">
                                    <p className="font-bold text-3xl">2. Our Productivity</p>
                                </div>
                                <div className="sm:w-[22rem] text-center sm:text-left ">
                                    <p>We take pride in successfully executing 1.30 GW+ and pipelining renewable energy projects of capacity of 1GW in next...</p>
                                </div>
                             </div>
                              </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default section2