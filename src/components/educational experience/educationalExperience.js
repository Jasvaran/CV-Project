/* eslint-disable no-useless-constructor */
import React from "react";
import './educationalForm.css'
import EducationalForm from "./educationalForm";
import EducationalRender from "./educationalRender";

class EducationalExperience extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            viewForm: false,
            dataToRender: []
        }
        this.eduForm = <EducationalForm submitCallback={this.handleSubmitCallback}/>
        this.eduRender = <EducationalRender information={this.state.dataToRender} deleteCallback={this.handleDelete} />
        this.addEdu = this.addEdu.bind(this)

        
    }

    
    addEdu(event){
        event.preventDefault()
        this.setState({
            viewForm: !this.state.viewForm
        })
    }

    handleSubmitCallback = (getInput) => {
        console.log(getInput)
        this.setState({
            viewForm: !this.state.viewForm,
            dataToRender: this.state.dataToRender.concat(getInput)

        }, () => {console.log(this.state)})
    }

    handleDelete = (e) => {
        this.setState({
            dataToRender: this.state.dataToRender.filter(obj => obj.edu_id !== e.target.id)
        })
    }

    render() {
        return (
            <div className="educational">
                <h1>Educational Experience</h1>
                <button onClick={this.addEdu} className="add-xp">Add</button>
                {(this.state.viewForm) ? this.eduForm : ''}
                <EducationalRender information={this.state.dataToRender} deleteCallback={this.handleDelete} />
            </div>
        )
    }
}


export default EducationalExperience