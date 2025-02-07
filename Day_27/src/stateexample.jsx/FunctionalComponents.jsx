import React from "react";
import "./MyStyles.css";

function FunctionalComponents(props) {
  let applyStyle = props.apply ? 'heading' : '';
  console.log(props);

  let inlineStyle = {
      color: 'red',
      fontSize: '100px'
  };

  return (
      <div>
          <h1 className={`${applyStyle} font-style`}>Welcome</h1>
          <h2 style={inlineStyle}>Good morning!!!!</h2>
      </div>
  );
}

export default FunctionalComponents;