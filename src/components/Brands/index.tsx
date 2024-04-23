"use client";
import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import SectionTitle from "../Common/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
const Brands = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="pt-16">
      <div className="container">
        <SectionTitle
          title="Technologies"
          paragraph="Take A Look What Technologies We Use In Our Projects."
          center
        />
        <div className="flex items-center justify-center">
          <div className="w-full px-4">
            <div className="rounded-sm bg-gray-light  dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              <Slider {...settings} ref={setSliderRef}>
                {brandsData.map((brand) => (
                  <SingleBrand key={brand.id} brand={brand} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-80 items-center justify-center opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-10 "
      >
        <div>
          {" "}
          <Image
            src={imageLight}
            alt={name}
            fill
            className="hidden dark:block"
          />
          <Image src={image} alt={name} fill className="block dark:hidden" />
        </div>
      </a>

      <div className="ml-4">
        <h1 className="text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {name}
        </h1>
      </div>
    </div>
  );
};
