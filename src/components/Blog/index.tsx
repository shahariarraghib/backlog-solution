"use client";
import useFetch from "@/hooks/useFetch";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
const Blog = () => {
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

  // trandingBlog api
  const BASE_URL = "https://dev.to/api/articles";
  const { data: blogDataAPI, loading, error } = useFetch(BASE_URL);
  console.log(blogDataAPI);
  if (loading) return <p>Loading...</p>;

  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="Every day, we embrace change and create value for all our
          users, in every part of the world."
          center
        />

        <div className="">
          <Slider {...settings} ref={setSliderRef}>
            {blogDataAPI.slice(0, 6)?.map((blog) => (
              <>
                {" "}
                <div key={blog?.id} className="m-4">
                  <SingleBlog blog={blog} />
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Blog;
