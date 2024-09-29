import { IProduct } from "@/app/interfaces";
import { ProductCard } from "../ProductCard/ProductCard";

interface Props {
  products: IProduct[];
}
export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
