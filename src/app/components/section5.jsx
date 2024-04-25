import React from 'react'
import Mask1 from "../../../public/Mask1.png"
import Mask2 from "../../../public/Mask2.png"
import Mask3 from "../../../public/Mask3.png"
import Mask4 from "../../../public/Mask4.png"
import Mask5 from "../../../public/Mask5.png"
import Mask6 from "../../../public/Mask6.png"
import Mask7 from "../../../public/Mask7.png"
import Mask8 from "../../../public/Mask8.png"
import Mask9 from "../../../public/Mask9.png"
import Mask10 from "../../../public/Mask10.png"
import Mask11 from "../../../public/Mask11.png"
import Mask12 from "../../../public/Mask12.png"
import Mask13 from "../../../public/Mask13.png"
import Mask14 from "../../../public/Mask14.png"
import Mask15 from "../../../public/Mask15.png"



import Image from "next/image";
function section5() {
    return (
        <div className="bg-[#009846]">
            <div className="session-1 mt-[5rem]">
                <div className="container-1 text-center text-white">
                    <br />
                    <br />
                    <br />
                    <div className="content-1 ">
                        <div className="">
                            <p className="text-4xl ">Our Client</p>
                        </div>
                    </div>
                    <div className="content-2 flex flex-row mt-[5rem] ml-5 mr-5 justify-between gap-5">
                        <div>
                            <Image src={Mask1} alt="Images"></Image>
                        </div>
                        <div>
                        <Image src={Mask2} alt="Images"></Image>
                        </div>
                        <div>
                        <Image src={Mask3} alt="Images"></Image>
                        </div>
                        <div>
                        <Image src={Mask4} alt="Images"></Image>
                        </div>
                        <div>
                        <Image src={Mask5} alt="Images"></Image>
                        </div>
                        <div>
                        <Image src={Mask6} alt="Images"></Image>
                        </div>
                        <div>
                        <Image src={Mask7} alt="Images"></Image>
                        </div>
                    </div>
                    <div className="content-3 flex flex-row mt-[2rem]  justify-between gap-5">
                        
                        <div>
                        <Image src={Mask8} alt="Images"></Image>
                        </div>
                        <div>
                        <Image src={Mask9} alt="Images"></Image>
                        </div>
                        <div>
                        <Image src={Mask10} alt="Images"></Image>
                        </div>
                        <div>
                        <Image src={Mask11} alt="Images"></Image>
                        </div>
                        <div>
                        <Image src={Mask12} alt="Images"></Image>
                        </div>
                        <div>
                        <Image src={Mask13} alt="Images"></Image>
                        </div>
                        <div>
                        <Image src={Mask14} alt="Images"></Image>
                        </div>  <div>
                        <Image src={Mask15} alt="Images"></Image>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br /> 
                </div>
            </div>
        </div>
    )
}

export default section5