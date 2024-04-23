"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    // <div className="relative z-10 rounded-sm  p-8  dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
    <div className="w-full px-4">
      <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
        <Image
          src="/images/contact/contact-1.png"
          alt="about-image"
          fill
          className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
        />
        <Image
          src="/images/contact/contact-1.png"
          alt="about-image"
          fill
          className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
        />
      </div>
    </div>
    // </div>
  );
};

export default NewsLatterBox;
