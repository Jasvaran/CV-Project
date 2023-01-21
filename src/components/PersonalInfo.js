/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDOM from 'react-dom/client'
import './PersonalInfo.css'

class PersonalInfo extends React.Component {
  constructor(props){
    super(props)
  }

  onSubmitInfo = (e) => {
    e.preventDefault();
  }



  render(){
    return (
        <div className='info'>
            <form onSubmit={this.onSubmitInfo}>
                <div className='info-row-1'>
                    <label htmlFor='name' id='name' > First and Last Name:
                        <input type="text" id='name-input' />
                    </label>
                    <label htmlFor='phone' id='phone'> Phone Number:
                        <input type='tel' id='phone-input' />
                    </label>
                    <label htmlFor='email' id='email'>Email: 
                        <input type="email" id='email-input' />
                    </label>
                </div>
                <button type='submit'>Save</button>
            </form>
        </div>
    )
  }
}

export default PersonalInfo