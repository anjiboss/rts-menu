import { useState } from "react";
import { Dish } from "./Dish";
import "../App.css";

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
    setSelectedCate(event.currentTarget.innerText.toLowerCase());
  };

  return (
    <>
      <ul className="btn-container">
        {console.log(selectedCate)}
        {categories.map((category) => (
          <button
            className="filter-btn"
            onClick={changeCategoriHandle}
            key={category}
          >
            {category}
          </button>
        ))}
      </ul>
      <section className="section-center">
        {selectedCate !== "all"
          ? menu
              .filter((dish) => dish.category === selectedCate)
              .map((item) => {
                return <Dish key={item.id} item={item} />;
              })
          : menu.map((item) => <Dish key={item.id} item={item} />)}
      </section>
    </>
  );
};

export default Categories;
