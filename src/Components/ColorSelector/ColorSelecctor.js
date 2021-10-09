import { useState } from "react";
import { getSiblings } from "../../Utility";
import "./ColorSelector.css";
const ColorSelecctor = ({ colors=[] ,setSelectedColor}) => {
  const [selected, setSelected] = useState(colors[0]);
  const handleColorChange = (e) => {
    const node = e.target;
    var siblings = getSiblings(node);
    node.classList.add("active");
    siblings.forEach((sib) => {
      sib.classList.remove("active");
    });
    setSelected(node.getAttribute("name"));
    setSelectedColor(node.getAttribute("name"))
  };
  return (
    <div>
      <p>Color: {selected}</p>
      <div className="color-selector">
        {colors?.map((color, i) => (
          <div
            className={`color ${!i && "active"}`}
            name={color}
            onClick={handleColorChange}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelecctor;
