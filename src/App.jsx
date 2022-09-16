import React from "react";
import Form from "./Form";
import './App.css'
import validator from "./validator";
import TemplateWpwik from "./Template-wpwik";
import TemplateWzwik from "./Template-wzwik";
import removeDiacritics from "./emailHelper";
import CopyButton from "./Copy-button";
import { renderToString } from "react-dom/server"

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
    this.validData = {}
    this.processData = this.processData.bind(this)
    this.selectTemplate = this.selectTemplate.bind(this)
  }
   
  selectTemplate(event) {
    this.setState({domain: event.target.value})
  }

  async hello(event) {
    try {
      const clipboardItems = await navigator.clipboard.read();
  
      for (const clipboardItem of clipboardItems) {
  
        for (const type of clipboardItem.types) {
          const blob = await clipboardItem.getType(type);
          // we can now use blob here
         let promise = blob.text()
         promise.then((result) => {
          console.log(result)
         })
        }
      }

    } catch (err) {
      console.error(err.name, err.message);
    }
  }

 async writeToClipboard() {
  //const type = "text/plain";
  const blob = new Blob(["<p style=\"color: red\">To jest tekst z BLOBA</p>"], { type: "text/html" });

  const data = [new window.ClipboardItem({ "text/html": blob })];
    let promise = navigator.clipboard.write(data)
    promise.then(() => {
      console.log(blob)
    }, () => {})
  }

  copyTemplate() {
    let template = renderToString(<TemplateWpwik/>)
    console.log(template)
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

  render(){
    if (
      this.state.inputName__ready === 1 &&
      this.state.inputSurname__ready === 1 &&
      this.state.inputDept__ready === 1 &&
      // this.state.inputTel__ready === 1 &&
      this.state.inputMobile__ready === 1
    ) {
      const email = removeDiacritics(this.state.inputName) + '.' + removeDiacritics(this.state.inputSurname) + this.state.domain
      this.validData = {
        name: this.state.inputName,
        surname: this.state.inputSurname,
        email: email,
        dept: this.state.inputDept,
        tel: this.state.inputTel,
        domain: this.state.domain,
        mobile: this.state.inputMobile
      }
    } else {
      this.validData = null
    }

    console.log(this.validData)

    let template

    if (
      this.state.inputName__ready === 1 &&
      this.state.inputSurname__ready === 1 &&
      this.state.inputDept__ready === 1 &&
      // this.state.inputTel__ready === 1 &&
      this.state.inputMobile__ready === 1
    ) {

      switch (this.state.domain) {
        case "@wzwik.pl":

          template = 
          <>
            <TemplateWzwik data = {this.validData}/>
            <CopyButton />
          </>

          break;
        case "@wpwik.pl":
          template = <TemplateWpwik data = {this.validData}/>
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
          processData = {this.processData}
          selectTemplate = {this.selectTemplate}
          domain = {this.state.domain}
        />
        {template}
      </div>
  )}
}

export default App;
