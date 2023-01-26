/* eslint-disable no-useless-constructor */
import React from "react";
import uniqid from 'uniqid'

class EducationalRender extends React.Component {
    constructor(props){
        super(props)
        
        this.deleteEdu = this.deleteEdu.bind(this)
    }


    deleteEdu = (e) => {
        e.preventDefault()
        this.props.deleteCallback(e)
        
    }

    render() {
        return (
            <div className="edu-render-container">
                
                {this.props.information.map(item => {
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

                    </div>
                })}
            </div>
        )
    }
}

export default EducationalRender