import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            journalEntries: [],
            isLoggedIn: this.props.isLoggedIn,
            user: this.props.user,
            title: this.props.title
        };
    }

    componentDidMount() {
        console.log("List component mounted.");
        console.log("List component props: ", this.props)
        this.fetchJournalEntries();
    }

    componentDidUpdate(prevProps) {
        if (this.props.title !== prevProps.title) {
            //this.setState({ title: this.props.title });
            this.fetchJournalEntries();
        }
    }

    fetchJournalEntries() {
        fetch(`/api/journal/all/${this.state.user.id}`, {
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
        let journalList;
        if (journals.length > 0) {
            journalList = journals.map(journal => (
                <li key={journal._id}>{journal.title}</li>
            ))
        } else {
            journalList = <li>There are no journal entries to display.</li>
        }


        return (
            <div className="list-container">
                <h2>Journal Entries for {this.state.user.email}</h2>
                <ul>
                    {journalList}
                </ul>

            </div>
        );
    }
}

export default List;
