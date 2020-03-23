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

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitData() {
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
        }).then(res => res.json());

    }

    handleSubmit = async e => {
        e.preventDefault();
        await this.submitData();
        this.setState({ title: '', content: '' });
    }

    handleCancel = e => {
        e.preventDefault();
        this.setState({ title: '', content: '' });
    }

    render() {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let today = new Date();
        return (
            <>
                <div id="input" className="input-container">
                    <h2>Hello, {this.state.user.email} !</h2>
                    <h4>Make an Entry for {today.toLocaleDateString("en-US", options)}</h4>
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
                        <button id="submit-btn" className="form-btn" onClick={this.handleSubmit}>Submit</button>
                        <button id='cancel-btn' className='form-btn' onClick={this.handleCancel}>Cancel</button>
                    </form>
                </div>
                <List isLoggedIn={this.state.isLoggedIn} user={this.state.user} title={this.state.title} />
            </>
        );
    }
}

export default Input;
