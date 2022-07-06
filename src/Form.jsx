import React from "react"
import Output from "./Output"
import removeDiacritics from "./emailHelper"

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      surname: "",
      tel: "",
      dept: "",
      email: ""
    }
    this.setName = this.setName.bind(this)
    this.setSurname = this.setSurname.bind(this)
    this.setDept = this.setDept.bind(this)
    this.setTel = this.setTel.bind(this)
  }
  setName(event) {
    this.setState({name: event.target.value})
    this.setState({emailName: removeDiacritics(event.target.value)})
  }
  setSurname(event) {
    this.setState({surname: event.target.value})
    this.setState({emailSurname: removeDiacritics(event.target.value)})
  }
  setDept(event) {
    this.setState({dept: event.target.value})
  }
  setTel(event) {
    this.setState({tel: event.target.value})
  }

  render() {
    return (
      <div>
        <form action="">
          <div className="mb-3">
            <label htmlFor="imie" className="form-label">Imię</label>
            <input type="text" name="imie" onChange={this.setName} /><br />
          </div>
          <label htmlFor="nazwisko">Nazwisko</label>
          <input type="text" name="nazwisko" onChange={this.setSurname}/><br />
          <label htmlFor="dept">Stanowisko</label>
          <input type="text" name="dept" onChange={this.setDept} /><br />
          <label htmlFor="tel">Telefon</label>
          <input type="text" name="tel" onChange={this.setTel}/>
        </form>
        <Output
          name={this.state.name}
          surname={this.state.surname}
          dept={this.state.dept}
          tel={this.state.tel}
          emailName={this.state.emailName}
          emailSurname={this.state.emailSurname}
        />
      </div>
    )
  }
}

export default Form
