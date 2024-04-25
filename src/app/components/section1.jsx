"use client";

import React from 'react'
import Image from "next/image";
function section1() {
  return (
    <div   className="h-screen bg-cover bg-center mt-5" style={{backgroundImage: "url('/Bg.png')"}}>
        <div className="session 1 sm:m-auto xl:w-21   lg:w-20 h-screen flex  items-center text-white  ">
            <div className="container-1 text-center  sm:text-center lg:text-left">
                <div className="content-1  lg:w-[43rem]">
                    <p className="text-2xl sm:text-2xl lg:text-5xl">Best Wind Energy Companies
In <b>Tamilnadu India.</b></p>
                </div>
                <div className="content-2  my-9  sm:my-[5rem] md:ml-5 md:mr-5 lg:w-[34rem]  lg:ml-0 lg:mr-0">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                </div>
                <div className="content-3">
                    <div className="box-1 bg-white text-[#009846] p-3 text-center rounded  ml-auto mr-auto w-[20%] sm:ml-auto sm:mr-auto   sm:w-[20%] lg:ml-0 ">
                    <p>Read More</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default section1