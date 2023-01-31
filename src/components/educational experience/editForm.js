/* eslint-disable no-useless-constructor */
import React from "react";

class EditForm extends React.Component {
    constructor(props){
        super(props)
        this.school_input = React.createRef();
        this.state = {
            editInfo: [],
            schoolInput: {
                text: ''
            },
            fieldInput: {
                text: ''
            },
            startInput: {
                text: ''
            },
            endInput: {
                text: ''
            }

        };

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        

    }

    componentDidMount(){
        const data = this.props.editState.dataToRender.filter(obj => this.props.editState.editId === obj.edu_id ? obj : '')
        this.setState({
            schoolInput: {
                text: data[0].eduData[0].text
            },
            fieldInput: {
                text: data[0].eduData[1].text
            },
            startInput: {
                text: data[0].eduData[2].text
            },
            endInput: {
                text: data[0].eduData[3].text
            }
        })
        
    }

    onChange = (e) => {
        console.log(e)
        if (e.target.id === 'school-edit'){
            this.setState({
                schoolInput: {
                    text: e.target.value
                }
            });
        };
        if (e.target.id === 'field-edit'){
            this.setState({
                fieldInput: {
                    text: e.target.value
                }
            });
        };
        if (e.target.id === 'start-edit'){
            this.setState({
                startInput: {
                    text: e.target.value
                }
            });
        };
        if (e.target.id === 'end-edit'){
            this.setState({
                endInput: {
                    text: e.target.value
                }
            });
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        const data = [this.state.schoolInput, this.state.fieldInput, this.state.startInput, this.state.endInput]
        this.setState({
            editInfo: data
        }, () => this.props.editCallbackSubmit(this.state.editInfo))
        this.props.editFlag()
    }

    

    render() {
        return (
            <div className="edit-form-container">
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="school-edit"> Name of School: 
                        <input ref={this.school_input} type="text" value={this.state.schoolInput.text}  id="school-edit" onChange={this.onChange} />
                    </label>
                    <label htmlFor="field-edit"> Field of Study: 
                        <input type="text" id="field-edit" value={this.state.fieldInput.text} onChange={this.onChange} />
                    </label>
                    <label htmlFor="start-edit">Start Date: 
                        <input type="date" id="start-edit" value={this.state.startInput.text} onChange={this.onChange} />
                    </label>
                    <label htmlFor="end-edit">End Date: 
                        <input type="date" id="end-edit" value={this.state.endInput.text} onChange={this.onChange} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default EditForm