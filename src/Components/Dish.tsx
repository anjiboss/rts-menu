import React from "react";

interface Dish {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

interface DishProps {
  item: Dish;
}

export const Dish: React.FC<DishProps> = ({ item }) => {
  return (
    <div>
      <img src={item.img} alt="Dish IMG" />
    </div>
  );
};
