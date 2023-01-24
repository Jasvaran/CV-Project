/* eslint-disable no-useless-constructor */
import React from "react";
import './PersonalInfoRender.css'

class PersonalInfoRendered extends React.Component {
    constructor(props){
        super(props)
        
    }

    editInfo = (e) => {
        e.preventDefault()
        this.props.parentCallback()
    }

    render(){
        return (
            <div className="rendered-info">
                {this.props.info.map(item => {
                    return <p className="information" key={item.id}>{item.text}</p>
                })}
                <button className="edit" onClick={this.editInfo}>Edit</button>
            </div>
        )
    }
}

export default PersonalInfoRendered