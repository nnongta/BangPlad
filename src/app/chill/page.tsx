import DetailCard from "@/components/DetailCard";

export default function ChillPage() {
  // Sample data for the/chillt locations
  const chillData = [
    {
      id: 1,
      image: "/images/chill_location/สวนหลวงร.8/IMG_0369.JPG",
      name: "สวนหลวง ร.8",
      rating: 4,
      link: "/chillDetail/01"
    },
    {
      id: 2,
      image: "/images/chill_location/ช่างชุ่ย/1.JPG",
      name: "ช่างชุ่ย ",
      rating: 4,
      link: "/chillDetail/02"
    },
    {
      id: 3,
      image: "/images/chill_location/ตลาดสดกรุงธน/IMG_0364.JPG",
      name: "ตลาดสดกรุงธน",
      rating: 4,
      link: "/chillDetail/03"
    },
    {
      id: 4,
      image: "/images/chill_location/ตลาดอินดี้ ปิ่นเกล้า/IMG_0356.JPG",
      name: "ตลาดอินดี้ปิ่นเกล้า",
      rating: 4,
      link: "/chillDetail/04"
    },
    {
      id: 5,
      image: "/images/chill_location/ตลาดปิ่นเงิน ปิ่นทอง/IMG_0425.JPG",
      name: "ตลาดปิ่นเงินปิ่นทองพลาซ่า ",
      rating: 4,
      link: "/chillDetail/05"
    },
    {
      id: 6,
      image: "/images/chill_location/สวนสัตว์พาต้า/IMG_0427.JPG",
      name: "สวนสัตว์พาต้า",
      rating: 4,
      link: "/chillDetail/06"
    },
    {
      id: 7,
      image: "/images/chill_location/ตลาดสดภาณุรังษี/IMG_0366.JPG",
      name: "ตลาดสดภานุรังษี",
      rating: 4,
      link: "/chillDetail/07"
    },
    {
      id: 8,
      image: "/images/chill_location/ตลาดสดบางอ้อ/IMG_0362.JPG",
      name: "ตลาดสดบางอ้อ (ตลาดนัดยันฮี)",
      rating: 4,
      link: "/chillDetail/08"
    },
    {
      id: 9,
      image: "/images/chill_location/สวนจรัญภิรมย์/IMG_0426.JPG",
      name: "สวนจรัญภิรมย์",
      rating: 4,
      link: "/chillDetail/09"
    },
    {
      id: 10,
      image: "/images/chill_location/ร้านหนังสือริมขอบฟ้า/IMG_0367.JPG",
      name: "ร้านหนังสือริมขอบฟ้า",
      rating: 4,
      link: "/chillDetail/10"
    },


  ];

  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-row content-center mt-[30px] justify-center">
        <div className="text-[60px] font-bold mr-[14px]">สายชิล</div>
        <div className="text-[20px] text-baseorange">
          <p>พักผ่อนหย่อนใจ</p>
          <p>เดินเล่น</p>
          <p>ช้อปปิ้งชิวๆ</p>  
        </div>
      </div>

      {/* DetailCard List */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center px-4 md:px-8">
        {chillData.map((item) => (
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
