/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './PersonalInfo.css';
import uniqid from 'uniqid'
import PersonalInfoRendered from './PersonalInfoRender';
import PersonalInfoForm from './PersonalInfoForm';

class PersonalInfo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      info: [],
      formComplete: false,
      nameInput: {
        text: '',
        id: uniqid(),
      },
      numberInput: {
        text: '',
        id: uniqid(),
      },
      emailInput: {
        text: '',
        id: uniqid(),
      },
    }
  }

  onSubmitInfo = (e) => {
    e.preventDefault();
    this.setState({
      info: this.state.info.concat(this.state.nameInput, this.state.numberInput, this.state.emailInput),
      formComplete: true
    }, () => console.log(this.state))
  }

  handleChange = (e) => {
    if (e.target.id === 'name-input'){
      this.setState({
        nameInput: {
          text: e.target.value,
          id: this.state.nameInput.id
        }
      })
    }
    if (e.target.id === 'phone-input'){
      this.setState({
        numberInput: {
          text: e.target.value,
          id: this.state.numberInput.id
        }
      })
    }
    if (e.target.id === 'email-input'){
      this.setState({
        emailInput: {
          text: e.target.value,
          id: this.state.emailInput.id
        }
      })
    }
  }



  render(){
    if (this.state.formComplete === false){
      return (
        <div className='info'>
            <form onSubmit={this.onSubmitInfo}>
                <div className='info-row-1'>
                    <label htmlFor='name' id='name' > First and Last Name:
                        <input type="text" id='name-input' onChange={this.handleChange} />
                    </label>
                    <label htmlFor='phone' id='phone'> Phone Number:
                        <input type='tel' id='phone-input' onChange={this.handleChange} />
                    </label>
                    <label htmlFor='email' id='email'>Email: 
                        <input type="email" id='email-input' onChange={this.handleChange} />
                    </label>
                </div>
                <button type='submit'>Save</button>
            </form>
        </div>
      )
    }   
  if (this.state.formComplete === true){
    return (
      <PersonalInfoRendered info={this.state.info} />
    )
  }
}}

export default PersonalInfo