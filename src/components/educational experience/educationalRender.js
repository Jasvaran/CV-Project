/* eslint-disable no-useless-constructor */
import React from "react";
import uniqid from 'uniqid'
import EditForm from "./editForm";
class EducationalRender extends React.Component {
    constructor(props){
        super(props)

        
        this.deleteEdu = this.deleteEdu.bind(this)
        this.editEdu = this.editEdu.bind(this)
        this.editFlag = false
    }


    deleteEdu = (e) => {
        e.preventDefault()
        this.props.deleteCallback(e)
        
    }

    editEdu = (e) => {
        if (this.editFlag === false){
            e.preventDefault();
            this.props.editCallback(e)
        }
        this.editFlag = true
    }

    handleFlag = (e) => {
        this.editFlag = !this.editFlag
    }

    render() {
        return (
            <div className="edu-render-container">
                
                {this.props.information.map(item => {
                    if (item.edit === false){
                        return <div key={item.edu_id} className="edu-card">
                        <ul>
                            <li>
                                Name of School: {item.eduData[0].text}
                            </li>
                            <li>
                                Field of Study: {item.eduData[1].text}
                            </li>
                            <li>
                                Start Date: {item.eduData[2].text}
                            </li>
                            <li>
                                End Date: {item.eduData[3].text}
                            </li>
                        </ul>
                        <button id={item.edu_id} onClick={this.deleteEdu}>Delete</button>
                        <button data-key={item.edu_id} onClick={this.editEdu}>Edit</button>
                    </div>
                    }
                    else {
                        return <div key={uniqid()}>
                            <EditForm editFlag={this.handleFlag} editState={this.props.editState} editCallbackSubmit={this.props.handleEditSubmit}/>
                        </div>
                    }
                    
                })}
            </div>
        )
    }
}

export default EducationalRender