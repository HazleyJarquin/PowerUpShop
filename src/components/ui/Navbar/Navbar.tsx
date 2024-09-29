"use client";

import { titleFont } from "@/config/fonts";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  IoCartOutline,
  IoLogOutOutline,
  IoSearchOutline,
} from "react-icons/io5";

//TODO: Apply this interface

//TODO: Separate Category Type to the interface folder

// type Category = {
//   protein: string;
//   aminoAcids: string;
//   creatine: string;
// }

// interface Props {
//   categories: Category;
// }

export const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="flex justify-between items-center p-3 w-full">
      <Link href="/">
        <span className={`${titleFont.className} antialiased font-bold`}>
          PowerUp{" "}
        </span>
        <span>| Shop</span>
      </Link>

      <div className="hidden sm:flex gap-3">
        <Link
          href="/category/protein"
          className="p-1 hover:bg-gray-100 rounded"
        >
          Proteínas
        </Link>
        <Link
          href="/category/aminoAcids"
          className="p-1 hover:bg-gray-100 rounded"
        >
          Aminoácidos
        </Link>
        <Link
          href="/category/creatine"
          className="p-1 hover:bg-gray-100 rounded"
        >
          Creatina
        </Link>
      </div>

      <div className="flex gap-2">
        <Link href="/search" className="p-1 hover:bg-gray-100 rounded">
          <IoSearchOutline size={25} />
        </Link>
        <Link href="/shoppingcart" className="p-1 hover:bg-gray-100 rounded">
          <IoCartOutline size={25} />
        </Link>
        {session?.user ? (
          <div className="flex gap-2 items-center">
            <Image
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white cursor-pointer"
              src={
                session.user.image ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm1XBi0Axlc_t4jSZYj7E_rNhZtGMVTKFfFA&s"
              }
              alt={`Avatar of ${session.user.name}`}
              width={24}
              height={24}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src =
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm1XBi0Axlc_t4jSZYj7E_rNhZtGMVTKFfFA&s";
              }}
            />

            <IoLogOutOutline
              size={30}
              onClick={async () => {
                await signOut({
                  callbackUrl: "/",
                });
              }}
              className="p-1 hover:bg-gray-100 rounded cursor-pointer"
            />
          </div>
        ) : (
          <button
            className="p-1 hover:bg-gray-100 rounded"
            onClick={() => signIn()}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};
