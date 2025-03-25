import { TabsContent } from "@/components/ui/tabs";
import { Product } from "@/types/Product";
type props = {
  product: Product;
};
export const ProductInfo = ({ product }: props) => {
  return (
    <TabsContent value="details" className="pt-4">
      <div className="grid gap-2">
        <div className="grid grid-cols-2 gap-2">
          <div className="text-muted-foreground">Material</div>
          <div>{product.material || "Mixed materials"}</div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-muted-foreground">Dimensions</div>
          <div>{product.dimensions || "Varies by product"}</div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-muted-foreground">Origin</div>
          <div>{product.origin || "Japan"}</div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-muted-foreground">Care</div>
          <div>{product.care || "Hand wash recommended"}</div>
        </div>
      </div>
    </TabsContent>
  );
};
