import { Link } from "react-router-dom";
const Colors = () => {
  const colors = JSON.parse(localStorage.getItem("colors"));
  return (
    <div>
      <h1>All Colors</h1>
      <h3>
        <Link to="/colors/new">New Color</Link>
      </h3>
      <ul>
        {colors.map((m, i) => {
          let link = `/colors/${m.name}`;

          return (
            <li>
              <Link to={link}>{m.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Colors;
