import React from "react";
import Image from "next/image";

interface LocationIconProps {
    x: number;
    y: number;
    label: string;
    link: string;
    iconSrc: string;
    size?: number; // Optional size prop for the icon size
    id: string;   // ID for the location (e.g., location number)
    rotate?: number; // Optional rotation angle in degrees
}

const LocationIcon: React.FC<LocationIconProps> = ({ x, y, label, link, iconSrc, size = 40, id, rotate = 0 }) => {
    return (
        <a
            href={link}
            style={{
                position: "absolute",
                left: `${x}%`,
                top: `${y}%`,
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`, // Add rotation
                display: "inline-block", // Keep the ID number and icon together
                textAlign: "center", // Ensure the ID is centered
            }}
            title={label}
        >
            <Image
                src={iconSrc}
                alt={label}
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    cursor: "pointer",
                }}
            />
            <span
                style={{
                    position: "absolute",
                    top: "40%",
                    left: "52%",
                    transform: "translateX(-50%)",
                    fontSize: "12px",  // Adjust font size
                    fontWeight: "light",  // Make the number stand out
                    color: "white",  // White color for the number
                    borderRadius: "50%",
                    padding: "2px 5px",  // Padding to make the number more readable
                }}
            >
                {id}
            </span>
        </a>
    );
};

const MapWithIcons: React.FC = () => {
    const locations = [
        { x: 33.3, y: 84.35, label: "สายบุญ ที่ 01", link: "/meritDetail/01", iconSrc: "/buddhist.svg", id: "1", size: 50 },
        { x: 50.5, y: 46.90, label: "สายบุญ ที่ 02", link: "/meritDetail/02", iconSrc: "/buddhist.svg", id: "2", size: 75 },
        { x: 45.4, y: 71.8, label: "สายบุญ ที่ 03", link: "/meritDetail/03", iconSrc: "/buddhist.svg", id: "3", size: 50 },
        { x: 52.8, y: 62, label: "สายบุญ ที่ 04", link: "/meritDetail/04", iconSrc: "/buddhist.svg", id: "4", size: 80, rotate: -45 },
        { x: 66, y: 35, label: "สายบุญ ที่ 05", link: "/meritDetail/05", iconSrc: "/buddhist.svg", id: "5", size: 2 },
        { x: 58, y: 52.5, label: "สายบุญ ที่ 06", link: "/meritDetail/06", iconSrc: "/buddhist.svg", id: "6", size: 50 },
        { x: 60.5, y: 46.90, label: "สายบุญ ที่ 07", link: "/meritDetail/07", iconSrc: "/buddhist.svg", id: "7", size: 50 },
        { x: 38, y: 78, label: "สายบุญ ที่ 08", link: "/meritDetail/08", iconSrc: "/buddhist.svg", id: "8", size: 50 },
        { x: 69, y: 17.59, label: "สายบุญ ที่ 09", link: "/meritDetail/09", iconSrc: "/buddhist.svg", id: "9", size: 50 },
        { x: 69.9, y: 29, label: "สายบุญ ที่ 10", link: "/meritDetail/10", iconSrc: "/buddhist.svg", id: "10", size: 55, rotate: -67 },
        { x: 54.9, y: 30.8, label: "สายบุญ ที่ 11", link: "/meritDetail/11", iconSrc: "/buddhist.svg", id: "11", size: 70 },
        { x: 47.6, y: 69.4, label: "สายบุญ ที่ 12", link: "/meritDetail/12", iconSrc: "/buddhist.svg", id: "12", size: 50 },


        { x: 35.6, y: 89, label: "สายอาร์ต ที่ 01", link: "/artDetail/01", iconSrc: "/art.svg", id: "47", size: 90, rotate: -30 },
        { x: 46, y: 65.5, label: "สายอาร์ต ที่ 02", link: "/artDetail/02", iconSrc: "/art.svg", id: "48", size: 90 },
        { x: 58.5, y: 37.5, label: "สายอาร์ต ที่ 03", link: "/artDetail/03", iconSrc: "/art.svg", id: "49", size: 90, rotate: -39.5 },
        { x: 61.8, y: 23.9, label: "สายอาร์ต ที่ 04", link: "/artDetail/04", iconSrc: "/art.svg", id: "50", size: 80, rotate:-34 },
        { x: 60.5, y: 18.9, label: "สายอาร์ต ที่ 05", link: "/artDetail/05", iconSrc: "/art.svg", id: "51", size: 90, rotate: -30 },
        { x: 52.6, y: 29.5, label: "สายอาร์ต ที่ 06", link: "/artDetail/06", iconSrc: "/art.svg", id: "52", size: 90, rotate: -30 },
        { x: 71.2, y: 22.5, label: "สายอาร์ต ที่ 07", link: "/artDetail/07", iconSrc: "/art.svg", id: "53", size: 90, rotate: -30 },
        { x: 72, y: 18.9, label: "สายอาร์ต ที่ 08", link: "/artDetail/05", iconSrc: "/art.svg", id: "54", size: 90, rotate: -82 },


        { x: 26.1, y: 75.3, label: "สายชิล ที่ 01", link: "/chillDetail/01", iconSrc: "/chill.svg", id: "37", size: 50 },
        { x: 15.3, y: 80, label: "สายชิล ที่ 02", link: "/chillDetail/02", iconSrc: "/chill.svg", id: "38", size: 55 },
        { x: 43.6, y: 81.3, label: "สายชิล ที่ 03", link: "/chillDetail/03", iconSrc: "/chill.svg", id: "39", size: 56 },
        { x: 49.5, y: 63.7, label: "สายชิล ที่ 04", link: "/chillDetail/04", iconSrc: "/chill.svg", id: "40", size: 56 },
        { x: 20.8, y: 94, label: "สายชิล ที่ 05", link: "/chillDetail/05", iconSrc: "/chill.svg", id: "41", size: 56 },
        { x: 35.5, y: 81.3, label: "สายชิล ที่ 06", link: "/chillDetail/06", iconSrc: "/chill.svg", id: "42", size: 56 },
        { x: 3, y: 57, label: "สายชิล ที่ 07", link: "/chillDetail/07", iconSrc: "/chill.svg", id: "43", size: 56 },
        { x: 52.6, y: 45.5, label: "สายชิล ที่ 08", link: "/chillDetail/08", iconSrc: "/chill.svg", id: "44", size: 56 },
        { x: 46, y: 57.2, label: "สายชิล ที่ 09", link: "/chillDetail/09", iconSrc: "/chill.svg", id: "45", size: 56 },
        { x: 67.7, y: 25, label: "สายชิล ที่ 10", link: "/chillDetail/10", iconSrc: "/chill.svg", id: "46", size: 56 },
        
        { x: 31.8, y: 63.6, label: "สายกิน ที่ 01", link: "/eatDetail/01", iconSrc: "/eat.svg", id: "13",size: 70 },
        { x: 27.05, y: 64.9, label: "สายกิน ที่ 02", link: "/eatDetail/02", iconSrc: "/eat.svg", id: "14",size: 70 },
        { x: 32.35, y: 70.7, label: "สายกิน ที่ 03", link: "/eatDetail/03", iconSrc: "/eat.svg", id: "15",size: 70 },//15
        { x: 22.25, y: 60.9, label: "สายกิน ที่ 04", link: "/eatDetail/04", iconSrc: "/eat.svg", id: "16",size: 70 },//16
        { x: 2.705, y: 62.5, label: "สายกิน ที่ 05", link: "/eatDetail/01", iconSrc: "/eat.svg", id: "17",size: 70 },//17
        { x: 24.1, y: 86.5, label: "สายกิน ที่ 06", link: "/eatDetail/01", iconSrc: "/eat.svg", id: "18",size: 70 },//18
        { x: 12.35, y: 61.8, label: "สายกิน ที่ 07", link: "/eatDetail/01", iconSrc: "/eat.svg", id: "19",size: 70 },//19
        { x: 40.595, y: 88.35, label: "สายกิน ที่ 08", link: "/eatDetail/01", iconSrc: "/eat.svg", id: "20",size: 70 },//20
        { x: 38.178, y: 86.55, label: "สายกิน ที่ 09", link: "/eatDetail/01", iconSrc: "/eat.svg", id: "21",size: 70 },//21
        { x: 43.55, y: 77.05, label: "สายกิน ที่ 10", link: "/eatDetail/01", iconSrc: "/eat.svg", id: "22",size: 70 },//22
        { x: 35.59, y: 74.68, label: "สายกิน ที่ 11", link: "/eatDetail/01", iconSrc: "/eat.svg", id: "23",size: 70 },//23
        { x: 45.85, y: 75, label: "สายกิน ที่ 12", link: "/eatDetail/01", iconSrc: "/eat.svg", id: "24",size: 70 },//24
        { x: 30.95, y: 79.3, label: "สายกิน ที่ 13", link: "/eatDetail/01", iconSrc: "/eat.svg", id: "25",size: 70 },//25
        { x: 66.24, y: 38.23, label: "สายกิน ที่ 14", link: "/eatDetail/01", iconSrc: "/eat.svg", id: "26",size: 70 },//26
        { x: 55.95, y: 27.9, label: "สายกิน ที่ 15", link: "/eatDetail/01", iconSrc: "/eat.svg", id: "27",size: 70 },//27
        { x: 62.9, y: 46, label: "สายกิน ที่ 16", link: "/eatDetail/01", iconSrc: "/eat.svg", id: "28",size: 70 },//28
        { x: 56.53, y: 50.75, label: "สายกิน ที่ 17", link: "/eatDetail/01", iconSrc: "/eat.svg", id: "29",size: 70 },//29
        { x: 50.8, y: 60.5, label: "สายกิน ที่ 18", link: "/eatDetail/01", iconSrc: "/eat.svg", id: "30",size: 70 },//30
        { x: 34.5, y: 52.1, label: "สายกิน ที่ 19", link: "/eatDetail/01", iconSrc: "/eat.svg", id: "31",size: 70 },//31
        { x: 62.8, y: 16, label: "สายกิน ที่ 20", link: "/eatDetail/01", iconSrc: "/eat.svg", id: "32",size: 70 },//32
        { x: 60.46, y: 32.25, label: "สายกิน ที่ 21", link: "/eatDetail/01", iconSrc: "/eat.svg", id: "33",size: 70 },//33
        { x: 59.15, y: 22.7776, label: "สายกิน ที่ 22", link: "/eatDetail/01", iconSrc: "/eat.svg", id: "34",size: 70 },//34
        { x: 67.814, y: 21.85, label: "สายกิน ที่ 23", link: "/eatDetail/01", iconSrc: "/eat.svg", id: "35",size: 70 },//35
        { x: 70.6, y: 25.9, label: "สายกิน ที่ 24", link: "/eatDetail/01", iconSrc: "/eat.svg", id: "36",size: 70 },//36
    
    ];

    return (
        <div style={{ position: "relative", width: "100%", height: "auto" }}>
            <Image
                src="/images/bangplad.png" // Map image
                alt="Map"
                style={{ width: "100%", height: "auto" }}
            />
            {locations.map((location, index) => (
                <LocationIcon
                    key={`location-${index}`}
                    x={location.x}
                    y={location.y}
                    label={location.label}
                    link={location.link}
                    iconSrc={location.iconSrc}
                    size={location.size}  // Pass the specific size for each icon
                    rotate={location.rotate} // Pass the rotation value
                    id={location.id}  // Pass the ID to display on the icon
                />
            ))}
        </div>
    );
};

export default MapWithIcons;
