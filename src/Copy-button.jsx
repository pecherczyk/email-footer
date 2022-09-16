import React from "react";

class CopyButton extends React.Component {
  constructor(props){
    super()
    this.state ={}
  }
  render() {
    return <button onClick={this.props.click}>Kopiuj do Outlooka</button>
  }
}

export default CopyButton
