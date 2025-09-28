import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category?: string;
}

export default function ProductCard({ name, price, image, category }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
        <Image
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded-md mb-3"
        />
        {
            category && <p className="text-sm text-gray-500">{category}</p>
        }
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-xl font-bold mt-1">${price}</p>
    </div>
  );
}
