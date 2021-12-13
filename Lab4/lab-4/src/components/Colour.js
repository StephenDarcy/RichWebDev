import "./Colour.css";
import { useDispatch } from "react-redux";
import { setColour } from "./ColourSlice";
import classnames from "classnames";

function Colour(props) {
  const dispatch = useDispatch();
  const colourClasses = classnames(props.colour, "colourBox");
  return (
    <div
      onClick={(e) =>
        dispatch(
          setColour(
            window
              .getComputedStyle(e.target, null)
              .getPropertyValue("background-color")
          )
        )
      }
      id={props.colour + "Box"}
      className={colourClasses}
    ></div>
  );
}

export default Colour;
