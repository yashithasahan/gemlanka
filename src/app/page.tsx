import ItemCard from "@/components/AddCard";
import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination";
import React from "react";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <div className="h-full flex flex-col p-2 gap-4 mx-auto max-w-[1200px] ">
        <Carousel />
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 ">
          <ItemCard
            imageUrl="https://chariot.tours/wp-content/uploads/2017/11/assorted-coloured-gemstones-1-e1691055918337.jpg"
            title="Sample Item https://picsum https://picsumhttps://picsum"
            priceRange="$100 - $200"
            category="Electronics"
            location="Colombo, Sri Lanka"
            dateTime="2023-10-01 10:00 AM"
          />
          <ItemCard
            imageUrl="https://chariot.tours/wp-content/uploads/2017/11/assorted-coloured-gemstones-1-e1691055918337.jpg"
            title="Sample Item"
            priceRange="$100 - $200"
            category="Electronics"
            location="Colombo, Sri Lanka"
            dateTime="2023-10-01 10:00 AM"
          />
          <ItemCard
            imageUrl="https://chariot.tours/wp-content/uploads/2017/11/assorted-coloured-gemstones-1-e1691055918337.jpg"
            title="Sample Item"
            priceRange="$100 - $200"
            category="Electronics"
            location="Colombo, Sri Lanka"
            dateTime="2023-10-01 10:00 AM"
          />
          <ItemCard
            imageUrl="https://chariot.tours/wp-content/uploads/2017/11/assorted-coloured-gemstones-1-e1691055918337.jpg"
            title="Sample Item"
            priceRange="$100 - $200"
            category="Electronics"
            location="Colombo, Sri Lanka"
            dateTime="2023-10-01 10:00 AM"
          />
          <ItemCard
            imageUrl="https://chariot.tours/wp-content/uploads/2017/11/assorted-coloured-gemstones-1-e1691055918337.jpg"
            title="Sample Item"
            priceRange="$100 - $200"
            category="Electronics"
            location="Colombo, Sri Lanka"
            dateTime="2023-10-01 10:00 AM"
          />
          <ItemCard
            imageUrl="https://chariot.tours/wp-content/uploads/2017/11/assorted-coloured-gemstones-1-e1691055918337.jpg"
            title="Sample Item"
            priceRange="$100 - $200"
            category="Electronics"
            location="Colombo, Sri Lanka"
            dateTime="2023-10-01 10:00 AM"
          />
          <ItemCard
            imageUrl="https://chariot.tours/wp-content/uploads/2017/11/assorted-coloured-gemstones-1-e1691055918337.jpg"
            title="Sample Item"
            priceRange="$100 - $200"
            category="Electronics"
            location="Colombo, Sri Lanka"
            dateTime="2023-10-01 10:00 AM"
          />
          <ItemCard
            imageUrl="https://chariot.tours/wp-content/uploads/2017/11/assorted-coloured-gemstones-1-e1691055918337.jpg"
            title="Sample Item"
            priceRange="$100 - $200"
            category="Electronics"
            location="Colombo, Sri Lanka"
            dateTime="2023-10-01 10:00 AM"
          />
        </div>
        <Pagination />
      </div>
    </div>
  );
}
