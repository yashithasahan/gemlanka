import Image from "next/image";
import React from "react";

interface ItemCardProps {
  imageUrl: string;
  title: string;
  priceRange: string;
  category: string;
  location: string;
  dateTime: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  imageUrl,
  title,
  priceRange,
  category,
  location,
  dateTime,
}) => {
  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
      <div className="w-1/3">
        <Image
          src={imageUrl}
          alt={title}
          width={75}
          height={75}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-2/3 p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{priceRange}</p>
        <p className="text-gray-600">{category}</p>
        <p className="text-gray-600">{location}</p>
        <p className="text-gray-600">{dateTime}</p>
      </div>
    </div>
  );
};

export default ItemCard;
