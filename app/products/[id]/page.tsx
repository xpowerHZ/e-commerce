import { ProductDetail } from "@/components/products/product-detail/product-detail";
import { ProductDetailSkeleton } from "@/components/products/product-detail/product-detail-skeleton";
import { ProductImage } from "@/components/products/product-detail/product-image";
import { RelatedProducts } from "@/components/products/product-detail/related-products";
import { getProductDetailHandler } from "@/server/handler/product/get-product-detail-handler";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const id = (await params).id;

  const product = await getProductDetailHandler(id);

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <Link
        href="/products"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to products
      </Link>
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        <Suspense fallback={<ProductDetailSkeleton />}>
          <ProductImage image={"/floral-image.jpg"} name={product.name} />
          <ProductDetail {...product} />
        </Suspense>
      </div>
      <RelatedProducts />
    </div>
  );
}
