import React from "react";
import { EditorContext } from "../Contexts/EditorContext";

class Editor extends React.Component {
  render() {
    return (
      <EditorContext.Consumer>
        {(context) => (
          <div className={`editor`} style={{ backgroundColor: `${this.props.color}` }}>
            {this.props.children}
            <button onClick={(e, uid) => context.handleAddingEditor(e, this.props.uid)}>
              Add editor
            </button>
          </div>
        )}
      </EditorContext.Consumer>
    );
  }
}

export default Editor;
