import React from "react";
import "../App.css";

interface _Dish {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

interface DishProps {
  item: _Dish;
}

export const Dish: React.FC<DishProps> = ({ item }) => {
  return (
    <article className="menu-item">
      <img className="photo" src={item.img} alt="Dish IMG" />
      <div className="item-info">
        <header>
          <h4>{item.title}</h4>
          <h4 className="price">${item.price}</h4>
        </header>
        <p className="item-text">{item.desc}</p>
      </div>
    </article>
  );
};
