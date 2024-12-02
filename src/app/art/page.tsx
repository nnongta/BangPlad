import DetailCard from "@/components/DetailCard";

export default function ArtPage() {
  // Sample data for the artt locations
  const artData = [
    {
      id: 1,
      image:"/images/art_location/whenlife (2).jpeg", 
      name: "When life gives you lemons (Community area)",
      rating: 4,
      link: "/artDetail/01"
    },
    {
      id: 2,
      image: "/images/art_location/kinjai.jpeg",
      name: "Kinjai",
      rating: 4,
      link: "/artDetail/02"
    },
    {
      id: 3,
      image: "images/art_location/happy.jpg",
      name: "Happy normal gallery (plern.everyday)",
      rating: 4,
      link: "/artDetail/03"
    },
    {
      id: 4,
      image: "/images/art_location/บ้านหัวโขน.jpg",
      name: "บ้านหัวโขนพระฤๅษีตรีเนตร(ว่าว)",
      rating: 4,
      link: "/artDetail/04"
    },
    {
      id: 5,
      image: "/images/art_location/กลอง (1).jpeg",
      name: "กลองนำชัยมหามงคล (ศูนย์นันทนาการ วัดฉัตรแก้วจงกลณี)",
      rating: 4,
      link: "/artDetail/05"
    },
    {
      id: 6,
      image: "/images/art_location/โชคอำ (1).jpeg",
      name: "โชคอำนวย",
      rating: 4,
      link: "/artDetail/06"
    },
    {
      id: 7,
      image: "/images/art_location/กระบี่ (1).jpeg",
      name: "กระบี่กระบอง (ศูนย์นันทนาการ วัดฉัตรแก้วจงกลณี)",
      rating: 4,
      link: "/artDetail/07"
    },
    {
      id: 8,
      image: "/images/art_location/jung2.jpg",
      name: "Jung food",
      rating: 4,
      link: "/artDetail/08"
    },
    
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-row content-center mt-[30px] justify-center">
        <div className="text-[60px] font-bold mr-[14px]">สายอาร์ต</div>
        <div className="text-xs text-baseorange">
          <p>งานศิลป์ ช่างฝีมือ</p>
          <p>เวิร์คช้อป</p>
          <p>อาร์ตแกลลอรี่</p>  
        </div>
      </div>

      {/* DetailCard List */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center px-4 md:px-8">
        {artData.map((item) => (
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
