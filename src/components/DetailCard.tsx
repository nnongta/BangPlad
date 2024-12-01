"use client";

import React from "react";
import Image from "next/image";

// Define a type for the component props
type DetailCardProps = {
    alt: string;
    src: string;
    isActive: boolean;
    content: string;
    rating: number;
    link?: string;
};

const DetailCard = ({ alt, src, isActive, content, rating, link }: DetailCardProps) => {
    // Helper function to generate star icons as images
    const renderStars = (rating: number) => {
        return Array.from({ length: rating }, (_, i) => (
            <Image
                key={i}
                src="/star.svg"
                alt="Filled star"
                className="w-5 h-5"
                width={100}
                height={100}
            />
        ));
    };

    const handleClick = () => {
        if (link) {
            window.location.href = link; // Navigate using window.location
        }
    };

    return (
        <div
            onClick={handleClick}
            className={`cursor-pointer flex items-center justify-items-center rounded-lg bg-[#f0f0f0] transition-transform w-60 h-60 ${isActive ? "transform scale-105" : ""
                }`}
        >
            {/* Image Section */}
            <div className="flex-shrink-0 ml-[25px]">
                <Image
                    src={src}
                    alt={alt}
                    className="w-40 h-40 object-cover rounded-md"
                    width={100}
                    height={100}
                />
                {/* Title */}
                <h3
                    className="text-lg font-bold text-black mt-2 text-ellipsis overflow-hidden whitespace-normal break-words"
                    style={{
                        width: "10rem",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2, // Limit to 2 lines
                        overflow: "hidden",
                    }}
                >
                    {content}
                </h3>
            </div>
            {/* Content Section */}
            <div className="ml-4 flex-grow inset-x-0 top-0">
                {/* Stars displayed vertically */}
                <div className="flex flex-col pb-24">{renderStars(rating)}</div>
            </div>
        </div>
    );
};

export default DetailCard;
