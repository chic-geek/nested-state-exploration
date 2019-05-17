import React from "react";

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

export default Editor;
