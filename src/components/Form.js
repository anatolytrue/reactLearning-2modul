import React, { Component } from 'react';

class Form extends Component{
    state = {
        name: '',
        tag: '',
        experience: 'junior',
        licence: false,
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
        [name]: value,
        })
    }

    
    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state);
        this.props.onSubmit(this.state);

        this.reset();
    }

    handleLicenceChange = e => {
        console.log(e.currentTarget.checked);

        this.setState({licence: e.currentTarget.checked})
    }

    reset = () => {
        this.setState({name: '', tag: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
                Name
                <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange} />
                </label>
                <br/>
            <label>
                Pseudo
                <input
                type="text"
                name='tag'
                value={this.state.tag}
                onChange={this.handleChange} />
                </label>
                
                <p>Your Level</p>
                <label>
                    <input 
                    type="radio" 
                    name="experience" 
                    value="junior" 
                        onChange={this.handleChange} 
                        checked={this.state.experience === "junior"} />
                    Junior
                </label>
                <label>
                    <input 
                    type="radio" 
                    name="experience" 
                    value="middle" 
                        onChange={this.handleChange}  
                        checked={this.state.experience === "middle"}/>
                    Middle
                </label>
                <label>
                    <input 
                    type="radio" 
                    name="experience" 
                    value="senior" 
                        onChange={this.handleChange}  
                        checked={this.state.experience === "senior"}/>
                    Senior
                </label>
                
                <br />
                
                <label>
                    <input
                        type="checkbox"
                        name="licence"
                        checked={this.state.licence}
                        onChange={this.handleLicenceChange} />
                    Privacy policy
                </label>
                
                <button
                    type='submit'
                    disabled={!this.state.licence}>
                    Send
                </button>
            </form>
        );
    }
}

export default Form;