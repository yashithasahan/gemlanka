/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import React from "react";
import placeholder from "@/public/images/placeholder.png";
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
    <div className="flex bg-white flex-col overflow-hidden  p-1 gap-2 hover:shadow-sm border-b h-full">
      <div className="flex w-full gap-2">
        <div className="w-[100px] h-[100px]  shrink-0">
          <Image
            src={placeholder}
            // src={"https://random.imagecdn.app/500/150"}
            alt={title}
            width={100}
            height={100}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-1 ">
          <div>
            <p className="text-md font-bold text-ellipsis line-clamp-1">
              {"Sample item title description on  "}
            </p>
            <p className="text-gray-600 text-xs">{"Gems > Blue gemstones"}</p>
          </div>
          <p className="text-secondary font-bold">{"Rs 200,000"}</p>
        </div>
      </div>

      <div className="flex flex-row text-sm justify-between w-full">
        <p className="text-gray-600">{location}</p>
        <p className="text-gray-600">{"Today"}</p>
      </div>
    </div>
  );
};

export default ItemCard;
