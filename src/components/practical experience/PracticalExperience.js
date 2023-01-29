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
            dataToRender: []
        }
        this.addExp = this.addExp.bind(this)
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



    render(){
        return (
            <div className="practical-experience">
                <h1 className="practical-heading">
                    Work / Practical Experience
                </h1>
                <button className="add-practical" onClick={this.addExp}>Add</button>
                {this.state.viewForm ? this.practForm : ""}
                <PracticalRender information={this.state.dataToRender}/>
            </div>
        )
    }
}

export default PracticalExperience