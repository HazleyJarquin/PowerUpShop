import { MobileCategoryButtons, ProductGrid, Title } from "@/components";
import { initialData } from "../seed/seed";
const products = initialData.products;

export default function Shop() {
  return (
    <div>
      <Title
        title="PowerUp Shop"
        subtitle="Todos los productos"
        className="mb-2"
      />

      <MobileCategoryButtons />
      <ProductGrid products={products} />
    </div>
  );
}
