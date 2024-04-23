"use client";
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Linn Maung",
    designation: "Founder",
    content:
      "I like everything about this practice management software. The program is easy to utilize, and the team members are amazing. The software advisors and customer support representatives always make sure everyone is comfortable.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Mehreen Bashir",
    designation: "CEO",
    content:
      "This is a high class company with amazing customer service. They have completely changed the efficiency of our practice. We have tried every other software out there and this was the best and easiest to use. Can’t thank them enough!!!!",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Bart Nierzwicki",
    designation: "CEO",
    content:
      "I like everything about this practice management software. The program is easy to utilize, and the team members are amazing. The software advisors and customer support representatives always make sure everyone is comfortable..",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 3,
    name: "Bart Nierzwicki",
    designation: "CEO",
    content:
      "I like everything about this practice management software. The program is easy to utilize, and the team members are amazing. The software advisors and customer support representatives always make sure everyone is comfortable..",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,

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

const Testimonials = () => {
  const [sliderRef, setSliderRef] = useState(null);
  return (
    <section className="bg-green-light relative z-10 py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Our Valuable Clients Say About Us"
          paragraph=""
          center
        />

        <div className="">
          <Slider ref={setSliderRef} {...settings}>
            {testimonialData.map((testimonial) => (
              <>
                <div className="m-4">
                  <SingleTestimonial
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                </div>
              </>
            ))}
          </Slider>

          <div className="lg:ml-4 lg:mt-4">
            <button onClick={() => sliderRef?.slickPrev()} className="mr-20">
              <BsArrowLeft
                className="rounded-lgy hover:bg-green-400 hover:shadow-btn-hover"
                aria-hidden="true"
                style={{ color: "#198c19", fontSize: "30px" }}
              />
            </button>
            <button onClick={() => sliderRef?.slickNext()}>
              <BsArrowRight
                className="rounded-lgy hover:bg-green-400 hover:shadow-btn-hover"
                aria-hidden="true"
                style={{ color: "#198c19", fontSize: "30px" }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
