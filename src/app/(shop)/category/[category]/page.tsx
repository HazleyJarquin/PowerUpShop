import type { Category } from "@/app/interfaces";
import { initialData } from "@/app/seed/seed";
import { MobileCategoryButtons, ProductGrid, Title } from "@/components";

const products = initialData.products;
interface Props {
  params: {
    category: Category;
  };
}

export default function Category({ params }: Props) {
  const { category } = params;

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const categoryTitle: Record<Category, string> = {
    protein: "Proteínas",
    aminoAcids: "Aminoácidos",
    creatine: "Creatina",
  };

  return (
    <div>
      <Title
        title={`Todo sobre: ${categoryTitle[category]}`}
        className="mb-5"
      />
      <MobileCategoryButtons category={category} />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
