"use client";

import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher"; // Adjust the path as needed
import Image from "next/image";

const translations = {
  th: {
    title: "ผู้จัดทำ",
    subtitle: "",
    description:
      "โครงการนี้เป็นส่วนหนึ่งของรายวิชา MAC301 ARTS AND CULTURAL PROJECT MANAGEMENT AND FUND RAISING...",
    subscription:
      "จัดทำขึ้นโดยนิสิต ชั้นปีที่3 คณะศิลปกรรมศาสตร์ สาขานวัตกรรมการจัดศิลปวัฒนธรรม มหาวิทยาลัยศรีนครินทรวิโรฒ",
  },
  en: {
    title: "Our",
    subtitle: "Project",
    description:
      "This project is part of the MAC301 ARTS AND CULTURAL PROJECT MANAGEMENT AND FUND RAISING course...",
    subscription:
      "Created by third-year students of the Faculty Of Fine Arts, Arts and Cultural Management Innovation, Srinakharinwirot University.",
  },
};

type Language = "th" | "en";

export default function OurProjectPage() {
  const [language, setLanguage] = useState<Language>("th");

  return (
    <div>
      <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} /> {/* Updated to match prop names */}

      <div className="text-left sm:text-left ml-[5%]">
        <p className="text-[40px] sm:text-[60px] font-bold">
          {translations[language].title} <br />
          {translations[language].subtitle}
        </p>
      </div>
      <div className="flex justify-end sm:justify-end mr-[5%] mt-4 sm:mt-0">
        <Image
          src="/images/bannerhome.JPG"
          alt="imhourject"
          className="w-[300px] sm:w-[450px] h-auto rounded-3xl"
          width={100}
          height={100}
        />
      </div>
      <div className="text-xl ml-[5%] mr-[5%] mt-6">
        <p className="text-sm sm:text-base">{translations[language].description}</p>
        <p className="mt-[20px] text-sm sm:text-base">{translations[language].subscription}</p>
      </div>
      <div className="flex flex-row sm:flex-col justify-center sm:justify-start mt-6">
        <Image
          src="/images/LOGO มหาลัย.png"
          alt="logo01"
          className="w-[120px] sm:w-[200px] h-auto mb-4 sm:mb-0 sm:ml-[20px]"
          width={100}
          height={100}
        />
        <Image
          src="/images/LOGO คณะ.png"
          alt="logo02"
          className="w-[120px] sm:w-[200px] h-auto mb-4 sm:mb-0 sm:ml-[20px]"
          width={100}
          height={100}
        />
        <Image
          src="/images/LOGO สาขาวิชา.png"
          alt="logo03"
          className="w-[120px] sm:w-[200px] h-auto mb-4 sm:mb-0 sm:ml-[20px]"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
