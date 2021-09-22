import { useParams, useHistory } from "react-router-dom";

const Color = () => {
  const history = useHistory();
  const colors = JSON.parse(localStorage.getItem("colors"));
  const { color } = useParams();

  const redirect = () => {
    history.push("/colors");
  };
  const refinedColors = colors.filter((m) => m.name === color)[0];

  return (
    <>
      {refinedColors ? (
        <div
          style={{
            height: "100px",
            width: "100px",
            backgroundColor: refinedColors.value,
          }}
        >
          <h1>{color}</h1>
          <button onClick={redirect}>Home</button>
        </div>
      ) : (
        history.push("/colors")
      )}
    </>
  );
};

export default Color;
