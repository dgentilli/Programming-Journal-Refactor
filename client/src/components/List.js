import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            journalEntries: []
        };
    }

    componentDidMount() {
        console.log("List component mounted.");
        this.fetchJournalEntries();
    }

    fetchJournalEntries() {
        fetch("/api/journal/all", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            const resBody = res.json();
            Promise.resolve(resBody).then(journals => {
                this.setState({
                    journalEntries: journals
                })
            })
        })

    }

    render() {
        let journals = this.state.journalEntries;
        let journalList =
            journals.map(journal => (
                <li key={journal._id}>{journal.title}</li>
            ))

        return (
            <div className="list-container">
                <h2>Daily Entries for dgentilli@gmail.com</h2>
                <ul>
                    {journalList}
                </ul>

            </div>
        );
    }
}

export default List;
