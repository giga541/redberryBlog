import classes from "./categories.module.css";

const Categories = ({ categories }) => {
  const firstSixCategories = categories.slice(0, 6);

  return (
    <div className={classes.categories}>
      {firstSixCategories.map(category => {
        const BUTTON_STYLES = {
          backgroundColor: `rgba(${parseInt(
            category.background_color.slice(1, 3),
            16
          )}, ${parseInt(
            category.background_color.slice(3, 5),
            16
          )}, ${parseInt(category.background_color.slice(5, 7), 16)}, 0.08)`,
          // backgroundColor: category.background_color,
          color: category.text_color,
        };

        return (
          <div key={category.id}>
            <button style={BUTTON_STYLES} className={classes.button}>
              {category.title}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
