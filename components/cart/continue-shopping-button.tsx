import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";

export const ContinueShoppingButton = () => {
  return (
    <div className="mt-6 flex justify-between">
      <Link href="/products">
        <Button variant="outline" className="gap-1">
          <ChevronLeft className="h-4 w-4" />
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
};
