"use client";

import { IProduct } from "@/app/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  product: IProduct;
}
export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);
  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={`/product/${product.id}`}>
        <Image
          src={`/products/${displayImage}`}
          alt={product.name}
          className="w-full object-cover rounded"
          width={500}
          height={500}
          onMouseEnter={() => setDisplayImage(product.images[1])}
          onMouseLeave={() => setDisplayImage(product.images[0])}
        />
      </Link>
      <div className="p-4 flex flex-col">
        <Link href={`/product/${product.id}`} className="hover:text-blue-500">
          {product.name}
        </Link>
        <span className="font-bold">
          {product.symbol}
          {product.price}
        </span>
      </div>
    </div>
  );
};
