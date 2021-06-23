import React from "react";
import "./App.css";
import items from "./data/data";
import Categories from "./Components/Categories";

const setter: Set<string> = new Set();
setter.add("all");
items.forEach((dish) => setter.add(dish.category));
const categories = Array.from(setter);

const App: React.FC = () => {
  return (
    <div>
      <Categories menu={items} categories={categories}></Categories>
    </div>
  );
};

export default App;
