import { Category } from "@/app/interfaces";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  category?: Category;
}

export const MobileCategoryButtons = ({ category }: Props) => {
  return (
    <div className="flex gap-3 mb-5 md:hidden">
      <Link
        href="/category/protein"
        className={clsx("p-1 hover:bg-gray-100 rounded", {
          "bg-[#FFA07A] text-white": category === "protein",
        })}
      >
        Proteínas
      </Link>
      <Link
        href="/category/aminoAcids"
        className={clsx("p-1 hover:bg-gray-100 rounded", {
          "bg-[#FFA07A] text-white": category === "aminoAcids",
        })}
      >
        Aminoácidos
      </Link>
      <Link
        href="/category/creatine"
        className={clsx("p-1 hover:bg-gray-100 rounded", {
          "bg-[#FFA07A] text-white": category === "creatine",
        })}
      >
        Creatina
      </Link>
    </div>
  );
};
