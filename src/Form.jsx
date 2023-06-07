import React from 'react'
import Header from './Header'
import './Form.css'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ready: false
    }
  }

  render () {
    return (
      <div className='container'>
        <form>
          <Header domain={this.props.domain} />
          <div className='container'>
            <div className='row'>
              <label htmlFor='templateSelect' className='form-label'>Szablon</label>
              <select name='' id='templateSelect' onChange={this.props.selectTemplate}>
                <option value='@wpwik.pl'>WPWIK</option>
                <option value='@wzwik.pl'>WZWIK</option>
              </select>
            </div>
            <div className='row'>
              <label htmlFor='inputName' className='form-label'>
                Imię
              </label>
              <input
                type='text'
                id='inputName'
                onChange={this.props.processData}
                maxLength='15'
                placeholder='Imię'
              />
            </div>
            <div className='row'>
              <label htmlFor='inputSurname' className='form-label'>
                Nazwisko
              </label>
              <input
                type='text'
                id='inputSurname'
                onChange={this.props.processData}
                maxLength='28'
                placeholder='Nazwisko-Drugie'
              />
            </div>
            <div className='row'>
              <label htmlFor='inputDept' className='form-label'>
                Stanowisko
              </label>
              <input
                type='text'
                id='inputDept'
                onChange={this.props.processData}
                maxLength='50'
                placeholder='stanowisko'
              />
            </div>
            <div className='row'>
              <label htmlFor='tel' className='form-label'>
                Telefon
              </label>
              <input
                type='text'
                id='inputTel'
                onChange={this.props.processData}
                maxLength='30'
                placeholder='(00) 00 00 000'
              />
            </div>
            <div className='row'>
              <label htmlFor='mobile' className='form-label'>
                Komórka
              </label>
              <input
                type='text'
                id='inputMobile'
                onChange={this.props.processData}
                maxLength='20'
                placeholder='000 000 000'
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
