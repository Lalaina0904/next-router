"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function BlogPage() {
    const pathname = usePathname();
    const id = pathname ? pathname.split("/").pop() : null;

    return (
        <div className='h-80'>
            <div>
                Blog {id} - THe description of Blog {id}{" "}
            </div>
            <Link href={`/blogs/${id}/image`}>
                <div className='border border-gray-100 text-center mt-5'>
                    Blog image
                </div>
            </Link>
        </div>
    );
}
