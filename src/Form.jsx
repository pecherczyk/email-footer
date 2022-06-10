import React from "react"
import Output from "./Output"

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      surname: "",
      tel: "",
      caption: ""
    }
    this.alert = this.alert.bind(this)
  }

  alert(event) {
    console.log(event.target.value)
    this.setState({surname: event.target.value})
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="imie">Imię</label>
          <input type="text" name="imie" onChange={this.alert} />
          <label htmlFor="nazwisko">Nazwisko</label>
          <input type="text" name="nazwisko" onChange={this.alert}/>
          <label htmlFor="opis">Dział</label>
          <input type="text" name="opis" onChange={this.alert} />
          <input type="submit" value="Submit" />
        </form>
        <Output name={this.state.surname} />
      </div>
    )
  }
}

export default Form
