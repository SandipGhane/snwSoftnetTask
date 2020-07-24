import React from "react";
import RedoIcon from "@material-ui/icons/Redo";
import UndoIcon from "@material-ui/icons/Undo";
import "./style.css";

class Taks2 extends React.Component {
  state = {
    color: "red",
    shape: "circle",
    updateBg: "red",
    prevColor: [],
  };
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  changeBg = (e) => {
    e.preventDefault();
    let prevColor = this.state.prevColor;
    let addColor = this.state.color;
    prevColor.push(addColor);
    this.setState({
      updateBg: this.state.color,
      prevColor: prevColor,
    });
  };
  undo = (e) => {
    console.log("undo here");
  };
  render() {
    const { color, shape, updateBg, prevColor } = this.state;
    // console.log(prevColor);
    var prev = [];
    var show = false;
    for (var i = prevColor.length - 1; i >= prevColor.length - 3; i--) {
      prev.push(prevColor[i]);
    }
    // console.log(prev);
    if (prev.length) {
      show = true;
    }
    return (
      <div className="task2">
        {" "}
        <div className="panel1">
          {shape === "circle" && updateBg ? (
            <div
              className="circle"
              style={{
                background: `${updateBg}`,
                borderRadius: "50%",
                width: "200px",
                height: "200px",
              }}
            >
              <h3> {updateBg} </h3>{" "}
            </div>
          ) : (
            <div
              className="circle"
              style={{
                background: `${updateBg}`,
                width: "200px",
                height: "200px",
              }}
            >
              <h3> {updateBg} </h3>{" "}
            </div>
          )}{" "}
          <br />{" "}
          {prev.map((color, i) => (
            <div
              className="prev"
              key={i}
              style={{
                background: `${color}`,
                width: "50px",
                height: "50px",
              }}
            ></div>
          ))}{" "}
        </div>
        <br />
        <br />
        <div className="search-params panel2">
          <form>
            <select
              value={shape}
              onChange={(e) =>
                this.setState({
                  shape: e.target.value,
                })
              }
              onBlur={(e) =>
                this.setState({
                  shape: e.target.value,
                })
              }
            >
              <option value="circle"> Circle </option>{" "}
              <option value="square"> Square </option>{" "}
              <option value="rectangle"> Rectangle </option>{" "}
            </select>{" "}
            <label htmlFor="color">
              setBackground Color{" "}
              <input
                type="text"
                value={this.state.color}
                name="color"
                onChange={this.handleChange}
              />{" "}
              <button
                style={{
                  backgroundColor: `${this.state.color}`,
                  margin: "0 100px 10px",
                }}
                onClick={this.changeBg}
              >
                Update Color{" "}
              </button>{" "}
            </label>{" "}
            <button onClick={this.undo}>
              <UndoIcon
                style={{
                  fontSize: "40px",
                }}
              >
                {" "}
              </UndoIcon>{" "}
            </button>{" "}
            <button>
              <RedoIcon
                style={{
                  fontSize: "40px",
                }}
              >
                {" "}
                UndoIcon{" "}
              </RedoIcon>{" "}
            </button>{" "}
          </form>{" "}
        </div>{" "}
      </div>
    );
  }
}
export default Taks2;
