/* eslint-disable no-useless-constructor */
import React from "react";
import './educationalExperience.css'
import uniqid from 'uniqid'

class EducationalExperience extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            viewForm: false
        }
        this.eduForm = <EducationalForm />
        this.addEdu = this.addEdu.bind(this)
    }

    
    addEdu(event){
        event.preventDefault()
        this.setState({
            viewForm: !this.state.viewForm
        })
    }

    render() {
        return (
            <div className="educational">
                <h1>Educational Experience</h1>
                <button onClick={this.addEdu} className="add-xp">Add</button>
                {(this.state.viewForm) ? this.eduForm : ''}
            </div>
        )
    }
}



class EducationalForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            eduInfo: [],
            schoolInput : {
                text: '',
                id: uniqid()
            },
            fieldInput: {
                text: '',
                id: uniqid(),
            },
            startInput: {
                text: '',
                id: uniqid()
            },
            endInput: {
                text: '',
                id: uniqid()
            }
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange = (e) => {
        e.preventDefault();
        if (e.target.id === 'school-name'){
            this.setState({
                schoolInput: {
                    text: e.target.value,
                    id: this.state.schoolInput.id
                }
            })
        }
        if (e.target.id === 'field'){
            this.setState({
                fieldInput: {
                    text: e.target.value,
                    id: this.state.fieldInput.id
                }
            })
        }
        if (e.target.id === 'start-date'){
            this.setState({
                startInput: {
                    text: e.target.value,
                    id: this.state.startInput.id
                }
            })
        }
        if (e.target.id === 'end-date'){
            this.setState({
                endInput: {
                    text: e.target.value,
                    id: this.state.endInput.id
                }
            })
        }
    }


    render() {
        return (
            <div className="edu-form-container">
                <form>
                    <label htmlFor="school-name"> Name of School:
                        <input type="text" id="school-name" onChange={this.onChange}/>
                    </label>
                    <label htmlFor="field"> Field of Study:
                        <input type="text" id="field" onChange={this.onChange} />
                    </label>
                    <label htmlFor="start-date"> Start Date: 
                        <input type="date" id="start-date" onChange={this.onChange} />
                    </label>
                    <label htmlFor="end-date"> End Date: 
                        <input type="date" id="end-date" onChange={this.onChange} />
                    </label>
                    <button className="edu-button" type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default EducationalExperience