import React from "react";
import Link from "next/link";
const HomePage = () => {
    type Blog = {
        id: string;
        title: string;
    };

    const blogs: Blog[] = [
        { id: "1", title: "Blog 1" },
        { id: "2", title: "Blog 2" },
        { id: "3", title: "Blog 3" },
    ];

    return (
        <div>
            <h1 className='text-4xl mt-10'>List of all Blogs</h1>
            <ul className='mt-10 flex flex-col'>
                {blogs.map((blog) => (
                    <li key={blog.id} className='text-[1.2rem] my-2'>
                        <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>

            <div className='mt-6'>
                <Link href='/' className='text-blue-500 mt-10'>
                    Back to Home
                </Link>
            </div>
        </div>
    );
};
export default HomePage;
