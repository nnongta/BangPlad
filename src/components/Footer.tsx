import Image from "next/image";

export default function Footer() {
    return (
        <div className="bg-gray mt-[30%]">
            <footer className="flex flex-col sm:flex-row justify-between items-center sm:items-start w-full p-4">
                <div className="text-center sm:text-left mb-6 sm:mb-0">
                    <h3 className="text-[20px] sm:text-[16px] font-bold">พลัดแต่ไม่หลง</h3>
                    <p className="text-[20px] sm:text-[12px]">สายบุญ สายอาร์ต สายกิน สายชิล</p>
                </div>
                <div className="flex flex-row sm:flex-row justify-center sm:justify-end items-center sm:items-start sm:space-x-4">
                    <Image
                        src="/images/LOGO มหาลัย.png"
                        alt="logo01"
                        className="w-[120px] sm:w-[160px] h-auto"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/images/LOGO คณะ.png"
                        alt="logo02"
                        className="w-[120px] sm:w-[160px] h-auto"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/images/LOGO สาขาวิชา.png"
                        alt="logo03"
                        className="w-[120px] sm:w-[160px] h-auto"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="text-center sm:text-right mt-4 sm:mt-0 text-[12px] sm:text-[12px]">
                    <p className="font-semibold">
                        จัดทำโดย<br />
                        กลุ่มนิสิตสาขาวิชานวัตกรรมการจัดการศิลปวัฒนธรรม<br />
                        คณะศิลปกรรมศาสตร์<br />
                        มหาวิทยาลัยศรีนครินทรวิโรฒ<br />
                    </p>
                </div>
            </footer>
        </div>

    );
}
