import classes from "./categories.module.css";

const Categories = ({ categories, onClick = () => {} }) => {
  return (
    <div className={classes.categories}>
      {categories.map(category => {
        const BUTTON_STYLES = {
          backgroundColor: category.background_color,
          color: category.text_color,
        };

        return (
          <div key={category.id}>
            <button
              style={BUTTON_STYLES}
              className={classes.button}
              onClick={() => onClick(category)}
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
