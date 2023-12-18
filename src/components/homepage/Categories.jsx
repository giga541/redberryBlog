import classes from "./categories.module.css";

const Categories = ({ categories }) => {
  const firstFiveCategories = categories.slice(0, 5);
  return (
    <div className={classes.flex}>
      {firstFiveCategories.map(category => (
        <div className={classes.id} key={category.id}>
          <button
            style={{
              backgroundColor: category.background_color,
              color: category.text_color,
            }}
          >
            {category.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Categories;
