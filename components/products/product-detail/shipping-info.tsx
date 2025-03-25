import { TabsContent } from "@/components/ui/tabs";

export const ShippingInfo = () => {
  return (
    <TabsContent value="shipping" className="pt-4">
      <p className="text-muted-foreground">
        We ship worldwide. Standard shipping takes 3-5 business days within the
        US, and 7-14 business days for international orders. Express shipping
        options are available at checkout.
      </p>
      <p className="text-muted-foreground mt-2">
        Free shipping on orders over $50.
      </p>
    </TabsContent>
  );
};
