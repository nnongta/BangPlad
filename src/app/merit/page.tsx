import DetailCard from "@/components/DetailCard";

export default function MeritPage() {
  // Sample data for the merit locations
  const meritData = [
    { id: 1, image: "/images/merit_location/วัดน้อยนาง.jpg", name: "วัดน้อยนางหงษ์", rating: 4, link: "/meritDetail/01" },
    { id: 2, image: "/images/merit_location/วัดภาณุ.avif", name: "วัดภาณุรังษี", rating: 4, link: "/meritDetail/02" },
    { id: 3, image: "/images/merit_location/วัดคฤหบดี.webp", name: "วัดคฤหบดี", rating: 4, link: "/meritDetail/03" },
    { id: 4, image: "/images/merit_location/วัดบวร.jpg", name: "วัดบวรมงคลราชวิหาร", rating: 4, link: "/meritDetail/04" },
    { id: 5, image: "/images/merit_location/อาวุธวิ.jpg", name: "วัดอาวุธวิกสิตาราม", rating: 4, link: "/meritDetail/05" },
    { id: 6, image: "/images/merit_location/มัสยิดบางอ้อ.JPEG", name: "มัสยิดบางอ้อ", rating: 4, link: "/meritDetail/06" },
    { id: 7, image: "/images/merit_location/ศาลเจ้าปุงเถ่ากง.JPG", name: "ศาลเจ้าปุงเถ่ากง", rating: 4, link: "/meritDetail/07" },
    { id: 8, image: "/images/merit_location/วัดเทพนารี.jpg", name: "วัดเทพนารี", rating: 4, link: "/meritDetail/08" },
    { id: 9, image: "/images/merit_location/วัดทอง.JPG", name: "วัดทอง", rating: 4, link: "/meritDetail/09" },
    { id: 10, image: "/images/merit_location/วัดฉัตรแก้ว.JPEG", name: "วัดฉัตรแก้วจงกลณี", rating: 4, link: "/meritDetail/10" },
    { id: 11, image: "/images/merit_location/วัดภคินี.jpg", name: "วัดภคินีนาถวรวิหาร", rating: 4, link: "/meritDetail/11" },
    { id: 12, image: "/images/merit_location/วัดสามัค.jpg", name: "วัดสามัคคีสุทธาวาสร", rating: 4, link: "/meritDetail/12" },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-row content-center mt-[30px] justify-center">
        <div className="text-[60px] font-bold mr-[14px]">สายบุญ</div>
        <div className="text-[20px] text-baseorange">
          <p>วัด</p>
          <p>ศาลเจ้า</p>
          <p>มัสยิด</p>
        </div>
      </div>

      {/* DetailCard List */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center px-4 md:px-8">
        {meritData.map((item) => (
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
