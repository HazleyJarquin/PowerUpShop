export interface IProduct {
  id: string;
  name: string;
  category: Category;
  price: number;
  symbol: string;
  description: string;
  images: string[];
}

export type Category = "protein" | "aminoAcids" | "creatine";
