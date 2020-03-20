import React, { Component } from "react";
import List from './List';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            title: '',
            content: '',
            isLoggedIn: this.props.isLoggedIn,
            user: this.props.user
        };
    }

    componentDidMount() {
        console.log("Input component props: ", this.props.user)
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log("Input Component State: ", this.state);
    }

    submitData() {
        console.log("Submit Data");
        const journalData = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.user.id
        };

        fetch('/api/journal/create', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journalData)
        }).then(res => res.json()).then(data => console.log("Journal Data sent to server: ", data));

    }

    handleSubmit = async e => {
        console.log("Handle Submit Click");
        e.preventDefault();
        await this.submitData();
        this.setState({ title: '', content: '' });
    }


    render() {
        console.log("Input user state: ", this.state.user)
        return (
            <div className="input-container">
                <h2>Hello, {this.state.user.email} !</h2>
                <h3>Make an Entry for{Date.now}</h3>
                <form>
                    <input
                        type='text'
                        name='title'
                        placeholder="What sort of lesson or challenge are you writing about?"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                    />
                    <textarea
                        type='text'
                        name='content'
                        placeholder="What do you want to record about that lesson learned or challenge encountered today?"
                        value={this.state.content}
                        onChange={this.handleInputChange}

                    />
                </form>
                <button id="submit-btn" className="form-btn" onClick={this.handleSubmit}>Submit</button>
                <button id='cancel-btn' className='form-btn'>Cancel</button>
                <List isLoggedIn={this.state.isLoggedIn} user={this.state.user} title={this.state.title} />
            </div>
        );
    }
}

export default Input;
