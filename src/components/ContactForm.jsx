import { Component } from "react";

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Name', this.state.name);
        console.log('Email', this.state.email);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label >
                        Name
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label >
                        Email
                        <input type="text" email='email' value={this.state.email} onChange={this.handleChange} />
                    </label>
                </div>
            </form>
        )
    }

}