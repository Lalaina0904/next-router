"use client";
import React from "react";
import { usePathname } from "next/navigation";
export default function BlogImage() {
    const pathname = usePathname();
    const id = pathname ? pathname.split("/").pop() : null;
    return (
        <div>
            <h1>Blog-{id}</h1>
            <img src='https://picsum.photos/200/300' alt='' />
        </div>
    );
}
