import React from "react";
import { editorsData } from "../data";

export const EditorContext = React.createContext();

export class EditorProvider extends React.Component {
  state = {
    editors: editorsData,
  };

  render() {
    const { children } = this.props;
    return (
      <EditorContext.Provider
        value={{
          state: this.state,
          handleAddingEditor: this._handleAddingEditor,
        }}>
        {children}
      </EditorContext.Provider>
    );
  }

  _handleAddingEditor = (e, uid) => {
    e.preventDefault();
    console.log(uid);
    // need to set some state shizzle here...
  };
}
