import { Separator } from "@/components/ui/separator";
import { QuantitySelector } from "./quantity-selector";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductInfo } from "./product-info";
import { ShippingInfo } from "./shipping-info";
import { Product } from "@/types/Product";

export const ProductDetail = (product: Product) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-muted-foreground">{product.category}</p>
      </div>

      <div className="text-2xl font-semibold">${product.price.toFixed(2)}</div>
      <Separator className="my-4" />
      <QuantitySelector product={product} />
      <Separator className="my-4" />
      <Tabs defaultValue="description">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="pt-4">
          <p className="text-muted-foreground">
            {
              "This beautiful zakka item adds charm and functionality to your everyday life. Crafted with attention to detail and made from high-quality materials, it's designed to bring joy to your daily routines."
            }
          </p>
        </TabsContent>
        <ProductInfo product={product} />
        <ShippingInfo />
      </Tabs>
    </div>
  );
};
