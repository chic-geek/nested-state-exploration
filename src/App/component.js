import React from "react";

/**
 * U T I L I T I E S
 */
const colorsArr = [
  "#001f3f",
  "#0074D9",
  "#7FDBFF",
  "#39CCCC",
  "#3D9970",
  "#2ECC40",
  "#01FF70",
  "#FFDC00",
  "#FF851B",
  "#FF4136",
  "#85144b",
  "#F012BE",
  "#B10DC9",
  "#111111",
  "#AAAAAA",
  "#DDDDDD",
];

const generateID = (length = 6) => {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const generateCOLOR = () => {
  return colorsArr[Math.floor(Math.random() * colorsArr.length)];
};

/**
 * A P P L I C A T I O N
 */
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React relational state exploration</h1>
        <Editors />
      </div>
    );
  }
}

class Editors extends React.Component {
  state = {
    editors: [
      { id: "98uxYa", color: generateCOLOR(), nestedId: "" },
      { id: "13WrcV", color: generateCOLOR(), nestedId: "98uxYa" },
      { id: "50PccW", color: generateCOLOR(), nestedId: "98uxYa" },
      { id: "98ggjk", color: generateCOLOR(), nestedId: "50PccW" },
      { id: "37Obya", color: generateCOLOR(), nestedId: "" },
      { id: "8436gd", color: generateCOLOR(), nestedId: "" },
      { id: "75671B", color: generateCOLOR(), nestedId: "8436gd" },
    ],
  };

  _handleAddingEditor = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      editors: [...prevState.editors, { id: generateID(), color: generateCOLOR() }],
    }));
  };

  render() {
    const parents = this.state.editors.filter((parent) => parent.nestedId === "");
    const children = this.state.editors.filter((child) => child.nestedId !== "");

    // todo: look into recursive components and state
    // useful article on recursion: https://www.bitovi.com/blog/recursive-react-components

    return (
      <div>
        <div className="editorsContainer">
          {parents.map((parent) => {
            const nestedChildren = children.filter((child) => child.nestedId === parent.id);
            return (
              <Editor key={parent.id} color={parent.color}>
                {nestedChildren
                  ? nestedChildren.map((child) => <Editor key={child.id} color={child.color} />)
                  : ""}
              </Editor>
            );
          })}
        </div>
      </div>
    );
  }
}

class Editor extends React.Component {
  render() {
    const isNested = this.props.isNested ? "editor-isNested" : "";
    return (
      <div className={`editor ${isNested}`} style={{ backgroundColor: `${this.props.color}` }}>
        <strong style={{ fontWeight: "bold", color: "#FFFFFF" }}>{this.props.children}</strong>
      </div>
    );
  }
}

export default App;
