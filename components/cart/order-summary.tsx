import { CartItem } from "@/contexts/cart-context";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

type props = {
  items: CartItem[];
};
export const OrderSummary = ({ items }: props) => {
  // Calculate totals
  const subtotal: number = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;
  return (
    <div>
      <div className="rounded-lg border shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="grid gap-2">
              <div className="flex items-center justify-between text-sm">
                <span>Discount code</span>
              </div>
              <div className="flex space-x-2">
                <Input placeholder="Enter code" />
                <Button variant="outline">Apply</Button>
              </div>
            </div>

            <Button className="w-full gap-1">
              Checkout
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
