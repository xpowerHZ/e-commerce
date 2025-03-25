import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const HomeHero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Discover Beautiful Zakka Items
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Curated collection of unique, functional, and aesthetically
                pleasing household items that bring joy to everyday life.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/products">
                <Button size="lg" className="px-8">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="aspect-video overflow-hidden rounded-xl">
              <Image
                src="/floral-image.jpg"
                alt="Zakka collection showcase"
                width={1280}
                height={720}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
