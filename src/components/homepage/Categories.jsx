import classes from "./categories.module.css";

const Categories = ({ categories }) => {
  return (
    <div className={classes.categories}>
      {categories.map(category => {
        const BUTTON_STYLES = {
          backgroundColor: category.background_color,
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
// backgroundColor: `rgba(${parseInt(
//   category.background_color.slice(1, 3),
//   16
// )}, ${parseInt(
//   category.background_color.slice(3, 5),
//   16
// )}, ${parseInt(category.background_color.slice(5, 7), 16)}, 0.08)`,
