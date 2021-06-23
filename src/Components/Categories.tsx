import { useState } from "react";
import { Dish } from "./Dish";

interface menu {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

interface Props {
  menu: menu[];
  categories: string[];
}

const Categories: React.FC<Props> = ({ menu, categories }) => {
  const [selectedCate, setSelectedCate] = useState("all");
  const changeCategoriHandle = (event: React.MouseEvent<HTMLElement>) => {
    setSelectedCate(event.currentTarget.innerText);
  };

  return (
    <>
      <ul>
        {categories.map((category) => (
          <button className="btn" onClick={changeCategoriHandle} key={category}>
            {category}
          </button>
        ))}
      </ul>
    </>
  );
};

export default Categories;
