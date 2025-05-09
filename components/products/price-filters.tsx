import { Label } from "../ui/label";

type Props = {
  priceLimit: {
    minPrice: number;
    maxPrice: number;
  };
  setPriceLimit: React.Dispatch<
    React.SetStateAction<{ minPrice: number; maxPrice: number }>
  >;
};

export const PriceFilter = (props: Props) => {
  const { priceLimit, setPriceLimit } = props;
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="grid gap-2">
        <Label htmlFor="price-minPrice">Min($)</Label>
        <input
          id="price-minPrice"
          type="number"
          min="0"
          value={priceLimit.minPrice === 0 ? "" : priceLimit.minPrice}
          onChange={(e) =>
            setPriceLimit({
              ...priceLimit,
              minPrice: e.target.value === "" ? 0 : Number(e.target.value),
            })
          }
          placeholder="No Min"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onFocus={(e) => e.target.select()}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="price-maxPrice">Max($)</Label>
        <input
          id="price-maxPrice"
          type="number"
          value={priceLimit.maxPrice === Infinity ? "" : priceLimit.maxPrice}
          onChange={(e) =>
            setPriceLimit({
              ...priceLimit,
              maxPrice:
                e.target.value === "" ? Infinity : Number(e.target.value),
            })
          }
          placeholder="No Max"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onFocus={(e) => e.target.select()}
        />
      </div>
    </div>
  );
};
