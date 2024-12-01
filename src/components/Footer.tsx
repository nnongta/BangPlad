import Image from "next/image";

export default function Footer() {
    return (
        <div className="bg-gray mt-[30%] p-4">
            <footer className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
                <div className="text-center sm:text-left mb-6 sm:mb-0">
                    <h3 className="text-[40px] sm:text-[60px] font-bold">พลัดแต่ไม่หลง</h3>
                    <p className="text-[20px] sm:text-[28px]">สายบุญ สายอาร์ต สายกิน สายชิว</p>
                </div>
                <div className="text-center sm:text-right">
                    <div className="flex flex-row sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <Image
                            src="/images/LOGO มหาลัย.png"
                            alt="logo01"
                            className="w-[120px] sm:w-[160px] h-auto sm:h-auto"
                        />
                        <Image
                            src="/images/LOGO คณะ.png"
                            alt="logo02"
                            className="w-[120px] sm:w-[160px] h-auto sm:h-auto"
                        />
                        <Image
                            src="/images/LOGO สาขาวิชา.png"
                            alt="logo03"
                            className="w-[120px] sm:w-[160px] h-auto sm:h-auto"
                        />
                    </div>
                    <div className="text-right font-semibold">
                        <p>
                            จัดทำโดย<br />
                            กลุ่มนิสิตสาขาวิชานวัตกรรมการจัดการศิลปวัฒนธรรม<br />
                            คณะศิลปกรรมศาสตร์<br />
                            มหาวิทยาลัยศรีนครินทรวิโรฒ<br />
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
