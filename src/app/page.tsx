import CircularMenu from "@/components/CircularMenu";
import React from 'react';
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Right-to-Left Content */}
      <div dir="rtl" className="text-8xl text-brown">
        <p>
          ย่าน
          <br />
          บางพลัด
        </p>
      </div>

      <div className="relative w-full h-auto flex justify-center">
        {/* Background Banner */}
        <div className="relative w-[250px] h-[150px] pt-5 overflow-hidden group">
          <Image
            src="/bannernew.svg"
            alt="Background Banner"
            layout="fill"
            objectFit="cover" // or 'contain' based on your preference
            className="transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>

      </div>

      {/* Content on the right */}
      <div className="flex flex-row justify-end text-right text-xl w-full md:w-auto">
        <div className="mr-5 space-y-1">
          <p>สายบุญ</p>
          <p>สายกิน</p>
          <p>สายชิว</p>
          <p>สายอาร์ต</p>
        </div>
        <div>
          <Image
            src="../arrowline.svg"
            alt="Arrow Line"
            className="mt-5 md:mt-0"
            width={7}
            height={20}
          />
        </div>
      </div>

      {/* Main Content - Use flex to place CircularMenu on the left and content on the right */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-[150px] px-[0px] space-y-10 md:space-y-0">
        {/* CircularMenu on the left */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-start items-start">
          <div className="relative">
            {/* Adjust this div to align CircularMenu in the center */}
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:left-1/2 sm:translate-x-[-50%] md:left-1/2 md:translate-x-[-50%]">
              <CircularMenu />
            </div>
          </div>
        </div>



      </div>




    </div>
  );
}
