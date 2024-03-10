import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

type Blog = {
    id: string;
    title: string;
};

const blogs: Blog[] = [
    { id: "1", title: "Blog 1" },
    { id: "2", title: "Blog 2" },
    { id: "3", title: "Blog 3" },
];

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex flex-row gap-10'>
            <div className='flex flex-col gap-10 bg-gray-700  pt-10 px-6 h-[85vh]'>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}

                <div className='mt-6'>
                    <Link href='/' className='text-blue-500 mt-10'>
                        Back to Home
                    </Link>
                </div>
            </div>
            <div className='ml-80'>{children}</div>
        </div>
    );
}
