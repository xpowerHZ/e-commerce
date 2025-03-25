import { Label } from "../ui/label";

type Props = {
  priceLimit: {
    min: number;
    max: number;
  };
  setPriceLimit: React.Dispatch<
    React.SetStateAction<{ min: number; max: number }>
  >;
};

export const PriceFilter = (props: Props) => {
  const { priceLimit, setPriceLimit } = props;
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="grid gap-2">
        <Label htmlFor="price-min">Min ($)</Label>
        <input
          id="price-min"
          type="number"
          min="0"
          value={priceLimit.min === 0 ? "" : priceLimit.min}
          onChange={(e) =>
            setPriceLimit({
              ...priceLimit,
              min: e.target.value === "" ? 0 : Number(e.target.value),
            })
          }
          placeholder="No Min"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onFocus={(e) => e.target.select()}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="price-max">Max ($)</Label>
        <input
          id="price-max"
          type="number"
          value={priceLimit.max === Infinity ? "" : priceLimit.max}
          onChange={(e) =>
            setPriceLimit({
              ...priceLimit,
              max: e.target.value === "" ? Infinity : Number(e.target.value),
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
