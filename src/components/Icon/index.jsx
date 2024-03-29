import React from "react";

const Icon = ({ iconName }) => {
  const iconPath = `assets/icons/weather/${iconName}.svg`;
  const IconComponent = React.createElement("img", {
    src: iconPath,
    alt: "Icon",
  });

  return IconComponent;
};

export default Icon;
