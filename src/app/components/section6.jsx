import React from 'react'
import Image from "next/image";
import Z4 from "../../../public/Z4.png"
import Lg1 from "../../../public/P1.png"
import Lg2 from "../../../public/P2.png"

function section6() {
  return (
    <div>
      <div className="session-1  m-auto xl:w-21 lg:w-20 mt-[5rem]">
        <div className="container-1">
          <div className="content-1 flex flex-row justify-center gap-2">
            <div className="">
              <Image src={Z4} alt="img"></Image>
            </div>
            <div className=""><p>OUR BLOG</p></div>
          </div>
          <div className="content-2 text-center my-6">
            <p className="text-4xl">Our Latest <b> Blog</b></p>
          </div>

        </div>
        <div className="container-2  flex flex-col lg:flex lg:flex-row gap-[2rem] mt-[5rem]">
          <div className="contetnt-1 text-center     flex flex-col lg:flex lg:flex-row gap-5   bg-[#F6F6F6]">
            <div className="box-1  ml-auto mr-auto">
              <Image src={Lg1} alt="Image" className="mt-[5rem] lg:mt-[0rem]"></Image>
            </div>
            <div className="box-2 mt-7">
              <div className="font-light">
                <p>21, January, 2023</p>
              </div>
              <div className="my-6 text-[#599537] text-2xl">
                <p cl>Lorem Ipsum simply</p>
              </div>
              <div className="font-light"><p>It is a long established fact that a reader will be diable content of a page.</p></div>
              <div className="mt-6 font-bold"><p className="mb-[3rem] lg:mb-[0em]">Read More</p></div>
            </div>
          </div>
          <div className="contetnt-2 text-center     flex flex-col lg:flex lg:flex-row gap-5   bg-[#F6F6F6]">
            <div className="box-1  ml-auto mr-auto">
              <Image src={Lg2} alt="Image" className="mt-[5rem] lg:mt-[0rem]"></Image>
            </div>
            <div className="box-2 mt-7">
              <div className="font-light">
                <p>21, January, 2023</p>
              </div>
              <div className="my-6 text-[#599537] text-2xl">
                <p cl>Hydrogen Energy</p>
              </div>
              <div className="font-light"><p>It is a long established fact that a reader will be diable content of a page.</p></div>
              <div className="mt-6 font-bold "><p className="mb-[3rem] lg:mb-[0em]">Read More</p></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  ) 
}

export default section6