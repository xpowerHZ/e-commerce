import Link from "next/link";
import { Button } from "../ui/button";

export const EmptyCart = () => {
  return (
    <div className="text-center py-12">
      <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
      <p className="text-muted-foreground mb-8">
        Looks like you haven't added anything to your cart yet.
      </p>
      <Link href="/products">
        <Button>Start Shopping</Button>
      </Link>
    </div>
  );
};
