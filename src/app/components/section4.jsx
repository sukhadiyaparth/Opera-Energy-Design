import React from 'react'
import Image from "next/image";
import Z4 from "../../../public/Z4.png"
import G1 from "../../../public/Group1.png"
import G2 from "../../../public/Group2.png"
import G3 from "../../../public/Group3.png"
import G4 from "../../../public/Group4.png"
import Line from "../../../public/Line.png"


function section4() {
    return (
        <div>
            <div className="session-1 m-auto xl:w-21 lg:w-20 mt-[5rem] ">
                <div className="container-1">
                    <div className="content-1 flex flex-row justify-center gap-2">
                        <div className="">
                            <Image src={Z4}></Image>
                        </div>
                        <div className=""><p>WORKING PROCESS</p></div>
                    </div>
                    <div className="content-2 text-center my-6">
                        <p className="text-4xl">4 Way To Achive <b> Results</b></p>
                    </div>
                    <div className="content-3 text-center">
                        <p className="font-light     ">
                            Nature driven choice of energy generation is only a way ahead for overturning damage made due to climate change.
                        </p>
                    </div>
                </div>
                <div className="container-2 relative mt-[8rem]  flex flex-row">
                    <div className="content-1 flex flex-col ml-auto mr-auto gap-[5rem] xl:flex xl:flex-row  relative  xl:ml-[4rem] xl:mr-[4rem] xl:gap-[5rem]">
                        <div className="box-1  flex flex-col items-center gap-5 xl:w-[21.25%] xl:flex xl:flex-col xl:items-center  xl:gap-[5rem]  ">
                            <div className=""><span className="font-bold text-4xl">1</span><span className="font-bold">Step</span></div>

                            <div className=" flex flex-col items-center justify-center gap-[1rem]">
                                <div>
                                    <Image src={G1} alt="line"></Image>
                                </div>
                                <div>
                                    <p className=" text-xl font-bold">Consult With Us</p>
                                </div>
                                <div  >
                                    <p className="text-center">Either we or you may approach for consultation for chosen services in the energy sector.</p>
                                </div>
                            </div>
                        </div>
                        <div className="box-2 flex flex-col-reverse items-center gap-5 xl:w-[21.25%] xl:flex xl:flex-col xl:items-center 2xl:justify-center	2xl:gap-[3rem] xl:gap-[4rem] ">


                            <div className=" flex flex-col  xl:flex xl:flex-col-reverse items-center  gap-[1rem] 2xl:h-[25rem] xl:h-[20rem] ">
                                <div>
                                    <Image src={G2} alt="line"></Image>
                                </div>

                                <div>
                                    <p className="text-center">Either we or you may approach for consultation for chosen services in the energy sector.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-2xl"> Generate Power</p>
                                </div>
                            </div>
                            <div className=" "><span className="font-bold text-4xl">2</span><span className="font-bold">Step</span></div>
                        </div>
                        <div className="box-3  flex flex-col items-center gap-5 xl:w-[21.25%] xl:flex xl:flex-col xl:items-center  xl:gap-[7rem] ">
                            <div className=""><span className="font-bold text-4xl">3</span><span className="font-bold">Step</span></div>

                            <div className=" flex flex-col items-center justify-center gap-[1rem]">
                                <div>
                                    <Image src={G3} alt="line"></Image>
                                </div>
                                <div>
                                    <p className=" text-xl font-bold">Store The Power</p>
                                </div>
                                <div  >
                                    <p className="text-center">Storage and distribution of the power in a state of the art way can help you to grow fast.</p>
                                </div>
                            </div>
                        </div>
                        <div className="box-4 flex flex-col-reverse items-center gap-5  xl:w-[21.25%] xl:flex xl:flex-col xl:items-center 2xl:justify-center	2xl:gap-[3rem] xl:gap-[4rem] ">


                            <div className=" flex flex-col xl:flex xl:flex-col-reverse items-center  gap-[1rem] 2xl:h-[25rem] xl:h-[20rem] ">
                                <div>
                                    <Image src={G4} alt="line"></Image>
                                </div>

                                <div>
                                    <p className="text-center">Our expertize of generating and regenerating energy with process driven usage guidelines is best.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-2xl">Use It Flexibly</p>
                                </div>
                            </div>
                            <div className=" "><span className="font-bold text-4xl">4</span><span className="font-bold">Step</span></div>
                        </div>

                    </div>
                    <div className="Images absolute top-[3rem]  hidden sm:hidden xl:block">
                        <Image src={Line} alt="Line"></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default section4