/* eslint-disable no-useless-constructor */
import React from "react";
import ReactDOM from 'react-dom/client'
import PracticalForm from "./PracticalForm";
import PracticalRender from "./PracticalRender";


class PracticalExperience extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            viewForm: false,
            dataToRender: [],
            editId: ''
        }
        this.addExp = this.addExp.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.practForm = <PracticalForm handleSubmit={this.handleSubmit} />
        
    }

    addExp = (e) => {
        e.preventDefault()
        this.setState(prevState => ({
            viewForm: !prevState.viewForm
        }), () => {console.log(this.state)})
        
    }

    handleSubmit = (getInput) => {
        this.setState(prevState => ({
            viewForm: !prevState.viewForm,
            dataToRender: prevState.dataToRender.concat(getInput)
        }), () => {console.log(this.state)})
    }

    editExpCallback = (getInput) => {
        const dataKey = getInput
        this.setState(prevState => ({
            dataToRender: prevState.dataToRender.map(obj => obj.exp_id === dataKey ? {...obj, edit: !obj.edit} : obj),
            editId: getInput
        }))
    }

    deleteExpCallback = (getInput) => {
        const dataKey = getInput
        this.setState(prevState => ({
            dataToRender: prevState.dataToRender.filter(obj => obj.exp_id !== dataKey ? obj : '')
        }))
    }

    editSubmitCallback = (getInput) => {
        console.log(this.state)
        const reference = this.state
        let index = reference.dataToRender.findIndex((obj) => obj.exp_id === reference.editId)
        reference.dataToRender[index].expData[0].text = getInput[0].text
        reference.dataToRender[index].expData[1].text = getInput[1].text
        reference.dataToRender[index].expData[2].text = getInput[2].text
        reference.dataToRender[index].expData[3].text = getInput[3].text
        reference.dataToRender[index].expData[4].text = getInput[4].text
        const newData = reference.dataToRender[index].expData
        this.setState(prevState => ({
            dataToRender: prevState.dataToRender.map(obj => obj.exp_id === prevState.editId ? {...obj, expData: newData, edit: !obj.edit} : obj)
        }), () => console.log(this.state))
    }

    render(){
        return (
            <div className="practical-experience">
                <h1 className="practical-heading">
                    Work / Practical Experience
                </h1>
                <button className="add-practical" onClick={this.addExp}>Add</button>
                {this.state.viewForm ? this.practForm : ""}
                <PracticalRender deleteExpCallback={this.deleteExpCallback} editSubmitCallback={this.editSubmitCallback} editExpCallback={this.editExpCallback} information={this.state.dataToRender}/>
            </div>
        )
    }
}

export default PracticalExperience