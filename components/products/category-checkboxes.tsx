import { Category, CategoryType } from "@/types/Product";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

type Props = {
  selectedCategories: CategoryType[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
};

export const CategoryCheckboxes = ({
  selectedCategories,
  setSelectedCategories,
}: Props) => {
  const handleCategoryChange = (checked: boolean, category: CategoryType) => {
    setSelectedCategories((prevCategories: CategoryType[]) => {
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
      {Object.entries(Category).map(([key, value]) => (
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
