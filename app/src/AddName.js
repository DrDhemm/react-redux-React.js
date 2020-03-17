import React, { Component } from 'react'

class AddName extends Component {
    state = {
        name: null,
        role: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addName(this.state)
    }
    render(){
        return(
            <div className="add-name">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="role">Role: </label>
                    <input type="text" id="role" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddName