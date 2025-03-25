import Image from "next/image";
import Link from "next/link";

export const FeaturedCategories = ({ categories }: any) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Categories
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Browse our carefully curated collection of zakka items
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {categories.map((category: any) => (
            <Link
              key={category.name}
              href={`/products?category=${category.slug}`}
            >
              <div className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={600}
                    height={600}
                    className="object-cover transition-transform duration-300 group-hover:scale-105 h-full w-full"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                  <h3 className="text-xl font-medium">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
