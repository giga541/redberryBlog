import classes from "./dragAndDrop.module.css";
import FOLDER_ICON from "../../assets/folder-add.png";
import X_LOGO from "../../assets/x_logo.svg";
import GALERRY_ICON from "../../assets/gallery.png";
import { useRef } from "react";

const DragAndDrop = ({ file, setFile }) => {
  const inputRef = useRef();

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDrop = e => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  if (file)
    return (
      <div className={classes.upload}>
        <div className={classes["upload_container"]}>
          <img
            src={GALERRY_ICON}
            alt="gallery-icon"
            className={classes["gallery_image"]}
          />
          <div className={classes.gap}>
            <div className={classes.name}>{file.name}</div>
            <button
              className={classes["cancel_button"]}
              onClick={() => {
                setFile(null);
              }}
            >
              <img
                src={X_LOGO}
                alt="close-logo"
                className={classes["button_image"]}
              />
            </button>
          </div>
        </div>
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
