/* eslint-disable no-useless-constructor */
import React from "react";

class PersonalInfoRendered extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="rendered-info">
                {this.props.info.map(item => {
                    return <p key={item.id}>{item.text}</p>
                })

                }
            </div>
        )
    }
}

export default PersonalInfoRendered