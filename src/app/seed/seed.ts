interface SeedProduct {
  id: string;
  name: string;
  category: "protein" | "aminoAcids" | "creatine";
  price: number;
  symbol: string;
  description: string;
  images: string[];
}

interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {
  products: [
    {
      id: "P001",
      name: "Whey Protein Powder",
      category: "protein",
      price: 29.99,
      symbol: "$",
      description: "High-quality whey protein for muscle recovery and growth.",
      images: [
        "71GNxWygxXL._AC_SL1500_.jpg",
        "c415f6_a894376a6c1545419b26fa8febd6b670.webp",
      ],
    },
    {
      id: "P002",
      name: "Casein Protein Powder",
      category: "protein",
      price: 34.99,
      symbol: "$",
      description: "Slow-digesting protein to fuel your muscles overnight.",
      images: ["71eDZUqp8XL.jpg", "81COUWV-OKL._AC_UF350,350_QL80_.jpg"],
    },
    {
      id: "P003",
      name: "BCAA Powder",
      category: "aminoAcids",
      price: 19.99,
      symbol: "$",
      description: "Branched-chain amino acids to enhance workout performance.",
      images: ["71IbRBLz6yL._AC_SL1500_.jpg", "30.avif"],
    },
    {
      id: "P004",
      name: "Glutamine Powder",
      category: "aminoAcids",
      price: 24.99,
      symbol: "$",
      description: "Supports muscle recovery and immune function.",
      images: ["1118953_1.webp", "L-GLUTAMINE.jpg"],
    },
    {
      id: "P005",
      name: "Creatine Monohydrate",
      category: "creatine",
      price: 29.99,
      symbol: "$",
      description: "Enhances strength and power output during workouts.",
      images: [
        "61tjQ5vDhwL._AC_SL1200_.jpg",
        "61RWBvw1nLL._AC_UF1000,1000_QL80_.jpg",
      ],
    },
    {
      id: "P006",
      name: "Creatine HCL",
      category: "creatine",
      price: 34.99,
      symbol: "$",
      description:
        "A highly soluble form of creatine that enhances performance.",

      images: ["61udpLD77KL._AC_UF894,1000_QL80_.jpg", "61xpwY-AYAL.jpg"],
    },
  ],
};
