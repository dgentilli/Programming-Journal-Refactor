import React, { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
    }

    render() {
        return (
            <div id="about" className="about-container">
                <h2>Contiuous Learning</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sunt sapiente nihil nesciunt accusamus quibusdam vitae labore ut saepe? Facere debitis quod suscipit ratione, dignissimos nesciunt sapiente culpa pariatur tenetur laborum dolorem molestiae nihil voluptate quidem deleniti repellat ad. Ipsam?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate a totam vitae ullam molestias. Repudiandae temporibus distinctio dolorem amet delectus.</p>
            </div>
        );
    }
}

export default About;
