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

      <div className="relative w-full h-auto">
        {/* Background Banner */}
        <div className="relative w-[600px] h-[400px] pt-5">
          <Image
            src="/images/bannerhome.JPG"
            alt="Background Banner"
            layout="fill"
            objectFit="cover" // or 'contain' based on your preference
          />
        </div>


        <div className="absolute inset-0 z-20 flex justify-center items-center">
          {/* Pagoda and Sun Illustration */}
          <Image
            src="/images/pagoda.PNG"
            alt="Pagoda"
            width={200}
            height={200} // Adjust height based on your image's aspect ratio
            className="absolute left-[25%] -bottom-[15%]"
          />
          {/* Bicycle Silhouette */}
          <Image
            src="/images/bicycle.PNG"
            alt="Bicycle"
            width={200}
            height={200} // Adjust height based on your image's aspect ratio
            className="absolute right-[25%] -bottom-[15%]"
          />
        </div>

      </div>

      {/* Main Content - Use flex to place CircularMenu on the left and content on the right */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-[500px] px-[50px] space-y-10 md:space-y-0">
        {/* CircularMenu on the left */}
        <div className="flex-shrink-0 md:-ml-[25%] w-full md:w-auto">
          <CircularMenu />
        </div>

        {/* Content on the right */}
        <div className="flex flex-col md:flex-row justify-end text-right text-5xl w-full md:w-auto">
          <div className="mr-5 space-y-7 md:space-y-5">
            <p>สายบุญ</p>
            <p>สายกิน</p>
            <p>สายชิว</p>
            <p>สายอาร์ต</p>
          </div>
          <div>
            <Image src="../arrowline.svg" alt="Arrow Line" className="mt-5 md:mt-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
