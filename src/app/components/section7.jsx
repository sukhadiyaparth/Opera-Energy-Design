"use Client"
import React from 'react'
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import Email from "../../../public/email.png";
import Location from "../../../public/Location.png";
import Phone from "../../../public/Phone.png";

function section7() {
    return (
        <div>
            <div className="">
                <div className="session-1 m-auto xl:w-21 lg:w-20 mt-[5rem] relative top-[2.5rem]">
                    <div className="container-1 bg-[#D8F6CF] flex flex-row items-center justify-between  p-4 rounded-full flex-wrap" >
                        <div className="content-1  ml-9">
                            <p className="text-3xl">We Value Our <b>Customers</b></p>
                        </div>
                        <div className="content-2  mr-9">
                            <div className="bg-[#009846] text-white p-3 rounded">
                                <p>Get The Quote</p>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="container-2 bg-black text-white ">
                    <br /><br /><br />
                    <div className="session-2  m-auto xl:w-21 lg:w-20 ">
                        <div className=" flex flex-col gap-[5rem] items-center lg:flex lg:flex-row lg:gap-[15rem] ">
                            <div className="content-1 flex flex-col gap-5">
                                <div className="box-1 ">
                                    <Image src={Logo} alt="logo"></Image>
                                </div>
                                <div className="box-2 flex flex-row items-start gap-5 text-[#898989] ">
                                    <div> <Image src={Location} alt="location"></Image></div>
                                    <div className="w-[17rem]"><p>Shreeji plaza, 201, Main Rd, Valkeshwari, Park Colony, Jamnagar, Gujarat 361008</p></div>
                                </div>
                                <div className="box-3 flex flex-row items-center gap-5 text-[#898989]">
                                    <div> <Image src={Phone} alt="Phone"></Image></div>
                                    <div><p>(+91) 89802 30024</p></div>
                                </div>
                                <div className="box-4 flex flex-row items-center gap-5 text-[#898989]">
                                    <div> <Image src={Email} alt="Email"></Image></div>
                                    <div><p>info@operaenergy.in</p></div>
                                </div>
                            </div>
                            <div className="content-2">
                                <div className="box-1 text-2xl">
                                    <p>Quick Link</p>
                                </div>
                                <div className="box-2 grid grid-cols-3 text-[#898989] gap-[3rem] mt-[3rem]">
                                        <div><p>About</p></div>
                                        <div><p>Capex (EPC Model)</p></div>
                                        <div><p>Facebook</p></div>
                                        <div><p>Turn Key EPC Services</p></div>
                                        <div><p>Captive Project Pipeline</p></div>
                                        <div><p>Twitter</p></div>
                                        <div><p>Executed Project</p></div>
                                        <div><p>Energy Storage</p></div>
                                        <div><p>LinkedIn</p></div>
                                        <div><p>Captive / Group Captive</p></div>
                                        <div><p>Third-Party Power Sale</p></div>
                                        <div><p>Instagram</p></div>
                                        <div><p>Blog</p></div>
                                        <div><p>Privacy Policy</p></div>
                                        <div><p>Youtube</p></div>
                                </div>
                            </div>
                           
                        </div>
                        <br />
                            <br />
                    </div>
                </div>


                <div className="container-3 bg-[#009846]">
                    <div className="content-1 text-white text-center p-2">
                        <p>Copyright © 2022 Operaenergy. All Rights Reserved.Powered by Sauratech</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default section7