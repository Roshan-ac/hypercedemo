import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { SocialsLinks } from "./_constant/SocialsLink";
import { SupportLinks } from "./_constant/SupportLinks";
import { Collections } from "./_constant/collections";
import { CompanyLinks } from "./_constant/CompanyLinks";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="mt-24 bg-gray-50" >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          <section className="col-span-2 md:col-span-3 xl:col-span-1">
            <Link
              aria-label="logo"
              className="flex items-center space-x-2"
              href="/"
            >
              <Image
                src="/logo.svg"
                alt="Hyperce Logo"
                width={10}
                height={10}
                className="h-auto w-auto"
              />
              <h3 className="text-xl lg:text-2xl font-black ml-1">Hyperce</h3>
            </Link>
            <h4 className="text-sm text-gray-600 mt-4">
              Unlock Your Business Potential with Customized Solutions
            </h4>
            <div className="mt-4">
              <Link
                href="https://hyperce.io/request-a-quote"
                className="group whitespace-nowrap flex items-center space-x-2 hover:underline"
              >
                <span>Request a quote today</span>
                <MoveRight />
              </Link>
            </div>
            <SocialsLinks />
          </section>

          {/* Shop Links */}
          <section className="mt-12 md:mt-0">
            <h3 className="text-sm font-semibold text-black tracking-wider uppercase">
              Shop
            </h3>
            <ul role="list" className="mt-4 space-y-2">
              {Collections.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/collections/${item
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                    className="text-base text-gray-700 hover:text-gray-900"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Support Links */}
          <section className="mt-12 md:mt-0">
            <h3 className="text-sm font-semibold text-black tracking-wider uppercase">
              Support
            </h3>
            <ul role="list" className="mt-4 space-y-2">
              {SupportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-base text-gray-700 hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Company Links */}
          <section>
            <h3 className="text-sm font-semibold text-black tracking-wider uppercase">
              Company
            </h3>
            <ul role="list" className="mt-4 space-y-2">
              {CompanyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-base text-gray-700 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="mt-12 text-center">
          <span className="text-sm tracking-wide text-gray-600">
            © Hyperce 2023
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
