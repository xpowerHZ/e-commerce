import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FeaturedProducts = ({ featuredProducts }: any) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Featured Products
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our most popular zakka items
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {featuredProducts.map((product: any) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="group overflow-hidden rounded-lg border bg-background transition-colors hover:bg-muted/50">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="object-cover transition-transform duration-300 group-hover:scale-105 h-full w-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {product.category}
                  </p>
                  <p className="mt-2 font-medium">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/products">
            <Button size="lg" variant="outline">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
