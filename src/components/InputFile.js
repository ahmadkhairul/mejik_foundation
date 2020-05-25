import React from "react";

const InputFile = ({ children, name, height, width }) => {
  const style = {
    label: {
      border: "2px dashed #CD4559",
      padding: "8px 12px",
      cursor: "pointer",
      boxSizing: "border-box",
      borderRadius: "8px",
      height: height ? height : "100%",
      width: width ? width : "100%"
    },
    input: {
      position: "absolute",
      opacity: "0",
      cursor: "pointer",
      height: "0",
      width: "0"
    }
  };

  return (
    <div style={style.label}>
      <label htmlFor={name}>
        {children}
        <input style={style.input} type="file" name={name} id={name} />
      </label>
    </div>
  );
};

export default InputFile;
