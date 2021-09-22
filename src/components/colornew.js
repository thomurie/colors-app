import { useState } from "react";
import { useHistory } from "react-router-dom";

const ColorNew = () => {
  const history = useHistory();
  const INITIALSTATE = {
    name: "",
    color: "",
  };
  const [colorForm, setColorForm] = useState(INITIALSTATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newVals = { ...colorForm, [name]: value };
    setColorForm(newVals);
  };

  const createColor = (e) => {
    e.preventDefault();
    const colors = localStorage.getItem("colors")
      ? JSON.parse(localStorage.getItem("colors"))
      : [];
    let actualColors = colors.filter(
      (m) => m.name !== undefined && m.value !== undefined
    );

    const { name, color } = colorForm;
    const newColors = [{ name: name, value: color }, ...actualColors];

    localStorage.setItem("colors", JSON.stringify(newColors));
    setColorForm(INITIALSTATE);
    history.push("/colors");
  };

  return (
    <form onSubmit={createColor}>
      <label htmlFor="name">Color Name: </label>
      <input
        type="text"
        name="name"
        placeholder="Enter a Name"
        value={colorForm.name}
        onChange={handleChange}
      ></input>

      <label htmlFor="color">Color Value: </label>
      <input
        type="color"
        name="color"
        value={colorForm.color}
        onChange={handleChange}
      ></input>

      <button type="submit">Add Color</button>
    </form>
  );
};

export default ColorNew;
