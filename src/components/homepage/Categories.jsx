import { useState } from "react";
import classes from "./categories.module.css";

const Categories = ({ categories, onClick = () => {} }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleButtonClick = category => {
    const isSelected = selectedCategories.includes(category.id);
    const newSelectedCategories = isSelected
      ? selectedCategories.filter(id => id !== category.id)
      : [...selectedCategories, category.id];

    setSelectedCategories(newSelectedCategories);
    onClick(category);
  };

  return (
    <div className={classes.categories}>
      {categories.map(category => {
        const isSelected = selectedCategories.includes(category.id);

        const BUTTON_STYLES = {
          backgroundColor: category.background_color,
          color: category.text_color,
          border: isSelected ? "1px solid #000" : "none",
        };

        return (
          <div key={category.id}>
            <button
              style={BUTTON_STYLES}
              className={classes.button}
              onClick={() => handleButtonClick(category)}
            >
              {category.title}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
