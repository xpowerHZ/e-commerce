"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart-context";
import { Product } from "@/types/Product";
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";


type Props = {
  product: Product;
};

export const QuantitySelector = ({ product }: Props) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
      quantity
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <div className="w-12 text-center">{quantity}</div>
          <Button variant="outline" size="icon" onClick={increaseQuantity}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <Button className="flex-1 gap-2" onClick={handleAddToCart}>
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>

        <Button variant="outline" size="icon">
          <Heart className="h-4 w-4" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
      </div>
    </div>
  );
};
