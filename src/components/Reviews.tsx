import React from "react";
import ReviewCard from "./ReviewCard";
import { reviews } from "@/libs/reviews";

export default function Reviews() {
  return (
    <div className="bg-[#495E57] py-[8%] ">
      <div className="text-center"> 
        <h1 className="font-markazi text-[30px] lg:text-markazi_heading text-[#EDEFEE]">
          Our customers love us!
        </h1>
      </div>

      <div className="flex flex-col space-y-6 p-5 lg:flex-row lg:space-x-6 lg:justify-center lg:py-5 lg:space-y-0">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            rating={review.rating}
            title={review.title}
            userImage={review.userImage}
            userName={review.userName}
            date={review.date}
          />
        ))}
      </div>
    </div>
  );
}
