import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            journalEntries: [],
            isLoggedIn: this.props.isLoggedIn,
            user: this.props.user,
            title: this.props.title,
            journalContentShow: null
        };
    }

    componentDidMount() {
        console.log("List component mounted.");
        console.log("List component props: ", this.props)
        this.fetchJournalEntries();
    }

    componentDidUpdate(prevProps) {
        if (this.props.title !== prevProps.title) {
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

    // contentClick() {
    //     this.setState({ journalContent:  })
    // }

    render() {
        console.log("List state journal entries: ", this.state.journalEntries)
        let journals = this.state.journalEntries;
        let journalList;
        if (journals.length > 0) {
            journalList = journals.map(journal => (
                <li key={journal._id}>
                    <div>
                        <h4 className='journal-title'>{journal.title}</h4>
                        <p className='journal-content'>{this.state.journalContentShow !== journal._id ? journal.content.substring(0, 100) : journal.content}</p>
                        <div>{journal._id !== this.state.journalContentShow ? <button onClick={() => this.setState({ journalContentShow: journal._id })}>Read More</button> : <button onClick={() => this.setState({ journalContentShow: null })}>Show Less</button>}</div>
                    </div>
                </li>
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
