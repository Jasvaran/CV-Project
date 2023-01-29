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
            dataToRender: [],
            editId: '',


        }
        this.eduForm = <EducationalForm submitCallback={this.handleSubmitCallback} />
        this.eduRender = <EducationalRender editState={this.state} information={this.state.dataToRender} deleteCallback={this.handleDelete} />
        this.addEdu = this.addEdu.bind(this)
        this.handleEditSubmit = this.handleEditSubmit.bind(this)

        
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

        })
    }

    handleDelete = (e) => {
        this.setState({
            dataToRender: this.state.dataToRender.filter(obj => obj.edu_id !== e.target.id)
        })
    }

    handleEdit = (e) => {
        const dataKey = e.target.dataset.key
        this.setState({
            dataToRender: this.state.dataToRender.map(obj => obj.edu_id === dataKey ? {...obj, edit: !obj.edit} : obj),
            editId: e.target.dataset.key

        }, () => console.log(this.state))
    }

    
    handleEditSubmit = (getInput) => {
        console.log(getInput)
        console.log(this.state)
        const reference = this.state
        let ind = reference.dataToRender.findIndex((obj) => obj.edu_id === reference.editId)
        reference.dataToRender[ind].eduData[0].text = getInput[0].text
        reference.dataToRender[ind].eduData[1].text = getInput[1].text
        reference.dataToRender[ind].eduData[2].text = getInput[2].text
        reference.dataToRender[ind].eduData[3].text = getInput[3].text
        const newData = reference.dataToRender[ind].eduData
        console.log(newData)
        
        this.setState(prevState => ({
            dataToRender: prevState.dataToRender.map(obj => obj.edu_id === prevState.editId ? {...obj, eduData: newData, edit: !obj.edit} : obj)
        }), () => {console.log(this.state)}
        )
        
    }



    render() {
        return (
            <div className="educational">
                <h1>Educational Experience</h1>
                <button onClick={this.addEdu} className="add-xp">Add</button>
                {(this.state.viewForm) ? this.eduForm : ''}
                <EducationalRender editState={this.state} information={this.state.dataToRender} deleteCallback={this.handleDelete} editCallback={this.handleEdit} handleEditSubmit={this.handleEditSubmit} />
            </div>
        )
    }
}


export default EducationalExperience