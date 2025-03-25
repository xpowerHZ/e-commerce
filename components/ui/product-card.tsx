import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

type ProductCardProps = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
};

export function ProductCard({
  id,
  name,
  category,
  price,
  image,
}: ProductCardProps) {
  return (
    <Link href={`/products/${id}`}>
      <Card className="h-full overflow-hidden border-0 shadow-sm transition-all hover:shadow-md">
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={"/floral-image.jpg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{category}</p>
          <p className="mt-2 font-medium">${price.toFixed(2)}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
