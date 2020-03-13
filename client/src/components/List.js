import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
    }

    render() {
        return (
            <div className="list-container">
                <h2>Daily Entries for dgentilli@gmail.com</h2>
                <ul>
                    <li>13 March 2020: Using CSS Grid for responsive layout</li>
                    <li>12 March 2020: Difference between position relative and absolute</li>
                    <li>11 March 2020: File Upload!!!!!</li>
                    <li>10 March 2020: Styled Components</li>
                    <li>09 March 2020: How to build a markdown blog!</li>
                </ul>

            </div>
        );
    }
}

export default List;
