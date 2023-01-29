/* eslint-disable no-useless-constructor */
import React from "react";


class PracticalRender extends React.Component {
    constructor(props){
        super(props)
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
                        <button className="edit-exp">Edit</button>
                    </div>
                : '')}
            </div>
        )
    }
}


export default PracticalRender