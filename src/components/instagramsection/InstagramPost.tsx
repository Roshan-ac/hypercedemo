import React from "react";
import Image from "next/image";
import Link from "next/link";
import { instagramPosts } from "./_constants/Images";

const InstagramSection = () => {
  return (
    <section className="mt-32">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Instagram</h2>
        <Link
          href="https://www.instagram.com/hyperce_io"
          target="_blank"
          className="text-3xl md:text-4xl hover:underline"
        >
          @hyperce_io
        </Link>
      </div>
      <div className="mt-6 flex overflow-x-hidden p-2 items-center justify-center">
        {instagramPosts.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Instagram post ${index + 1}`}
            width={100}
            height={100}
            className="object-cover w-60 h-96"
          />
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;
