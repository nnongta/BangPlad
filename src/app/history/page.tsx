"use client";

import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher"; // Adjust the path as needed
import Image from "next/image";

const translations = {
  th: {
    title: "ข้อมูลย่าน",
    subtitle: "บางพลัด",
    description:
      "ย่านบางพลัดเป็นย่านเก่าแก่ของกรุงเทพมหานคร มีหลักฐานยืนยันตั้งแต่ต้นกรุงรัตนโกสินทร์ ชื่อ 'บางพลัด' มีที่มาจากเหตุการณ์ที่ผู้คนอพยพมาหลังเสียกรุงศรีอยุธยาครั้งที่ 2 ทำให้เกิดการพลัดหลงเนื่องจากพื้นที่มีต้นไม้หนาแน่นและลำคลองมากมาย ย่านบางพลัดครอบคลุม 4 แขวง ได้แก่ แขวงบางพลัด แขวงบางบำหรุ แขวงบางอ้อ และแขวงบางยี่ขัน อีกทั้งยังเชื่อมต่อกับถนนสายหลักหลายสาย เช่น ถนนจรัญสนิทวงศ์ ถนนสิรินธร และถนนอรุณอมรินทร์ ย่านนี้มีเสน่ห์เฉพาะตัว ทั้งบรรยากาศธรรมชาติและพหุวัฒนธรรมที่แฝงอยู่",
    reference: "แหล่งอ้างอิงจาก",
  },
  en: {
    title: "Area Information",
    subtitle: "Bang Phlat",
    description:
      "Bang Phlat is one of Bangkok's historic areas, with evidence of its existence since the early Rattanakosin era. The name 'Bang Phlat' originates from the migration of people following the second fall of Ayutthaya, where many got lost due to dense trees and numerous canals in the area. Bang Phlat encompasses four sub-districts: Bang Phlat, Bang Bamru, Bang O, and Bang Yi Khan. It is connected to major roads such as Charan Sanitwong Road, Sirindhorn Road, and Arun Amarin Road. The district retains its unique charm with its natural atmosphere and hidden multicultural aspects.",
    reference: "Reference from",
  },
};

type Language = "th" | "en";

export default function HistoryPage() {
  const [language, setLanguage] = useState<Language>("th");

  return (
    <div className="p-4">
      {/* LanguageSwitcher */}
      <div className="flex justify-end p-4">
        <LanguageSwitcher
          currentLanguage={language}
          onLanguageChange={setLanguage}
        />
      </div>

      <div dir="ltr" className="text-end mt-[25px]">
        <p className="text-[40px] sm:text-[45px] font-bold">{translations[language].title}</p>
        <p className="text-[20px] sm:text-[25px] -mt-[15px]">{translations[language].subtitle}</p>
      </div>

      <div className="grid justify-center mt-4 sm:mt-6">
        <Image
          src="/images/history-page.JPG"
          alt="hispage"
          className="w-[300px] sm:w-[450px] h-auto rounded-3xl"
        />
      </div>

      <div className="text-balance text-center sm:text-left text-[14px] sm:text-[16px] mt-4 sm:mt-6">
        <p>{translations[language].description}</p>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-start mt-6">
        <div className="flex bg-gray w-[150px] h-[150px] place-items-center justify-center m-[16px] rounded-[24px]">
          <a
            href="https://www.ddproperty.com/areainsider/บางพลัด/article/รู้จักย่านบางพลัดแบบเจ-5674"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/external-link.svg"
              alt="ref-link"
              className="w-[32px] h-[32px] object-cover rounded-lg text-center justify-self-center text-center"
            />
            <p className="text-[10px] sm:text-[12px]">
              {translations[language].reference}
              <br />
              ddproperty
            </p>
          </a>
        </div>
        <div className="flex bg-gray w-[150px] h-[150px] place-items-center justify-center m-[16px] rounded-[24px]">
          <a
            href="https://www.culturedcreatures.co/บางพลัด-ลัดเลาะ/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/external-link.svg"
              alt="ref-link"
              className="w-[32px] h-[32px] object-cover rounded-lg text-center justify-self-center text-center"
            />
            <p className="text-[10px] sm:text-[12px]">
              {translations[language].reference}
              <br />
              culturedcreatures
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
