import Link from "next/link";

type Blog = {
    id: string;
    title: string;
};

const blogs: Blog[] = [
    { id: "1", title: "Blog 1" },
    { id: "2", title: "Blog 2" },
    { id: "3", title: "Blog 3" },
];

export default function Blog() {
    return (
        <div>
            <div>
                <p className='page-subtitle'>Liste des Blogs</p>
            </div>

            <div>
                <ul>
                    {blogs.map((blog) => (
                        <li key={blog.id}>
                            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
