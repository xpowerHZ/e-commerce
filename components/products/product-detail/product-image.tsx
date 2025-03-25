import Image from "next/image";
type props = {
  image: string;
  name: string;
};
export const ProductImage = ({ image, name }: props) => {
  return (
    <div className="overflow-hidden rounded-lg">
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        width={600}
        height={600}
        className="w-full object-cover"
      />
    </div>
  );
};
