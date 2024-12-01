import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="pt-4">
      <div className="px-6 md:px-12 lg:px-6 mx-auto max-w-7xl 2xl:px-0">
        <div className="bg-secondary rounded-2xl p-6 md:p-12 overflow-hidden text-white flex flex-col relative justify-end min-h-[300px]">
          <div className="w-2/3 mt-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-[40px] leading-tight font-medium bg-secondary/20">
              Grab Upto 50% Off On Selected Clothes
            </h2>
            <Link href="/category">
              <button className="bg-white text-black py-2 font-normal px-5 rounded-full mt-4">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
