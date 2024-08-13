"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import Spinner from "@/app/components/spinner/Spinner";
import Image from "next/image";

const BlogDetailsHero = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        window.scrollTo(0, 0); // Scroll to top when loading starts

        const response = await fetch(
          `https://mik4tx7ct3.execute-api.ap-south-1.amazonaws.com/dev/blogs/${id}`,
        );
        const data = await response.json();
        setBlogData(data.resData); // Store the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const parseParagraphText = (text) => {
    // Convert Markdown-style links to HTML links
    return text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
  };

  return (
    <main className="bg-img h-full w-full pt-[6.25rem]">
      <Header />
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="mt-[44px] flex h-full w-full flex-col items-center justify-center sm:mt-[60px] lg:mt-[80px] xl:mt-[140px]">
          {blogData ? (
            <div className="blogContainer">
              <Image
                src={blogData.coverImg}
                height={0}
                width={0}
                sizes="100vw"
                className="blogImg"
                alt="Blog Cover Image"
              />
              <header className="blogHeading page-subhead">
                {blogData.heading} {/* Default text for debugging */}
              </header>
              <div className="content-neue mt-[24px] flex w-fit items-center justify-center rounded-[24px] border border-[#2A2A2A] px-[14px] py-[3px] text-[14px] sm:mt-[28px] lg:mt-[36px] lg:px-[20px] lg:py-[4px] lg:text-[20px]">
                {blogData.date}
              </div>
              <div className="mt-[24px] sm:mt-[28px] lg:mt-[36px]">
                {blogData.blogDetails.map((detail, index) => {
                  if (detail.tagType === "h1") {
                    return (
                      <h1
                        key={index}
                        className={`${detail.class} content-neue`}
                      >
                        {detail.value}
                      </h1>
                    );
                  } else if (detail.tagType === "h2") {
                    return (
                      <h2
                        key={index}
                        className={`${detail.class} content-neue`}
                      >
                        {detail.value}
                      </h2>
                    );
                  } else if (detail.tagType === "p") {
                    return (
                      <p
                        key={index}
                        className={`${detail.class} content-neue whitespace-pre-line`}
                        dangerouslySetInnerHTML={{
                          __html: parseParagraphText(detail.value),
                        }}
                      ></p>
                    );
                  } else if (detail.tagType === "images") {
                    return (
                      <Image
                        key={index}
                        height={0}
                        width={0}
                        sizes="100vw"
                        src={detail.value}
                        alt="blog images"
                        className={`${detail.class}`}
                      />
                    );
                  }
                  return null; // Return null for unhandled tag types
                })}
              </div>
            </div>
          ) : (
            <p>No blog data available</p> // Debugging message if no data
          )}
        </div>
      )}
      <Footer />
    </main>
  );
};

export default BlogDetailsHero;
