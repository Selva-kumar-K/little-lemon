import Image, { StaticImageData } from "next/image";
import React from "react";

interface Rating {
  rating: string;
  title: string;
  userImage: StaticImageData;
  userName: string;
  date: string;
}

export default function ReviewCard({
  rating,
  title,
  userImage,
  userName,
  date,
}: Rating) {
  return (
    <div className="bg-[#EDEFEE] p-4 rounded-lg md:w-[300px] md:mx-auto lg:w-auto lg:mx-0">
      <div className="flex flex-col space-y-7">
        <h1>{rating}</h1>
        <div>
          <p className="font-semibold text-[20px]">{title}</p>
          <p className="text-base">{title}</p>
        </div>
        <div className="flex space-x-3 items-center">
          <div>
            <Image src={userImage} alt="avatar" />
          </div>
          <div>
            <p className="text-[#757575]">{userName}</p>
            <p className="text-[#B3B3B3]">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
