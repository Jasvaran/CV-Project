import React from "react";
import uniqid from 'uniqid'


class PracticalForm extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
        this.state = {
            practicalInfo: [],
            companyInput: {
                text: ''
            },
            positionInput: {
                text: ''
            },
            mainInput: {
                text: ''
            },
            endInput: {
                text: ''
            },
            startInput: {
                text: ''
            }
        }
        this.onChange = this.onChange.bind(this)
        this.submitExp = this.submitExp.bind(this)

    }


    onChange = (e) => {
        e.preventDefault();
        if (e.target.id === 'company-name'){
            this.setState({
                companyInput: {
                    text: e.target.value
                }
            })
        }
        if (e.target.id === 'position-title'){
            this.setState({
                positionInput: {
                    text: e.target.value
                }
            })
        }
        if (e.target.id === 'main-tasks'){
            this.setState({
                mainInput: {
                    text: e.target.value
                }
            })
        }
        if (e.target.id === 'start-date'){
            this.setState({
                startInput: {
                    text: e.target.value
                }
            })
        }
        if (e.target.id === 'end-date'){
            this.setState({
                endInput: {
                    text: e.target.value
                }
            })
        }

        

    }

    submitExp = (e) => {
        e.preventDefault();
        const data = [this.state.companyInput, this.state.positionInput, this.state.mainInput, this.state.startInput, this.state.endInput]
        this.setState({
            practicalInfo: [
                {
                exp_id: uniqid(),
                expData: data,
                edit: false
            }
        ]
        }, () => {
            this.props.handleSubmit(this.state.practicalInfo)
        })
        
    }

    render() {
        return (
            <div className="practical-form">
                <form onSubmit={this.submitExp}>
                    <label htmlFor="Company Name"> Company Name
                        <input type="text" id="company-name" onChange={this.onChange} />
                    </label>
                    <label htmlFor="Position Title"> Position Title
                        <input type="text" id="position-title" onChange={this.onChange} />
                    </label>
                    <label htmlFor="Start-date">Start Date
                        <input type="date" id="start-date" onChange={this.onChange} />
                    </label>
                    <label htmlFor="End-Date">End Date
                        <input type="date" id="end-date" onChange={this.onChange} />
                    </label>
                    <label htmlFor="main-tasks"> Main Tasks
                        <textarea id="main-tasks" name="main-tasks" onChange={this.onChange} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default PracticalForm