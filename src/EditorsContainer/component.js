import React from "react";
import { generateId, generateColor } from "../helpers";
import Editor from "../Editor";

class EditorsContainer extends React.Component {
  state = {
    editors: [
      { id: "98uxYa", color: generateColor(), nestedId: "" },
      { id: "13WrcV", color: generateColor(), nestedId: "98uxYa" },
      { id: "50PccW", color: generateColor(), nestedId: "98uxYa" },
      { id: "98ggjk", color: generateColor(), nestedId: "50PccW" },
      { id: "37Obya", color: generateColor(), nestedId: "" },
      { id: "8436gd", color: generateColor(), nestedId: "" },
      { id: "75671B", color: generateColor(), nestedId: "8436gd" },
    ],
  };

  _handleAddingEditor = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      editors: [...prevState.editors, { id: generateId(), color: generateColor() }],
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

export default EditorsContainer;
