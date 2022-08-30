import React from "react";
import Form from "./Form";
import validator from "./validator";
import Template from "./Template";
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
      domain: '@wpwik.pl'
    }
    this.handleClick = this.handleClick.bind(this)
    this.processData = this.processData.bind(this)
  }

  handleClick(event) {
    this.setState({[event.target.id]: event.target.value})
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
      this.state.inputTel__ready === 1
    ) {
      
      const email = removeDiacritics(this.state.inputName) + '.' + removeDiacritics(this.state.inputSurname) + this.state.domain

      template = 
      <Template 
        name = {this.state.inputName}
        surname = {this.state.inputSurname}
        dept = {this.state.inputDept}
        tel = {this.state.inputTel}
        email = {email}
      />
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
          handleClick = {this.handleClick}
          processData = {this.processData}
        />
        {template}
      </div>
  )}
}

export default App;
