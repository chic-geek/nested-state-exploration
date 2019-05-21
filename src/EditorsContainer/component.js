import React from "react";
import Editor from "../Editor";

class EditorsContainer extends React.Component {
  render() {
    const { editors } = this.props;

    return (
      <React.Fragment>
        {editors.map((editor) => (
          <React.Fragment key={editor.id}>
            <Editor uid={editor.id} color={editor.color}>
              {editor.subEditors.length > 0 && <EditorsContainer editors={editor.subEditors} />}
            </Editor>
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}

export default EditorsContainer;
