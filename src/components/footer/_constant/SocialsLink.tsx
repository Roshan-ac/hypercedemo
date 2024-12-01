import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

export const SocialsLinks = () => {
  const socials = [
    {
      href: "https://facebook.com/hyperce",
      title: "facebook",
      icon: React.createElement(Facebook, { size: 18 }),
    },
    {
      href: "https://instagram.com/hyperce_io",
      title: "instagram",
      icon: React.createElement(Instagram, { size: 18 }),
    },
    {
      href: "https://twitter.com/hyperce_io",
      title: "twitter",
      icon: React.createElement(Twitter, { size: 18 }),
    },
    {
      href: "https://youtube.com/@hyperce",
      title: "youtube",
      icon: React.createElement(Youtube, { size: 18 }),
    },
    {
      href: "https://www.linkedin.com/company/hyperce/",
      title: "linkedin",
      icon: React.createElement(Linkedin, { size: 18 }),
    },
  ];

  return (
    <div className="mt-4 flex items-center space-x-4 text-gray-500 flex-wrap">
    {socials.map((link, index) => (
      <Link
        key={index}
        href={link.href}
        className=" flex h-8 p-1 hover:bg-secondary w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
        title={link.title}
        aria-label={link.title}
      >
        {link.icon}
      </Link>
    ))}
  </div>
  )
}
