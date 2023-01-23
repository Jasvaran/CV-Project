/* eslint-disable no-useless-constructor */
import React from "react";
import reactDOM from 'react-dom/client'

class PersonalInfoForm extends React.Component {
    constructor(props){
        super(props)
    }



    render() {
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
}