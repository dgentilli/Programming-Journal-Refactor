import React, { Component } from "react";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            topic: '',
            lesson: ''
        };
    }

    render() {
        return (
            <div className="input-container">
                <h2>Make an Entry for</h2>
                <form>
                    <input
                        type='text'
                        name='topic'
                        placeholder="What sort of lesson or challenge are you writing about?"
                        value={this.state.topic}
                    />
                    <textarea
                        type='text'
                        name='lesson'
                        placeholder="What do you want to record about that lesson learned or challenge encountered today?"
                        value={this.state.lesson}
                    />
                </form>
                <button id="submit-btn" className="form-btn">Submit</button>
                <button id='cancel-btn' className='form-btn'>Cancel</button>
            </div>
        );
    }
}

export default Input;
