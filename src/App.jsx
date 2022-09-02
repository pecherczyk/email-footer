import React from "react";
import Form from "./Form";
import validator from "./validator";
import TemplateWpwik from "./Template";
import TemplateWzwik from "./Template-wzwik";
import removeDiacritics from "./emailHelper";
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputName: '',
      inputSurname: '',
      inputDept: '',
      inputTel: '',
      domain: '@wpwik.pl',
      inputMobile__ready: 1
    }
    this.processData = this.processData.bind(this)
    this.selectTemplate = this.selectTemplate.bind(this)
  }

  selectTemplate(event) {
    console.log(event.target.value)
    this.setState({domain: event.target.value})
  }

  processData(event) {
    let ok // true or false 

    try {
      let isOk = validator(event.target.id, event.target.value)
      ok = isOk
    } catch (err) {
      console.error(err.message)
    }
    if (ok) {
      this.setState({[event.target.id]: event.target.value})
      event.target.className = 'correct'
      this.setState({[event.target.id + '__ready']: 1})

    } else {
      this.setState({[event.target.id]: ''})
      event.target.className = 'wrong'
      this.setState({[event.target.id + '__ready']: 0})
    }
  }

  callbackFunction = (formData) => {
    this.setState(formData)
  }

  render(){
    let template

    if (
      this.state.inputName__ready === 1 &&
      this.state.inputSurname__ready === 1 &&
      this.state.inputDept__ready === 1 &&
      this.state.inputTel__ready === 1 &&
      this.state.inputMobile__ready === 1
    ) {

      const email = removeDiacritics(this.state.inputName) + '.' + removeDiacritics(this.state.inputSurname) + this.state.domain

      switch (this.state.domain) {
        case "@wzwik.pl":
          template = 
          <TemplateWzwik
            name = {this.state.inputName}
            surname = {this.state.inputSurname}
            dept = {this.state.inputDept}
            tel = {this.state.inputTel}
            email = {email}
            domain = {this.props.domain}
            mobile = {this.state.inputMobile}
        />
          break;
        case "@wpwik.pl":
          template = 
          <TemplateWpwik 
            name = {this.state.inputName}
            surname = {this.state.inputSurname}
            dept = {this.state.inputDept}
            tel = {this.state.inputTel}
            email = {email}
            domain = {this.props.domain}
            mobile = {this.state.inputMobile}
          />
          break;
        default:
          break;
      }

    } else {
      template = 
      <div>
        <div>Proszę wpisać dane...</div>
      </div>

    }
    return (
      <div>
        <Form
          formDataCallback = {this.callbackFunction}
          processData = {this.processData}
          selectTemplate = {this.selectTemplate}
          domain = {this.state.domain}
        />
        {template}
      </div>
  )}
}

export default App;
