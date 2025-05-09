
import { Category, CategoryMap } from "@/mapper/category-map";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

type Props = {
  selectedCategories: Category[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<Category[]>>;
};

export const CategoryCheckboxes = ({
  selectedCategories,
  setSelectedCategories,
}: Props) => {
  const handleCategoryChange = (checked: boolean, category: Category) => {
    setSelectedCategories((prevCategories: Category[]) => {
      if (checked) {
        return [...prevCategories, category];
      } else {
        return prevCategories.filter(
          (existingCategory) => existingCategory !== category
        );
      }
    });
  };

  return (
    <>
      {Object.entries(CategoryMap).map(([key, value]) => (
        <div key={key} className="flex items-center space-x-2">
          <Checkbox
            id={`category-${value.value}`}
            checked={selectedCategories.includes(value.value)}
            onCheckedChange={(checked) => {
              if (typeof checked === "boolean") {
                handleCategoryChange(checked, value.value);
              }
            }}
          />
          <Label htmlFor={`category-${value.value}`}>{value.display}</Label>
        </div>
      ))}
    </>
  );
};
