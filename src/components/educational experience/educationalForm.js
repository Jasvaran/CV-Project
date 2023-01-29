/* eslint-disable no-useless-constructor */
import React from "react";
import uniqid from "uniqid"

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
        this.submitEdu = this.submitEdu.bind(this)
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

    submitEdu = (e) => {
        e.preventDefault();
        const data = [this.state.schoolInput, this.state.fieldInput, this.state.startInput, this.state.endInput]
        this.setState({
            eduInfo: [
                {
                    edu_id: uniqid(),
                    eduData: data,
                    edit: false
                }
            ]
        }, () => {this.props.submitCallback(this.state.eduInfo)})
        
    }

    

    render() {
        return (
            <div className="edu-form-container">
                <form onSubmit={this.submitEdu}>
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




export default EducationalForm