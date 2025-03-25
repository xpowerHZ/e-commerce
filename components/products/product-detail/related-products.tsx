import { ProductCard } from "@/components/ui/product-card";

export const RelatedProducts = () => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">You might also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            image={product.image || "/placeholder.svg"}
          />
        ))}
      </div>
    </div>
  );
};

const relatedProducts = [
  {
    id: "5",
    name: "Washi Tape Set",
    category: "Stationery",
    price: 12.99,
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: "6",
    name: "Cotton Napkin Set",
    category: "Kitchen",
    price: 18.5,
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: "7",
    name: "Bamboo Utensil Holder",
    category: "Kitchen",
    price: 22.99,
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: "8",
    name: "Minimalist Wall Clock",
    category: "Home-decor",
    price: 39.99,
    image: "/placeholder.svg?height=500&width=500",
  },
];
