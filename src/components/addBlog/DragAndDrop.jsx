import classes from "./dragAndDrop.module.css";
import FOLDER_ICON from "../../assets/folder-add.png";
import X_LOGO from "../../assets/x_logo.svg";
import { useState } from "react";
import { useRef } from "react";

const DragAndDrop = () => {
  const [file, setFile] = useState(null);
  const inputRef = useRef();

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDrop = e => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };
  console.log(file);

  if (file)
    return (
      <div className={classes.uploaded}>
        <div>{file.name}</div>
        <button>
          <img src={X_LOGO} alt="close-logo" />
        </button>
      </div>
    );

  return (
    <>
      {!file && (
        <div
          className={classes["drop_container"]}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <img src={FOLDER_ICON} alt="folder_icon" className={classes.image} />
          <div className={classes["select_file_container"]}>
            <p className={classes["drop_file"]}>ჩააგდეთ ფაილი აქ ან</p>
            <input
              type="file"
              onChange={e => setFile(e.target.files[0])}
              ref={inputRef}
              hidden
            />
            <button
              className={classes.button}
              onClick={() => inputRef.current.click()}
            >
              აირჩიეთ ფაილი
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DragAndDrop;
