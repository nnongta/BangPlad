import React from "react";
import Image from "next/image";

// Define a type for the component props
type MenuCardProps = {
  alt: string;
  src: string;
  isActive: boolean;
  content: string;
};

const MenuCard = ({ alt, src, isActive, content }: MenuCardProps) => {
  return (
    <div
      className="relative max-w-sm rounded-lg"
      style={{
        width: "100%", // ปรับขนาดการ์ดให้พอดีกับพื้นที่
        height: "100%", // ปรับขนาดความสูงด้วย
        transition: "transform 0.3s ease", // เพิ่ม transition ให้ smooth
        transform: isActive ? "scale(1.1)" : "scale(1)", // ขยายขนาดเมื่อ Active
        // ลบ boxShadow ออก
        boxShadow: "none", // ไม่มีเงา
      }}
    >
      {/* ข้อความ h2 (แสดงเฉพาะเมื่อ Active) */}
      {isActive && (
        <div className="absolute inset-0 -top-[50px] right-0 z-20 flex items-start justify-end">
          <h2 className="px-2 py-1 text-6xl font-bold text-brown">{alt}</h2>
        </div>
      )}

      {/* รูปภาพ */}
      <div className="z-0">
        <Image
          src={src}
          alt={alt}
          className={`w-full h-full object-cover rounded-3xl transition-all ease-out`}
          style={{
            transform: isActive ? "scale(1.1)" : "scale(1)", // ขยายรูปเมื่อ Active
          }}
        />
      </div>

      {/* เนื้อหาด้านล่าง (แสดงเฉพาะเมื่อ Active) */}
      {isActive && (
        <div className="p-4 flex items-start left-0 mt-3">
          {/* เส้นแนวตั้ง */}
          <div className="mr-4">
            <Image src="/line.svg" alt="line" />
          </div>
          {/* ข้อความ */}
          <p className="text-black text-left text-2xl ">{content}</p>
        </div>
      )}
    </div>
  );
};

export default MenuCard;
