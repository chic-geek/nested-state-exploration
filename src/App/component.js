import React from "react";
import EditorsContainer from "../EditorsContainer";
import { EditorContext } from "../Contexts/EditorContext";

class App extends React.Component {
  render() {
    return (
      <EditorContext.Consumer>
        {(context) => (
          <React.Fragment>
            <h1>Recursive state exploration</h1>
            <EditorsContainer editors={context.state.editors} />
          </React.Fragment>
        )}
      </EditorContext.Consumer>
    );
  }
}

export default App;
