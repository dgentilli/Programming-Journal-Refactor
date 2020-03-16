import React, { Component } from "react";

class EntryShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            journalEntry: []
        }
    }
    render() {
        return (
            <div>
                <h1>This is Entry Show</h1>
            </div>
        )
    }
}

export default EntryShow;