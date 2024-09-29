import { IProduct } from "@/app/interfaces";
import { ProductGridItem } from "./ProductGridItem";

interface Props {
  products: IProduct[];
}
export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {products.map((product) => (
        <ProductGridItem key={product.id} product={product} />
      ))}
    </div>
  );
};
