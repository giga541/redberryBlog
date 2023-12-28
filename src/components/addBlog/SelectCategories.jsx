import { useEffect, useState } from "react";
import AsyncSelect from "react-select/async";
import { API_URL } from "../../consts";
import classes from "./selectCategories.module.css";

const SelectCategories = () => {
  const handleChange = selectedOption => {
    console.log("handleChange", selectedOption);
  };
  const [options, setOptions] = useState([]);

  useEffect(() => {}, []);

  const loadOptions = (searchValue, callback) => {
    // setTimeout(() => {
    //   const filteredOptions = options.filter(option =>
    //     option.label.toLowerCase().includes(searchValue.toLowerCase())
    //   );
    //   console.log(searchValue, callback);
    //   callback(filteredOptions);
    // }, 2000);

    fetch(`${API_URL}/categories`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setOptions(data.data);
        const selectOptions = data.data.map(d => ({
          value: d.id,
          label: d.title,
          text_color: d.text_color,
        }));
        callback(selectOptions);
        console.log(data.data);
      })
      .catch(error => {
        console.error("Error fetching categories:", error);
      });
  };

  const colorStyles = {
    control: styles => ({ ...styles, backgroundColor: "#f8fff8" }),
    option: (styles, { data }) => {
      return { ...styles, color: data.text_color };
    },
  };

  return (
    <div className={classes.test}>
      <AsyncSelect
        loadOptions={loadOptions}
        defaultOptions
        onChange={handleChange}
        isMulti
        styles={colorStyles}
        className={classes["sync_select"]}
      />
    </div>
  );
};

export default SelectCategories;
