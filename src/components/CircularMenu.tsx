"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MenuCard from "./MenuCard";

const CircularMenu = () => {
  const router = useRouter();

  // Set initial sizes for desktop
  const desktopTotalSize = 220;
  const desktopRadius = desktopTotalSize * 2;
  const desktopActiveSize = desktopTotalSize * 1.25;
  const desktopInactiveSize = desktopTotalSize * 0.75;
  const desktopCenterSize = desktopTotalSize;

  // State for sizes and responsiveness
  const [totalSize, setTotalSize] = useState(desktopTotalSize);
  const [radius, setRadius] = useState(desktopRadius);
  const [activeSize, setActiveSize] = useState(desktopActiveSize);
  const [inactiveSize, setInactiveSize] = useState(desktopInactiveSize);
  const [centerSize, setCenterSize] = useState(desktopCenterSize);

  const menuItems = [
    { src: "/images/merit_home.JPG", width: 200, height: 200, alt: "สายบุญ", content: "รวมวัด มัสยิด ศาลเจ้า ที่โดดเด่น", link: "/merit" },
    { src: "/images/eat_home.JPG", width: 200, height: 200, alt: "สายกิน", content: "รวมร้านอาหาร คาเฟ่ ยอดฮิต", link: "/eat" },
    { src: "/images/chill_home.JPG", width: 200, height: 200, alt: "สายชิล", content: "รวมสถานที่พักผ่อนหย่อนใจ เดินเล่น ช้อปปิ้งชิวๆ", link: "/chill" },
    { src: "/images/art_home.JPG", width: 200, height: 200, alt: "สายอาร์ต", content: "รวมแหล่งงานศิลป์ ช่างฝีมือ เวิร์คช้อป อาร์ตกลลอรี่", link: "/art" },
    { src: "/images/map.png", width: 200, height: 200, alt: "Map", content: "แผนที่ย่านบางพลัด", link: "/map" },
    { src: "/images/eat_home.JPG", width: 200, height: 200, alt: "สายกิน", content: "รวมร้านอาหาร คาเฟ่ ยอดฮิต", link: "/eat" },
    { src: "/images/chill_home.JPG", width: 200, height: 200, alt: "สายชิล", content: "รวมสถานที่พักผ่อนหย่อนใจ เดินเล่น ช้อปปิ้งชิวๆ", link: "/chill" },
    { src: "/images/art_home.JPG", width: 200, height: 200, alt: "สายอาร์ต", content: "รวมแหล่งงานศิลป์ ช่างฝีมือ เวิร์คช้อป อาร์ตแกลลอรี่", link: "/art" },
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [startAngle, setStartAngle] = useState(0);
  const [currentAngle, setCurrentAngle] = useState(0);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (isDragging) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging]);

  useEffect(() => {
    // Adjust sizes on mobile screens
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // For mobile, scale down sizes by 2x
        setTotalSize(desktopTotalSize / 2); 
        setRadius(desktopRadius / 2);
        setActiveSize(desktopActiveSize / 2);
        setInactiveSize(desktopInactiveSize / 2);
        setCenterSize(desktopCenterSize / 2);
      } else {
        // Reset to desktop sizes
        setTotalSize(desktopTotalSize);
        setRadius(desktopRadius);
        setActiveSize(desktopActiveSize);
        setInactiveSize(desktopInactiveSize);
        setCenterSize(desktopCenterSize);
      }
    };

    // Run on initial load
    handleResize();

    // Attach resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getAngleFromMouse = (clientX: number, clientY: number) => {
    const menuElement = menuRef.current;
    const centerX = menuElement ? menuElement.offsetWidth / 2 : totalSize / 2;
    const centerY = menuElement ? menuElement.offsetHeight / 2 : totalSize / 2;
    const dx = clientX - centerX;
    const dy = clientY - centerY;
    return Math.atan2(dy, dx);
  };

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const angle = getAngleFromMouse(
      "touches" in e ? e.touches[0].clientX : e.clientX,
      "touches" in e ? e.touches[0].clientY : e.clientY
    );
    setStartAngle(angle);
  };

  const onDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const angle = getAngleFromMouse(
      "touches" in e ? e.touches[0].clientX : e.clientX,
      "touches" in e ? e.touches[0].clientY : e.clientY
    );

    const deltaAngle = angle - startAngle;
    setCurrentAngle((prevAngle) => prevAngle + deltaAngle);
    setStartAngle(angle);
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  const getRotatedItems = () => {
    const angleStep = (2 * Math.PI) / menuItems.length;
    return menuItems.map((item, index) => {
      const angle = angleStep * index + currentAngle;
      const x = totalSize / 2 + radius * Math.cos(angle);
      const y = totalSize / 2 + radius * Math.sin(angle);
      const isActive = Math.abs(angle) < Math.PI / 8 || Math.abs(angle - 2 * Math.PI) < Math.PI / 8;

      return { ...item, x, y, isActive };
    });
  };

  const handleCardClick = (link: string) => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <div
      ref={menuRef}
      style={{
        position: "relative",
        width: `${totalSize}px`,
        height: `${totalSize}px`,
        userSelect: "none",
        margin: "auto",
      }}
      onMouseDown={startDrag}
      onMouseMove={onDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchStart={startDrag}
      onTouchMove={onDrag}
      onTouchEnd={stopDrag}
    >
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        {getRotatedItems().map((item, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: `${item.x - (item.isActive ? activeSize : inactiveSize) / 2}px`,
              top: `${item.y - (item.isActive ? activeSize : inactiveSize) / 2}px`,
              width: `${item.isActive ? activeSize : inactiveSize}px`,
              height: `${item.isActive ? activeSize : inactiveSize}px`,
              textAlign: "center",
              transition: "transform 0.2s ease-out",
              opacity: item.isActive ? 1 : 0.5,
              cursor: item.link ? "pointer" : "default",
            }}
            onClick={() => handleCardClick(item.link || "")}
          >
            <MenuCard
              alt={item.alt}
              src={item.src}
              isActive={item.isActive}
              content={item.content}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: `${centerSize}px`,
          height: `${centerSize}px`,
          borderRadius: "50%",
          textAlign: "center",
          lineHeight: `${centerSize}px`,
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          opacity: 1,
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/compass.png"
          alt="Center Image"
          width={centerSize}
          height={centerSize}
          className="w-[25vw] sm:w-[10vw]"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 1,
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
};

export default CircularMenu;
