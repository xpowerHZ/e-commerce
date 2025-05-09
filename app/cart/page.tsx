"use client";
import { EmptyCart } from "@/components/cart/empty-cart";
import { ContinueShoppingButton } from "@/components/cart/continue-shopping-button";
import { OrderSummary } from "@/components/cart/order-summary";
import { CartItems } from "@/components/cart/cart-items";
import useCartStore from "@/stores/use-cart";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {items.length > 0 ? (
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CartItems
              items={items}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
            <ContinueShoppingButton />
          </div>

          <OrderSummary items={items} />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
