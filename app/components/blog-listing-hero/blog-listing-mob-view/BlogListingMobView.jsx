import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogListingMobView = ({ blogsData }) => {
  console.log(blogsData);
  return (
    <div className=" mt-[24px] flex w-full flex-col items-center justify-center gap-4 sm:mt-[40px] lg:mt-[64px] xl:mt-[72px]">
      {blogsData.map((item, index) => (
        <Link key={index} href={`/blogs/${item.id}`}>
          <div className=" h-[240px] w-[21rem] rounded-[7.13px] mb-[20px] border border-selectedBorder">
            <div
              className="h-[9.8125rem] w-full rounded-t-[7.13px]"
              style={{
                backgroundImage: `url(${item.coverImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="pl-2 pr-2 ">
              <h1 className="content mt-[12px] text-[14px] font-[800] leading-[15px]">
                {item.heading.length > 50
                  ? `${item.heading.slice(0, 50)}...`
                  : item.heading}
              </h1>
              <div className="flex items-end mt-[8px] ">
                <p className="content text-[12px]">{item.date}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogListingMobView;
