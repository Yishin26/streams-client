import React from "react";
import Modal from "../Modal";
import History from "../../history"

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      {/*React.Fragment*/}
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );
  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content="Are you sure to delete the Stream ?"
        actions={actions}
        onDismiss={() => History.push("/streams-client/")}
      />
    </div>
  );
};

export default StreamDelete;
