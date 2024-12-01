"use client";

import { useEffect, useState, useMemo } from "react";
import { doc, onSnapshot } from "firebase/firestore";  // Importing onSnapshot for real-time updates
import { db } from "@/lib/firebase";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Image from 'next/image';

type Language = "th" | "en";

interface DetailData {
    id: string;
    name: string;
    image: string;
    description: string;
    maplink: string;
    time: string;
    contact: string;
    social: string;
    ref: string;
}

const DetailPage = () => {
    const [data, setData] = useState<DetailData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [language, setLanguage] = useState<Language>("th"); // ค่าเริ่มต้นเป็นภาษาไทย

    const translations = useMemo(() => ({
        th: {
            openingHours: "เวลาเปิด-ปิด",
            contact: "เบอร์ติดต่อ",
            reference: "แหล่งอ้างอิง",
            travelmap: "แผนที่"
        },
        en: {
            openingHours: "Opening Hours",
            contact: "Contact",
            reference: "Reference",
            travelmap: "Map"
        },
    }), []);

    // Function to fetch data using onSnapshot (real-time updates)
    const fetchData = (id: string, lang: Language) => {
        setLoading(true);
        setError("");

        const docId = lang === "th" ? id : `${id}_en`;
        const docRef = doc(db, "chillDetail", docId);

        // Listen to real-time updates using onSnapshot
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                const docData = docSnap.data() as Omit<DetailData, "id">; // Exclude 'id' from type
                setData({ ...docData, id: docSnap.id }); // Manually set 'id' without duplication
                setLoading(false);  // Set loading to false when data is fetched
            } else {
                setError("Data not found");
                setLoading(false);
            }
        }, (err) => {
            console.error(err);
            setError("Failed to fetch data");
            setLoading(false);
        });

        // Return unsubscribe function to stop listening when needed
        return unsubscribe;
    };

    useEffect(() => {
        const id = window.location.pathname.split("/").pop(); // Extract ID from URL
        if (id) {
            const unsubscribe = fetchData(id, language); // Fetch data based on language

            // Cleanup function to stop listening when the component is unmounted
            return () => unsubscribe();
        }
    }, [language]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            {/* Language switcher */}
            <LanguageSwitcher
                currentLanguage={language}
                onLanguageChange={setLanguage} // Update selected language
            />

            <div className="text-[30px] text-baseorange">สายอาร์ต</div>
            <div className="text-[60px] font-bold">{data?.name}</div>
            <div className="flex justify-center">
                <Image
                    src={data?.image || "/default-image.jpg"}
                    alt={data?.name || "No Image"}
                    className="w-[800px] h-[200px] object-cover rounded-lg"
                />
            </div>
            <div className="text-balance flex text-center text-lg">
                <p>{data?.description}</p>
            </div>

            <div className="flex flex-row gap-x-[5%] mt-[15px] justify-around">
                <div className="p-[10px]">
                    <div className="text-xl">
                        {translations[language].openingHours}: {data?.time}
                    </div>
                    <div className="text-xl">
                        {translations[language].contact}: {data?.contact}
                    </div>
                    <div className="flex flex-row justify-around gap-[2%] mt-[15px]">
                        <a href={data?.social} target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/fb-icon.svg"
                                alt="FB icon"
                                className="w-[40px] h-[40px] object-cover rounded-lg justify-self-center"
                            />
                        </a>

                        <a href={data?.ref} target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/external-link.svg"
                                alt="ref-link"
                                className="w-[32px] h-[32px] object-cover rounded-lg justify-self-center"
                            />
                            <p>{translations[language].reference}</p>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center border-[2px] border-black rounded-2xl w-[400px] h-[450px]">
                    <p className="text-[40px] font-bold text-center">{translations[language].travelmap}</p>
                    {data?.maplink ? (
                        <iframe
                            src={data.maplink}
                            className="w-[300px] h-[350px] object-cover rounded-lg"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <p>Map not available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
