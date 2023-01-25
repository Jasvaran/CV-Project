/* eslint-disable no-useless-constructor */
import React from "react";
import uniqid from 'uniqid'

class EducationalRender extends React.Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <div className="edu-render-container">
                
                {this.props.information.map(item => {
                    return <div key={uniqid()} className="edu-card">
                        <ul>
                            <li>
                                Name of School: {item[0].text}
                            </li>
                            <li>
                                Field of Study: {item[1].text}
                            </li>
                            <li>
                                Start Date: {item[2].text}
                            </li>
                            <li>
                                End Date: {item[3].text}
                            </li>
                        </ul>
                        
                    </div>
                })}
            </div>
        )
    }
}

export default EducationalRender