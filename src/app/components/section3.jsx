"use client";

import React from 'react'
import Z5 from "../../../public/Z5.png"
//import Fan from "../../../public/fan.png"
import Wired1 from "../../../public/wired1.png"
import Wired2 from "../../../public/wired2.png"
import Wired3 from "../../../public/wired3.png"
import Wired4 from "../../../public/wired4.png"



import Image from "next/image";
function section3() {
    return (
        <div className="lg:h-screen bg-cover bg-center mt-5 h-[95rem] sm:h-[95rem]" style={{ backgroundImage: "url('/Bg2.png')" }}>
            <div className="session-1  m-auto mt-[7rem]  xl:w-21 lg:w-21">
                <div className="container-1 text-white  flex flex-col justify-center items-center gap-6">
                    <div className="content-1 flex flex-row items-center mt-[5rem] gap-4">
                        <div><Image src={Z5} alt="icon"></Image></div>
                        <div><p>SMART TURBINE</p></div>
                    </div>
                    <div className="content-2 text-center  sm:text-center">
                        <p>SMART TURBINELorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>

                <div className="container-2 mt-[6rem]  flex flex-col gap-[5rem]  sm:flex sm:flex-col sm:gap-[5rem]   lg:flex lg:flex-row justify-between items-center lg:gap-5">
                    <div className="content-1 flex flex-col gap-5">
                        <div className="box-1 flex flex-row bg-white items-center justify-center w-[19rem] p-3 rounded ">
                            <div>
                                <Image src={Wired1} alt="icon"></Image>
                            </div>
                            <div>
                                <div className="text-4xl font-bold"> 110+</div>
                                <div>Project Completed</div>
                            </div>
                        </div>
                        <div className="box-2"></div>  <div className="box-1 flex flex-row bg-white items-center justify-center w-[19rem] p-3 rounded ">
                            <div>
                                <Image src={Wired2} alt="icon"></Image>
                            </div>
                            <div>
                                <div className="text-4xl font-bold">11+</div>
                                <div>Years Of Experience</div>
                            </div>
                        </div>
                    </div>
                    <div className="content-2">
                        <div>
                            <Image src={"/Fan.png"} alt="fan" height={500} width={500}></Image>
                        </div>
                    </div>
                    <div className="content-3 flex flex-col gap-5">
                        <div className="box-1 flex flex-row bg-white items-center justify-center w-[19rem] p-3 rounded ">
                            <div>
                                <Image src={Wired3} alt="icon"></Image>
                            </div>
                            <div>
                                <div className="text-4xl font-bold"> 90+</div>
                                <div>Professional Staff</div>
                            </div>
                        </div>
                        <div className="box-2 flex flex-row bg-white items-center justify-center w-[19rem] p-3 rounded ">
                            <div>
                                <Image src={Wired4} alt="icon"></Image>
                            </div>
                            <div>
                                <div className="text-4xl font-bold"> 170+</div>
                                <div>Happy Clients</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default section3