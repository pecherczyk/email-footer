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
      <div className="container">
        <form>
        <h1>Generator stopek e-mail</h1>
          <div className="container">
            <div className="row">
              <div className="col-2">
                <label htmlFor="inputName" className="form-label">Imię</label>
              </div>
              <div className="col">
                <input type="text" id="inputName" onChange={this.setName} />
              </div>
            </div>
            <div className="row align-items-start">
              <div className="col-2">
                <label htmlFor="inputSurname">Nazwisko</label>
              </div>
              <div className="col-2">
                <input type="text" id="inputSurname" onChange={this.setSurname}/>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <label htmlFor="inputDept">Stanowisko</label>
              </div>
              <div className="col">
                <input type="text" id="inputDept" onChange={this.setDept} />
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <label htmlFor="tel">Telefon</label>
              </div>
              <div className="col">
                <input type="text" id="tel" onChange={this.setTel}/>
              </div>
            </div>
          </div>
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
