import DetailCard from "@/components/DetailCard";

export default function EatPage() {
  // Sample data for the eatt locations
  const eatData = [
    {
      id: 1,
      image:"/images/eat_location/บางพลัด/อดามุส คาเฟ่ บาย เดอะริเวอร์/IMG_0388.JPG", 
      name: "อดามุสคาเฟ บาย เดอะริเวอร์",
      rating: 4,
      link: "/eatDetail/01"
    },
    {
      id: 2,
      image: "/images/eat_location/บางพลัด/ประดับมี/IMG_0434.JPG",
      name: "ประดับมี สาคูสูตรโบราณ และขนมไทยรสต้นตำรับ ",
      rating: 4,
      link: "/eatDetail/02"
    },
    {
      id: 3,
      image: "/images/eat_location/บางพลัด/ร้านโง้วชุ้งฮวด/IMG_0384.JPG",
      name: "ร้านโง้วชุ้งฮวด",
      rating: 4,
      link: "/eatDetail/03"
    },
    {
      id: 4,
      image: "/images/eat_location/บางพลัด/เรือนแพ/IMG_0258.JPG",
      name: "เรือนแพ",
      rating: 4,
      link: "/eatDetail/04"
    },
    {
      id: 5,
      image: "/images/eat_location/บางพลัด/ครัวในซอย/IMG_0254.JPG",
      name: "ครัวในซอย",
      rating: 4,
      link: "/eatDetail/05"
    },
    {
      id: 6,
      image: "/images/eat_location/บางอ้อ/Sense Coffee Bangkok Cafe/IMG_0635.JPG",
      name: "Sense Coffee Bangkok Cafe",
      rating: 4,
      link: "/eatDetail/06"
    },
    {
      id: 7,
      image: "/images/eat_location/บางอ้อ/Kalm/IMG_0268.JPG",
      name: "Kalm (Klam Specialty Coffee)",
      rating: 4,
      link: "/eatDetail/07"
    },
    {
      id: 8,
      image: "/images/eat_location/บางอ้อ/Sukhumvit coffee/IMG_0432.JPG",
      name: "Sukhumvit coffee",
      rating: 4,
      link: "/eatDetail/08"
    },
    {
      id: 9,
      image: "/images/eat_location/บางอ้อ/ช้อนแกง ตำรับอาหารไทย/IMG_0270.JPG",
      name: "ช้อนแกง ต้นตำรับอาหารไทย",
      rating: 4,
      link: "/eatDetail/09"
    },
    {
      id: 10,
      image: "/images/eat_location/บางอ้อ/สไปซี่คัก ริมนำ้/IMG_0272.JPG",
      name: "สไปซี่คัก ริมน้ำ",
      rating: 4,
      link: "/eatDetail/10"
    },
    {
      id: 11,
      image: "/images/eat_location/บางบำหรุ/ราดหน้าอาหลิว/IMG_0251.JPG",
      name: "ราดหน้าอาหลิว",
      rating: 4,
      link: "/eatDetail/11"
    },
    {
      id: 12,
      image: "/images/eat_location/บางบำหรุ/Indicat Cat Cafe/IMG_0375.JPG",
      name: "อินดิแคท แคทคาเฟ่",
      rating: 4,
      link: "/eatDetail/12"
    },
    {
      id: 13,
      image: "/images/eat_location/บางบำหรุ/แฝดคาเฟ่&มิลล์/IMG_0379.JPG",
      name: "แฝดคาเฟ่&มิลล์",
      rating: 4,
      link: "/eatDetail/13"
    },
    {
      id: 14,
      image: "/images/eat_location/บางบำหรุ/Stuff.co/IMG_0249.JPG",
      name: "stuff.co",
      rating: 4,
      link: "/eatDetail/14"
    },
    {
      id: 15,
      image: "/images/eat_location/บางบำหรุ/Cham thing/IMG_0374.JPG",
      name: "cham thing",
      rating: 4,
      link: "/eatDetail/15"
    },
    {
      id: 16,
      image: "/images/eat_location/บางบำหรุ/Mellow coffee & friend/IMG_0245.JPG",
      name: "mellow coffee & friend ",
      rating: 4,
      link: "/eatDetail/16"
    },
    {
      id: 17,
      image: "/images/eat_location/บางบำหรุ/Mounthfeel/IMG_0248.JPG",
      name: "mouthfeel",
      rating: 4,
      link: "/eatDetail/17"
    },
    {
      id: 18,
      image: "/images/eat_location/บางยี่ขันธ์/ร้านคั่วชามแปล/IMG_0265.JPG",
      name: "ร้านคั่วชามเปล",
      rating: 4,
      link: "/eatDetail/18"
    },
    {
      id: 19,
      image: "/images/eat_location/บางยี่ขันธ์/ธธดา TH•TH•DAH/IMG_0392.JPG",
      name: "ธธดา TH•TH•DAH ",
      rating: 4,
      link: "/eatDetail/19"
    },
    {
      id: 20,
      image: "/images/eat_location/บางยี่ขันธ์/DOUBLE SLASH -- COFFEE SPACE _ RAMA 8/IMG_0390.JPG",
      name: "DOUBLE SLASH // COFFEE SPACE : RAMA 8 ",
      rating: 4,
      link: "/eatDetail/20"
    },
    {
      id: 21,
      image: "/images/eat_location/บางยี่ขันธ์/ไสกี่โภชนา/IMG_0266.JPG",
      name: "ไสกี่โภชนา",
      rating: 4,
      link: "/eatDetail/21"
    },
    {
      id: 22,
      image: "/images/eat_location/บางยี่ขันธ์/พระราม 8 คาเฟ่/IMG_0393.jpg",
      name: "พระราม 8 คาเฟ่ ",
      rating: 4,
      link: "/eatDetail/22"
    },
    {
      id: 23,
      image: "/images/eat_location/บางยี่ขันธ์/Sao Jhee Espresso & Slowbar Charan 44 (กาแฟสาวจี)/IMG_0262.JPG",
      name: "Sao Jhee Espresso & Slowbar Charan 44 (กาแฟสาวจี๋)",
      rating: 4,
      link: "/eatDetail/23"
    },
    {
      id: 24,
      image: "/images/eat_location/บางพลัด/Coffee on tree/IMG_0252.JPG",
      name: "Coffee on tree",
      rating: 4,
      link: "/eatDetail/24"
    },

    
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-row content-center mt-[30px] justify-center">
        <div className="text-[60px] font-bold mr-[14px]">สายกิน</div>
        <div className="text-[20px] text-baseorange">
          <p>รวมร้านอาหาร</p>
          <p>คาเฟ่</p>
          <p>ยอดฮิต</p>  
        </div>
      </div>

      {/* DetailCard List */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center px-4 md:px-8">
        {eatData.map((item) => (
          <DetailCard
            key={item.id}
            src={item.image}
            alt={`Image of ${item.name}`}
            content={item.name}
            rating={item.rating}
            isActive={false} // Customize this based on your needs
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
