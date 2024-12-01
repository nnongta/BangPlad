import Link from "next/link";

export default function Navbar() {
    return (
        <div className="text-2xl border-b-2 border-baseorange">
            <nav className="w-full flex flex-row justify-between p-4">
                <div>
                    <Link href="/">
                        <h1>หน้าแรก</h1>
                    </Link>
                </div>
                <div>
                    <Link href="/history">
                        <h1>ประวัติ</h1>
                    </Link>
                </div>
                <div>
                    <Link href="/ourproject">
                        <h1>ผู้จัดทำ</h1>
                    </Link>
                </div>
            </nav>
        </div>
    );
}
