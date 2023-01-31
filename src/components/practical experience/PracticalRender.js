/* eslint-disable no-useless-constructor */
import React from "react";
import PracticalEdit from "./PracticalEdit";
import uniqid from 'uniqid'

class PracticalRender extends React.Component {
    constructor(props){
        super(props)


        this.editExp = this.editExp.bind(this)
        this.deleteExp = this.deleteExp.bind(this)
    }



    editExp = (e) => {
        e.preventDefault();
        const editId = e.target.id
        this.props.editExpCallback(editId)

    }

    deleteExp = (e) => {
        e.preventDefault()
        const id = e.target.id
        this.props.deleteExpCallback(id)
    }

    render() {
        return (
            <div className="practical-render-container">
                {this.props.information.map(obj => obj.edit === false ? 
                    <div className="exp-card" key={obj.exp_id}>
                        <ul>
                            <li>
                                Company Name: {obj.expData[0].text}
                            </li>
                            <li>
                                Position: {obj.expData[1].text}
                            </li>
                            <li>
                                Main Tasks: {obj.expData[2].text}
                            </li>
                            <li>
                                Start Date: {obj.expData[3].text}
                            </li>
                            <li>
                                End Date: {obj.expData[4].text}
                            </li>
                        </ul>
                        <button id={obj.exp_id} onClick={this.editExp} className="edit-exp">Edit</button>
                        <button id={obj.exp_id} onClick={this.deleteExp}>Delete</button>
                    </div>
                : 
                    <div key={uniqid()} className="edit-form">
                        <PracticalEdit editSubmitCallback={this.props.editSubmitCallback} />
                    </div>)}
            </div>
        )
    }
}


export default PracticalRender