import React from "react";

class CopyButton extends React.Component {
  constructor(props){
    super()
    this.state ={}
  }

  render() {
    return <button onClick={(e) => this.props.copy(this.props.param, e)}>Kopiuj do schowka</button>
  }
}

export default CopyButton
