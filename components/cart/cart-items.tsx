import Image from "next/image";
import { Button } from "../ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Separator } from "../ui/separator";
import { CartItem } from "@/contexts/cart-context";
type props = {
  items: CartItem[];
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
};
export const CartItems = ({ items, updateQuantity, removeItem }: props) => {
  return (
    <div className="rounded-lg border shadow-sm">
      <div className="p-6">
        {items.map((item, index) => (
          <div key={item.id}>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-24 h-24 relative rounded-md overflow-hidden">
                <Image
                  src={"/floral-image.jpg"}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-12 text-center text-sm">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
              </div>
            </div>
            {index < items.length - 1 && <Separator className="my-6" />}
          </div>
        ))}
      </div>
    </div>
  );
};
