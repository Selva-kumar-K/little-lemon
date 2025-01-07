import products from "@/libs/product";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      {products.map((data, index) => (
        <div key={index}>
          <Image src={data.image} alt="image" />
        </div>
      ))}
    </div>
  );
}
