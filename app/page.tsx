import Link from "next/link";

export default function Home() {
    return (
        <main>
            <div>
                <Link href='/'>Home</Link>
            </div>
            <div>
                <Link href='/blogs'>Blog List</Link>
            </div>
        </main>
    );
}
