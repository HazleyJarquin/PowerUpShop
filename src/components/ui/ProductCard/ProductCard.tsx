"use client";

import { Category, IProduct } from "@/app/interfaces";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  product: IProduct;
}

export const ProductCard = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  const categoryTitle: Record<Category, string> = {
    protein: "Proteínas",
    aminoAcids: "Aminoácidos",
    creatine: "Creatina",
  };
  return (
    <div className="flex-shrink-0 rounded-md overflow-hidden relative fade-in bg-[#FFA07A] group">
      <svg
        className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.5] transition-transform"
        viewBox="0 0 375 283"
        fill="none"
        style={{ opacity: 0.1 }}
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>

      <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div
          className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background: "radial-gradient(black, transparent 60%)",
            transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
            opacity: 0.2,
          }}
        ></div>

        <Link href={`/product/${product.id}`}>
          <div className="sm:w-full sm:h-full md:h-48 md:w-48 relative">
            <Image
              src={`/products/${displayImage}`}
              alt={product.name}
              className="object-contain rounded w-full h-full"
              width={200}
              height={200}
              onMouseEnter={() => setDisplayImage(product.images[1])}
              onMouseLeave={() => setDisplayImage(product.images[0])}
            />
          </div>
        </Link>
      </div>

      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">
          {categoryTitle[product.category]}
        </span>
        <div className="flex justify-between items-start">
          <p className="block font-semibold text-xl w-30 hover:text-blue-200 cursor-pointer">
            {product.name}
          </p>
          <span className="sm:block bg-white rounded-full self-start text-[#FF4500] text-xs font-bold px-3 py-2 leading-none flex items-center flex-shrink-0">
            {product.symbol} {product.price}
          </span>
        </div>
      </div>
    </div>
  );
};
